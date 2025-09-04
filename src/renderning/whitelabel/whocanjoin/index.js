import React from "react";
import styles from "./whocanjoin.module.scss";
import Commonlable from "@/components/commonlable";

export default function Whocanjoin() {
  return (
    <div className={styles.whocanjoinmain}>
      <div className="container-xl">
        <div className={styles.whocanjointitle}>
          <Commonlable Text="join us" />
          <h5>
            Who Can <span>Join?</span>
          </h5>
          <p>
            We welcome businesses of all sizes and industries to join our White
            Label program. Whether you're a small business owner, a large
            corporation, or a financial institution, we have a solution that's
            right for you.
          </p>
        </div>
        <div className={styles.whocanjoingrid}>
          <div className={styles.whocanjoingriditem}>
            <div className={styles.whocanjoinimage}></div>
            <div className={styles.whocanjoincontent}>
              <h6>Forex Brokers</h6>
              <p>Expand your product portfolio.</p>
            </div>
          </div>
          <div className={styles.whocanjoingriditem}>
            <div className={styles.whocanjoinimage}></div>
            <div className={styles.whocanjoincontent}>
              <h6>Entrepreneurs </h6>
              <p>Expand your product portfolio.</p>
            </div>
          </div>
          <div className={styles.whocanjoingriditem}>
            <div className={styles.whocanjoinimage}></div>
            <div className={styles.whocanjoincontent}>
              <h6>IBs & Affiliates</h6>
              <p>Upgrade from referral to full-scale ownership.</p>
            </div>
          </div>
          <div className={styles.whocanjoingriditem}>
            <div className={styles.whocanjoinimage}></div>
            <div className={styles.whocanjoincontent}>
              <h6>Financial Influencers</h6>
              <p>Build your own branded trading bot product.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
