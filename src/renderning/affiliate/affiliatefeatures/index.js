import React from "react";
import styles from "./affiliatefeatures.module.scss";
import Commonlable from "@/components/commonlable";

export default function Affiliatefeatures() {
  return (
    <>
      <div className={styles.affiliatefeaturesmain}>
        <div className="container-xl">
          <div className={styles.affiliatefeaturesflx}>
            <div className={styles.affiliatefeaturesflxleft}>
              <Commonlable Text="Key Features" />
              <h3>
                Affiliate Dashboard <span>Features</span>
              </h3>
              <p>
                Everything you need for safe, smart, and automated gold trading.
              </p>
            </div>
            <div className={styles.affiliatefeaturesflxright}>
              <div className={styles.affiliatefeaturesbox}>
                <h5>Live sales and clicks tracking</h5>
              </div>
              <div className={styles.affiliatefeaturesbox}>
                <h5>Conversion and revenue reports</h5>
              </div>
              <div className={styles.affiliatefeaturesbox}>
                <h5>Instant withdrawal requests</h5>
              </div>
              <div className={styles.affiliatefeaturesbox}>
                <h5>24/7 support team for guidance</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
