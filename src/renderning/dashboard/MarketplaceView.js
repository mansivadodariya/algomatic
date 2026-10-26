import React from "react";
import StrategiesCardList from "@/renderning/strategies/strategiesCardList";
import styles from "./MarketplaceView.module.scss";
import { Sparkles, ShieldCheck, Zap, RefreshCw } from "lucide-react";

export default function MarketplaceView() {
  return (
    <div className={styles.marketplaceContainer}>
      {/* Sleek Hero Banner Header */}
      <div className={styles.marketplaceHero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Sparkles size={12} />
            <span>Algomatic Marketplace</span>
          </div>
          <h2 className={styles.heroTitle}>
            Automated Strategy & Bot Marketplace
          </h2>
          <p className={styles.heroDescription}>
            Explore and deploy verified algorithmic bots, institutional-grade
            hedging strategies & trading tools directly into your connected
            MetaTrader accounts.
          </p>
          <div className={styles.featurePills}>
            <div className={styles.pillItem}>
              <ShieldCheck size={14} />
              <span>Verified Backtested Performance</span>
            </div>
            <div className={styles.pillItem}>
              <Zap size={14} />
              <span>Instant MetaTrader Deployment</span>
            </div>
            <div className={styles.pillItem}>
              <RefreshCw size={14} />
              <span>Continuous Execution Engine</span>
            </div>
          </div>
        </div>
      </div>

      {/* Strategies & Categories Card Grid */}
      <div className={styles.catalogWrapper}>
        <StrategiesCardList />
      </div>
    </div>
  );
}
