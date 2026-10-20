import React from "react";
import styles from "./keyFeaturesHighlight.module.scss";
import {
  MessageSquare,
  HelpCircle,
  Sliders,
  Settings,
  Cpu,
  Sparkles,
} from "lucide-react";

export default function KeyFeaturesHighlight() {
  const features = [
    {
      number: "01",
      title: "Natural-language interaction",
      description: "Explain your idea without needing to write code.",
      icon: MessageSquare,
      layoutClass: styles.col3,
    },
    {
      number: "02",
      title: "Smart follow-up questions",
      description: "Fill gaps in your strategy through a guided conversation.",
      icon: HelpCircle,
      layoutClass: styles.col3,
    },
    {
      number: "03",
      title: "Custom strategy rules",
      description: "Define entries, exits, indicators, trading sessions, and risk settings.",
      icon: Sliders,
      layoutClass: styles.col3,
    },
    {
      number: "04",
      title: "Editable configurations",
      description: "Review and adjust the strategy before generating the bot.",
      icon: Settings,
      layoutClass: styles.col2,
    },
    {
      number: "05",
      title: "Bot generation workflow",
      description: "Turn the confirmed configuration into a bot using your supported platform and generation process.",
      icon: Cpu,
      layoutClass: styles.col2,
    },
  ];

  return (
    <section className={styles.keyFeaturesSection}>
      <div className="container-xl">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>
            <Sparkles size={14} />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2>
            Intelligent Features That <span>Power Your Trading Bot</span>
          </h2>
        </div>

        <div className={styles.cardsGrid}>
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`${styles.uniqueCard} ${feature.layoutClass}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <Icon size={24} />
                  </div>
                  <span className={styles.stepNumber}>{feature.number}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
