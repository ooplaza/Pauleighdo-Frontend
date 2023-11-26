<script setup>
import { useAuthStore } from "~/stores/useAuthStore";
</script>

<template>
  <!-- Introduction -->
  <section class="bg-[#FBFAE4] py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grow items-start w-full">
      <div class="flex flex-col md:flex-row px-6 mt-20 sm:mt-20 lg:mt-30 pt-10 dark:text-gray-400">
          <div class="md:w-3/4 my-auto">
              <div class="">
                  <div id="NAME" class="font-extrabold text-[#606C38] text-4xl md:text-5xl lg:text-6xl antialiased dark:text-gray-400">
                      High Quality<br>Premium Design
                  </div>
              </div>
              <p id="intro" class="text-xs sm:text-sm md:text-base lg:text-md text-black p-2 italic dark:text-gray-400">
                Lorem ipsum dolor sit amet. Aut debitis quasi et recusandae iste et repudiandae.
              </p>
              <button type="button" class="h-9 transition delay-50 duration-500 ease-in-out text-white font-bold bg-[#606C38] hover:bg-[#FBFAE4] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                Explore Products
              </button>
          </div>
          <NuxtImg preload src="/Main Logo.png" class="object-cover w-full h-full mx-auto my-10 max-w-screen-sm md:max-w-lg bouncing-image" loading="lazy" />
      </div>
    </div>
  </section>

  <!-- Top Selling Products -->
  <section class="pb-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grow items-start w-full">
      <div class="flex flex-col md:flex-row px-6 sm:mt-20 lg:mt-30 py-6 dark:text-gray-400">
          <div class="md:w-3/4 pb-6 mt-20">
              <div class="">
                  <div id="NAME" class="font-extrabold text-[#606C38] text-3xl md:text-5xl lg:text-6xl text-center sm:text-center md:text-center lg:text-start antialiased">
                      Top Selling<br>Products
                  </div>
              </div>
          </div>
          <div id="gallery" class="relative w-full" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                </div>
                <!-- Item 3 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                </div>
                <!-- Item 4 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                </div>
                <!-- Item 5 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                </div>
            </div>
          </div>
      </div>
    </div>
  </section>

  <!-- All Products -->
  <section class="py-6 px-4">
    <div class="flex justify-center pb-6 font-extrabold text-[#606C38] text-3xl md:text-5xl lg:text-6xl text-center sm:text-center md:text-center lg:text-start antialiased">
        Our Products
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
            <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
            </div>
        </div>
        <div class="grid gap-4">
            <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="">
            </div>
        </div>
        <div class="grid gap-4">
            <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="">
            </div>
        </div>
        <div class="grid gap-4">
            <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
            </div>
        </div>
    </div>
  </section>

  <!-- Custom Bouquet -->
  <section class="bg-[#FBFAE4]">
    <div class="flex justify-center pt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grow items-start w-full">
      <div id="NAME" class="font-extrabold text-center sm:text-center md:text-center lg:text-start text-[#606C38] text-4xl md:text-5xl lg:text-6xl antialiased dark:text-gray-400">
          Custom Bouquet?
      </div>
    </div>
    <div class="flex justify-center font-bold italic">
      Pauleighdo got you!
    </div>
    <div class="text-center pt-2">
      <button
        type="button"
        class="h-8 px-2 transition delay-50 duration-500 ease-in-out mx-auto text-white font-bold bg-[#606C38] hover:bg-[#FBFAE4] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
      >
        <Icon
          name="mdi:email-edit-outline"
          size="1.5rem"
          class="dark:text-gray-300 mr-2"
        ></Icon>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
