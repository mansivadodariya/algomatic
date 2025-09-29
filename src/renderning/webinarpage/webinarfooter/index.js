import React, { useState } from "react";
import styles from "./webinarfooter.module.scss";
import { InquiryForm } from "@/components/inquiryForm";

export default function Webinarfooter() {
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
                Almost Full <span>Only 2 Seats Left</span>
              </h1>
              <p>Registrations End on 29 SEP</p>
            </div>
            <div className={styles.webinarfooterright}>
              <button
                className={styles.ctaButton}
                onClick={handleRegisterClick}
              >
                Secure Your Seat Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <InquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
