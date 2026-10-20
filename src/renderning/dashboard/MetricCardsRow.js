import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function MetricCardsRow({ styles }) {
  return (
    <div className={styles.metricGrid}>
      {/* Card 1: Active Algo Bots (White default, Hero gradient on hover) */}
      <div className={`${styles.metricCard} ${styles.metricCardHero}`}>
        <div>
          <div className={styles.metricTopRow}>
            <span className={styles.metricLabel}>Active Algo Bots</span>
            <div className={styles.arrowCircle}>
              <ArrowUpRight size={16} />
            </div>
          </div>
          <div className={styles.metricNumber}>3 Live</div>
        </div>
        <div className={styles.metricHeroFooter}>
          <span className={styles.metricTrendPill}>
            ● 5 Strategies Deployed
          </span>
          <span className={styles.heroSubtext}>
            MetaTrader Live Connected
          </span>
        </div>
      </div>

      {/* Card 2: 24h Net Profit */}
      <div className={styles.metricCard}>
        <div>
          <div className={styles.metricTopRow}>
            <span className={styles.metricLabel}>24h Net Profit</span>
            <div className={styles.arrowCircle}>
              <ArrowUpRight size={16} />
            </div>
          </div>
          <div className={styles.metricNumber}>+$2,480.50</div>
        </div>
        <div className={styles.metricFooter}>
          <span className={`${styles.trendBadge} ${styles.trendUp}`}>
            ↑ +18.4%
          </span>
          <span className={styles.trendText}>Realized automated gain</span>
        </div>
      </div>

      {/* Card 3: Overall Win Rate */}
      <div className={styles.metricCard}>
        <div>
          <div className={styles.metricTopRow}>
            <span className={styles.metricLabel}>Overall Win Rate</span>
            <div className={styles.arrowCircle}>
              <ArrowUpRight size={16} />
            </div>
          </div>
          <div className={styles.metricNumber}>88.5%</div>
        </div>
        <div className={styles.metricFooter}>
          <span className={`${styles.trendBadge} ${styles.trendUp}`}>
            ↑ 1,240 Wins
          </span>
          <span className={styles.trendText}>High precision execution</span>
        </div>
      </div>

      {/* Card 4: Connected Meta Accounts */}
      <div className={styles.metricCard}>
        <div>
          <div className={styles.metricTopRow}>
            <span className={styles.metricLabel}>Meta Accounts</span>
            <div className={styles.arrowCircle}>
              <ArrowUpRight size={16} />
            </div>
          </div>
          <div className={styles.metricNumber}>2 MT5/MT4</div>
        </div>
        <div className={styles.metricFooter}>
          <span className={`${styles.trendBadge} ${styles.trendUp}`}>
            ● Live Sync
          </span>
          <span className={styles.trendText}>Equinix LD4 (1.2ms)</span>
        </div>
      </div>
    </div>
  );
}
