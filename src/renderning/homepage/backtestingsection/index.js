import React, { useEffect } from "react";
import styles from "./backtestingsection.module.scss";
import Commonlable from "@/components/commonlable";
import { useAppContext } from "@/context/AppContext";
const backtestingimage = "/assets/images/backtestingimage.png";
const myfxbook = "/assets/images/myfxbook.png";

export default function Backtestingsection() {
  const { utilitySettings } = useAppContext();

  return (
    <>
      <div className={styles.backtestingsectionmain} id="Backtesting">
        <div className="container-xl">
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
                <p>Check our live account history</p>
                <div className={styles.backtestingcontentflx}>
                  <span>Broker Name:</span>
                  <p>{utilitySettings?.brokerName}</p>
                </div>
                <div className={styles.backtestingcontentflx}>
                  <span>Server:</span>
                  <p>NeweraCapitalMarkets-Live</p>
                </div>
                <div className={styles.backtestingcontentflx}>
                  <span>MT5 ID:</span>
                  <p>{utilitySettings?.MT5ID}</p>
                </div>
                <div className={styles.backtestingcontentflx}>
                  <span>Investor Password:</span>
                  <p>{utilitySettings?.investorPassword}</p>
                </div>
              </div>
              <div className={styles.backtestinglastflx}>
                <div className={styles.myfxbook}>
                  <img src={myfxbook} alt="myfxbook" />
                </div>
                <div className={styles.backtestinglastflxright}>
                  <a href="https://www.myfxbook.com/members/Newera365/shameer-ahmed/12107681" target="__blank">
                    <span>Portfolio</span>
                    <span>$100K</span>
                  </a>
                  <a href="https://www.myfxbook.com/members/Newera365/gaurav-salaria/12107697" target="__blank">
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
