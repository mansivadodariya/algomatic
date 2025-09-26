import { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();
import { getUtilitySettings } from "@/lib/utilitySettingsApi";

export const AppProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [backToStrategyPlan, setBackToStrategyPlan] = useState(false);
  const [utilitySettings, setUtilitySettings] = useState({});

  useEffect(() => {
    getUtilitySettings().then((res) => {
      setUtilitySettings(res?.payload);
    });
  }, []);

  return <AppContext.Provider value={{ showLogin, setShowLogin, isUserLoggedIn, setIsUserLoggedIn, user, setUser, backToStrategyPlan, setBackToStrategyPlan, utilitySettings }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
