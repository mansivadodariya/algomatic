import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "@/context/AppContext";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { user, setUser, setIsUserLoggedIn, setShowLogin } = useAppContext();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("token");
    const isLogin = localStorage.getItem("isLogin");
    const storedUser = localStorage.getItem("user");

    if (!token || !isLogin || isLogin === "false") {
      setIsAuthorized(false);
      setShowLogin(true);
      router.replace("/");
    } else {
      setIsAuthorized(true);
      setIsUserLoggedIn(true);
      if (!user && storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          console.error("Error parsing stored user", e);
        }
      }
    }
  }, [router, setUser, setIsUserLoggedIn, setShowLogin]);

  if (!isAuthorized) {
    return (
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d0d15",
          color: "#fff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            border: "3px solid rgba(150, 87, 250, 0.2)",
            borderTopColor: "#9657FA",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <p style={{ fontSize: "14px", color: "#a1a1aa", letterSpacing: "0.5px" }}>
          Securing session & loading dashboard...
        </p>
        <style jsx>{`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}
