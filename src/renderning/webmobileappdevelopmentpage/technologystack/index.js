import React from "react";
import styles from "./technologystack.module.scss";
import Commonlable from "@/components/commonlable";
import Image from "next/image";

const technologies = [
  { firsttext: "F", name: "Flutter", category: "Framework" },
  { firsttext: "R", name: "React Native", category: "Framework" },
  { firsttext: "S", name: "Swift", category: "iOS" },
  { firsttext: "K", name: "Kotlin", category: "Android" },
  { firsttext: "F", name: "Firebase", category: "Backend" },
  { firsttext: "A", name: "AWS Amplify", category: "Backend" },
  { firsttext: "N", name: "Node.js", category: "Backend" },
  { firsttext: "P", name: "PostgreSQL", category: "Database" },
  { firsttext: "M", name: "MongoDB", category: "Database" },
  { firsttext: "D", name: "Docker", category: "DevOps" },
  { firsttext: "J", name: "Jenkins", category: "DevOps" },
  { firsttext: "F", name: "Fastlane", category: "DevOps" },
];

export default function Technologystack() {
  return (
    <>
      <div className={styles.technologystackmain}>
        <div className="container-xl">
          <div className={styles.contentholder}>
            <div className={styles.technologystacktitle}>
              <Commonlable Text="Technology Stack" />
              <h2>
                Built on Industry-Leading <span>Technologies</span>
              </h2>
              <p>
                We leverage the best tools and frameworks to ensure scalable,
                secure, and efficient solutions.
              </p>
            </div>
            <div className={styles.grid}>
              {technologies.map((tech, index) => (
                <div key={index} className={styles.griditems}>
                  <div className={styles.icon}>
                    <span>{tech.firsttext}</span>
                  </div>
                  <p>{tech.name}</p>
                  <span>{tech.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
