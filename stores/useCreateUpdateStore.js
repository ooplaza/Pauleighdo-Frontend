import { defineStore } from "pinia";
import { useApiFetch } from "../composables/useApiFetch";
import { useGetDeleteOrders } from "~/stores/useGetDeleteOrders";

export const useCreateUpdateStore = defineStore("CreateUpdate_Order", {
  state: () => ({
    form: {
      name: "",
      address: "",
      quantity: "",
      item: "",
      price: "",
      total: "",
      payment_status: "",
      balance: "",
      order_status: "",
    },
    notification: {
      timeout: 5000,
      notification_success: false,
      notification_update: false,
      notification_success_text: "Order Created",
      notification_update_text: "Order Updated!",
    },
    order: [],
  }),

  getters: {
    computedTotal() {
      return parseFloat(this.form.price) * parseFloat(this.form.quantity);
    },

    clearForm() {
      // Return a function that clears the form
      return () => {
        this.form.name = "";
        this.form.address = "";
        this.form.quantity = "";
        this.form.item = "";
        this.form.price = "";
        this.form.total = "";
        this.form.payment_status = "";
        this.form.balance = "";
        this.form.order_status = "";
      };
    },

    calculatedBalance() {
      const total = this.computedTotal;
      if (this.form.payment_status === "Fully Paid") {
        return parseFloat(0);
      } else if (this.form.payment_status === "Partially Paid") {
        return parseFloat(total / 2);
      } else if (this.form.payment_status === "No Payment") {
        return parseFloat(total);
      }
      // Add other conditions for different payment statuses if needed
      return 0;
    },
  },

  actions: {
    async CreateOrder() {
      try {
        await useApiFetch().post(`api/order/`, {
          name: this.form.name,
          address: this.form.address,
          quantity: this.form.quantity,
          item: this.form.item,
          price: this.form.price,
          total: this.computedTotal,
          payment_status: this.form.payment_status,
          balance: this.calculatedBalance,
          order_status: this.form.order_status,
        });

        this.clearForm();
        console.log("Order Created!");
        useGetDeleteOrders().OrdersFetcher();

        // Enable Notification Success
        this.notification.notification_success = true;
        setTimeout(() => {
          this.notification.notification_success = false;
        }, this.notification.timeout);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("Ok");
      }
    },

    async UpdateOrder(idToRetrieve) {
      try {
        await useApiFetch().patch(`api/order/${idToRetrieve}/`, {
          name: this.form.name,
          address: this.form.address,
          quantity: this.form.quantity,
          item: this.form.item,
          price: this.form.price,
          total: this.computedTotal,
          payment_status: this.form.payment_status,
          balance: this.calculatedBalance,
          order_status: this.form.order_status,
        });

        this.clearForm();
        console.log("Order Updated!");
        useRouter().push("/order");

        // Enable Notification Update
        this.notification.notification_update = true;
        setTimeout(() => {
          this.notification.notification_update = false;
        }, this.notification.timeout);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("Ok");
      }
    },

    async GetOrderDetail(idToRetrieve) {
      try {
        const response = await useApiFetch().get(`api/order/${idToRetrieve}/`);
        const data = response.data;

        // Set The retrieved data to the form
        this.form.name = data.name;
        this.form.address = data.address;
        this.form.quantity = data.quantity;
        this.form.item = data.item;
        this.form.price = data.price;
        this.form.total = this.computedTotal;
        this.form.payment_status = data.payment_status;
        this.form.balance = this.calculatedBalance;
        this.form.order_status = data.order_status;
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Order Detail Fetched!");
      }
    },
  },
});
