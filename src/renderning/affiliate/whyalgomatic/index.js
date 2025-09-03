import React from "react";
import styles from "./whyalgomatic.module.scss";
import Commonlable from "@/components/commonlable";
import Trustedicon from "../../../../public/assets/icons/trustedicon";
import Lifetimeicon from "../../../../public/assets/icons/lifetimeicon";
import Dolorcoinicon from "../../../../public/assets/icons/dolorcoinicon";
import Realtimedashboardicon from "../../../../public/assets/icons/realtimedashboardicon";
import Fastpayouticon from "../../../../public/assets/icons/fastpayouticon";
import Marketingtoolsicon from "../../../../public/assets/icons/marketingtoolsicon";

export default function Whyalgomatic() {
  return (
    <div className={styles.whyalgomain}>
      <div className="container-xl">
        <div className={styles.whyalgotitle}>
          <Commonlable Text="Why Algomatic" />
          <h3>
            Why Partner With <span>AlgomaticBot?</span>
          </h3>
          {/* <p></p> */}
        </div>
        <div className={styles.whyalgogrid}>
          <div className={styles.whyalgogriditem}>
            <div className={styles.cardicon}>
              <Dolorcoinicon />
            </div>
            <div className={styles.cardcontent}>
              <h6>High Commission</h6>
              <p>
                Earn <span>25%</span> on each sale.
              </p>
            </div>
          </div>
          <div className={styles.whyalgogriditem}>
            <div className={styles.cardicon}>
              <Lifetimeicon />
            </div>
            <div className={styles.cardcontent}>
              <h6>Lifetime Earnings</h6>
              <p>Commissions on repeat purchases, not just the first.</p>
            </div>
          </div>
          <div className={styles.whyalgogriditem}>
            <div className={styles.cardicon}>
              <Trustedicon />
            </div>
            <div className={styles.cardcontent}>
              <h6>Trusted Products</h6>
              <p>Proven Forex Arbitrage & Algo Bots with global demand.</p>
            </div>
          </div>
          <div className={styles.whyalgogriditem}>
            <div className={styles.cardicon}>
              <Marketingtoolsicon />
            </div>
            <div className={styles.cardcontent}>
              <h6>Marketing Tools</h6>
              <p>Banners, creatives, and tracking support.</p>
            </div>
          </div>
          <div className={styles.whyalgogriditem}>
            <div className={styles.cardicon}>
              <Realtimedashboardicon />
            </div>
            <div className={styles.cardcontent}>
              <h6>Real-Time Dashboard</h6>
              <p>Track clicks, sales, and commissions instantly.</p>
            </div>
          </div>
          <div className={styles.whyalgogriditem}>
            <div className={styles.cardicon}>
              <Fastpayouticon />
            </div>
            <div className={styles.cardcontent}>
              <h6>Fast Payouts</h6>
              <p>Withdraw your earnings quickly and easily.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
