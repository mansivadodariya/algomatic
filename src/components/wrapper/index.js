import React, { useEffect } from "react";
import Header from "../header";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import { usePathname } from "next/navigation";
import Footernew from "../footernew";
import Whatsappbubble from "../whatsappbubble";
import { useAppContext } from "@/context/AppContext";
import { InquiryForm } from "../inquiryForm";
import CallWithus from "../callWithus";

export default function Wrapper({ children }) {
  const { isInquiryFormTriggered, ip } = useAppContext();
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
      <Toaster
        containerStyle={{
          zIndex: "99999999999999",
        }}
        position="top-center"
        reverseOrder={false}
      />
      {pathName?.includes("/webinar") ? null : <Header />}
      {children}
      {/* {pathName?.includes("/webinar") ? null : <Whatsappbubble />} */}
      {pathName?.includes("/webinar") ? null : <Whatsappbubble />}
      {/* {pathName?.includes("/webinar") ? null : <CallWithus />} */}
      {pathName?.includes("/webinar") ? null : <InquiryForm />}
      {/* <InquiryForm /> */}
      {pathName?.includes("/webinar") || pathName?.includes("/payment-history") || pathName?.includes("/profile") || pathName?.includes("/affiliate") ? null : <Footernew />}
    </div>
  );
}
