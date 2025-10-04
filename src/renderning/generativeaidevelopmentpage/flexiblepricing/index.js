import React from "react";
import styles from "./flexiblepricing.module.scss";
import Commonlable from "@/components/commonlable";
import { Check, Crown, Star, Zap } from "lucide-react";
import Commonarrowbutton from "@/components/commonarrowbutton";

export default function Flexiblepricing() {
  return (
    <>
      <div className={styles.getstartedmain}>
        <div className="container-xl">
          <div className={styles.contentholder}>
            <div className={styles.getstartedtitle}>
              <Commonlable Text="Flexible Pricing" />
              <h4>
                Choose Your <span>Perfect Plan</span>
              </h4>
              <p>
                From starter projects to enterprise solutions, we have the right
                package for your business needs and budget.
              </p>
            </div>
            <div className={styles.plansgrid}>
              <div className={styles.plangriditems}>
                <div className={styles.plantypemain}>
                  <div className={styles.icon}>
                    <Zap />
                  </div>
                  <span>Starter</span>
                  <p>Perfect for small projects and getting started</p>
                </div>
                <div className={styles.plandetailsmain}>
                  <div className={styles.planprice}>
                    <p>
                      <del>$3,000</del>
                    </p>
                    <h2>$2,500</h2>
                    <p>Starting from</p>
                  </div>
                  <div className={styles.plandetailslistmain}>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>Basic implementation</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>Standard support</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>Documentation included</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>30-day warranty</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>Email support</p>
                    </div>
                  </div>
                  <div className={styles.planbutton}>
                    <Commonarrowbutton
                      Text="Get Started"
                      Butttonvarient="widthfull lightoutlined"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.plangriditems} ${styles.plangriditemsactive}`}
              >
                <div className={styles.populartag}>
                  <span>⭐ Most Popular</span>
                </div>
                <div className={styles.plantypemain}>
                  <div className={styles.icon}>
                    <Star />
                  </div>
                  <span>Professional</span>
                  <p>Ideal for growing businesses with advanced needs</p>
                </div>
                <div className={styles.plandetailsmain}>
                  <div className={styles.planprice}>
                    <p>
                      <del>$4,500</del>
                    </p>
                    <h2>$4,000</h2>
                    <p>Custom pricing available</p>
                  </div>
                  <div className={styles.plandetailslistmain}>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>Basic implementation</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>Standard support</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>Documentation included</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>30-day warranty</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>Email support</p>
                    </div>
                  </div>
                  <div className={styles.planbutton}>
                    <Commonarrowbutton
                      Text="Choose Professional"
                      Butttonvarient="widthfull darkoutlined"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.plangriditems}>
                <div className={styles.plantypemain}>
                  <div className={styles.icon}>
                    <Crown />
                  </div>
                  <span>Enterprise</span>
                  <p>Complete solution for large-scale implementations</p>
                </div>
                <div className={styles.plandetailsmain}>
                  <div className={styles.planprice}>
                    <p>
                      <del>$7,000</del>
                    </p>
                    <h2>$6,000</h2>
                    <p>Custom pricing available</p>
                  </div>
                  <div className={styles.plandetailslistmain}>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>Full-scale implementation</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>Dedicated support team</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>Custom development</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>1-year warranty</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>24/7 support</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>Quarterly reviews</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>Advanced analytics</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>Training & onboarding</p>
                    </div>
                    <div className={styles.plandetailslist}>
                      <Check />
                      <p>SLA guarantee</p>
                    </div>
                  </div>
                  <div className={styles.planbutton}>
                    <Commonarrowbutton
                      Text="Contact Sales"
                      Butttonvarient="widthfull lightoutlined"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.planincmain}>
              <h6>All Plans Include</h6>
              <div className={styles.grid}>
                <div className={styles.griditems}>
                  <div className={styles.icon}>✓</div>
                  <h4>Free Consultation</h4>
                  <p>Initial strategy session at no cost</p>
                </div>
                <div className={styles.griditems}>
                  <div className={styles.icon}>✓</div>
                  <h4>Quality Guarantee</h4>
                  <p>100% satisfaction or money back</p>
                </div>
                <div className={styles.griditems}>
                  <div className={styles.icon}>✓</div>
                  <h4>Ongoing Support</h4>
                  <p>Continuous assistance after delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
