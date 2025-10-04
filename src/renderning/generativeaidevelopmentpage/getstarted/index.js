import React from "react";
import styles from "./getstarted.module.scss";
import Commonarrowbutton from "@/components/commonarrowbutton";
import Commonlable from "@/components/commonlable";

export default function Getstarted() {
  return (
    <>
      <div className={styles.getstartedmain}>
        <div className="container-xl">
          <div className={styles.contentholder}>
            <div className={styles.getstartedtitle}>
              <Commonlable Text="Ready to Get Started?" />
              <h4>
                Transform Your Business with{" "}
                <span>Generative AI Solutions</span>
              </h4>
              <div className={styles.getstartedtitlecontent}>
                <p>Content and code generation that ships</p>
                <span>Projects start at 2,500 USD or 500 USD per month</span>
              </div>
            </div>
            <div className={styles.btnflx}>
              <Commonarrowbutton
                Text="Get a custom quote"
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
                <h6>120+</h6>
                <p>Projects Delivered</p>
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
