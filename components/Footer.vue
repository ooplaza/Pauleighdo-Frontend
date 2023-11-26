<template>
    <div>
        <footer class="bg-[#FBFAE4] dark:bg-gray-900">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <NuxtLink class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <NuxtImg preload loading="lazy" src="/Sublogo - dark.png" class="h-12 me-3 sm:h-12" />
                    </NuxtLink>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-[#606C38] sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-[#606C38] sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Pauleighdo™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    </div>
</template>