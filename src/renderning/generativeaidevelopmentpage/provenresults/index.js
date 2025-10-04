import React from "react";
import styles from "./provenresults.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";

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
          <div className={styles.grid}>
            <div className={styles.griditems}>
              <h6>95%</h6>
              <h4>Reduction in Content Creation Time</h4>
              <span>E-commerce</span>
              <h5>E-commerce Product Content</h5>
              <p>
                Implemented AI system that generates product descriptions, SEO
                content, and marketing copy, reducing content creation time from
                hours to seconds.
              </p>
            </div>
            <div className={styles.griditems}>
              <h6>70%</h6>
              <h4>Faster Clinical Documentation</h4>
              <span>Healthcare</span>
              <h5>Healthcare Documentation</h5>
              <p>
                Deployed AI-powered documentation system that generates patient
                summaries, treatment plans, and medical reports from clinical
                notes.
              </p>
            </div>
            <div className={styles.griditems}>
              <h6>$800K</h6>
              <h4>Annual Cost Savings</h4>
              <span>Legal</span>
              <h5>Legal Document Analysis</h5>
              <p>
                Automated contract analysis and legal research, reducing lawyer
                hours spent on document review by 60% while improving accuracy.
              </p>
            </div>
          </div>
          <div className={styles.btnsflx}>
            <Commonarrowbutton
              Text="Book AI Consultation"
              link="https://calendly.com/dipak-rejoicehub"
              Target="blank"
              Butttonvarient="lightoutlined"
            />
            <Commonarrowbutton
              Text="View All Case Studies"
              Butttonvarient="darkoutlined"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
