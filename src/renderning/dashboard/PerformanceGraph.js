import React from "react";
import { TrendingUp, ArrowUpRight } from "lucide-react";

export default function PerformanceGraph({ styles }) {
  return (
    <div className={styles.chartCard}>
      <div className={styles.chartCardHeader}>
        <div className={styles.chartCardTitleGroup}>
          <div className={styles.chartIconBadge}>
            <TrendingUp size={16} />
          </div>
          <div>
            <h3 className={styles.chartCardTitle}>Performance Analytics</h3>
            <p className={styles.chartCardSubtitle}>
              Realized automated gains over the last 7 trading sessions
            </p>
          </div>
        </div>
        <div className={styles.chartBadgeGroup}>
          <span className={styles.chartBadge}>Weekly Realized</span>
        </div>
      </div>

      {/* Graph Hero Stat Row */}
      <div className={styles.chartHighlightRow}>
        <div className={styles.chartBigValue}>
          <span className={styles.currencyPrefix}>+$</span>4,120.50
        </div>
        <div className={styles.chartHighlightPills}>
          <span className={styles.trendUpPill}>
            <ArrowUpRight size={13} /> +24.8% vs last week
          </span>
          <span className={styles.chartSubLabel}>Cumulative net profit</span>
        </div>
      </div>

      {/* Graph Interactive Bars */}
      <div className={styles.chartWrapper}>
        <div className={styles.chartBarsRow}>
          {/* Sun */}
          <div className={styles.barCol} title="Sunday: $420 Profit">
            <div className={styles.tooltipBadge}>$420</div>
            <div
              className={`${styles.barPill} ${styles.hatched}`}
              style={{ height: "76px" }}
            />
          </div>

          {/* Mon */}
          <div className={styles.barCol} title="Monday: $680 Profit">
            <div className={styles.tooltipBadge}>$680</div>
            <div
              className={`${styles.barPill} ${styles.solidMedium}`}
              style={{ height: "96px" }}
            />
          </div>

          {/* Tue */}
          <div className={styles.barCol} title="Tuesday: +18.4% Win Rate">
            <div className={styles.tooltipBadge}>+18.4%</div>
            <div
              className={`${styles.barPill} ${styles.solidMedium}`}
              style={{ height: "102px", opacity: 0.85 }}
            />
          </div>

          {/* Wed (Hero Gradient) */}
          <div className={styles.barCol} title="Wednesday: +$842 Peak Gain">
            <div className={`${styles.tooltipBadge} ${styles.activeTooltip}`}>
              +$842
            </div>
            <div
              className={`${styles.barPill} ${styles.solidHero}`}
              style={{ height: "128px" }}
            />
          </div>

          {/* Thu */}
          <div className={styles.barCol} title="Thursday: $510 Profit">
            <div className={styles.tooltipBadge}>$510</div>
            <div
              className={`${styles.barPill} ${styles.hatched}`}
              style={{ height: "82px" }}
            />
          </div>

          {/* Fri (Best Session) */}
          <div
            className={styles.barCol}
            title="Friday: $940 High Volatility Gain"
          >
            <div className={`${styles.tooltipBadge} ${styles.highlightTooltip}`}>
              +$940 Peak
            </div>
            <div
              className={`${styles.barPill} ${styles.solidHero}`}
              style={{ height: "142px" }}
            />
          </div>

          {/* Sat */}
          <div className={styles.barCol} title="Saturday: $620 Profit">
            <div className={styles.tooltipBadge}>$620</div>
            <div
              className={`${styles.barPill} ${styles.hatched}`}
              style={{ height: "88px" }}
            />
          </div>
        </div>

        <div className={styles.chartDaysRow}>
          <span className={styles.dayLabel}>Sun</span>
          <span className={styles.dayLabel}>Mon</span>
          <span className={styles.dayLabel}>Tue</span>
          <span className={styles.dayLabel}>Wed</span>
          <span className={styles.dayLabel}>Thu</span>
          <span className={styles.dayLabel}>Fri</span>
          <span className={styles.dayLabel}>Sat</span>
        </div>
      </div>

      {/* Graph Summary Footer */}
      <div className={styles.chartFooterRow}>
        <div className={styles.chartFooterItem}>
          <span className={styles.footerItemLabel}>Best Session</span>
          <span className={styles.footerItemVal}>Friday (+$940.00)</span>
        </div>
        <div className={styles.chartFooterDivider} />
        <div className={styles.chartFooterItem}>
          <span className={styles.footerItemLabel}>Avg Daily Profit</span>
          <span className={styles.footerItemVal}>+$588.64</span>
        </div>
        <div className={styles.chartFooterDivider} />
        <div className={styles.chartFooterItem}>
          <span className={styles.footerItemLabel}>Execution Win Rate</span>
          <span className={styles.footerItemVal}>92.4%</span>
        </div>
      </div>
    </div>
  );
}
