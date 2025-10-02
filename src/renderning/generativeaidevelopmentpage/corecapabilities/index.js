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
                <span>Custom Language Models</span>
                <p>
                  Fine-tuned AI models trained on your specific data, industry
                  knowledge, and business requirements.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>Content Generation Systems</span>
                <p>
                  Automated content creation for marketing, documentation,
                  communications, and creative assets.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>Conversational AI Platforms</span>
                <p>
                  Advanced chatbots and virtual assistants powered by latest
                  generative AI models.
                </p>
              </div>
              <div className={styles.griditems}>
                <span>AI-Powered Analytics</span>
                <p>
                  Extract insights from unstructured data using generative AI
                  for reports, summaries, and recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
