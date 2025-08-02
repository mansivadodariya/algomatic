import React from "react";
import styles from "./whatalgosection.module.scss";
import Whatalgoicon from "../../../../public/assets/icons/whatalgoicon";
import Chartsicon from "../../../../public/assets/icons/chartsicon";

export default function Whatalgosection() {
  return (
    <>
      <div className={styles.whatalgosectionmain} id="About">
        <div className="container-sm">
          <div className={styles.whatalgoboxmain}>
            <div className={styles.whatalgoboxanimate}>
              <Whatalgoicon />
            </div>
            <div className={styles.whatalgoboxcontent}>
              <h2>
                What Is <span>AlgoMatic?</span>
              </h2>
              <p>Algomatic is an advanced algorithmic trading bot designed to harness the power of arbitrage in the forex market, specifically for gold (XAUUSD). With cutting-edge technology and human intelligence combined, Algomatic identifies price gaps between Spot and Future markets to execute trades in real-time, ensuring maximum profit with minimal risk.</p>
            </div>
          </div>
          <div className={styles.whatalgoboxmain}>
            <div className={styles.whatalgoboxcontent}>
              <h2>
                <span>Zero-Loss</span> Algorithmic Trading, Finally a Reality
              </h2>
              <p>Arbitrage is the holy grail of trading — risk-free profit from market inefficiencies. Algomatic is built to detect and exploit gold price discrepancies between the Spot and Futures markets in real time. It does this 24/7, with no fatigue, no emotions, and no room for human error. Backed by advanced algorithms and overseen by trading professionals, Algomatic guarantees every trade is a winning trade.</p>
            </div>
            <div className={styles.whatalgoboxanimate}>
              <Chartsicon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
