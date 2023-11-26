<script setup>
import { useApiFetch } from "../composables/useApiFetch";

const notification = ref({
  timeout: 5000,
  loading: false,
  button_display: true,
  Button: "Submit",
  notification_success: false,
  notification_failed: false,
  notification_success_text: "Email sent successfully!",
  notification_failed_text: "Invalid Email!",
});

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

async function sendEmail() {
  notification.value.loading = true;
  notification.value.button_display = false;

  useApiFetch()
    .post(`api/send-email/`, {
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
    })
    .then((response) => {
      notification.value.notification_success = true;

      // Clear form and set all to default
      resetForm();

      setTimeout(() => {
        notification.value.notification_success = false;
      }, notification.value.timeout);
    })
    .catch((error) => {
      // Catch the error
      notification.value.notification_failed = true;
      setTimeout(() => {
        notification.value.notification_failed = false;
      }, notification.value.timeout);
    })
    .finally(() => {
      notification.value.loading = false;
      notification.value.button_display = true;
    });
}
const resetForm = () => {
  for (const key in form.value) {
    form.value[key] = "";
  }
};
</script>

<template>
  <Head>
    <Title>Contact</Title>
  </Head>
  <div v-motion-fade class="mt-40">
    <!-- Only display when successfully send the email! -->
    <div class="text-center">
      <div
        v-motion-fade
        v-if="notification.notification_success"
        class="alert alert-success mt-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ notification.notification_success_text }}</span>
      </div>
      <div
        v-motion-fade
        v-if="notification.notification_failed"
        class="alert alert-error mt-5"
        ontimeupdate="timeout"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ notification.notification_failed_text }}</span>
      </div>
    </div>
    <div class="hero dark:bg-gray-900 mt-10">
      <div class="hero-content flex-col lg:flex-row">
        <NuxtImg
          src="/Logo Variation.png"
          preload
          class="max-w-sm rounded-xl h-auto w-auto"
          sizes="sm:50vw md:100vw"
          loading="lazy"
        />
        <div class="mx-10">
          <h1
            class="text-5xl font-extrabold text-center md:text-start text-black dark:text-gray-400"
          >
            Let's get in touch!
          </h1>
          <p class="py-6 text-black dark:text-gray-400 tracking-wide">
            “Failing doesn’t give you a reason to give up, as long as you
            believe.”<br />– Naruto
          </p>
          <div>
            <form @submit.prevent="sendEmail" autocomplete="" id="contact">
              <div class="mb-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Name</label
                >
                <input
                  v-model="form.name"
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div class="mb-2">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Email</label
                >
                <input
                  v-model="form.email"
                  type="text"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your email"
                  required
                />
              </div>
              <div class="mb-2">
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Subject</label
                >
                <input
                  v-model="form.subject"
                  type="text"
                  id="subject"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Subject"
                  required
                />
              </div>
              <div class="mb-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Message</label
                >
                <textarea
                  v-model="form.message"
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Message..."
                  required
                ></textarea>
              </div>
              <button
                @click="submit"
                type="submit"
                class="transition delay-50 duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <span
                  v-if="notification.loading"
                  class="loading loading-spinner loading-xs"
                ></span>
                <div v-if="notification.button_display">
                  {{ notification.Button }}
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#contact {
  font-family: "Roobert";
}
</style>
