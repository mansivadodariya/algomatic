import React from "react";
import styles from "./transformsection.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";
import { useAppContext } from "@/context/AppContext";

export default function Transformsection() {
  const { utilitySettings } = useAppContext();

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
                <p>Join the revolution of forex trading with AlgoMatic. Let smart automation help you trade smarter, faster, and more efficiently.</p>
              </div>
              <div className={styles.transformboxinputmain}>
                <div className={styles.transformboxinputbutton}>
                  <Commonarrowbutton Text="Explore Algomatic" icon="none" buttonclassName="widthfull" Butttonvarient="darkoutlined" link="/marketplace" />
                </div>
                <div className={styles.transformboxinputbutton}>
                  <Commonarrowbutton Text="Contact Us" icon="none" buttonclassName="widthfull" Butttonvarient="darkoutlined" link={`https://wa.me/${utilitySettings?.phoneNo}`} Target="blank" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
