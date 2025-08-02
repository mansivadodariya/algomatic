import React from "react";
import { useRouter } from "next/router";
import styles from "./paymentSuccess.module.scss";

export default function PaymentSuccess({ open = true, onClose }) {
  const router = useRouter();

  const handleGoHome = () => {
    if (onClose) onClose();
    router.push("/");
  };

  if (!open) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.successCard}>
        <div className={styles.iconWrapper}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#e6ffe6" />
            <path d="M20 34L29 43L44 28" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2>Payment Successful!</h2>
        <p>
          Your payment was processed successfully.
          <br />
          Thank you for your purchase.
        </p>
        <br/>
        <button className={styles.homeBtn} onClick={handleGoHome}>
          Go to Home
        </button>
      </div>
    </div>
  );
}
