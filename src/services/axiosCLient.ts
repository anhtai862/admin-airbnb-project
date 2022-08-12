import axios, { AxiosError } from "axios";
import { CONFIG_URL } from "enum/admin.enum";
import store from "store";

// Setup cấu hình mặc định cho axios
const axiosClient = axios.create({
  baseURL: CONFIG_URL.BASE_URL,
  headers: {
    tokenByClass: CONFIG_URL.BASE_TOKEN,
  },
});

interface ErrorResponse {
  content: string;
}

// setup response interceptor
// axiosClient.interceptors.response.use(
//   (response) => {
//     return response.data.content;
//   },
//   (error: AxiosError<ErrorResponse>) => {
//     return Promise.reject(error.response?.data.content);
//   }
// );

// setup request interceptor
// axiosClient.interceptors.request.use((config) => {
//   if (config.headers) {
//     const { accessToken } = store.getState().auth.currentUser;
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//   }

//   return config;
// });

export default axiosClient;
