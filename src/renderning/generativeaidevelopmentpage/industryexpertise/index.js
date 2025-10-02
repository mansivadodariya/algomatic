import React from "react";
import styles from "./industryexpertise.module.scss";
import Commonlable from "@/components/commonlable";

export default function Industryexpertise() {
  return (
    <>
      <div className={styles.industryexpertisemain}>
        <div className="container-xl">
          <div className={styles.contentholder}>
            <div className={styles.industryexpertisetitle}>
              <Commonlable Text="Industry Expertise" />
              <h1>
                Proven Results <span>Across Industries</span>
              </h1>
              <p>
                Specialized solutions for diverse sectors with measurable
                impact.
              </p>
            </div>
            <div className={styles.grid}>
              <div className={styles.griditems}>
                <span>Marketing & Advertising</span>
                <p>
                  Generate personalized campaigns, ad copy, and content at scale
                  across all channels.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>E-commerce</span>
                <p>
                  Create product descriptions, personalized recommendations, and
                  dynamic pricing strategies.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>Education</span>
                <p>
                  Develop personalized learning content, automated grading, and
                  intelligent tutoring systems.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>Healthcare</span>
                <p>
                  Generate medical documentation, patient communications, and
                  research summaries.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>Legal Services</span>
                <p>
                  Automate contract analysis, legal research, and document
                  generation.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>Financial Services</span>
                <p>
                  Create personalized financial advice, risk assessments, and
                  compliance reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
