import React from "react";
import styles from "./commonlable.module.scss";

export default function Commonlable({ Text }) {
  return (
    <>
      <span className={styles.commonlable}>{Text}</span>
    </>
  );
}
