import React from "react";
import styles from "./corecapabilities.module.scss";
import Commonlable from "@/components/commonlable";

export default function Corecapabilities() {
  return (
    <>
      <div className={styles.corecapabilitiesmain}>
        <div className="container-xl">
          <div className={styles.contentholder}>
            <div className={styles.corecapabilitiestitle}>
              <Commonlable Text="Core Capabilities" />
              <h6>
                Comprehensive Solutions Tailored to <span>Your Needs</span>
              </h6>
              <p>
                Deep expertise across all aspects of AI implementation and
                optimization.
              </p>
            </div>
            <div className={styles.grid}>
              <div className={styles.griditems}>
                <span>Cross-Platform Development</span>
                <p>
                  Build once, deploy everywhere with Flutter and React Native
                  for maximum efficiency.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>Native iOS & Android Development</span>
                <p>
                  Platform-specific development for maximum performance and
                  native feature integration.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>Backend Integration & APIs</span>
                <p>
                  Seamless integration with existing systems, databases, and
                  third-party services.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>UI/UX Design & Development</span>
                <p>
                  User-centered design with intuitive interfaces and optimized
                  user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
