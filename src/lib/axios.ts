import axios from "axios";
import toast from "react-hot-toast";
// If you use a toast library like react-hot-toast, import it here:
// import { toast } from "react-hot-toast";
// If you use another toast system, import it accordingly.

// import { useLoading } from "@/contexts/LoadingContext";
// import { toast } from "@/components/ui/use-toast";

// const API_BASE_URL = "https://c393-2405-201-200d-1869-f87a-5d22-ab5c-fde3.ngrok-free.app/api/v1/";
const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3002/api/v1/";
// console.log(process.env.NEXT_PUBLIC_BACKEND_URL, API_BASE_URL, "------------------- process.env.BACKEND_URL");

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

api.interceptors.request.use(
  (config) => {
    // if ( setLoadingGlobal ) setLoadingGlobal( true );
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
    return response;
  },
  (error) => {
    // if ( setLoadingGlobal ) setLoadingGlobal( false );
    let message = "An unexpected error occurred.";
    if (error.response) {
      // Server responded with a status other than 2xx
      // if ( error.response.status === 401 )
      // {
      //   // Unauthorized: clear localStorage and reload (logout)
      //   // localStorage.clear();
      //   // window.location.href = "/login"; // Redirect to login page
      //   // window.location.reload();
      // }
      // message = error.response.data?.message || error.response.statusText;
    } else if (error.message) {
      message = error.message;
    }
    toast(message);
    return Promise.reject(error);
  }
);

// Get all payment list
