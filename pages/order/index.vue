<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { definePageMeta } from "#imports";
import { useGetDeleteOrders } from "~/stores/useGetDeleteOrders";
import { useCreateUpdateStore } from "~/stores/useCreateUpdateStore";
const useGet = useCreateUpdateStore();
const auth = useGetDeleteOrders();

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
onMounted(() => {
  auth.OrdersFetcher();
});
</script>

<template>
  <div class="mt-20 p-4">
    <div>
      <!-- Only display when successfully send the email! -->
      <div class="text-center">
        <div
          v-motion-fade
          v-if="useGet.notification.notification_success"
          class="alert alert-success mt-5 mb-5 font-bold"
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
          <span>{{ useGet.notification.notification_success_text }}</span>
        </div>
        <div
          v-motion-fade
          v-if="useGet.notification.notification_update"
          ontimeupdate="timeout"
          role="alert"
          class="alert alert-info mt-5 mb-5 font-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="stroke-current shrink-0 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{{ useGet.notification.notification_update_text }}</span>
        </div>
        <div
          v-motion-fade
          v-if="auth.notification.notification_delete"
          ontimeupdate="timeout"
          role="alert"
          class="alert alert-warning mt-5 mb-5 font-bold"
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
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>{{ auth.notification.notification_delete_text }}</span>
        </div>
      </div>

      <div class="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
        <div class="flex justify-end pb-4">
          <button
            data-modal-target="crud-modal"
            data-modal-toggle="crud-modal"
            class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            <Icon name="mingcute:user-add-fill" size="1rem" class="mr-2" />
            Create Order
          </button>
          <CreateOrder />
        </div>
        <div class="relative overflow-x-auto shadow-sm sm:rounded-lg">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg"
          >
            <thead
              class="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th
                  v-for="header in auth.headers"
                  :key="header.id"
                  scope="col"
                  class="px-6 py-3 font-extrabold"
                >
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="order in auth.orders"
                :key="order.id"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-6 py-4">
                  {{ order.name }}
                </td>
                <td class="px-6 py-4">
                  {{ order.address }}
                </td>
                <td class="px-6 py-4">
                  {{ order.quantity }}
                </td>
                <td class="px-6 py-4">
                  {{ order.item }}
                </td>
                <td class="px-6 py-4">
                  {{ order.price }}
                </td>
                <td class="px-6 py-4">
                  {{ order.total }}
                </td>
                <td class="px-6 py-4">
                  {{ order.payment_status }}
                </td>
                <td class="px-6 py-4">
                  {{ order.balance }}
                </td>
                <td
                  class="px-6 py-4 text-black font-bold text-sm sm:text-xs"
                  v-if="order.order_status === 'On process'"
                >
                  <div class="text-center bg-amber-300 py-2 px-2 rounded-lg">
                    {{ order.order_status }}
                  </div>
                </td>
                <td
                  class="px-6 py-4 text-black font-bold text-sm sm:text-xs"
                  v-if="order.order_status === 'Not yet started'"
                >
                  <div class="text-center bg-red-400 py-2 px-2 rounded-lg">
                    {{ order.order_status }}
                  </div>
                </td>
                <td
                  class="px-6 py-4 text-black font-bold text-sm sm:text-xs"
                  v-if="order.order_status === 'Delivered'"
                >
                  <div class="text-center bg-emerald-400 py-2 px-2 rounded-lg">
                    {{ order.order_status }}
                  </div>
                </td>
                <!-- Action Section for Update and Delete -->
                <td class="px-6 py-4">
                  <NuxtLink :to="`/order/${order.id}/`">
                    <button data-tooltip-target="tooltip-default">
                      <Icon
                        name="i-heroicons-pencil-square"
                        size="1.3rem"
                        class="text-emerald-500"
                      />
                      <div
                        id="tooltip-default"
                        role="tooltip"
                        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                      >
                        Edit
                        <div class="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </button>
                  </NuxtLink>
                  <button @click="auth.DeleteOrder(order.id)">
                    <Icon
                      name="i-heroicons-trash"
                      size="1.3rem"
                      class="text-red-600"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <section
          v-if="auth.orders.length === 0"
          class="pt-4 flex justify-center"
        >
          <Icon
            name="i-heroicons-exclamation-circle"
            size="3rem"
            class="text-gray-400"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
