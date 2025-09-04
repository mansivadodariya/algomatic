import React from "react";
import styles from "./howitworks.module.scss";
import Commonlable from "@/components/commonlable";
import ChoosePlan from "../../../../public/assets/images/ChoosePlan.png"
import LaunchSell from "../../../../public/assets/images/LaunchSell.png"
import GrowProfits from "../../../../public/assets/images/GrowProfits.png"
import Brandintegration from "../../../../public/assets/images/Brandintegration.png"
import Image from "next/image";

export default function Howitworks() {
  return (
    <div className={styles.howitworksmain}>
      <div className="container-xl">
        <div className={styles.howitworkstitle}>
          <Commonlable Text="How it works" />
          <h3>
            How it <span>works</span>
          </h3>
          {/* <p></p> */}
        </div>
        <div className={styles.howitworksgrid}>
          <div className={styles.howitworksgriditem}>
            <div className={styles.howitworkscardnumbermain}>
              <div className={styles.howitworkscardnumber}>
                <span>01</span>
              </div>
            </div>
            <div className={styles.howitworksimage}>
              <Image src={ChoosePlan} alt="ChoosePlan" />
            </div>
            <div className={styles.howitworkscontent}>
              <h6>Choose a Plan</h6>
              <p>Select the white label package that fits your business.</p>
            </div>
          </div>
          <div className={styles.howitworksgriditem}>
            <div className={styles.howitworkscardnumbermain}>
              <div className={styles.howitworkscardnumber}>
                <span>02</span>
              </div>
            </div>
            <div className={styles.howitworksimage}>
            <Image src={LaunchSell} alt="LaunchSell" />
            </div>
            <div className={styles.howitworkscontent}>
              <h6>Brand Integration</h6>
              <p>We customize everything with your brand.</p>
            </div>
          </div>
          <div className={styles.howitworksgriditem}>
            <div className={styles.howitworkscardnumbermain}>
              <div className={styles.howitworkscardnumber}>
                <span>03</span>
              </div>
            </div>
            <div className={styles.howitworksimage}>
            <Image src={GrowProfits} alt="GrowProfits" />
            </div>
            <div className={styles.howitworkscontent}>
              <h6>Launch & Sell</h6>
              <p>Start promoting and selling under your name.</p>
            </div>
          </div>
          <div className={styles.howitworksgriditem}>
            <div className={styles.howitworkscardnumbermain}>
              <div className={styles.howitworkscardnumber}>
                <span>04</span>
              </div>
            </div>
            <div className={styles.howitworksimage}>
              <Image src={Brandintegration} alt="Brandintegration" />
            </div>
            <div className={styles.howitworkscontent}>
              <h6>Grow Profits</h6>
              <p>You decide the pricing, you keep the earnings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
