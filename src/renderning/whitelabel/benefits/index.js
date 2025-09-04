import React from "react";
import styles from "./benefits.module.scss";
import Commonlable from "@/components/commonlable";

export default function Benefits() {
  return (
    <div className={styles.benefitsmain}>
      <div className="container-xl">
        <div className={styles.benefitsflx}>
          <div className={styles.benefitsflxleft}>
            <Commonlable Text="Benefits" />
            <h3>
              White <span>Label Benefits</span>
            </h3>
            <p>
              A White Label solution lets you sell our Forex Bots under your own
              brand name. We handle the backend, updates, and technology – while
              you focus on sales, marketing, and growth.
            </p>
          </div>
          <div className={styles.benefitsflxright}>
            <div className={styles.benefitsbox}>
              <h5>Custom Branding</h5>
              <p>Your company name, your logo, your domain.</p>
            </div>
            <div className={styles.benefitsbox}>
              <h5>Ready-to-Sell Bots</h5>
              <p>Fully tested Forex Arbitrage & Algo Bots.</p>
            </div>
            <div className={styles.benefitsbox}>
              <h5>Complete Setup</h5>
              <p>Hosting, integration, and backend handled by us.</p>
            </div>
            <div className={styles.benefitsbox}>
              <h5>Scalable Business</h5>
              <p>Onboard unlimited clients under your pricing model.</p>
            </div>
            <div className={styles.benefitsbox}>
              <h5>Ongoing Support</h5>
              <p>Dedicated technical and product support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
