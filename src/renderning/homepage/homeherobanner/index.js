import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./homeherobanner.module.scss";
import {
  Zap,
  ArrowRight,
  Play,
  Bot,
  TrendingUp,
  Cpu,
  CheckCircle2,
  Activity,
  ShieldCheck,
  BarChart3,
  Layers,
} from "lucide-react";

export default function Homeherobanner() {
  const heroRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 991);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    let ticking = false;
    const handleScroll = () => {
      if (!heroRef.current || window.innerWidth <= 991) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!heroRef.current) return;
          const rect = heroRef.current.getBoundingClientRect();
          const totalScrollable =
            heroRef.current.offsetHeight - window.innerHeight;
          if (totalScrollable <= 0) return;
          const currentScroll = -rect.top;
          const rawProgress = currentScroll / totalScrollable;
          const clamped = Math.max(0, Math.min(1, rawProgress));
          setProgress(clamped);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ─── TERNIC EXACT SCROLL INTERPOLATION MATH (DESKTOP) ───
  let textOpacity = 1;
  let textBlur = 0;
  let textY = 0;
  if (isDesktop && progress > 0.14) {
    const t = Math.min(1, (progress - 0.14) / 0.22);
    textOpacity = 1 - t;
    textBlur = t * 12;
    textY = -(t * 60);
  }

  let set1Opacity = 1;
  let set1Y = 0;
  let set1Scale = 1;
  if (isDesktop && progress > 0.1) {
    const t = Math.min(1, (progress - 0.1) / 0.24);
    set1Opacity = 1 - t;
    set1Y = -(t * 220);
    set1Scale = 1 - t * 0.08;
  }

  let set2Opacity = 0;
  let set2Y = 260;
  let set2Scale = 0.92;
  if (isDesktop) {
    if (progress < 0.12) {
      set2Opacity = 0;
      set2Y = 260;
      set2Scale = 0.92;
    } else if (progress >= 0.12 && progress < 0.34) {
      const t = (progress - 0.12) / 0.22;
      set2Opacity = t;
      set2Y = (1 - t) * 260;
      set2Scale = 0.92 + t * 0.08;
    } else if (progress >= 0.34 && progress < 0.46) {
      set2Opacity = 1;
      set2Y = 0;
      set2Scale = 1;
    } else if (progress >= 0.46) {
      const t = Math.min(1, (progress - 0.46) / 0.16);
      set2Opacity = 1 - t;
      set2Y = -(t * 260);
      set2Scale = 1 - t * 0.08;
    }
  }

  let dashOpacity = 0;
  let dashY = 450;
  let dashScale = 0.88;
  if (isDesktop) {
    if (progress > 0.44) {
      const t = Math.min(1, (progress - 0.44) / 0.36);
      const ease = 1 - Math.pow(1 - t, 3);
      dashOpacity = Math.min(1, t * 1.6);
      dashY = (1 - ease) * 450;
      dashScale = 0.88 + ease * 0.12;
    }
  } else {
    dashOpacity = 1;
    dashY = 0;
    dashScale = 1;
  }

  return (
    <div ref={heroRef} className={styles.scrollSectionContainer}>
      <div className={styles.stickyViewport}>
        {/* Light Theme Ambient Background with Purple Aurora & Tech Dot Grid */}
        <div className={styles.lightBgWrapper}>
          <div className={styles.purpleGlowOrbTop}></div>
          <div className={styles.blueGlowOrbLeft}></div>
          <div className={styles.violetGlowOrbRight}></div>
          <div className={styles.dotGridOverlay}></div>
        </div>

        {/* ═════════ 1. CENTER HERO AREA ═════════ */}
        <div
          className={styles.heroArea}
          style={
            isDesktop
              ? {
                  opacity: textOpacity,
                  filter: `blur(${textBlur}px)`,
                  transform: `translate(-50%, calc(-50% + ${textY}px))`,
                  pointerEvents: textOpacity <= 0.05 ? "none" : "auto",
                }
              : undefined
          }
        >
          {/* Eyebrow Pill */}
          <div className={styles.eyebrowWrapper}>
            <div className={styles.ternicEyebrow}>
              <div className={styles.eyebrowIconCircle}>
                <Zap size={13} className={styles.boltIcon} />
              </div>
              <span>YOUR TRADING BOT MARKETPLACE</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className={styles.ternicHeadline}>
            Discover. Build. <br />
            <span className={styles.highlightText}>Automate.</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.ternicSubtitle}>
            Find the right trading bot for your strategy, create your own with AI,
            or work with our experts to bring your trading ideas to life. Explore
            automated trading solutions across different currency pairs,
            strategies, and supported markets all in one place.
          </p>

          {/* Dual Action Buttons */}
          <div className={styles.ternicButtonGroup}>
            <Link href="/marketplace" className={styles.ternicPrimaryBtn}>
              <span>Explore Marketplace</span>
              <ArrowRight size={16} className={styles.btnArrowIcon} />
            </Link>

            <Link href="#AIBotBuilder" className={styles.ternicSecondaryBtn}>
              <span>Build Your Own Bot</span>
              <Play size={13} className={styles.btnPlayIcon} />
            </Link>
          </div>
        </div>

        {/* ═════════ 2. ALGOMATIC BOT CARD 1: LIVE BOT STATUS (LEFT) ═════════ */}
        {isDesktop && (
          <div
            className={styles.heroCardOne}
            style={{
              opacity: set1Opacity,
              transform: `translateY(calc(-50% + ${set1Y}px)) scale(${set1Scale})`,
              pointerEvents: set1Opacity <= 0.05 ? "none" : "auto",
            }}
          >
            <div className={styles.botCardWidget}>
              <div className={styles.widgetHeader}>
                <div className={styles.widgetHeaderLeft}>
                  <div className={styles.botIconBadge}>
                    <Bot size={21} />
                  </div>
                  <div>
                    <h4 className={styles.widgetTitle}>Plus Arbitrage Bot</h4>
                    <p className={styles.widgetSub}>XAUUSD (Gold) • MT5 Live</p>
                  </div>
                </div>
                <div className={styles.liveIndicator}>
                  <span className={styles.pulseDot}></span>
                  <span>Active</span>
                </div>
              </div>

              <div className={styles.statsRow}>
                <div className={styles.statBox}>
                  <span className={styles.statLabel}>Daily Bot Profit</span>
                  <span className={styles.statValGreen}>+$1,420.50</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statLabel}>Win Rate</span>
                  <span className={styles.statValPurple}>99.4%</span>
                </div>
              </div>

              <div className={styles.widgetDivider}></div>

              <div className={styles.widgetFooter}>
                <div className={styles.latencyBadge}>
                  <Zap size={14} />
                  <span>0.02ms Latency</span>
                </div>
                <span className={styles.strategyPill}>No Loss Strategy</span>
              </div>
            </div>
          </div>
        )}

        {/* ═════════ 3. ALGOMATIC BOT CARD 2: BOT PERFORMANCE CHART (RIGHT) ═════════ */}
        {isDesktop && (
          <div
            className={styles.heroCardTwo}
            style={{
              opacity: set1Opacity,
              transform: `translateY(calc(-50% + ${set1Y}px)) scale(${set1Scale})`,
              pointerEvents: set1Opacity <= 0.05 ? "none" : "auto",
            }}
          >
            <div className={styles.botCardWidget}>
              <div className={styles.widgetHeader}>
                <div>
                  <h4 className={styles.widgetTitle}>Bot Performance</h4>
                  <div className={styles.profitHighlight}>
                    <span className={styles.bigGain}>+284.6%</span>
                    <span className={styles.verifiedTag}>
                      <CheckCircle2 size={13} /> MyFxBook Verified
                    </span>
                  </div>
                </div>
                <span className={styles.periodBadge}>All Time</span>
              </div>

              {/* Glowing SVG Area Chart */}
              <div className={styles.sparklineChart}>
                <svg viewBox="0 0 280 85" className={styles.chartSvg}>
                  <defs>
                    <linearGradient id="algoSparkGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9657fa" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#9657fa" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,70 Q40,64 75,52 T150,38 T220,20 T280,8 L280,85 L0,85 Z"
                    fill="url(#algoSparkGrad)"
                  />
                  <path
                    d="M0,70 Q40,64 75,52 T150,38 T220,20 T280,8"
                    fill="none"
                    stroke="#9657fa"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <circle cx="280" cy="8" r="5" fill="#6830d6" />
                  <circle cx="280" cy="8" r="2.5" fill="#ffffff" />
                </svg>
              </div>

              <div className={styles.chartMetricsRow}>
                <div className={styles.miniMetric}>
                  <span>Max Drawdown</span>
                  <strong>1.2% Low Risk</strong>
                </div>
                <div className={styles.miniMetric}>
                  <span>Monthly Average</span>
                  <strong className={styles.statValGreen}>+18.4% ROI</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═════════ 4. ALGOMATIC BOT CARD 3: AI BOT BUILDER STUDIO (CENTER-LEFT) ═════════ */}
        {isDesktop && (
          <div
            className={styles.heroCardThree}
            style={{
              opacity: set2Opacity,
              transform: `translateY(calc(-50% + ${set2Y}px)) scale(${set2Scale})`,
              pointerEvents: set2Opacity <= 0.05 ? "none" : "auto",
            }}
          >
            <div className={styles.botCardWidget}>
              <div className={styles.widgetHeader}>
                <div className={styles.widgetHeaderLeft}>
                  <div className={styles.aiIconBadge}>
                    <Cpu size={21} />
                  </div>
                  <div>
                    <h4 className={styles.widgetTitle}>AI Bot Studio</h4>
                    <p className={styles.widgetSub}>Automated MQL5 Engine</p>
                  </div>
                </div>
                <span className={styles.aiTag}>v2.4 Quant</span>
              </div>

              <div className={styles.codeSnippet}>
                <div className={styles.codeRow}>
                  <span className={styles.codeKey}>Strategy:</span>
                  <span className={styles.codeVal}>Dual Momentum EMA</span>
                </div>
                <div className={styles.codeRow}>
                  <span className={styles.codeKey}>Pair:</span>
                  <span className={styles.codeVal}>XAUUSD, EURUSD</span>
                </div>
                <div className={styles.codeRow}>
                  <span className={styles.codeKey}>Risk Guard:</span>
                  <span className={styles.codeVal}>0.5% Dynamic SL</span>
                </div>
              </div>

              <div className={styles.widgetFooter}>
                <span className={styles.testedBadge}>
                  <ShieldCheck size={14} /> 10-Yr Backtested
                </span>
                <span className={styles.mtBadge}>MT4 / MT5 Compatible</span>
              </div>
            </div>
          </div>
        )}

        {/* ═════════ 5. ALGOMATIC BOT CARD 4: LIVE TRADE EXECUTION FEED (CENTER-RIGHT) ═════════ */}
        {isDesktop && (
          <div
            className={styles.heroCardFour}
            style={{
              opacity: set2Opacity,
              transform: `translateY(calc(-50% + ${set2Y}px)) scale(${set2Scale})`,
              pointerEvents: set2Opacity <= 0.05 ? "none" : "auto",
            }}
          >
            <div className={styles.botCardWidget}>
              <div className={styles.widgetHeader}>
                <div>
                  <h4 className={styles.widgetTitle}>Live Bot Orders</h4>
                  <p className={styles.widgetSub}>Automated Algo Execution</p>
                </div>
                <span className={styles.feedStatus}>
                  <Activity size={13} className={styles.pulseIcon} /> Real-Time
                </span>
              </div>

              <div className={styles.orderList}>
                <div className={styles.orderItem}>
                  <span className={styles.orderBuy}>BUY</span>
                  <div className={styles.orderInfo}>
                    <strong>XAUUSD</strong>
                    <small>1.00 Lot</small>
                  </div>
                  <span className={styles.orderPnl}>+$340.00</span>
                </div>

                <div className={styles.orderItem}>
                  <span className={styles.orderBuy}>BUY</span>
                  <div className={styles.orderInfo}>
                    <strong>EURUSD</strong>
                    <small>2.00 Lots</small>
                  </div>
                  <span className={styles.orderPnl}>+$185.50</span>
                </div>

                <div className={styles.orderItem}>
                  <span className={styles.orderBuy}>BUY</span>
                  <div className={styles.orderInfo}>
                    <strong>US30</strong>
                    <small>0.50 Lot</small>
                  </div>
                  <span className={styles.orderPnl}>+$220.00</span>
                </div>
              </div>

              <div className={styles.orderFooter}>
                <span>Zero Execution Slippage</span>
                <span className={styles.liveTick}>Instant Fill</span>
              </div>
            </div>
          </div>
        )}

        {/* ═════════ 6. ALGOMATIC PRO TRADING BOT DASHBOARD SHOWCASE ═════════ */}
        <div
          className={styles.heroDashboard}
          style={
            isDesktop
              ? {
                  opacity: dashOpacity,
                  transform: `translate(-50%, calc(-50% + ${dashY}px)) scale(${dashScale})`,
                  pointerEvents: dashOpacity <= 0.05 ? "none" : "auto",
                }
              : undefined
          }
        >
          <div className={styles.dashboardContainer}>
            {/* Top Navigation Bar */}
            <div className={styles.dashTopBar}>
              <div className={styles.dashLogoSection}>
                <div className={styles.algoIconBox}>
                  <Bot size={20} />
                </div>
                <div className={styles.dashLogoText}>
                  <span className={styles.logoBold}>AlgoMatic</span>
                  <span className={styles.logoBadge}>PRO TERMINAL</span>
                </div>
              </div>
            </div>

            {/* Dashboard Inner Body */}
            <div className={styles.dashBody}>
              {/* Sidebar */}
              <div className={styles.dashSidebar}>
                <div className={`${styles.navItem} ${styles.navActive}`}>
                  <BarChart3 size={16} />
                  <span>Overview</span>
                </div>
                <div className={styles.navItem}>
                  <Bot size={16} />
                  <span>My Bots (8)</span>
                </div>
                <div className={styles.navItem}>
                  <Cpu size={16} />
                  <span>AI Builder</span>
                </div>
                <div className={styles.navItem}>
                  <Layers size={16} />
                  <span>Backtesting</span>
                </div>
                <div className={styles.navItem}>
                  <ShieldCheck size={16} />
                  <span>Risk Guard</span>
                </div>
              </div>

              {/* Main Content Area */}
              <div className={styles.dashMainContent}>
                {/* 3 Metric Cards */}
                <div className={styles.dashMetricsGrid}>
                  <div className={styles.dashMetricCard}>
                    <span className={styles.dashMetricLabel}>
                      Total Bot Portfolio
                    </span>
                    <div className={styles.dashMetricValue}>
                      $124,567.89
                    </div>
                    <span className={styles.dashMetricGain}>
                      +18.4% this month (+$19,410.50)
                    </span>
                  </div>

                  <div className={styles.dashMetricCard}>
                    <span className={styles.dashMetricLabel}>
                      Today's Live Profit
                    </span>
                    <div className={styles.dashMetricValueGreen}>
                      +$2,640.20
                    </div>
                    <span className={styles.dashMetricSub}>
                      14 Trades • 99.2% Win Rate
                    </span>
                  </div>

                  <div className={styles.dashMetricCard}>
                    <span className={styles.dashMetricLabel}>
                      Max Historical Drawdown
                    </span>
                    <div className={styles.dashMetricValue}>
                      1.2%
                    </div>
                    <span className={styles.dashMetricSafe}>
                      ✓ Protected by Risk Guard
                    </span>
                  </div>
                </div>

                {/* Main Interactive Chart Preview */}
                <div className={styles.dashChartPanel}>
                  <div className={styles.chartPanelHeader}>
                    <div>
                      <h5 className={styles.chartPanelTitle}>
                        Cumulative Bot Profit Growth
                      </h5>
                      <span className={styles.chartPanelSub}>
                        Real-time algorithmic trade compounding
                      </span>
                    </div>
                    <div className={styles.chartTabs}>
                      <span className={styles.tabActive}>1D</span>
                      <span>1W</span>
                      <span>1M</span>
                      <span>1Y</span>
                      <span>ALL</span>
                    </div>
                  </div>

                  {/* High Quality Rich SVG Area Chart */}
                  <div className={styles.mainSvgWrapper}>
                    <svg
                      viewBox="0 0 800 210"
                      preserveAspectRatio="none"
                      className={styles.mainChartSvg}
                    >
                      <defs>
                        <linearGradient
                          id="dashAreaGrad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#9657fa"
                            stopOpacity="0.28"
                          />
                          <stop
                            offset="100%"
                            stopColor="#9657fa"
                            stopOpacity="0.01"
                          />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid lines */}
                      <line
                        x1="0"
                        y1="40"
                        x2="800"
                        y2="40"
                        stroke="#f0ebf8"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <line
                        x1="0"
                        y1="90"
                        x2="800"
                        y2="90"
                        stroke="#f0ebf8"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <line
                        x1="0"
                        y1="140"
                        x2="800"
                        y2="140"
                        stroke="#f0ebf8"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />

                      {/* Area Fill */}
                      <path
                        d="M0,180 Q100,165 180,140 T360,110 T520,75 T680,45 T800,20 L800,210 L0,210 Z"
                        fill="url(#dashAreaGrad)"
                      />

                      {/* Profit Line */}
                      <path
                        d="M0,180 Q100,165 180,140 T360,110 T520,75 T680,45 T800,20"
                        fill="none"
                        stroke="#9657fa"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />

                      {/* Key Trade Execution Markers */}
                      <circle cx="180" cy="140" r="5" fill="#9657fa" />
                      <circle cx="180" cy="140" r="2.5" fill="#ffffff" />

                      <circle cx="360" cy="110" r="5" fill="#9657fa" />
                      <circle cx="360" cy="110" r="2.5" fill="#ffffff" />

                      <circle cx="520" cy="75" r="5" fill="#9657fa" />
                      <circle cx="520" cy="75" r="2.5" fill="#ffffff" />

                      <circle cx="800" cy="20" r="6" fill="#6830d6" />
                      <circle cx="800" cy="20" r="3" fill="#ffffff" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Active Bots & Trade Feed Row */}
                <div className={styles.dashBottomGrid}>
                  <div className={styles.bottomBox}>
                    <div className={styles.bottomBoxHeader}>
                      <span>Active Running Bots</span>
                      <span className={styles.linkView}>Manage All &gt;</span>
                    </div>
                    <div className={styles.botRowItem}>
                      <div className={styles.botRowLeft}>
                        <span className={styles.dotRunning}></span>
                        <strong>Plus Arbitrage (XAUUSD)</strong>
                      </div>
                      <span className={styles.botRowPnl}>+$8,420.00</span>
                    </div>
                    <div className={styles.botRowItem}>
                      <div className={styles.botRowLeft}>
                        <span className={styles.dotRunning}></span>
                        <strong>Trend Matrix (EURUSD)</strong>
                      </div>
                      <span className={styles.botRowPnl}>+$5,210.00</span>
                    </div>
                  </div>

                  <div className={styles.bottomBox}>
                    <div className={styles.bottomBoxHeader}>
                      <span>Recent Auto Trades</span>
                      <span className={styles.linkView}>MT5 History &gt;</span>
                    </div>
                    <div className={styles.botRowItem}>
                      <div className={styles.botRowLeft}>
                        <span className={styles.tagBuyMini}>BUY</span>
                        <span>XAUUSD 1.50 Lots</span>
                      </div>
                      <span className={styles.botRowPnlGreen}>+$420.00</span>
                    </div>
                    <div className={styles.botRowItem}>
                      <div className={styles.botRowLeft}>
                        <span className={styles.tagBuyMini}>BUY</span>
                        <span>US30 0.80 Lots</span>
                      </div>
                      <span className={styles.botRowPnlGreen}>+$280.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
