<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useAuthStore } from "~/stores/useAuthStore";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

const auth = useAuthStore()
const route = useRoute()
const navigation = [
    // {name: 'Orders', to: '/order', current: route.name == 'order', icon: 'lets-icons:order'},
    {name: 'Products', to: '/products', current: route.name == 'products', icon: 'lets-icons:order'},
    {name: 'Contact', to: '/contact', current: route.name == 'contact', icon: ''}
]
</script>

<template>
    <nav class="bg-[#FBFAE4] dark:bg-gray-900 fixed w-full z-50 top-0 start-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NuxtLink to="/" class="flex font-extrabold text-[#606C38] items-center space-x-3 rtl:space-x-reverse">
                <NuxtImg preload loading="lazy" src="/Main Logo.png" class="h-12 me-3 sm:h-12" />
            </NuxtLink>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <NuxtLink v-if="!auth.isLoggedIn" to="/login" type="button" class="h-9 text-white bg-[#606C38] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</NuxtLink>
            <NuxtLink v-if="auth.isLoggedIn" @click="auth.LogoutHandler" type="button" class="h-9 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign-out</NuxtLink>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li v-if="auth.isLoggedIn">
                    <NuxtLink to="/order" class="block py-2 px-3 text-[#606C38] rounded md:bg-transparent md:text-[#606C38] md:p-0 md:dark:text-blue-500">Orders</NuxtLink>
                </li>
                <li v-for="item in navigation" :key="item.id">
                    <NuxtLink :to="item.to" class="block py-2 px-3 text-[#606C38] rounded md:bg-transparent md:text-[#606C38] md:p-0 md:dark:text-blue-500" :aria-current="item.current">{{ item.name }}</NuxtLink>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<style scoped>

</style>