import axios from "axios";

export function useApiFetch() {
  // Create a new Axios instance
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
      Authorization: localStorage.getItem("access_token")
        ? `JWT ${localStorage.getItem("access_token")}`
        : null,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });

  // Add the response interceptor to the Axios instance
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;

      if (typeof error.response === "undefined") {
        alert(
          "A server/network error occurred. " +
            "Looks like CORS might be the problem. " +
            "Sorry about this - I will fix it shortly."
        );
        return Promise.reject(error);
      }

      if (
        error.response.status === 401 &&
        originalRequest.url === `api/auth/refresh/`
      ) {
        window.location.href = `/login`;
        return Promise.reject(error);
      }

      if (
        error.response.data.code === "token_not_valid" &&
        error.response.status === 401 &&
        error.response.statusText === "Unauthorized"
      ) {
        const refreshToken = localStorage.getItem("refresh_token");

        if (refreshToken) {
          try {
            const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));
            const now = Math.ceil(Date.now() / 1000);

            if (tokenParts.exp > now) {
              return axiosInstance
                .post("api/auth/refresh/", { refresh: refreshToken })
                .then((response) => {
                  console.log("Token refresh successful:", response.data);

                  localStorage.setItem("access_token", response.data.access);
                  localStorage.setItem("refresh_token", response.data.refresh);

                  axiosInstance.defaults.headers[
                    "Authorization"
                  ] = `JWT ${response.data.access}`;
                  originalRequest.headers[
                    "Authorization"
                  ] = `JWT ${response.data.access}`;

                  return axiosInstance(originalRequest);
                })
                .catch((err) => {
                  console.log("Token refresh error:", err);
                });
            } else {
              console.log("Refresh token is expired", tokenParts.exp, now);
              window.location.href = "/login";
            }
          } catch (e) {
            console.log("Error decoding refresh token:", e);
            window.location.href = "/login";
          }
        } else {
          console.log("Refresh token not available.");
          window.location.href = "/login";
        }
      }

      // Specific error handling done elsewhere
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
