"use client";
import axios from "axios";
import toast from "react-hot-toast";
// If you use a toast library like react-hot-toast, import it here:
// import { toast } from "react-hot-toast";
// If you use another toast system, import it accordingly.

// import { useLoading } from "@/contexts/LoadingContext";
// import { toast } from "@/components/ui/use-toast";

export const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3002/api/v1/";
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Ngrok-Skip-Browser-Warning": "true",
  },
});

// let setLoadingGlobal: ( ( loading: boolean ) => void ) | null = null;

// export const setAxiosLoadingHandler = ( handler: ( loading: boolean ) => void ) =>
// {
//   setLoadingGlobal = handler;
// };

// attach token client-side only
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["x-auth-token"] = token;
      }
    }
    // Attach token if present
    // const token = localStorage.getItem( "admin_token" ); // Do NOT parse, it's a string JWT
    // if ( token )
    // {
    //   if ( config.headers )
    //   {
    //     config.headers[ "x-auth-token" ] = `${ token }`;
    //   }
    // }
    return config;
  },
  (error) => {
    // if ( setLoadingGlobal ) setLoadingGlobal( false );
    return Promise.reject(error);
  }
);

// Response interceptor for handling API errors and showing toast messages
api.interceptors.response.use(
  (response) => {
    // if ( setLoadingGlobal ) setLoadingGlobal( false );
    // If the API sends a toast message in the response, show it
    // if ( response.data && response.data.message )
    // {
    // toast.success(response.data.message);
    // }
    // if()
    // if(response.data.message){
    //   toast.success(response.data.message);
    // }
    // if(response?.data?.message){
    //   toast.success(response.data.message);
    // }
    return response;
  },
  (error) => {
    // if ( setLoadingGlobal ) setLoadingGlobal( false );
    let message = "An unexpected error occurred.";
    if (error.response) {
      console.log(error.response.data.message,'-----------------------------error.response')

      if(error?.response?.data?.message){
        console.log('--------------1')
        toast.error(error.response.data.message);
      }
      // else if ( error.response.status === 401 ){
      //   toast.error("Session Expired, please login again");
      //   localStorage.clear();
      //   setTimeout(() => {
      //     window.location.href = "/";
      //   }, 1000);
      // } else {
      //   toast.error(message);
      // }
      // message = error.response.data?.message || error.response.statusText;
    } 
    // else if (error.message) {
    //   message = error.message;
    // }
    // if (error.response.data?.message) {
    //   message = error.response.data.message;
    //   toast.error(message);
    // }
    return Promise.reject(error);
  }
);

// Get all payment list
