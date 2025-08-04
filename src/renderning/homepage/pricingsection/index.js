import React from "react";
import styles from "./pricingsection.module.scss";
import Commonlable from "@/components/commonlable";
import Coreicon from "../../../../public/assets/icons/coreicon";
import Checkicon from "../../../../public/assets/icons/checkicon";
import Commonarrowbutton from "@/components/commonarrowbutton";
import Plusplanicon from "../../../../public/assets/icons/plusplanicon";
import Trophyicon from "../../../../public/assets/icons/trophyicon";

export default function Pricingsection() {
  return (
    <>
      <div className={styles.pricingsectionmain}>
        <div className="container-xl">
          <div className={styles.pricingsectiontitle}>
            <Commonlable Text="Our Pricing Plans" />
            <h1>
              Choose the <span>Best Plan</span> for Your Needs
            </h1>
            <p>
              Find the right plan, with flexible choices and transparent pricing
              details.
            </p>
          </div>
          <div className={styles.pricingcardgrdmain}>
            <div
              className={`${styles.pricingcard} ${styles.pricingcardactive}`}
            >
              <div className={styles.pricingcardcontent}>
                <div className={styles.pricingcardtitle}>
                  <div>
                    <h2>Core Plan</h2>
                    <p>For Beginners</p>
                  </div>
                  <div className={styles.pricingcardtitlebadge}>
                    <Coreicon />
                  </div>
                </div>
                <div className={styles.pricecardbody}>
                  <h3>$199</h3>
                  <div className={styles.priceingdetailsmain}>
                    <div className={styles.priceingdetailsflx}>
                      <Checkicon />
                      <p>Perfect for Learners</p>
                    </div>
                    <div className={styles.priceingdetailsflx}>
                      <Checkicon />
                      <p>Manual Trading Setup</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pricingbutton}>
                <Commonarrowbutton
                  Text="contact us"
                  Butttonvarient="lightoutlined"
                  buttonclassName="widthfull"
                />
              </div>
            </div>
            <div className={styles.pricingcard}>
              <div className={styles.pricingcardcontent}>
                <div className={styles.pricingcardtitle}>
                  <div>
                    <h2>Plus Plan</h2>
                    <p>For Advanced Traders</p>
                  </div>
                  <div className={styles.pricingcardtitlebadge}>
                    <Plusplanicon />
                  </div>
                </div>
                <div className={styles.pricecardbody}>
                  <h3>$299</h3>
                  <div className={styles.priceingdetailsmain}>
                    <div className={styles.priceingdetailsflx}>
                      <Checkicon />
                      <p>
                        Advanced tools and EA-driven strategies for serious
                        traders
                      </p>
                    </div>
                    <div className={styles.priceingdetailsflx}>
                      <Checkicon />
                      <p>Semi Automatic Trading Setup</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pricingbutton}>
                <Commonarrowbutton
                  Text="contact us"
                  Butttonvarient="darkoutlined"
                  buttonclassName="widthfull"
                />
              </div>
            </div>
            <div
              className={`${styles.pricingcard} ${styles.pricingcardactive}`}
            >
              <div className={styles.pricingcardcontent}>
                <div className={styles.pricingcardtitle}>
                  <div>
                    <h2>Platinum Plan</h2>
                    <p>For Pro Traders</p>
                  </div>
                  <div className={styles.pricingcardtitlebadge}>
                    <Trophyicon />
                  </div>
                </div>
                <div className={styles.pricecardbody}>
                  <h3>$499</h3>
                  <div className={styles.priceingdetailsmain}>
                    <div className={styles.priceingdetailsflx}>
                      <Checkicon />
                      <p>High performance trading EA for big fund managers</p>
                    </div>
                    <div className={styles.priceingdetailsflx}>
                      <Checkicon />
                      <p>Fully Automatic Trading Setup</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pricingbutton}>
                <Commonarrowbutton
                  Text="contact us"
                  Butttonvarient="lightoutlined"
                  buttonclassName="widthfull"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
