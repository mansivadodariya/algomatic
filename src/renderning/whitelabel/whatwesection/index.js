import React from "react";
import styles from "./whatissection.module.scss";
import Commonlable from "@/components/commonlable";

export default function Whatissection() {
  return (
    <div className={styles.whatissectionmain}>
      <div className="container-xl">
        <div className={styles.whatissectiontitle}>
          {/* <Commonlable Text="Start Your Own Forex Algo Business" /> */}
          <h2>
            What is <span>White Label?</span>
          </h2>
          <p>
            A White Label solution lets you sell our Forex Bots under your own
            brand name. We handle the backend, updates, and technology – while
            you focus on sales, marketing, and growth.
          </p>
        </div>
      </div>
    </div>
  );
}
