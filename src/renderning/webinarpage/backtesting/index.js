import React from "react";
import styles from "./backtesting.module.scss";
import Commonlable from "@/components/commonlable";
import backtestingimg1 from "../../../../public/assets/images/backtestingimg1.jpeg";
import backtestingimg2 from "../../../../public/assets/images/backtestingimg2.jpeg";
import Image from "next/image";

export default function Backtesting() {
  return (
    <>
      <div className={styles.backtestingmain}>
        <div className="container">
          <div className={styles.backtestingcontent}>
            <div className={styles.title}>
              {/* <Commonlable Text="Backtesting" /> */}
              <h4>
                <span>Backtesting</span> Data
              </h4>
            </div>
            <div className={styles.grid}>
              <div className={styles.griditems}>
                <Image src={backtestingimg1} alt="backtestingimg1" />
              </div>
              <div className={styles.griditems}>
                <Image src={backtestingimg2} alt="backtestingimg2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
