import { defineStore } from "pinia";
import { useApiFetch } from "../composables/useApiFetch";

export const useAuthStore = defineStore("AUTH", {
  state: () => ({
    LoginForm: {
      email: "",
      password: "",
    },
    RegistrationForm: {
      email: "",
      password: "",
      username: "",
      first_name: "",
      last_name: "",
    },
    UserInfo: null,
  }),

  getters: {
    clearLoginForm() {
      // Return a function that clears the form
      return () => {
        this.LoginForm.email = "";
        this.LoginForm.password = "";
      };
    },
    clearRegistrationForm() {
      // Return a function that clears the form
      return () => {
        this.RegistrationForm.email = "";
        this.RegistrationForm.password = "";
        this.RegistrationForm.username = "";
        this.RegistrationForm.first_name = "";
        this.RegistrationForm.last_name = "";
      };
    },
    isLoggedIn() {
      return this.UserInfo !== null;
    },
  },

  actions: {
    // Fetch user information
    async GetUserInfo() {
      try {
        const response = await useApiFetch().get(`api/auth/user/profile/`);
        this.UserInfo = response.data["results"];
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("User Information Fetched!");
      }
    },

    // Registration handler
    async RegisterHandler() {
      try {
        await useApiFetch().post(`api/auth/register/`, {
          email: this.RegistrationForm.email,
          password: this.RegistrationForm.password,
          username: this.RegistrationForm.username,
          first_name: this.RegistrationForm.first_name,
          last_name: this.RegistrationForm.last_name,
        });
        this.clearRegistrationForm();
        useRouter().push("/login");
      } catch (error) {
        console.log(error);
      }
    },

    // Login handler
    async LoginHandler() {
      try {
        const response = await useApiFetch().post(`api/auth/login/`, {
          email: this.LoginForm.email,
          password: this.LoginForm.password,
        });

        // Update the header with the use of Authorization
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        useApiFetch().defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");

        // Clear Login form and grab User Information
        this.clearLoginForm();
        await this.GetUserInfo();
        useRouter().push("/order")
      } catch (error) {
        console.log(error);
      }
    },

    // LogoutHandler
    async LogoutHandler() {
      try {
        await useApiFetch().post(`api/auth/logout/`, {
          refresh_token: localStorage.getItem("refresh_token"),
        });
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        useApiFetch().defaults.headers["Authorization"] = null;
        this.UserInfo = null;
        useRouter().push("/login");
      } catch (error) {
        console.log(error);
      } finally {
        useRouter().go(0);
      }
    },
  },
});
