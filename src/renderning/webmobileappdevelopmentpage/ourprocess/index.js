import React from "react";
import styles from "./ourprocess.module.scss";
import Commonlable from "@/components/commonlable";
import { CheckCircle } from "lucide-react";

export default function Ourprocess() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "Requirements analysis, user research, technical planning, and project roadmap development.",
      duration: "1-2 weeks",
      deliverables: [
        "Requirements document",
        "User personas",
        "Technical architecture",
        "Project timeline",
      ],
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "UI/UX design, wireframing, interactive prototypes, and user experience optimization.",
      duration: "2-3 weeks",
      deliverables: [
        "Design mockups",
        "Interactive prototypes",
        "Design system",
        "User flow diagrams",
      ],
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "App development, backend integration, quality assurance, and performance optimization.",
      duration: "6-12 weeks",
      deliverables: [
        "Mobile applications",
        "Backend APIs",
        "Test reports",
        "Performance benchmarks",
      ],
    },
    {
      number: "04",
      title: "Deployment & Support",
      description:
        "App store submission, deployment, user training, and ongoing maintenance support.",
      duration: "Ongoing",
      deliverables: [
        "App store listings",
        "Deployment guide",
        "User documentation",
        "Support plan",
      ],
    },
  ];

  return (
    <>
      <div className={styles.ourprocessmain}>
        <div className="container-xl">
          <div className={styles.ourprocesstitle}>
            <Commonlable Text="Our Process" />
            <h2>
              Proven <span>4-Step</span> Implementation Method
            </h2>
            <p>
              From discovery to deployment, we ensure successful AI
              transformation at every stage.
            </p>
          </div>
          <div className={styles.ourprocessgrid}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.ourprocessgriditem}>
                <div className={styles.ourprocesscardnumbermain}>
                  <div className={styles.ourprocesscardnumber}>
                    <span>{step.number}</span>
                  </div>
                </div>
                <div className={styles.ourprocesscontent}>
                  <h3>{step.title}</h3>
                  <p className={styles.paragraph}>{step.description}</p>
                  <div className={styles.durationmain}>
                    <p className={styles.durationtitle}>
                      Duration: {step.duration}
                    </p>
                    <p className={styles.deliverablestitle}>Deliverables:</p>
                    <div className={styles.listmain}>
                      {step.deliverables.map(
                        (deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className={styles.list}>
                            <CheckCircle />
                            <span>{deliverable}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
