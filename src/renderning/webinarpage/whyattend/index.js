import React, { useState } from "react";
import styles from "./whyattend.module.scss";
import Commonlable from "@/components/commonlable";
import Listicon from "../../../../public/assets/icons/listicon";
import { InquiryForm } from "@/components/inquiryForm";

export default function Whyattend() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <div className={styles.items}>
                <div className={styles.itemicon}>
                  <Listicon />
                </div>
                <div>
                  <p>
                    Learn a <span>tested and proven strategy</span> trusted by
                    professional traders.
                  </p>
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.itemicon}>
                  <Listicon />
                </div>
                <div>
                  <p>
                    Gain insights into{" "}
                    <span>market behavior of Gold (XAUUSD)</span> and how to
                    trade it effectively.
                  </p>
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.itemicon}>
                  <Listicon />
                </div>
                <div>
                  <p>
                    Avoid costly mistakes and <span>protect your capital</span>{" "}
                    with a structured system.
                  </p>
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.itemicon}>
                  <Listicon />
                </div>
                <div>
                  <p>
                    Free access to <span>live Q&A</span> with our trading
                    experts.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.ctabuttonmain}>
              <button
                className={styles.ctaButton}
                onClick={handleRegisterClick}
              >
                Reserve Your Spot
              </button>
            </div>
          </div>
        </div>
      </div>

      <InquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
