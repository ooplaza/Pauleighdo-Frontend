import { defineStore } from "pinia";
import { useApiFetch } from "../composables/useApiFetch";

export const useGetDeleteOrders = defineStore("GetDelete_Order", {
  state: () => ({
    headers: [
      "name",
      "address",
      "quantity",
      "item",
      "price",
      "total",
      "payment status",
      "balance",
      "order status",
      "action",
    ],
    orders: [],
  }),

  getters: {
    filteredOrders: (state) => (idToDelete) => {
      return state.orders.filter((order) => order.id !== idToDelete);
    },
  },

  actions: {
    // Order Fetcher
    async OrdersFetcher() {
      try {
        const response = await useApiFetch().get(`api/order/`);
        this.orders = response.data["results"];
        console.log(this.orders);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Success");
      }
    },

    // Order Deleter
    async DeleteOrder(id) {
      try {
        await useApiFetch().delete(`api/order/${id}/`);
        console.log(`Deleted order with id ${id}`);

        // Update the local state using the getter
        this.orders = this.filteredOrders(id);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Deleted!");
      }
    },
  },
});
