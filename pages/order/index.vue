<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useGetDeleteOrders } from "~/stores/useGetDeleteOrders";
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
  <div class="p-4">
    <div class="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
      <div class="flex justify-end pb-4">
        <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
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
                class="px-6 py-4 text-white bg-amber-300"
                v-if="order.order_status === 'On process'"
              >
                {{ order.order_status }}
              </td>
              <td
                class="px-6 py-4 text-white bg-red-400"
                v-if="order.order_status === 'Not yet started'"
              >
                {{ order.order_status }}
              </td>
              <td
                class="px-6 py-4 text-white bg-emerald-400"
                v-if="order.order_status === 'Delivered'"
              >
                {{ order.order_status }}
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
    </div>
  </div>
</template>

<style scoped></style>
