import React, { useState } from "react";
import styles from "./webinarfooter.module.scss";
import { WebinarInquiryForm } from "@/components/webinarInquiryForm";
import { InquiryForm } from "@/components/inquiryForm";
import Telegramicon from "../../../../public/assets/icons/telegramicon";
import Whatsappicon from "../../../../public/assets/icons/Whatsappicon";
import { useAppContext } from "@/context/AppContext";

export default function Webinarfooter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { utilitySettings } = useAppContext();

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className={styles.webinarfootermain}>
        <div className="container-xl">
          {/* <div className={styles.webinarfooter}>
            <div className={styles.webinarfooterleft}>
              <h1>
                Few Limited Sheet Available <span></span>
              </h1>
            </div>
            <div className={styles.webinarfooterright}>
              <button className={styles.ctaButton} onClick={handleRegisterClick}>
                Secure Your Seat Now
              </button>
            </div>
          </div> */}
          <div className={styles.webinarfooter}>
            <div className={styles.webinarfooterleft}>
              <h1>
                Chat With Us
              </h1>
            </div>
            <div className={styles.webinarfooterright}>
              {/* <button className={styles.ctaButton} onClick={handleRegisterClick}>
                Secure Your Seat Now
              </button> */}
              <a href={`${utilitySettings?.telegramLink}`} target="_blank" className={styles.telegrambubble}>
                {/* <span>Chat with us</span> */}
                <Telegramicon />
              </a>
              <a href={`https://wa.me/${utilitySettings?.phoneNo}`} target="_blank" className={styles.whatsappbubble}>
                {/* <span>Chat with us</span> */}
                <Whatsappicon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <WebinarInquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
