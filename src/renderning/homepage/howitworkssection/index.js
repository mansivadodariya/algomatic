import React from "react";
import styles from "./howitworkssection.module.scss";
import Commonlable from "@/components/commonlable";
const cardimage1 = "/assets/images/cardimage1.svg";
const cardimage2 = "/assets/images/cardimage2.svg";
const cardimage3 = "/assets/images/cardimage3.svg";

export default function Howitworkssection() {
  return (
    <>
      <div className={styles.howitworkssectionmain}>
        <div className="container-md">
          <div className={styles.howitworkstitle}>
            <Commonlable Text="Work Pattern" />
            <h3>
              How It <span>Works?</span>
            </h3>
            <p>
              Algomatic detects price inefficiencies and executes trades
              instantly, with zero risk.
            </p>
          </div>
          <div className={styles.howitworksgrd}>
            <div className={styles.howitworkscardmain}>
              <div className={styles.howitworkscardcontent}>
                <h4>Price Gap Detection</h4>
                <p>
                  Algomatic scans the Spot and Future markets for profitable
                  price discrepancies.
                </p>
              </div>
              <div className={styles.howitworkscardimage}>
                <img src={cardimage1} alt="cardimage1" />
              </div>
            </div>
            <div className={styles.howitworkscardmain}>
              <div className={styles.howitworkscardcontent}>
                <h4>Trade Execution</h4>
                <p>
                  It buys low in the Spot market and sells high in the Future
                  market, securing risk-free profits.
                </p>
              </div>
              <div className={styles.howitworkscardimage}>
                <img src={cardimage2} alt="cardimage2" />
              </div>
            </div>
            <div className={styles.howitworkscardmain}>
              <div className={styles.howitworkscardcontent}>
                <h4>Profit Logging</h4>
                <p>
                  With nanosecond execution, Algomatic ensures seamless trades
                  and consistent profits.
                </p>
              </div>
              <div className={styles.howitworkscardimage}>
                <img src={cardimage3} alt="cardimage3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
