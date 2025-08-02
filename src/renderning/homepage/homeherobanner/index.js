import React from "react";
import styles from "./homeherobanner.module.scss";
import Commonarrowbutton from "@/components/commonarrowbutton";
import Commonlable from "@/components/commonlable";
export default function Homeherobanner() {
  return (
    <div className={styles.homeherobannermain}>
      <video autoPlay loop muted>
        <source src="/assets/video/algoherobannervid.mp4" type="video/mp4" />
      </video>
      <div className={styles.homeherobannercontentmain}>
        <div className={styles.homeherowrapper}>
          <div className="container-sm">
            <div className={styles.homeherobannercontent}>
              <Commonlable Text="Zero Loss Trading Strategy" />
              <h1>
                Revolutionizing Forex Trading with <span>Smart Automation</span>
              </h1>
              <p>
                Algomatic is a smart trading bot that leverages arbitrage
                opportunities in the XAUUSD forex market, executing real-time
                trades for maximum profit and minimal risk
              </p>
              <div className={styles.herobannerbuttons}>
                <Commonarrowbutton Text="contact us" Butttonvarient="dark" link="https://api.whatsapp.com/send?phone=971509706562" Target="blank"/>
                <Commonarrowbutton Text="explore algomatic" Butttonvarient="light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
