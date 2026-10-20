import React from "react";
import styles from "./transformsection.module.scss";
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
                <h2>
                  Your Next Trading Bot <span>Starts Here.</span>
                </h2>
                <p>
                  Discover a strategy, build your own bot, or collaborate with experts to bring your trading idea to life.
                </p>
              </div>
              <div className={styles.transformboxinputmain}>
                <div className={styles.transformboxinputbutton}>
                  <Commonarrowbutton
                    Text="Explore Marketplace"
                    icon="none"
                    buttonclassName="widthfull"
                    Butttonvarient="darkoutlined"
                    link="/marketplace"
                  />
                </div>
                <div className={styles.transformboxinputbutton}>
                  <Commonarrowbutton
                    Text="Create Your Bot"
                    icon="none"
                    buttonclassName="widthfull"
                    Butttonvarient="darkoutlined"
                    link="#AIBotBuilder"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
