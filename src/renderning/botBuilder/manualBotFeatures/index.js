import React from "react";
import styles from "./manualBotFeatures.module.scss";
import {
  SlidersHorizontal,
  Layers,
  Workflow,
  CheckCircle2,
  Save,
} from "lucide-react";

export default function ManualBotFeatures() {
  const features = [
    {
      title: "Direct control",
      description:
        "Configure strategy rules without a conversational AI workflow.",
      icon: SlidersHorizontal,
    },
    {
      title: "Structured inputs",
      description: "Keep important parameters organized in clear sections.",
      icon: Layers,
    },
    {
      title: "Flexible strategy design",
      description:
        "Support different bot types, instruments, and trading approaches.",
      icon: Workflow,
    },
    {
      title: "Configuration validation",
      description:
        "Catch missing fields and conflicting settings before generation.",
      icon: CheckCircle2,
    },
    {
      title: "Save and edit",
      description:
        "Revisit saved configurations and update them when needed.",
      icon: Save,
    },
  ];

  return (
    <section className={styles.manualFeaturesSection}>
      <div className="container-xl">
        <div className={styles.splitLayout}>
          {/* Left Column: Title & Badge */}
          <div className={styles.leftCol}>
            <div className={styles.stickyContent}>
              <div className={styles.sectionBadge}>
                <SlidersHorizontal size={14} />
                <span>Manual Bot</span>
              </div>
              <h2>
                Why use the <span>Custom Bot Builder?</span>
              </h2>
            </div>
          </div>

          {/* Right Column: 5 Clean Cards with ONLY given content */}
          <div className={styles.rightCol}>
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={styles.featureCard}>
                  <div className={styles.iconBox}>
                    <Icon size={30} />
                  </div>
                  <div className={styles.cardBody}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
