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
                Book a Live Session with our Arbitrage Expert
              </h1>
            </div>
            <div className={styles.webinarfooterright}>
              {/* <button className={styles.ctaButton} onClick={handleRegisterClick}>
                Secure Your Seat Now
              </button> */}
              <a href={`https://wa.me/${utilitySettings?.phoneNo}?text=Hi%20want%20to%20Book%20a%20Live%20Session%20with%20Expert`}
                target="_blank"
                rel="noopener noreferrer" className={styles.whatsappbubble}>
                <Whatsappicon />
                <span>Chat with us</span>
              </a>
              <a href={`${utilitySettings?.telegramLink}`} target="_blank" className={styles.telegrambubble}>
                <Telegramicon />
                <span>Chat with us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <WebinarInquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </>
  );
}
