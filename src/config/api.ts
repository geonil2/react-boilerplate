import axios, { AxiosError } from "axios";

export const API = axios.create();

export const isAxiosError = (error: any): error is AxiosError => {
  return error?.isAxiosError;
};

const globalErrorHandler = async (error?: any) => {
  if (isAxiosError(error)) {
    const status = error.response?.status;
    if (status) {
      if (status >= 500) {
        alert("Sorry error occurred (500)");
      } else {
        // Refresh & Retry
      }
    }
  }
  throw error;
};

API.defaults.baseURL = `${import.meta.env.VITE_API_HOST}`;
API.interceptors.response.use(undefined, globalErrorHandler);
