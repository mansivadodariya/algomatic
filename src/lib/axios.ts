"use client";
import axios from "axios";
import toast from "react-hot-toast";

export const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3002/api/v1/";
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Ngrok-Skip-Browser-Warning": "true",
  },
});


// attach token client-side only
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["x-auth-token"] = token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling API errors and showing toast messages
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response.status,'-----------------------------error')
    if(error.response.status === 401){
      localStorage.clear()
      toast.error("Please login to continue.");
      window.location.href = "/";
    }
    if (error.response) {
      console.log(error.response.data.message,'-----------------------------error.response')

      if(error?.response?.data?.message){
        toast.error(error.response.data.message);
      }
    } 
    return Promise.reject(error);
  }
);
