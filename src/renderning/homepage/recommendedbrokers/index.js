import React from "react";
import styles from "./recommendedbrokers.module.scss";
import Commonlable from "@/components/commonlable";
import Marquee from "react-fast-marquee";
const pepperstonelogo = "/assets/logo/pepperstonelogo.jpg";
const skyrisslogo = "/assets/logo/skyrisslogo.jpg";
const hfmlogo = "/assets/logo/hfmlogo.webp";
const damanmarketlogo = "/assets/logo/damanmarketlogo.png";
const cmclogo = "/assets/logo/cmclogo.png";

export default function Recommendedbrokers() {
  return (
    <>
      <div className={styles.recommendedbrokersmain}>
        <div className="container-sm">
          <div className={styles.recommendedbrokerstitle}>
            <Commonlable Text="Try It Yourself" />
            <h4>
              <span>Recommended</span> Brokers
            </h4>
          </div>
          <div className={styles.marqueecontainer}>
            <Marquee autoFill speed={100}>
              <div className={styles.marqueeimage1}>
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
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}
