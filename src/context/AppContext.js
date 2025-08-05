import { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export const AppProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [backToStrategyPlan, setBackToStrategyPlan] = useState(false);
  // const [subscriptionPlanModalOpen, setSubscriptionPlanModalOpen] = useState(false);

  // const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     try {
  //       const payload = JSON.parse(atob(token.split(".")[1]));
  //       const currentTime = Math.floor(Date.now() / 1000);

  //       if (payload.exp < currentTime) {
  //         setIsUserLoggedIn(false);
  //         setUser(null);
  //         localStorage.removeItem("token");
  //         toast.error("Session Expired, please login again");
  //         router.push("/");
  //       } 
  //     } catch (error) {
  //       toast.error("Session Expired, please login again");
  //       console.error("Invalid token:", error);
  //       setIsUserLoggedIn(false);
  //       setUser(null);
  //       localStorage.removeItem("token");
  //       router.push("/");
  //     }
  //   }else{
  //     setIsUserLoggedIn(false);
  //     setUser(null);
  //   }
  // }, []);

  return <AppContext.Provider value={{ showLogin, setShowLogin, isUserLoggedIn, setIsUserLoggedIn, user, setUser, backToStrategyPlan, setBackToStrategyPlan /* subscriptionPlanModalOpen, setSubscriptionPlanModalOpen */ }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
