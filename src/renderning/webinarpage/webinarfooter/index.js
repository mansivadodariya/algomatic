import React, { useState } from "react";
import styles from "./webinarfooter.module.scss";
import { WebinarInquiryForm } from "@/components/webinarInquiryForm";

export default function Webinarfooter({ title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className={styles.webinarfootermain}>
        <div className="container-xl">
          <div className={styles.webinarfooter}>
            <div className={styles.webinarfooterleft}>
              <h1>
                {title}
              </h1>
            </div>
            <div className={styles.webinarfooterright}>
              <button className={styles.ctaButton} onClick={handleRegisterClick}>
                Secure Your Seat Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <WebinarInquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
