import React, { useState } from "react";
import styles from "./webinarfooter.module.scss";
import { WebinarInquiryForm } from "@/components/webinarInquiryForm";
import { useAppContext } from "@/context/AppContext";

export default function Webinarfooter({ title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { utilitySettings } = useAppContext();

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
              <a href={`https://wa.me/${utilitySettings?.phoneNo}`} target="_blank" >
                <button className={styles.ctaButton} onClick={handleRegisterClick}>
                  Chat with Expert Team
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <WebinarInquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
