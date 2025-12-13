import React, { useState } from "react";
import styles from "./benefits.module.scss";
import Commonlable from "@/components/commonlable";
import Truefillicon from "../../../../public/assets/icons/truefillicon";
import { WebinarInquiryForm } from "@/components/webinarInquiryForm";
import { InquiryForm } from "@/components/inquiryForm";
import { useAppContext } from "@/context/AppContext";
import Whatsappicon from "../../../../public/assets/icons/Whatsappicon";

export default function Benefits() {
  const { utilitySettings } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className={styles.benefitssectionmain}>
        <div className="container-xl">
          <div className={styles.benefitscontent}>
            <div className={styles.title}>
              <Commonlable Text="Benefits" />
              <h4>
                Benefits of <span>Attending</span>
              </h4>
              {/* <p></p> */}
            </div>
            <div className={styles.grid}>
              <div className={styles.item}>
                <div className={styles.trueicon}>
                  <Truefillicon />
                </div>
                <p>
                  Beginners who want to{" "}
                  <span>start trading with confidence</span>.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.trueicon}>
                  <Truefillicon />
                </div>
                <p>
                  Learn strategies you can <span>apply instantly</span> to your
                  trades.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.trueicon}>
                  <Truefillicon />
                </div>
                <p>
                  Gain{" "}
                  <span>confidence to trade Gold without fear of losses</span>.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.trueicon}>
                  <Truefillicon />
                </div>
                <p>Exclusive access to webinar-only bonuses.</p>
              </div>
              <div className={styles.item}>
                <div className={styles.trueicon}>
                  <Truefillicon />
                </div>
                <p>
                  Opportunity to join our{" "}
                  <span>community of professional traders</span>.
                </p>
              </div>
            </div>
            <div className={styles.ctabuttonmain}>
              {/* <button className={styles.ctaButton} onClick={handleRegisterClick}>
                Register Today
              </button> */}
              <a
                href={`https://wa.me/${utilitySettings?.phoneNo}?text=Hi%20want%20to%20Book%20a%20Live%20Session%20with%20Expert`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.chatwithus}
              >
                <Whatsappicon />
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
