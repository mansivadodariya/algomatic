import React from "react";
import styles from "./contactUsBanner.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";
import { useAppContext } from "@/context/AppContext";
import { Check } from "lucide-react";

export default function ContactUsBanner() {
  const { utilitySettings } = useAppContext();
  const rawPhone = utilitySettings?.phoneNo || "917046279434";
  const cleanPhone = rawPhone.replace(/[^0-9]/g, "");

  return (
    <section className={styles.heroBanner}>
      <div className={styles.ambientGlowOrb}></div>
      <div className="container-xl">
        <div className={styles.bannerContent}>
          <div className={styles.labelWrapper}>
            <Commonlable Text="Algomatic Support & Engineering Desk" />
          </div>
          <h1>
            Connect with Our <span>Quantitative & Support Team</span>
          </h1>
          <p className={styles.description}>
            Have inquiries regarding our algorithmic trading bots, custom strategy engineering,
            or institutional brokerage solutions? Our dedicated engineers and trading desk are here
            to help you automate with precision.
          </p>
          <div className={styles.actionsRow}>
            <Commonarrowbutton
              Text="Chat on WhatsApp"
              Butttonvarient="dark"
              link={`https://wa.me/${cleanPhone}?text=Hi%20Algomatic%20Team,%20I%20have%20an%20inquiry%20regarding%20your%20trading%20bots.`}
              Target="_blank"
            />
            <Commonarrowbutton
              Text="Send Inquiry"
              Butttonvarient="Blueoutlined"
              link="#contact-form"
            />
          </div>
          <div className={styles.highlightsRow}>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Average Response &lt; 15 Mins</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>1-on-1 Dedicated Quant Guidance</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>100% IP & Strategy Confidentiality</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>24/5 Live Trading Desk Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
