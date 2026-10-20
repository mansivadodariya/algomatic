import React from "react";
import styles from "./recommendedbrokers.module.scss";
import Marquee from "react-fast-marquee";
const pepperstonelogo = "/assets/logo/pepperstonelogo.jpg";
const skyrisslogo = "/assets/logo/skyrisslogo.jpg";
const hfmlogo = "/assets/logo/hfmlogo.webp";
const damanmarketlogo = "/assets/logo/damanmarketlogo.png";
const cmclogo = "/assets/logo/cmclogo.png";
const fifomarket = "/assets/logo/fifo-market.png";
const avatrade = "/assets/logo/ava-trade.png";

export default function Recommendedbrokers() {
  return (
    <>
      <div className={styles.recommendedbrokersmain}>
        <div className="container-xl">
          <div className={styles.recommendedbrokerstitle}>
            <h4>
              <span>Recommended</span> Brokers
            </h4>
          </div>
        </div>
        <div className={styles.marqueecontainer}>
          <Marquee autoFill speed={80}>
            {/* <div className={styles.marqueeimage1}>
              <img src={pepperstonelogo} alt="pepperstonelogo" />
            </div>
            <div className={styles.marqueeimage2}>
              <img src={skyrisslogo} alt="skyrisslogo" />
            </div>
            <div className={styles.marqueeimage3}>
              <img src={hfmlogo} alt="hfmlogo" />
            </div>
            <div className={styles.marqueeimage4}>
              <img src={damanmarketlogo} alt="damanmarketlogo" />
            </div>
            <div className={styles.marqueeimage5}>
              <img src={cmclogo} alt="cmclogo" />
            </div> */}
            <div className={styles.marqueeimage6}>
              <img src={fifomarket} alt="fifomarket" />
            </div>
            <div className={styles.marqueeimage7}>
              <img src={avatrade} alt="avatrade" />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}
