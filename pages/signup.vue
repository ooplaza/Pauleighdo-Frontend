<script setup>
import { useAuthStore } from "~/stores/useAuthStore";
const auth = useAuthStore();
</script>

<template>
  <section class="mt-40 p-4 flex items-center justify-center">
  <!-- login container -->
  <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
      <!-- form -->
      <div class="md:w-1/2 px-8 md:px-16">
      <h2 class="font-extrabold text-center text-4xl">Register</h2>

      <form @submit.prevent="auth.RegisterHandler" class="flex flex-col">
          <div class="relative py-2">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <Icon name="i-heroicons-user" size="1rem" />
          </div>
          <input v-model="auth.RegistrationForm.first_name" required type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name">
          </div>
          
          <div class="relative py-2">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <Icon name="i-heroicons-user" size="1rem" />
          </div>
          <input v-model="auth.RegistrationForm.last_name" required type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name">
          </div>

          <div class="relative py-2">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <Icon name="i-heroicons-user" size="1rem" />
          </div>
          <input v-model="auth.RegistrationForm.username" required type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username">
          </div>

          <div class="relative py-2">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <Icon name="i-heroicons-envelope" size="1rem" />
          </div>
          <input v-model="auth.RegistrationForm.email" required type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email">
          </div>

          <div class="relative py-2">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <Icon name="i-heroicons-lock-closed" size="1rem" />
          </div>
          <input v-model="auth.RegistrationForm.password" required type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password">
          </div>
          <hr>
          <button type="submit" class="bg-white py-2 border w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              Register
          </button>
      </form>

      <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
          <p>Already have an account <NuxtLink to="/login" class="py-2 font-bold">Sign-in</NuxtLink>?</p>
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
