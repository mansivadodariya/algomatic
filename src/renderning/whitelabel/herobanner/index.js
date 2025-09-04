import React from "react";
import styles from "./whitelabelherobanner.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";
import { useAppContext } from "@/context/AppContext";

export default function Whitelabelherobanner() {
  const { utilitySettings } =
    useAppContext();
  return (
    <div className={styles.whitelabelherobannermain}>
      <div className={styles.whitelabelherobannercontentmain}>
        <div className={styles.whitelabelherowrapper}>
          <div className="container-xl">
            <div className={styles.whitelabelherobannercontent}>
              {/* <Commonlable Text="Start Your Own Forex Algo Business" /> */}
              <h1>
                Start Your Own Forex Algo Business – With Our{" "}
                <span>White Label</span> Solutions
              </h1>
              <p>
                Launch your own branded Forex Arbitrage & Algo Bot business. We
                provide the technology, you control the brand, clients, and
                profits.
              </p>
              <div className={styles.herobannerbuttons}>
                <Commonarrowbutton
                  Text="Request a White Label Demo"
                  Butttonvarient="light"
                  Target="_blank"
                  link={`https://wa.me/${utilitySettings?.phoneNo}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
