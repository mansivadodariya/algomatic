import React from "react";
import styles from "./challenges.module.scss";
import Commonlable from "@/components/commonlable";
import Warningicon from "../../../../public/assets/icons/warningicon";

export default function Challenges() {
  const challengesData = [
    {
      title: "Poor Mobile User Experience",
      description:
        "Businesses struggle with mobile apps that are slow, buggy, or provide inconsistent user experiences across different devices.",
    },
    {
      title: "Cross-Platform Development Complexity",
      description:
        "Managing separate codebases for iOS and Android increases development time, costs, and maintenance overhead.",
    },
    {
      title: "Outdated Technology Stack",
      description:
        "Legacy mobile applications built with outdated frameworks struggle with performance and modern device compatibility.",
    },
    {
      title: "Scalability and Performance Issues",
      description:
        "Apps that cannot handle growing user bases or integrate with business systems limit growth potential.",
    },
  ];

  const outcomesData = [
    {
      title: "Development Speed Increase",
      tag: "50%",
      description:
        "Cross-platform development reduces time-to-market by building once for multiple platforms.",
    },
    {
      title: "User Engagement Boost",
      tag: "75%",
      description:
        "Modern, intuitive apps increase user retention and daily active users.",
    },
    {
      title: "Maintenance Cost Reduction",
      tag: "60%",
      description:
        "Single codebase for multiple platforms significantly reduces ongoing maintenance costs.",
    },
    {
      title: "Performance Optimization",
      tag: "3x",
      description:
        "Native-like performance with faster load times and smooth user interactions.",
    },
  ];

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
                  {challengesData.map((challenge, index) => (
                    <div key={index} className={styles.gridcolumnitems}>
                      <div className={styles.gridcolumnitemstitle}>
                        <h5>{challenge.title}</h5>
                      </div>
                      <p>{challenge.description}</p>
                    </div>
                  ))}
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
                  {outcomesData.map((outcome, index) => (
                    <div key={index} className={styles.gridcolumnitems}>
                      <div className={styles.gridcolumnitemstitle}>
                        <h5>{outcome.title}</h5>
                        <div className={styles.tag}>
                          <span>{outcome.tag}</span>
                        </div>
                      </div>
                      <p>{outcome.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
