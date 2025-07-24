import React, { useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import { usePathname } from "next/navigation";

export default function Wrapper({ children }) {
  const { toasts } = useToasterStore();
  const pathName = usePathname();
  const TOAST_LIMIT = 1;
  useEffect(() => {
    toasts
      ?.filter((t) => t.visible)
      ?.filter((_, i) => i >= TOAST_LIMIT)
      ?.forEach((t) => toast?.dismiss(t.id));
  }, [toasts]);
  return (
    <div>
      <Toaster
        containerStyle={{
          zIndex: "99999999999999",
        }}
        position="top-center"
        reverseOrder={false}
      />
      <Header />
      {children}
      {pathName?.includes("/payment-history") || pathName?.includes("/profile") ? null : <Footer />}
    </div>
  );
}
