import React, { useState } from "react";
import styles from "./webinarherobanner.module.scss";
import Commonlable from "@/components/commonlable";
import Image from "next/image";
import webinarbanner from "../../../../public/assets/images/webinarbanner.jpg";
import Calendaricon from "../../../../public/assets/icons/calendaricon";
import Timeicon from "../../../../public/assets/icons/timeicon";
import Videoicon from "../../../../public/assets/icons/videoicon";
import Globeicon from "../../../../public/assets/icons/globeicon";
import Truefillicon from "../../../../public/assets/icons/truefillicon";
import { InquiryForm } from "@/components/inquiryForm";

export default function Webinarherobanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container-xl">
          <div className={styles.heroContent}>
            <div className={styles.title}>
              <Commonlable Text="Zero Loss Trading Strategy" />
              <h1>
                Zero-Loss Trading Strategy in <span>XAUUSD</span> Pair
              </h1>
              <p>Discover a powerful trading strategy designed specifically for XAUUSD (Gold) that helps you minimize risks and maximize profits. Learn the proven system we use to trade with confidence—even in volatile markets.</p>
            </div>
            <div className={styles.grid}>
              <div>
                <div className={styles.itemsleft}>
                  <div className={styles.webinarbannerimg}>
                    <Image src={webinarbanner} alt="webinarbanner" />
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.itemsright}>
                  <div className={styles.gridcards}>
                    <div className={styles.cards}>
                      <div className={styles.cardsicon}>
                        <Calendaricon />
                      </div>
                      <div className={styles.cardscontent}>
                        <span>Date</span>
                        <p>1st October '25</p>
                      </div>
                    </div>
                    <div className={styles.cards}>
                      <div className={styles.cardsicon}>
                        <Timeicon />
                      </div>
                      <div className={styles.cardscontent}>
                        <span>Time</span>
                        <p>08: 00 PM</p>
                      </div>
                    </div>
                    <div className={styles.cards}>
                      <div className={styles.cardsicon}>
                        <Videoicon />
                      </div>
                      <div className={styles.cardscontent}>
                        <span>Venue</span>
                        <p>Zoom</p>
                      </div>
                    </div>
                    <div className={styles.cards}>
                      <div className={styles.cardsicon}>
                        <Globeicon />
                      </div>
                      <div className={styles.cardscontent}>
                        <span>Language</span>
                        <p>English</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rowlist}>
                    <div className={styles.list}>
                      <div className={styles.checked}>
                        <Truefillicon />
                      </div>
                      <p>XAUUSD Arbitrage Bot</p>
                    </div>
                    <div className={styles.list}>
                      <div className={styles.checked}>
                        <Truefillicon />
                      </div>
                      <p>Gold (XAUUSD) Future</p>
                    </div>
                    <div className={styles.list}>
                      <div className={styles.checked}>
                        <Truefillicon />
                      </div>
                      <p>Gold (XAUUSD) Spot</p>
                    </div>
                    <div className={styles.list}>
                      <div className={styles.checked}>
                        <Truefillicon />
                      </div>
                      <p>World Most Reliable Bot</p>
                    </div>
                  </div>
                  <div className={styles.ctabuttonmain}>
                    <button className={styles.ctaButton} onClick={handleRegisterClick}>
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
