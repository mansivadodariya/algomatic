import React from "react";
import styles from "./provenresults.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";

export default function Provenresults() {
  const resultsData = [
    {
      id: 1,
      metric: "200%",
      title: "Increase in Mobile Sales",
      category: "Retail",
      subtitle: "E-commerce Mobile App Platform",
      description:
        "Developed cross-platform shopping app with personalized recommendations, payment integration, and inventory management, resulting in doubled mobile conversion rates.",
    },
    {
      id: 2,
      metric: "85%",
      title: "Patient Engagement Increase",
      category: "Healthcare",
      subtitle: "Healthcare Patient Portal App",
      description:
        "Built HIPAA-compliant patient portal with appointment scheduling, medical records access, and telemedicine capabilities, improving patient satisfaction significantly.",
    },
    {
      id: 3,
      metric: "90%",
      title: "Faster Transaction Processing",
      category: "Finance",
      subtitle: "FinTech Banking Application",
      description:
        "Created secure mobile banking app with biometric authentication, real-time transactions, and financial analytics, reducing transaction processing time by 90%.",
    },
  ];

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
            {resultsData.map((result) => (
              <div key={result.id} className={styles.griditems}>
                <h6>{result.metric}</h6>
                <h4>{result.title}</h4>
                <span>{result.category}</span>
                <h5>{result.subtitle}</h5>
                <p>{result.description}</p>
              </div>
            ))}
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
