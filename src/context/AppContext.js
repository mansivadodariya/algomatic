import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [backToStrategyPlan, setBackToStrategyPlan] = useState(false);
  // const [subscriptionPlanModalOpen, setSubscriptionPlanModalOpen] = useState(false);  

  return <AppContext.Provider value={{ showLogin, setShowLogin, isUserLoggedIn, setIsUserLoggedIn, user, setUser, backToStrategyPlan, setBackToStrategyPlan, /* subscriptionPlanModalOpen, setSubscriptionPlanModalOpen */ }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
