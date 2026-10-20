import React from "react";
import styles from "./aiMarketplaceHeroBanner.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";
import { Check } from "lucide-react";

export default function AiMarketplaceHeroBanner() {
  return (
    <section className={styles.heroBanner}>
      <div className="container-xl">
        <div className={styles.bannerContent}>
          {/* Label */}
          <div className={styles.labelWrapper}>
            <Commonlable Text="Algomatic AI Bot Ecosystem" />
          </div>

          {/* Heading */}
          <h1>
            Automate Your Trading with <span>Algorithmic AI Bots</span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Discover institutional-grade algorithmic trading bots designed for high-performance
            automation. Automate your strategy execution, eliminate emotional decisions,
            and protect your capital with disciplined, round-the-clock market precision.
          </p>

          {/* Action Buttons */}
          <div className={styles.actionsRow}>
            <Commonarrowbutton
              Text="Explore Trading Bots"
              Butttonvarient="dark"
              link="#Marketplace"
            />
            <Commonarrowbutton
              Text="Talk to Bot Expert"
              Butttonvarient="Blueoutlined"
              link="https://wa.me/917046279434"
              Target="_blank"
            />
          </div>

          {/* Clean Human Trust Highlights */}
          <div className={styles.highlightsRow}>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Multi-Broker Compatible</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Automated Risk Management</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Zero Coding Skills Needed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
