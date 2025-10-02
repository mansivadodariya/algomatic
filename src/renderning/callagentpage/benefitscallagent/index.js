import React from "react";
import styles from "./benefitscallagent.module.scss";

export default function Benefitscallagent() {
  return (
    <>
      <div className={styles.benefitscallagentmain}>
        <div className="container-xl">
          <div className={styles.contentholder}>
            <div className={styles.benefitscallagenttitle}>
              <h3>
                Benefits of Our <span>Call AI Agent</span>
              </h3>
            </div>
            <div className={styles.grid}>
              <div className={styles.griditems}>
                <span>24/7 Customer Support</span>
                <p>
                  Ensures round-the-clock availability, responding to client
                  inquiries anytime without delays or missed calls.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>Professional & Consistent Communication</span>
                <p>
                  Delivers a seamless brand experience with an AI-powered agent
                  that maintains a professional and uniform tone in every
                  interaction.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>Automated Call Handling</span>
                <p>
                  Manages incoming calls, answers FAQs, provides information,
                  and even schedules appointments without human intervention.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>Reduced Operational Costs</span>
                <p>
                  Lowers the need for a large customer support team by
                  automating routine queries, saving both time and resources.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>Improved Customer Satisfaction</span>
                <p>
                  Enhances response time and accuracy, ensuring clients receive
                  immediate assistance with a high level of professionalism.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>Seamless Integration</span>
                <p>
                  Easily integrates with your existing CRM, call center, or
                  business communication system for smooth operations and
                  efficient client handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
