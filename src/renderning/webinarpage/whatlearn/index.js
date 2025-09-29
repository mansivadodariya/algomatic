import React, { useState } from "react";
import styles from "./whatlearn.module.scss";
import Commonlable from "@/components/commonlable";
import Listicon2 from "../../../../public/assets/icons/listicon2";
import { InquiryForm } from "@/components/inquiryForm";

export default function Whatlearn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className={styles.whatlearnsectionmain}>
        <div className="container-xl">
          <div className={styles.Whatlearncontent}>
            <div className={styles.title}>
              <Commonlable Text="You Learn" />
              <h3>
                What You <span>Will Learn</span>
              </h3>
              {/* <p></p> */}
            </div>
            <div className={styles.grid}>
              <div className={styles.items}>
                <div className={styles.itemicon}>
                  <Listicon2 />
                </div>
                <div>
                  <p>
                    How to trade the{" "}
                    <span>XAUUSD pair with near-zero losses</span>.
                  </p>
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.itemicon}>
                  <Listicon2 />
                </div>
                <div>
                  <p>Identifying high-probability entry and exit points.</p>
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.itemicon}>
                  <Listicon2 />
                </div>
                <div>
                  <p>
                    Using <span>risk management techniques</span> that protect
                    your investments.
                  </p>
                </div>
              </div>
              <div className={styles.items}>
                <div className={styles.itemicon}>
                  <Listicon2 />
                </div>
                <div>
                  <p>
                    Understanding market trends and{" "}
                    <span>real examples of successful trades</span>.
                  </p>
                </div>
              </div>
              <div className={`${styles.items} ${styles.fullitem}`}>
                <div className={styles.itemicon}>
                  <Listicon2 />
                </div>
                <div>
                  <p>
                    Step-by-step breakdown of the{" "}
                    <span>exact system we use daily</span>.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.ctabuttonmain}>
              <button
                className={styles.ctaButton}
                onClick={handleRegisterClick}
              >
                Reserve Your Seat
              </button>
            </div>
          </div>
        </div>
      </div>
      <InquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
