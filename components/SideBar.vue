<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

const route = useRoute()
const navigation = [
    {name: 'Dashboard', to: '/', current: route.name == 'index', icon: 'ic:round-dashboard'},
    {name: 'Orders', to: '/order', current: route.name == 'order', icon: 'lets-icons:order'},
]
</script>

<template>
    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <Icon name="ion:menu" size="2rem" />
    </button>

    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <NuxtLink to="/" class="flex items-center ps-2.5 mb-5 text-xl font-extrabold">
                <NuxtImg preload loading="lazy" src="/Icon 2.png" class="h-20 me-3 sm:h-20" />
                Pauleighdo
            </NuxtLink>
            <ul class="space-y-2 font-medium">
                <li v-for="item in navigation" :key="item.id">
                    <NuxtLink :to="item.to" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        {{ item.name }}
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/login" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        Login
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/logout" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        Logout
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </aside>
</template>
