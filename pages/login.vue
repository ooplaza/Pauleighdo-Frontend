<script setup>
import { useAuthStore } from "~/stores/useAuthStore";
const auth = useAuthStore();
</script>

<template>
  <section class="mt-20 p-4">
    <div
      v-motion-fade
      v-if="auth.notification.login_failed"
      class="alert alert-error mt-5 mb-5 font-bold"
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
      <span>{{ auth.notification.login_failed_text }}</span>
    </div>
  </section>
  <section class="p-4 flex items-center justify-center">
    <!-- login container -->
    <div
      class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center"
    >
      <!-- form -->
      <div class="md:w-1/2 px-8 md:px-16">
        <h2 class="font-extrabold text-center text-4xl">Login</h2>

        <form @submit.prevent="auth.LoginHandler" class="flex flex-col">
          <div class="relative py-2">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
              <Icon name="i-heroicons-envelope" size="1rem" />
            </div>
            <input
              v-model="auth.LoginForm.email"
              required
              type="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
            />
          </div>

          <div class="relative pt-2">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
              <Icon name="i-heroicons-lock-closed" size="1rem" />
            </div>
            <input
              v-model="auth.LoginForm.password"
              required
              type="password"
              id="input-group-1"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <hr />
          <button
            type="submit"
            class="bg-white py-2 border w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
          >
            Login
          </button>
        </form>

        <div
          class="mt-3 text-xs flex justify-between items-center text-[#002D74]"
        >
          <p>
            Don't have an account
            <NuxtLink to="/signup" class="py-2 font-bold">Sign-up</NuxtLink>?
          </p>
        </div>
      </div>

      <!-- image -->
      <div class="sm:block hidden w-1/2">
        <NuxtImg src="/Sublogo - dark.png" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
