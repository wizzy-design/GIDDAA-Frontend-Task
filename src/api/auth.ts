import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import Router from "next/router";
import { UserLoginType } from "@/models/auth";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// Set up an interceptor for the API responses
api.interceptors.response.use(
  // If the response is successful, simply return it
  (response) => {
    return response;
  },
  // If there is an error in the response
  (error) => {
    // Check if the error status is 401, indicating unauthorized access
    if (error.response?.status === 401) {
      // Remove the access token from cookies as it might be invalid or expired
      Cookies.remove("accessToken");
      // Redirect the user to the login page to re-authenticate
      Router.push("/login");
    }
    // Reject the promise with the error to handle it later
    return Promise.reject(error);
  }
);

export const userLogin = async (data: UserLoginType) => {
  try {
    const response = await api.post("/account/login", data);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorData = error.response.data;
      if (errorData && errorData.value && errorData.value.message) {
        toast.error(`${errorData.value.message}`);
      } else {
        toast.error("An unknown error occurred during login.");
      }
    } else if (error instanceof Error) {
      toast.error(`Error during login: ${error.message}`);
    } else {
      toast.error("An unknown error occurred during login.");
    }
    throw error;
  }
};
