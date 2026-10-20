import React from "react";
import styles from "./whatalgosection.module.scss";
import Commonlable from "@/components/commonlable";
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  Activity,
  Lock,
  Cpu,
  CheckCircle2,
  Clock,
  Sparkles,
  RefreshCw,
  ArrowUpRight,
  Layers,
} from "lucide-react";

export default function Whatalgosection() {
  return (
    <section className={styles.whatalgosectionmain} id="About">
      <div className="container-xl">
        {/* Section Top Intro Label */}
        <div className={styles.sectionTopBadge}>
          <Commonlable Text="Platform Architecture" />
        </div>

        {/* =========================================================================
            BLOCK 1: Left Content & Right Large Light Visual Box
           ========================================================================= */}
        <div className={styles.featureShowcaseRow}>
          {/* Left: Text Content Col */}
          <div className={styles.contentCol}>
            <div className={styles.sectionIndexBadge}>
              <span>01</span>
              <span className={styles.indexDivider}>/</span>
              <span>CORE ARBITRAGE ENGINE</span>
            </div>

            <h2>
              What Is <span>AlgoMatic?</span>
            </h2>

            <p className={styles.narrativeParagraph}>
              Algomatic is an advanced algorithmic trading bot designed to harness
              the power of arbitrage in the forex market, specifically for gold
              (XAUUSD). With cutting-edge technology and human intelligence combined,
              Algomatic identifies price gaps between Spot and Future markets to
              execute trades in real-time, ensuring maximum profit with minimal risk.
            </p>

            {/* Human-crafted Value Chips */}
            <div className={styles.valueChipsGrid}>
              <div className={styles.valueChip}>
                <div className={styles.chipIconBox}>
                  <CheckCircle2 size={18} className={styles.chipCheck} />
                </div>
                <div className={styles.chipText}>
                  <h4>Spot vs Futures Inefficiency Capture</h4>
                  <p>Exploits micro-second gaps between global spot gold and futures exchanges.</p>
                </div>
              </div>

              <div className={styles.valueChip}>
                <div className={styles.chipIconBox}>
                  <CheckCircle2 size={18} className={styles.chipCheck} />
                </div>
                <div className={styles.chipText}>
                  <h4>Nanosecond Algorithmic Execution</h4>
                  <p>Trades executed instantaneously before retail and institutional spreads normalize.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Large Light Visual Box (Live Arbitrage Terminal) */}
          <div className={styles.visualCol}>
            <div className={styles.terminalLightCard}>
              {/* Glowing Top Purple Accent Line */}
              <div className={styles.cardTopGlow}></div>

              {/* Terminal Header */}
              <div className={styles.terminalTopBar}>
                <div className={styles.terminalStatusPill}>
                  <span className={styles.liveGreenDot}></span>
                  <span>XAUUSD Live Arbitrage Engine</span>
                </div>
                <div className={styles.terminalLatencyBadge}>
                  <Zap size={13} />
                  <span>&lt; 12ms Latency</span>
                </div>
              </div>

              {/* Dual Market Price Gap Visualizer */}
              <div className={styles.marketSplitGrid}>
                {/* Spot Market Card */}
                <div className={styles.marketCard}>
                  <div className={styles.marketCardHead}>
                    <span className={styles.marketType}>Spot Market</span>
                    <span className={styles.marketActionBuy}>BUY</span>
                  </div>
                  <div className={styles.marketPrice}>$2,648.50</div>
                  <div className={styles.marketSub}>XAUUSD Spot Feed</div>
                </div>

                {/* Central Spread Indicator */}
                <div className={styles.spreadConnector}>
                  <div className={styles.spreadPulseRing}></div>
                  <div className={styles.spreadLabel}>Price Gap</div>
                  <div className={styles.spreadAmount}>+$3.70</div>
                </div>

                {/* Futures Market Card */}
                <div className={styles.marketCard}>
                  <div className={styles.marketCardHead}>
                    <span className={styles.marketType}>Futures Market</span>
                    <span className={styles.marketActionSell}>SELL</span>
                  </div>
                  <div className={styles.marketPrice}>$2,652.20</div>
                  <div className={styles.marketSub}>COMEX Futures Feed</div>
                </div>
              </div>

              {/* Live Execution Output Banner */}
              <div className={styles.executionResultBanner}>
                <div className={styles.executionIconBox}>
                  <RefreshCw size={18} className={styles.spinSlow} />
                </div>
                <div className={styles.executionText}>
                  <span className={styles.execLabel}>Arbitrage Lock Active</span>
                  <span className={styles.execValue}>+$370.00 Net Spread Captured / Lot</span>
                </div>
                <span className={styles.execRiskTag}>Zero Risk</span>
              </div>

              {/* Real-time Order Details Strip */}
              <div className={styles.orderDetailsStrip}>
                <div className={styles.orderDetailItem}>
                  <span className={styles.orderLabel}>Order Pair</span>
                  <strong className={styles.orderVal}>Spot / Futures</strong>
                </div>
                <div className={styles.orderDivider}></div>
                <div className={styles.orderDetailItem}>
                  <span className={styles.orderLabel}>Execution Mode</span>
                  <strong className={styles.orderVal}>Hedged Arbitrage</strong>
                </div>
                <div className={styles.orderDivider}></div>
                <div className={styles.orderDetailItem}>
                  <span className={styles.orderLabel}>Market Status</span>
                  <strong className={`${styles.orderVal} ${styles.greenVal}`}>Optimal Gap</strong>
                </div>
              </div>

              {/* Terminal Bottom Telemetry */}
              <div className={styles.terminalTelemetry}>
                <div className={styles.telemetryItem}>
                  <Activity size={14} />
                  <span>Market: Gold (XAUUSD)</span>
                </div>
                <div className={styles.telemetryItem}>
                  <Cpu size={14} />
                  <span>Sub-Millisecond Engine</span>
                </div>
                <div className={styles.telemetryItem}>
                  <CheckCircle2 size={14} />
                  <span>Risk Hedged</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Glow Line */}
        <div className={styles.sectionDividerGlow}></div>

        {/* =========================================================================
            BLOCK 2: Left Large Light Visual Box & Right Content
           ========================================================================= */}
        <div className={styles.featureShowcaseRow}>
          {/* Left: Large Light Visual Box (Risk Shield Console) */}
          <div className={styles.visualCol}>
            <div className={styles.terminalLightCard}>
              {/* Glowing Top Purple Accent Line */}
              <div className={styles.cardTopGlow}></div>

              {/* Terminal Header */}
              <div className={styles.terminalTopBar}>
                <div className={styles.terminalStatusPill}>
                  <Lock size={14} className={styles.shieldIcon} />
                  <span>Zero-Loss Risk Hedging Guard</span>
                </div>
                <div className={styles.shieldVerifiedBadge}>
                  <ShieldCheck size={14} />
                  <span>100% Protected</span>
                </div>
              </div>

              {/* Metrics Progress / Telemetry Bars */}
              <div className={styles.safetyMetricsCard}>
                <div className={styles.safetyRow}>
                  <div className={styles.safetyMeta}>
                    <span>Market Risk Exposure</span>
                    <strong>0.00% Hedged</strong>
                  </div>
                  <div className={styles.progressTrack}>
                    <div className={`${styles.progressBar} ${styles.barZero}`}></div>
                  </div>
                </div>

                <div className={styles.safetyRow}>
                  <div className={styles.safetyMeta}>
                    <span>Mathematical Precision</span>
                    <strong>99.9% Optimal</strong>
                  </div>
                  <div className={styles.progressTrack}>
                    <div className={`${styles.progressBar} ${styles.barOptimal}`}></div>
                  </div>
                </div>

                <div className={styles.safetyRow}>
                  <div className={styles.safetyMeta}>
                    <span>Autonomous Continuous Uptime</span>
                    <strong>24/5 Active</strong>
                  </div>
                  <div className={styles.progressTrack}>
                    <div className={`${styles.progressBar} ${styles.barUptime}`}></div>
                  </div>
                </div>
              </div>

              {/* Closed Position Profit Voucher */}
              <div className={styles.profitVoucherCard}>
                <div className={styles.voucherLeft}>
                  <div className={styles.voucherLabel}>Simultaneous Hedged Settlement</div>
                  <div className={styles.voucherStatus}>Spot Buy &amp; Futures Sell Settled</div>
                </div>
                <div className={styles.voucherRight}>
                  <span className={styles.voucherProfitTag}>+$1,480.00</span>
                  <span className={styles.voucherWinRate}>100% Win Rate</span>
                </div>
              </div>

              {/* Real-time Safeguard Indicators */}
              <div className={styles.orderDetailsStrip}>
                <div className={styles.orderDetailItem}>
                  <span className={styles.orderLabel}>Capital Safety</span>
                  <strong className={`${styles.orderVal} ${styles.greenVal}`}>No Drawdown</strong>
                </div>
                <div className={styles.orderDivider}></div>
                <div className={styles.orderDetailItem}>
                  <span className={styles.orderLabel}>Hedging Ratio</span>
                  <strong className={styles.orderVal}>1:1 Matched</strong>
                </div>
                <div className={styles.orderDivider}></div>
                <div className={styles.orderDetailItem}>
                  <span className={styles.orderLabel}>Human Oversight</span>
                  <strong className={styles.orderVal}>Active 24/5</strong>
                </div>
              </div>

              {/* Terminal Bottom Telemetry */}
              <div className={styles.terminalTelemetry}>
                <div className={styles.telemetryItem}>
                  <Clock size={14} />
                  <span>24/5 Non-Stop Execution</span>
                </div>
                <div className={styles.telemetryItem}>
                  <ShieldCheck size={14} />
                  <span>Zero Drawdown</span>
                </div>
                <div className={styles.telemetryItem}>
                  <Sparkles size={14} />
                  <span>Pro Overseen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content Col */}
          <div className={styles.contentCol}>
            <div className={styles.sectionIndexBadge}>
              <span>02</span>
              <span className={styles.indexDivider}>/</span>
              <span>RISK-FREE METHODOLOGY</span>
            </div>

            <h2>
              <span>Zero-Loss</span> Algorithmic Trading, Finally a Reality
            </h2>

            <p className={styles.narrativeParagraph}>
              Arbitrage is the holy grail of trading — risk-free profit from market
              inefficiencies. Algomatic is built to detect and exploit gold price
              discrepancies between the Spot and Futures markets in real time. It
              does this 24/5, with no fatigue, no emotions, and no room for human
              error. Backed by advanced algorithms and overseen by trading
              professionals, Algomatic guarantees every trade is a winning trade.
            </p>

            {/* Human-crafted Value Chips */}
            <div className={styles.valueChipsGrid}>
              <div className={styles.valueChip}>
                <div className={styles.chipIconBox}>
                  <CheckCircle2 size={18} className={styles.chipCheck} />
                </div>
                <div className={styles.chipText}>
                  <h4>100% Fully Hedged Positions</h4>
                  <p>Simultaneous opposite orders ensure market movements never cause losses.</p>
                </div>
              </div>

              <div className={styles.valueChip}>
                <div className={styles.chipIconBox}>
                  <CheckCircle2 size={18} className={styles.chipCheck} />
                </div>
                <div className={styles.chipText}>
                  <h4>Zero Emotional Bias, 24/5 Operation</h4>
                  <p>Operates autonomously with strict mathematical rules, round-the-clock.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
