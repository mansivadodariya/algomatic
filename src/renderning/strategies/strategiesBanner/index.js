import React from "react";
import styles from "./strategiesBanner.module.scss";
import CommonButton from "@/components/commonButton";
import Commonlable from "@/components/commonlable";
export default function StrategiesBanner() {
  return (
    <div className="container-xl">
      <div className={styles.StrategiesBanner}>
        {/* <div className={styles.buttonCenter}>
          <CommonButton text="Strategies" />
        <Commonlable Text="Strategies"/>
        </div> */}
        <h2>Strategies</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
    </div>
  );
}
