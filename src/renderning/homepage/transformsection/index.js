import React from "react";
import styles from "./transformsection.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";

export default function Transformsection() {
  return (
    <>
      <div className={styles.transformsectionmain}>
        <div className="container-xl">
          <div className={styles.transformboxmain}>
            <div className={styles.transformbox}>
              <div className={styles.transformboxtitle}>
                <Commonlable Text="Get Started" />
                <h2>
                  Ready to <span>Transform</span> Your Trading Journey?
                </h2>
                <p>
                  Join the revolution of forex trading with AlgoMatic. Let smart
                  automation help you trade smarter, faster, and more
                  efficiently.
                </p>
              </div>
              <div className={styles.transformboxinputmain}>
                <label htmlFor="email">
                  <input
                    type="email"
                    placeholder="Your Email Addres"
                    id="email"
                  />
                  <div className={styles.transformboxinputbutton}>
                    <Commonarrowbutton
                      Text="Subscribe"
                      icon="none"
                      buttonclassName="widthfull"
                      Butttonvarient="darkoutlined"
                      link="none"
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
