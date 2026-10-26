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
  Send,
  Sparkles,
  Copy,
  Check,
  MessageSquare,
  Terminal,
  RefreshCw,
} from "lucide-react";

const STRATEGIES = {
  gold: {
    name: "Gold Momentum Pulse EA",
    pair: "XAUUSD (Gold) • M15 Timeframe",
    winRate: "99.4%",
    monthlyRoi: "+28.4%",
    drawdown: "1.2%",
    riskReward: "1 : 3.2",
    speed: "0.02ms",
    code: `// AlgoMatic Quant Engine - Gold Momentum EA v2.4
input double RiskPerTrade  = 0.5;   // Risk % per trade
input int    FastEMA       = 9;     // Fast Trend EMA
input int    SlowEMA       = 21;    // Slow Trend EMA
input int    RSI_Filter    = 14;    // Volatility Filter
input double DynamicSL     = 15.0;  // Trailing Stop (Pips)

void OnTick() {
  if (CrossAbove(FastEMA, SlowEMA) && RSI(RSI_Filter) < 38) {
    OpenBuyOrder(Symbol(), DynamicSL);
  }
}`,
  },
  crypto: {
    name: "Crypto Arbitrage QuantBot",
    pair: "BTC/USDT, ETH/USDT • Real-Time",
    winRate: "99.8%",
    monthlyRoi: "+34.2%",
    drawdown: "0.4%",
    riskReward: "1 : 4.5",
    speed: "0.01ms",
    code: `# AlgoMatic Cross-Exchange Arbitrage v3.1
class CryptoArbitrage:
    def __init__(self, min_spread=0.0035):
        self.min_spread = min_spread

    async def scan_and_execute(self, binance_bid, bybit_ask):
        spread = (binance_bid - bybit_ask) / bybit_ask
        if spread > self.min_spread:
            await asyncio.gather(
                place_buy("Bybit", lot=1.5),
                place_sell("Binance", lot=1.5)
            )`,
  },
  hedge: {
    name: "EUR/USD Shield Matrix EA",
    pair: "EURUSD • H1 Swing",
    winRate: "96.7%",
    monthlyRoi: "+18.2%",
    drawdown: "0.8%",
    riskReward: "1 : 2.8",
    speed: "0.03ms",
    code: `// AlgoMatic News Filter & Dynamic Hedge EA
input double MaxEquityRisk = 2.0; // Max Drawdown %
input bool   AutoNewsPause = true;

void OnTick() {
  if (AutoNewsPause && IsHighImpactNews(15)) return;
  if (CurrentEquityDrawdown() > MaxEquityRisk) {
    ExecuteDynamicHedge();
  }
}`,
  },
  trend: {
    name: "Multi-Asset Trend Rider Pro",
    pair: "US30, XAUUSD, GBPJPY • H4",
    winRate: "94.2%",
    monthlyRoi: "+24.6%",
    drawdown: "1.8%",
    riskReward: "1 : 3.8",
    speed: "0.02ms",
    code: `// AlgoMatic Trend Rider Multi-Asset EA
input double ATR_Multiplier = 2.5;
input ENUM_TIMEFRAMES TF    = PERIOD_H4;

void OnBarClose() {
  if (SuperTrendBullish(Symbol(), TF)) {
    TrailingStopTrail(ATR_Multiplier);
  }
}`,
  },
};

const QUICK_PROMPTS = [
  {
    label: "⚡ Gold Momentum Scalper",
    key: "gold",
    prompt: "Build a high-win-rate scalper bot for XAUUSD (Gold) on MT5 with strict 0.5% risk control.",
  },
  {
    label: "📈 Crypto Arbitrage Bot",
    key: "crypto",
    prompt: "Build a cross-exchange arbitrage bot for BTC & ETH with zero market risk.",
  },
  {
    label: "🛡️ Safe Hedging EA (EUR/USD)",
    key: "hedge",
    prompt: "Create a safe hedging bot for EURUSD that protects equity during major economic news.",
  },
  {
    label: "🎯 Multi-Asset Trend Rider",
    key: "trend",
    prompt: "Generate a multi-asset trend rider bot for XAUUSD, US30 and GBPJPY on H4 timeframe.",
  },
];

