import React from "react";
import styles from "./challenges.module.scss";
import Commonlable from "@/components/commonlable";
import Warningicon from "../../../../public/assets/icons/warningicon";

export default function Challenges() {
  return (
    <>
      <div className={styles.challengesmain}>
        <div className="container-xl">
          <div className={styles.contentholder}>
            <div className={styles.challengestitle}>
              <Commonlable Text="Transform Challenges into Results" />
              <h3>
                From Pain Points to <span>Powerful Outcomes</span>
              </h3>
              <p>
                See how our solutions turn your biggest operational challenges
                into competitive advantages.
              </p>
            </div>
            <div className={styles.grid}>
              <div className={styles.griditems}>
                <div className={styles.griditemslefttitle}>
                  <div className={styles.iconred}>
                    <Warningicon />
                  </div>
                  <h4>Current Challenges</h4>
                </div>
                <div className={styles.gridcolumn}>
                  <div className={styles.gridcolumnitems}>
                    <div className={styles.gridcolumnitemstitle}>
                      <h5>Content Creation Bottlenecks</h5>
                    </div>
                    <p>
                      Teams spend countless hours creating content,
                      documentation, and communications that could be generated
                      instantly.
                    </p>
                  </div>
                  <div className={styles.gridcolumnitems}>
                    <div className={styles.gridcolumnitemstitle}>
                      <h5>Limited Personalization at Scale</h5>
                    </div>
                    <p>
                      Difficulty creating personalized experiences for thousands
                      of customers without massive resource investment.
                    </p>
                  </div>
                  <div className={styles.gridcolumnitems}>
                    <div className={styles.gridcolumnitemstitle}>
                      <h5>Complex Data Analysis Requirements</h5>
                    </div>
                    <p>
                      Need for advanced insights from unstructured data that
                      traditional analytics tools cannot handle.
                    </p>
                  </div>
                  <div className={styles.gridcolumnitems}>
                    <div className={styles.gridcolumnitemstitle}>
                      <h5>Innovation and Competitive Pressure</h5>
                    </div>
                    <p>
                      Falling behind competitors who are leveraging AI to create
                      superior products and experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.griditems}>
                <div className={styles.griditemslefttitle}>
                  <div className={styles.iconyellow}>
                    <Warningicon />
                  </div>
                  <h4>Measurable Outcomes</h4>
                </div>
                <div className={styles.gridcolumn}>
                  <div className={styles.gridcolumnitems}>
                    <div className={styles.gridcolumnitemstitle}>
                      <h5>Content Generation Speed</h5>
                      <div className={styles.tag}>
                        <span>100x</span>
                      </div>
                    </div>
                    <p>
                      Generate high-quality content, documentation, and
                      communications 100x faster than manual methods.
                    </p>
                  </div>
                  <div className={styles.gridcolumnitems}>
                    <div className={styles.gridcolumnitemstitle}>
                      <h5>Personalization at Scale</h5>
                      <div className={styles.tag}>
                        <span>Unlimited</span>
                      </div>
                    </div>
                    <p>
                      Create personalized experiences for millions of users
                      automatically.
                    </p>
                  </div>
                  <div className={styles.gridcolumnitems}>
                    <div className={styles.gridcolumnitemstitle}>
                      <h5>Operational Efficiency Gain</h5>
                      <div className={styles.tag}>
                        <span>80%</span>
                      </div>
                    </div>
                    <p>
                      Reduce time spent on creative and analytical tasks by up
                      to 80%.
                    </p>
                  </div>
                  <div className={styles.gridcolumnitems}>
                    <div className={styles.gridcolumnitemstitle}>
                      <h5>Innovation Acceleration</h5>
                      <div className={styles.tag}>
                        <span>5x</span>
                      </div>
                    </div>
                    <p>
                      Rapidly prototype and deploy AI-powered features and products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
