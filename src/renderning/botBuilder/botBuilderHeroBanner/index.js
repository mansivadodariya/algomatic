import React from "react";
import styles from "./botBuilderHeroBanner.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";
import { Check } from "lucide-react";

export default function BotBuilderHeroBanner() {
  return (
    <section className={styles.heroBanner}>
      <div className="container-xl">
        <div className={styles.bannerContent}>
          {/* Label */}
          <div className={styles.labelWrapper}>
            <Commonlable Text="Algomatic Bot Builder Studio" />
          </div>

          {/* Heading */}
          <h1>
            Build Powerful Trading Bots <span>With AI or Custom Rules</span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Whether you want to describe your strategy conversationally with AI or manually
            configure precision indicators, entry rules, and risk management parameters, our
            Bot Builder provides the complete toolkit to automate your trading without writing code.
          </p>

          {/* Action Buttons */}
          <div className={styles.actionsRow}>
            <Commonarrowbutton
              Text="Create with AI"
              Butttonvarient="dark"
              link="#AIBotBuilder"
            />
            <Commonarrowbutton
              Text="Manual Configuration"
              Butttonvarient="Blueoutlined"
              link="#ManualBotBuilder"
            />
          </div>

          {/* Highlights */}
          <div className={styles.highlightsRow}>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Conversational AI Bot Setup</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Precision Rule Configuration</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Zero Coding Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