export default function Homeherobanner() {
  const heroRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [showSideCards, setShowSideCards] = useState(true);
  const [displayText, setDisplayText] = useState("AI Trading Bots");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const [activeStrategyKey, setActiveStrategyKey] = useState("gold");
  const [copiedCode, setCopiedCode] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatStreamRef = useRef(null);
  const isInitialMount = useRef(true);

  const INITIAL_MESSAGES = [
    {
      id: 1,
      role: "ai",
      text: "Hello! I am your AlgoMatic AI Quant Copilot. Describe your strategy or pick a quick prompt below to build, backtest, and deploy a verified trading bot in real time.",
      time: "10:30 AM",
    },
    {
      id: 2,
      role: "user",
      text: "Build a high-win-rate scalper bot for XAUUSD (Gold) on MT5 with strict 0.5% risk control.",
      time: "10:31 AM",
    },
    {
      id: 3,
      role: "ai",
      text: "Strategy synthesized & verified against 10 years of tick data! Here is your compiled Gold Momentum Pulse EA with dynamic trailing stop and 99.4% win rate.",
      time: "10:31 AM",
      strategyKey: "gold",
    },
  ];

  const [chatMessages, setChatMessages] = useState(INITIAL_MESSAGES);

  const handleResetChat = () => {
    setChatMessages(INITIAL_MESSAGES);
    setActiveStrategyKey("gold");
    setInputVal("");
    if (chatStreamRef.current) {
      chatStreamRef.current.scrollTop = 0;
    }
  };

  const currentStrategy = STRATEGIES[activeStrategyKey] || STRATEGIES.gold;

  const handleCopyCode = (code) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleSelectPrompt = (promptItem) => {
    if (isTyping) return;
    const userMsg = {
      id: Date.now(),
      role: "user",
      text: promptItem.prompt,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setChatMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    setActiveStrategyKey(promptItem.key);

    setTimeout(() => {
      const selectedStrat = STRATEGIES[promptItem.key];
      const aiReply = {
        id: Date.now() + 1,
        role: "ai",
        text: `Neural engine generated ${selectedStrat.name}! Calibrated for ${selectedStrat.pair} with verified ${selectedStrat.winRate} win rate and ${selectedStrat.drawdown} max drawdown.`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        strategyKey: promptItem.key,
      };
      setChatMessages((prev) => [...prev, aiReply]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = (e) => {
    if (e) e.preventDefault();
    if (!inputVal.trim() || isTyping) return;

    const query = inputVal.trim();
    setInputVal("");
    const userMsg = {
      id: Date.now(),
      role: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setChatMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    let key = "gold";
    const lower = query.toLowerCase();
    if (lower.includes("crypto") || lower.includes("btc") || lower.includes("arbitrage")) key = "crypto";
    else if (lower.includes("hedge") || lower.includes("eur") || lower.includes("news")) key = "hedge";
    else if (lower.includes("trend") || lower.includes("us30") || lower.includes("multi")) key = "trend";
    setActiveStrategyKey(key);

    setTimeout(() => {
      const strat = STRATEGIES[key];
      const aiReply = {
        id: Date.now() + 1,
        role: "ai",
        text: `Optimized strategy for "${query}"! Loaded ${strat.name} with ${strat.winRate} backtest accuracy, ${strat.riskReward} R:R, and automatic execution slippage guard.`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        strategyKey: key,
      };
      setChatMessages((prev) => [...prev, aiReply]);
      setIsTyping(false);
    }, 1100);
  };

  const rotatingWords = ["AI Trading Bots", "Winning Strategies", "Automated Systems"];

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (chatStreamRef.current) {
      chatStreamRef.current.scrollTo({
        top: chatStreamRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatMessages, isTyping]);

  useEffect(() => {
    const currentWord = rotatingWords[wordIndex];
    let timeout;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 80);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        // Move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth > 1280;
      setIsDesktop(true);
      setShowSideCards(isLargeScreen);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    let ticking = false;
    const handleScroll = () => {
      if (!heroRef.current) return;
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

  // ─── TERNIC EXACT SCROLL INTERPOLATION MATH ───
  let set1Opacity = 1;
  let set1Y = 0;
  let set1Scale = 1;

  let set2Opacity = 0;
  let set2Y = 240;
  let set2Scale = 0.92;

  let textOpacity = 1;
  let textBlur = 0;
  let textY = 0;

  let videoOpacity = 1;

  let dashOpacity = 0;
  let dashY = 300;
  let dashScale = 0.92;
  let dashVisible = false;

  if (isDesktop) {
    if (showSideCards) {
      // ════════ LARGE SCREENS (> 1280px) WITH 4 SIDE CARDS ════════
      // 1. Set 1 Floating Cards (Card 1 Left, Card 2 Right)
      if (progress > 0.08) {
        const t = Math.min(1, (progress - 0.08) / 0.16);
        set1Opacity = 1 - t;
        set1Y = -(t * 220);
        set1Scale = 1 - t * 0.08;
      }

      // 2. Set 2 Floating Cards (Card 3 Left, Card 4 Right - "Bija Cards")
      if (progress < 0.10) {
        set2Opacity = 0;
        set2Y = 240;
        set2Scale = 0.92;
      } else if (progress >= 0.10 && progress < 0.26) {
        const t = (progress - 0.10) / 0.16;
        set2Opacity = t;
        set2Y = (1 - t) * 240;
        set2Scale = 0.92 + t * 0.08;
      } else if (progress >= 0.26 && progress < 0.42) {
        set2Opacity = 1;
        set2Y = 0;
        set2Scale = 1;
      } else if (progress >= 0.42) {
        const t = Math.min(1, (progress - 0.42) / 0.14);
        set2Opacity = 1 - t;
        set2Y = -(t * 240);
        set2Scale = 1 - t * 0.08;
      }

      // 3. Center Hero Area (stays visible while Set 1 & Set 2 cards animate)
      if (progress > 0.44) {
        const t = Math.min(1, (progress - 0.44) / 0.14);
        textOpacity = 1 - t;
        textBlur = t * 10;
        textY = -(t * 60);
      }

      // 4. Video Layer
      if (progress > 0.44) {
        const t = Math.min(1, (progress - 0.44) / 0.14);
        videoOpacity = 1 - t;
      }

      // 5. Chatbot Section: slides in after second cards and center text leave
      if (progress > 0.54) {
        dashVisible = true;
        const t = Math.min(1, (progress - 0.54) / 0.26);
        const ease = 1 - Math.pow(1 - t, 3);
        dashOpacity = Math.min(1, t * 1.5);
        dashY = (1 - ease) * 320;
        dashScale = 0.92 + ease * 0.08;
      }
    } else {
      // ════════ LAPTOPS, TABLETS & MOBILE (WIDTH <= 1280px) ════════
      // NO side cards to wait for! Snappy transition with ZERO dead scrolling!

      // 1. Center Hero Area fades out smoothly on scroll
      if (progress > 0.04) {
        const t = Math.min(1, (progress - 0.04) / 0.18);
        textOpacity = 1 - t;
        textBlur = t * 8;
        textY = -(t * 40);
      }

      // 2. Video Layer fades out smoothly
      if (progress > 0.06) {
        const t = Math.min(1, (progress - 0.06) / 0.18);
        videoOpacity = 1 - t;
      }

      // 3. Chatbot slides up and centers
      if (progress > 0.08) {
        dashVisible = true;
        const t = Math.min(1, (progress - 0.08) / 0.28);
        const ease = 1 - Math.pow(1 - t, 3);
        dashOpacity = Math.min(1, t * 1.4);
        dashY = (1 - ease) * 200;
        dashScale = 0.94 + ease * 0.06;
      }
    }
  } else {
    // ════════ MOBILE FALLBACK (<= 768px) ════════
    dashVisible = true;
    dashOpacity = 1;
    dashY = 0;
    dashScale = 1;
  }

  return (
    <div ref={heroRef} className={styles.scrollSectionContainer}>
      <div className={styles.stickyViewport}>
        {/* Video & Tech Dot Grid strictly for top hero view, fades away so chatbot has clean light theme */}
        <div
          className={styles.lightBgWrapper}
          style={isDesktop ? { opacity: videoOpacity, pointerEvents: "none" } : undefined}
        >
          <video
            ref={(el) => {
              if (el) {
                el.muted = true;
                el.play().catch(() => {});
              }
            }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src="/videos/hero.mp4"
            className={styles.heroBackgroundVideo}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoGlassOverlay}></div>
          <div className={styles.purpleGlowOrbTop}></div>
          <div className={styles.blueGlowOrbLeft}></div>
          <div className={styles.violetGlowOrbRight}></div>
          <div className={styles.dotGridOverlay}></div>
          <div className={styles.videoBottomFade}></div>
        </div>

        {/* Ambient Glow Orbs for Chatbot Phase (revealed as video fades out) */}
        <div
          className={styles.chatGlowWrapper}
          style={isDesktop ? { opacity: 1 - videoOpacity } : undefined}
        >
          <div className={styles.chatGlowOrbLeft}></div>
          <div className={styles.chatGlowOrbRight}></div>
        </div>

        {/* Center Hero Area */}
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
            We Help You Create <br />
            <span className={styles.typewriterWrapper}>
              <span className={styles.typewriterText}>{displayText}</span>
              <span className={styles.typewriterCursor}>|</span>
            </span>
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
        {showSideCards && (
          <div
            className={styles.heroCardOne}
            style={
              isDesktop
                ? {
                    opacity: set1Opacity,
                    transform: `translateY(calc(-50% + ${set1Y}px)) scale(${set1Scale})`,
                    pointerEvents: set1Opacity <= 0.05 ? "none" : "auto",
                  }
                : undefined
            }
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
        {showSideCards && (
          <div
            className={styles.heroCardTwo}
            style={
              isDesktop
                ? {
                    opacity: set1Opacity,
                    transform: `translateY(calc(-50% + ${set1Y}px)) scale(${set1Scale})`,
                    pointerEvents: set1Opacity <= 0.05 ? "none" : "auto",
                  }
                : undefined
            }
          >
            <div className={styles.botCardWidget}>
              <div className={styles.widgetHeader}>
                <div>
                  <h4 className={styles.widgetTitle}>Bot Performance</h4>
                  <p className={styles.widgetSub}>Verified Live ROI</p>
                </div>
                <span className={styles.periodBadge}>All Time</span>
              </div>

              <div className={styles.profitHighlight}>
                <span className={styles.bigGain}>+284.6%</span>
                <span className={styles.verifiedTag}>
                  <CheckCircle2 size={13} /> MyFxBook Verified
                </span>
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
        {showSideCards && (
          <div
            className={styles.heroCardThree}
            style={
              isDesktop
                ? {
                    opacity: set2Opacity,
                    transform: `translateY(calc(-50% + ${set2Y}px)) scale(${set2Scale})`,
                    pointerEvents: set2Opacity <= 0.05 ? "none" : "auto",
                  }
                : undefined
            }
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
        {showSideCards && (
          <div
            className={styles.heroCardFour}
            style={
              isDesktop
                ? {
                    opacity: set2Opacity,
                    transform: `translateY(calc(-50% + ${set2Y}px)) scale(${set2Scale})`,
                    pointerEvents: set2Opacity <= 0.05 ? "none" : "auto",
                  }
                : undefined
            }
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

        {/* ═════════ 6. ALGOMATIC AI BOT CHAT COPILOT SECTION (SLIDES IN SMOOTHLY) ═════════ */}
        <div
          className={styles.heroBotChatSection}
          style={
            isDesktop
              ? {
                  opacity: dashOpacity,
                  transform: `translate(-50%, calc(-50% + ${dashY}px)) scale(${dashScale})`,
                  pointerEvents: dashOpacity <= 0.1 ? "none" : "auto",
                  visibility: dashVisible ? "visible" : "hidden",
                }
              : undefined
          }
        >
          <div className={styles.chatStudioCard}>
          {/* Top Bar of Studio */}
          <div className={styles.studioHeader}>
            <div className={styles.studioHeaderLeft}>
              <div className={styles.botAvatarGlow}>
                <Bot size={22} color="#ffffff" />
                <span className={styles.onlineStatusDot}></span>
              </div>
              <div className={styles.studioTitleWrap}>
                <div className={styles.studioTitleRow}>
                  <h3 className={styles.studioTitle}>AlgoMatic Bot Copilot</h3>
                  <span className={styles.aiBadge}>
                    <Sparkles size={12} /> GPT-4o Quant Engine
                  </span>
                </div>
                <p className={styles.studioSubtitle}>
                  Chat with AI to generate, optimize & backtest automated trading algorithms in real-time
                </p>
              </div>
            </div>

            <div className={styles.studioHeaderRight}>
              <div className={styles.latencyBadge}>
                <Activity size={13} className={styles.pulseIcon} />
                <span>0.02ms Latency</span>
              </div>
              <button
                type="button"
                className={styles.resetChatBtn}
                onClick={handleResetChat}
                title="Reset conversation"
              >
                <RefreshCw size={13} />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Main Single-Column Chat Stream */}
          <div className={styles.chatStream} ref={chatStreamRef}>
            {chatMessages.map((msg) => {
              const strat = msg.strategyKey ? STRATEGIES[msg.strategyKey] : null;

              return (
                <div
                  key={msg.id}
                  className={`${styles.chatRow} ${
                    msg.role === "user" ? styles.chatRowUser : styles.chatRowAi
                  }`}
                >
                  {msg.role === "ai" && (
                    <div className={styles.msgAvatar}>
                      <Bot size={16} />
                    </div>
                  )}

                  <div className={styles.msgBubbleWrap}>
                    <div
                      className={`${styles.msgBubble} ${
                        msg.role === "user" ? styles.msgBubbleUser : styles.msgBubbleAi
                      }`}
                    >
                      <p>{msg.text}</p>

                      {strat && (
                        <div className={styles.strategyCardInline}>
                          {/* Card Top Meta */}
                          <div className={styles.stratCardHeader}>
                            <div className={styles.stratMetaLeft}>
                              <span className={styles.stratBadge}>
                                <CheckCircle2 size={12} /> Strategy Verified
                              </span>
                              <span className={styles.stratPair}>{strat.pair}</span>
                            </div>
                            <span className={styles.stratSpeed}>
                              <Zap size={11} /> {strat.speed}
                            </span>
                          </div>

                          <h4 className={styles.stratName}>{strat.name}</h4>

                          {/* 4 Stats Grid in single row */}
                          <div className={styles.stratMetricsGrid}>
                            <div className={styles.stratMetricItem}>
                              <span className={styles.metricLabel}>Win Rate</span>
                              <strong className={styles.greenText}>{strat.winRate}</strong>
                            </div>
                            <div className={styles.stratMetricItem}>
                              <span className={styles.metricLabel}>Monthly ROI</span>
                              <strong className={styles.greenText}>{strat.monthlyRoi}</strong>
                            </div>
                            <div className={styles.stratMetricItem}>
                              <span className={styles.metricLabel}>Max Drawdown</span>
                              <strong className={styles.whiteText}>{strat.drawdown}</strong>
                            </div>
                            <div className={styles.stratMetricItem}>
                              <span className={styles.metricLabel}>Risk / Reward</span>
                              <strong className={styles.whiteText}>{strat.riskReward}</strong>
                            </div>
                          </div>

                          {/* Action Toolbar */}
                          <div className={styles.stratActionsRow}>
                            <button
                              type="button"
                              className={styles.copyBtn}
                              onClick={() => handleCopyCode(strat.code)}
                            >
                              {copiedCode ? (
                                <>
                                  <Check size={13} color="#22c55e" /> Copied!
                                </>
                              ) : (
                                <>
                                  <Copy size={13} /> Copy EA Code
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <span className={styles.msgTime}>{msg.time}</span>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className={`${styles.chatRow} ${styles.chatRowAi}`}>
                <div className={styles.msgAvatar}>
                  <Bot size={16} />
                </div>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts Carousel / Pills */}
          <div className={styles.quickPromptsSection}>
            <span className={styles.quickPromptsLabel}>
              <Sparkles size={13} /> Try asking the Bot:
            </span>
            <div className={styles.promptsPillsRow}>
              {QUICK_PROMPTS.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className={`${styles.promptPill} ${
                    activeStrategyKey === item.key ? styles.promptPillActive : ""
                  }`}
                  onClick={() => handleSelectPrompt(item)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input Bar */}
          <form className={styles.chatInputForm} onSubmit={handleSendMessage}>
            <div className={styles.inputInnerWrap}>
              <MessageSquare size={19} className={styles.inputIcon} />
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask AI to build, optimize or backtest a trading bot..."
                className={styles.chatInput}
              />
              <button
                type="submit"
                className={styles.chatSendBtn}
                disabled={!inputVal.trim() || isTyping}
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}
