import axios, { AxiosRequestConfig } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_KEY || "";
const localStorageTokenKey = process.env.NEXT_PUBLIC_TOKEN_KEY || "";

// common config
axios.defaults.headers.post["Content-Type"] = "application/json";

const publicRequest = axios.create({
  baseURL: apiUrl,
});

const privateRequest = axios.create({
  baseURL: apiUrl,
});

// Add a request interceptor
privateRequest.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = localStorage.getItem(localStorageTokenKey);
    if (config.headers === undefined) {
      config.headers = {};
    }
    if (token) {
      config.headers["Authorization"] = token || "";
    }
    return config;
  },
  (err: any) => {
    console.log(err);
    Promise.reject(err);
  }
);

// Add a response interceptor
privateRequest.interceptors.response.use(
  function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error: { response: { status: string | number } }) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.error(error?.response);
    if (error?.response?.status === 401 || error?.response?.status === "401") {
      //  logout
    }

    return Promise.reject(error);
  }
);

export { privateRequest, publicRequest };
