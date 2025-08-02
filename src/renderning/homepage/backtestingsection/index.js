import React from "react";
import styles from "./backtestingsection.module.scss";
import Commonlable from "@/components/commonlable";
const backtestingimage = "/assets/images/backtestingimage.png";
const myfxbook = "/assets/images/myfxbook.png";

export default function Backtestingsection() {
  return (
    <>
      <div className={styles.backtestingsectionmain} id="Backtesting">
        <div className="container-sm">
          <div className={styles.backtestingsection}>
            <div className={styles.backtestingsectionleft}>
              <img src={backtestingimage} alt="backtestingimage" />
            </div>
            <div className={styles.backtestingsectionright}>
              <Commonlable Text="Try It Yourself" />
              <h3>
                <span>Backtesting</span> Data
              </h3>
              <div className={styles.backtestingcontent}>
                <p>Check our backtested history</p>
                <div className={styles.backtestingcontentflx}>
                  <span>Broker Name:</span>
                  <p>Skyriss</p>
                </div>
                <div className={styles.backtestingcontentflx}>
                  <span>Server:</span>
                  <p>Skyriss Securities Ltd.</p>
                </div>
                <div className={styles.backtestingcontentflx}>
                  <span>MT5 ID:</span>
                  <p>200037 </p>
                </div>
                <div className={styles.backtestingcontentflx}>
                  <span>Investor Password:</span>
                  <p>Inv@2025</p>
                </div>
              </div>
              <div className={styles.backtestinglastflx}>
                <div className={styles.myfxbook}>
                  <img src={myfxbook} alt="myfxbook" />
                </div>
                <div className={styles.backtestinglastflxright}>
                  <a href="https://www.myfxbook.com/portfolio/algomaticbot-200k/11536065" target="__blank">
                    <span>Portfolio</span>
                    <span>$200K</span>
                  </a>
                  <a href="https://www.myfxbook.com/portfolio/algomaticbot-10k/11536062" target="__blank">
                    <span>Portfolio</span>
                    <span>$10K</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
