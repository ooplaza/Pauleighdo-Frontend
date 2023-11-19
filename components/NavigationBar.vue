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
    {name: 'Dashboard', to: '/', current: route.name == 'index', icon: 'ic:round-dashboard'},
    {name: 'Orders', to: '/order', current: route.name == 'order', icon: 'lets-icons:order'},
    {name: 'Products', to: '/product', current: route.name == 'product', icon: 'lets-icons:order'},
]
</script>

<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 py-4">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NuxtLink to="/" class="flex font-extrabold items-center space-x-3 rtl:space-x-reverse">
            <NuxtImg preload loading="lazy" src="/Icon 2.png" class="h-20 me-3 sm:h-20" />
            Pauleighdo
        </NuxtLink>
        
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <NuxtLink v-if="!auth.isLoggedIn" to="/login" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</NuxtLink>
            <NuxtLink v-if="auth.isLoggedIn" @click="auth.LogoutHandler" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign-out</NuxtLink>
            <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <Icon name="ion:menu" size="3rem" />
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li v-for="item in navigation" :key="item.id">
                    <NuxtLink :to="item.to" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500">{{ item.name }}</NuxtLink>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<style scoped>

</style>