import React from "react";
import styles from "./readytotransform.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";

export default function Readytotransform() {
  return (
    <>
      <div className={styles.readytotransformmain}>
        <div className="container-xl">
          <div className={styles.contentholder}>
            <div className={styles.readytotransformtitle}>
              <Commonlable Text="Ready to Transform?" />
              <h4>
                Start Your <span>AI Transformation</span> Today
              </h4>
              <p>
                Join 500+ companies who've already transformed their operations
                with our AI solutions. Get your free consultation and custom
                roadmap.
              </p>
            </div>
            <div className={styles.btnflx}>
              <Commonarrowbutton
                Text="Get Free AI Strategy Consultation"
                link="https://calendly.com/dipak-rejoicehub"
                Target="blank"
                Butttonvarient="lightoutlined"
              />
              <Commonarrowbutton
                Text="Call: +91 98251 22840"
                link="tel:+919825122840"
                Target="blank"
                Butttonvarient="darkoutlined"
              />
            </div>
            <div className={styles.trustgrid}>
              <div className={styles.trustgriditem}>
                <h6>500+</h6>
                <p>AI Projects Delivered</p>
              </div>
              <div className={styles.trustgriditem}>
                <h6>40%</h6>
                <p>Average Cost Reduction</p>
              </div>
              <div className={styles.trustgriditem}>
                <h6>99%</h6>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
