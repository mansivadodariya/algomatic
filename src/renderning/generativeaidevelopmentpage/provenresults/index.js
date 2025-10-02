import React from "react";
import styles from "./provenresults.module.scss";
import Commonlable from "@/components/commonlable";

export default function Provenresults() {
  return (
    <div className={styles.provenresultsmain}>
      <div className="container-xl">
        <div className={styles.contentholder}>
          <div className={styles.provenresultstitle}>
            <Commonlable Text="Proven Results" />
            <h1>
              Success Stories from <span>Real Implementations</span>
            </h1>
            <p>
              See the measurable impact our solutions have delivered for
              businesses like yours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
