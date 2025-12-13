import React, { useState } from "react";
import styles from "./whyattend.module.scss";
import Commonlable from "@/components/commonlable";
import Listicon from "../../../../public/assets/icons/listicon";
import { WebinarInquiryForm } from "@/components/webinarInquiryForm";
import { InquiryForm } from "@/components/inquiryForm";
import { useAppContext } from "@/context/AppContext";
import Whatsappicon from "../../../../public/assets/icons/Whatsappicon";

export default function Whyattend() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { utilitySettings } = useAppContext();

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className={styles.whyattendsectionmain}>
        <div className="container-xl">
          <div className={styles.whyattendcontent}>
            <div className={styles.title}>
              <Commonlable Text="Why Attend" />
              <h2>
                Why <span>You Should</span> Attend
              </h2>
              {/* <p></p> */}
            </div>
            <div className={styles.grid}>
              <div className={styles.itemsleft}>
                <video autoPlay loop controls>
                  <source src="/videos/adsvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div>
                <div className={styles.gridrow}>
                  <div className={styles.items}>
                    <div className={styles.itemicon}>
                      <Listicon />
                    </div>
                    <div>
                      <p>
                        Learn a <span>tested and proven strategy</span> trusted by professional traders.
                      </p>
                    </div>
                  </div>
                  <div className={styles.items}>
                    <div className={styles.itemicon}>
                      <Listicon />
                    </div>
                    <div>
                      <p>
                        Gain insights into <span>market behavior of Gold (XAUUSD)</span> and how to trade it effectively.
                      </p>
                    </div>
                  </div>
                  <div className={styles.items}>
                    <div className={styles.itemicon}>
                      <Listicon />
                    </div>
                    <div>
                      <p>
                        Avoid costly mistakes and <span>protect your capital</span> with a structured system.
                      </p>
                    </div>
                  </div>
                  <div className={styles.items}>
                    <div className={styles.itemicon}>
                      <Listicon />
                    </div>
                    <div>
                      <p>
                        Free access to <span>live Q&A</span> with our trading experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ctabuttonmain}>
              {/* <button className={styles.ctaButton} onClick={handleRegisterClick}>
                Reserve Your Spot
              </button> */}
              <a href={`https://wa.me/${utilitySettings?.phoneNo}?text=Hi%20want%20to%20Book%20a%20Live%20Session%20with%20Expert`}
                target="_blank"
                rel="noopener noreferrer" className={styles.chatwithus}>
                <Whatsappicon />
                <span>Chat with us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <WebinarInquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </>
  );
}
