import React from "react";
import styles from "./backtesting.module.scss";
import Commonlable from "@/components/commonlable";

export default function Backtesting() {
  return (
    <>
      <div className={styles.backtestingmain}>
        <div className="container">
          <div className={styles.backtestingcontent}>
            <div className={styles.title}>
              <Commonlable Text="Why Attend" />
              <h4>
                <span>Backtesting</span> Data
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
