<script setup>
const auth = useCreateUpdateStore();
const { id } = useRoute().params;
const router = useRouter()
const cancelForm = () => {
    auth.clearForm()
    router.go(-1)
}
onMounted(() => {
  auth.GetOrderDetail(id);
});
</script>

<template>
    <!-- Main modal -->
    <div class="flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                        Update Order
                    </h3>
                </div>
                <!-- Modal body -->
                <form @submit.prevent="auth.UpdateOrder" class="p-4 md:p-5">
                    <div class="grid gap-4 mb-4 grid-cols-4">
                        <div class="col-span-4">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input v-model="auth.form.name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                        </div>
                        <div class="col-span-4">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            <input v-model="auth.form.address" type="text" name="addresss" id="addresss" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                        </div>
                        <div class="col-span-2 sm:col-span-2">
                            <label for="item" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item</label>
                            <select v-model="auth.form.item" id="item" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="Sablay keychain">Sablay keychain</option>
                                <option value="Sunflower bag charm">Sunflower bag charm</option>
                                <option value="Tulips">Tulips</option>
                                <option value="Sunflower">Sunflower</option>
                                <option value="Rose">Rose</option>
                                <option value="Sprout Hair clip">Sprout Hair clip</option>
                                <option value="Lavender">Lavender</option>
                                <option value="Headband">Headband</option>
                                <option value="Baby Mushroom">Baby Mushroom</option>
                                <option value="Cat Keychain">Cat Keychain</option>
                                <option value="Custom Bouquet">Custom Bouquet</option>
                            </select>
                        </div>
                        <div class="col-span-2 sm:col-span-2">
                            <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                            <input v-model="auth.form.quantity" type="number" name="quantity" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                        </div>
                        <div class="col-span-2 sm:col-span-2">
                            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input v-model="auth.form.price" type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                        </div>
                        <div class="col-span-2 sm:col-span-2">
                            <label for="payment_options" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Payment Option</label>
                            <select v-model="auth.form.payment_status" id="payment_options" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="Fully Paid">Fully Paid</option>
                                <option value="Partially Paid">Partially Paid</option>
                                <option value="No Payment">No Payment</option>
                            </select>
                        </div>
                        <div class="col-span-2 sm:col-span-2">
                            <label for="total" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total</label>
                            <input v-model="auth.computedTotal" type="number" name="total" id="total" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                        </div>
                        <div class="col-span-2 sm:col-span-2">
                            <label for="balance" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Balance</label>
                            <input v-model="auth.calculatedBalance" type="text" name="balance" id="balance" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                        </div>
                        <div class="col-span-4">
                            <label for="order_status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Order Status</label>
                            <select v-model="auth.form.order_status" id="order_status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="Delivered">Delivered</option>
                                <option value="On process">On process</option>
                                <option value="Not yet started">Not yet started</option>
                            </select>
                        </div>
                    </div>
                    <button @click="cancelForm" type="Button" class="mr-2 text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Cancel
                    </button>
                    <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Update
                    </button>
                </form>
            </div>
        </div>
    </div> 
</template>