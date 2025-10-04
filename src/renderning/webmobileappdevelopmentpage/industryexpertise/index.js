import React from "react";
import styles from "./industryexpertise.module.scss";
import Commonlable from "@/components/commonlable";

export default function Industryexpertise() {
  const industryData = [
    {
      title: "E-commerce & Retail",
      description:
        "Build shopping apps with payment integration, inventory management, and customer engagement features.",
    },
    {
      title: "Healthcare & Fitness",
      description:
        "Develop patient portals, telemedicine apps, and health tracking applications with HIPAA compliance.",
    },
    {
      title: "Finance & FinTech",
      description:
        "Create secure banking apps, payment systems, and financial management tools with encryption.",
    },
    {
      title: "Education & E-learning",
      description:
        "Build interactive learning platforms, course management, and student engagement applications.",
    },
    {
      title: "Transportation & Logistics",
      description:
        "Develop fleet management, delivery tracking, and route optimization mobile solutions.",
    },
    {
      title: "Entertainment & Media",
      description:
        "Create streaming apps, social platforms, and content management solutions.",
    },
  ];

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
              {industryData.map((industry, index) => (
                <div key={index} className={styles.griditems}>
                  <span>{industry.title}</span>
                  <p>{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
