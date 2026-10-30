import React, { useState, useEffect } from "react";
import styles from "./aibotbuildersection.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";
import {
  Sparkles,
  Bot,
  Sliders,
  Terminal,
  Cpu,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  HelpCircle,
  FileCode,
  Rocket,
  ShieldAlert,
  TrendingUp,
  Activity,
  Play,
  RotateCcw,
  Zap,
  Layers,
} from "lucide-react";

export default function Aibotbuildersection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play the 4 steps every 5 seconds unless user hovers
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Describe your trading idea",
      subtitle:
        "Tell the AI what kind of bot you want to create, which markets you want to trade, or how your strategy should work.",
      icon: MessageSquare,
      badge: "Natural Language Prompt",
    },
    {
      id: 2,
      number: "02",
      title: "Answer AI-guided questions",
      subtitle:
        "The AI asks follow-up questions about entry signals, exit rules, indicators, stop loss, take profit, lot sizing, and other missing details.",
      icon: HelpCircle,
      badge: "Deep Strategy Refining",
    },
    {
      id: 3,
      number: "03",
      title: "Review your bot strategy",
      subtitle:
        "Review the structured strategy generated from your answers. Refine the rules and confirm the configuration before generation.",
      icon: FileCode,
      badge: "Structured Blueprint",
    },
    {
      id: 4,
      number: "04",
      title: "Generate and test your bot",
      subtitle:
        "Generate the bot using the supported strategy engine, then compile and backtest it to verify historical strategy performance.",
      icon: Layers,
      badge: "Compilation & Backtesting",
    },
  ];

  return (
    <section className={styles.aibotbuildersectionmain} id="AIBotBuilder">
      <div className="container-xl">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIndexBadge}>
            <span className={styles.indexTitle}>AI-POWERED BOT CREATION</span>
          </div>

          <h2>
            Turn Your Trading Ideas Into <span>Bots With AI</span>
          </h2>

          <p className={styles.narrativeParagraph}>
            Describe your trading strategy in a conversation, and let AI guide you through the bot
            creation process. From entry and exit conditions to risk management and trading pairs,
            the AI assistant will ask relevant questions to understand your requirements and help
            shape your bot.
          </p>

          {/* Feature Badge Pills */}
          <div className={styles.pillBadgesRow}>
            <div className={styles.pillBadge}>
              <Sparkles size={16} className={styles.pillIcon} />
              <span>Conversational AI</span>
            </div>
            <div className={styles.pillBadge}>
              <Bot size={16} className={styles.pillIcon} />
              <span>Guided Setup</span>
            </div>
            <div className={styles.pillBadge}>
              <Sliders size={16} className={styles.pillIcon} />
              <span>Strategy Configuration</span>
            </div>
          </div>
        </div>

        {/* Interactive "How It Works" Dual Showcase */}
        <div
          className={styles.howItWorksShowcase}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left: 4 Steps Accordion / Stepper */}
          <div className={styles.stepsColumn}>
            <div className={styles.stepperHeader}>
              <h3>How It Works</h3>
              <span className={styles.stepCounterIndicator}>
                Step {activeStep + 1} of {steps.length}
              </span>
            </div>

            <div className={styles.stepsList}>
              {steps.map((step, idx) => {
                const StepIcon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.id}
                    className={`${styles.stepCard} ${isActive ? styles.activeStepCard : ""}`}
                    onClick={() => setActiveStep(idx)}
                  >
                    <div className={styles.stepProgressLine}>
                      <div
                        className={styles.stepProgressFill}
                        style={{ width: isActive ? "100%" : "0%" }}
                      />
                    </div>

                    <div className={styles.stepCardHeader}>
                      <div className={styles.stepIconWrap}>
                        <StepIcon size={22} />
                      </div>
                      <h4 className={styles.stepTitle}>{step.title}</h4>
                    </div>

                    <p className={styles.stepSubtitle}>{step.subtitle}</p>

                    <div className={styles.stepFooterRow}>
                      <span className={styles.stepTag}>{step.badge}</span>
                      <span className={styles.stepIndicatorText}>
                        {isActive ? "Active View" : "Click to view"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Live Interactive Simulation Preview */}
          <div className={styles.previewColumn}>
            <div className={styles.previewCardOuter}>
              {/* AI Studio Header Bar */}
              <div className={styles.previewCardHeader}>
                <div className={styles.windowTitle}>
                  <div className={styles.studioIconBadge}>
                    <Sparkles size={14} />
                  </div>
                  <div className={styles.studioNameWrap}>
                    <span className={styles.studioName}>AlgoMatic AI Studio</span>
                    <span className={styles.versionPill}>v2.4 Bot Engine</span>
                  </div>
                </div>
                <div className={styles.engineStatus}>
                  <span className={styles.pulseIndicator} />
                  <span>AI Engine Online</span>
                </div>
              </div>

              {/* Dynamic Step Viewport */}
              <div className={styles.previewViewport}>
                {/* STEP 1: Describe Trading Idea */}
                {activeStep === 0 && (
                  <div className={`${styles.stepView} ${styles.stepView1}`}>
                    <div className={styles.chatMessageAi}>
                      <div className={styles.avatarAi}>
                        <Bot size={18} />
                      </div>
                      <div className={styles.chatBubbleAi}>
                        <p className={styles.bubbleGreeting}>
                          Hello Trader! What kind of algorithmic trading strategy would you like to
                          build today?
                        </p>
                        <span className={styles.bubbleMeta}>AlgoMatic AI • Just now</span>
                      </div>
                    </div>

                    <div className={styles.chatMessageUser}>
                      <div className={styles.chatBubbleUser}>
                        <p>
                          "I want a Gold (XAUUSD) 5-minute scalping bot that enters long when 20 EMA
                          crosses above 50 EMA and RSI is oversold below 35. Tight stop loss with 1:2
                          risk-reward."
                        </p>
                        <span className={styles.bubbleMeta}>You • Just now</span>
                      </div>
                    </div>

                    <div className={styles.chatTypingNotification}>
                      <div className={styles.typingDots}>
                        <span />
                        <span />
                        <span />
                      </div>
                      <p>AI is parsing technical indicators, market pairs & risk parameters...</p>
                    </div>

                    <div className={styles.extractedEntitiesGrid}>
                      <div className={styles.entityChip}>
                        <span className={styles.entityLabel}>Asset:</span>
                        <span className={styles.entityValue}>XAU/USD (Gold)</span>
                      </div>
                      <div className={styles.entityChip}>
                        <span className={styles.entityLabel}>Timeframe:</span>
                        <span className={styles.entityValue}>5-Minute (M5)</span>
                      </div>
                      <div className={styles.entityChip}>
                        <span className={styles.entityLabel}>Signals:</span>
                        <span className={styles.entityValue}>EMA 20/50 Cross + RSI 35</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Answer AI-Guided Questions */}
                {activeStep === 1 && (
                  <div className={`${styles.stepView} ${styles.stepView2}`}>
                    <div className={styles.guidedCardHeader}>
                      <div className={styles.guidedIconBox}>
                        <HelpCircle size={20} />
                      </div>
                      <div>
                        <h5>AI Strategy Clarification</h5>
                        <p>3 follow-up questions to finalize your risk framework</p>
                      </div>
                    </div>

                    <div className={styles.questionsList}>
                      <div className={styles.questionItem}>
                        <div className={styles.questionLabel}>
                          <span>Q1.</span> What is your maximum daily drawdown threshold?
                        </div>
                        <div className={styles.optionsGroup}>
                          <span className={styles.optionPill}>1.5% Conservative</span>
                          <span className={`${styles.optionPill} ${styles.activeOption}`}>
                            2.5% Balanced ✓
                          </span>
                          <span className={styles.optionPill}>5.0% Aggressive</span>
                        </div>
                      </div>

                      <div className={styles.questionItem}>
                        <div className={styles.questionLabel}>
                          <span>Q2.</span> Which trading sessions should the bot execute trades?
                        </div>
                        <div className={styles.optionsGroup}>
                          <span className={`${styles.optionPill} ${styles.activeOption}`}>
                            London & New York Overlap ✓
                          </span>
                          <span className={styles.optionPill}>Asian Session Only</span>
                          <span className={styles.optionPill}>24/5 Continuous</span>
                        </div>
                      </div>

                      <div className={styles.questionItem}>
                        <div className={styles.questionLabel}>
                          <span>Q3.</span> Trailing stop loss activation?
                        </div>
                        <div className={styles.optionsGroup}>
                          <span className={`${styles.optionPill} ${styles.activeOption}`}>
                            Enable Trailing (+15 Pips) ✓
                          </span>
                          <span className={styles.optionPill}>Fixed Stop Only</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Review Strategy Blueprint */}
                {activeStep === 2 && (
                  <div className={`${styles.stepView} ${styles.stepView3}`}>
                    <div className={styles.blueprintHeaderRow}>
                      <div className={styles.blueprintBadge}>
                        <FileCode size={16} />
                        <span>Compiled Strategy Blueprint</span>
                      </div>
                      <span className={styles.statusVerified}>
                        <CheckCircle2 size={14} /> Ready for Generation
                      </span>
                    </div>

                    <div className={styles.blueprintSpecsGrid}>
                      <div className={styles.specBox}>
                        <span className={styles.specKey}>Strategy Engine:</span>
                        <strong className={styles.specVal}>Algorithmic Strategy Core</strong>
                      </div>
                      <div className={styles.specBox}>
                        <span className={styles.specKey}>Trading Symbol:</span>
                        <strong className={styles.specVal}>XAUUSD</strong>
                      </div>
                      <div className={styles.specBox}>
                        <span className={styles.specKey}>Risk-to-Reward:</span>
                        <strong className={styles.specVal}>1 : 2.0 (Dynamic)</strong>
                      </div>
                      <div className={styles.specBox}>
                        <span className={styles.specKey}>Lot Sizing:</span>
                        <strong className={styles.specVal}>0.5% Account Equity</strong>
                      </div>
                    </div>

                    <div className={styles.codeSnippetBox}>
                      <div className={styles.codeHeader}>
                        <span>strategy_config.json</span>
                        <span>Auto-Generated</span>
                      </div>
                      <pre className={styles.codePre}>
                        {`{
  "name": "XAUUSD_EMA_RSI_Scalper",
  "entryRules": {
    "long": "EMA(20) > EMA(50) && RSI(14) < 35",
    "short": "EMA(20) < EMA(50) && RSI(14) > 65"
  },
  "riskManagement": {
    "stopLossPips": 25,
    "takeProfitPips": 50,
    "trailingStop": true,
    "maxDrawdownLimit": 0.025
  }
}`}
                      </pre>
                    </div>
                  </div>
                )}

                {/* STEP 4: Generate and Test */}
                {activeStep === 3 && (
                  <div className={`${styles.stepView} ${styles.stepView4}`}>
                    <div className={styles.buildSuccessBanner}>
                      <div className={styles.successIconWrap}>
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h5>Bot Compilation Successful!</h5>
                        <p>Artifact built with 0 errors. Backtest performance ready.</p>
                      </div>
                    </div>

                    <div className={styles.statsCardsRow}>
                      <div className={styles.statMetricCard}>
                        <span className={styles.statMetricLabel}>Win Rate</span>
                        <h4 className={styles.statMetricVal}>78.4%</h4>
                        <span className={styles.statBadgePositive}>+12.8% vs benchmark</span>
                      </div>

                      <div className={styles.statMetricCard}>
                        <span className={styles.statMetricLabel}>Profit Factor</span>
                        <h4 className={styles.statMetricVal}>2.64</h4>
                        <span className={styles.statBadgePositive}>High Expectancy</span>
                      </div>

                      <div className={styles.statMetricCard}>
                        <span className={styles.statMetricLabel}>Max Drawdown</span>
                        <h4 className={styles.statMetricVal}>2.1%</h4>
                        <span className={styles.statBadgeNeutral}>Within limits</span>
                      </div>
                    </div>

                    <div className={styles.exportActionsRow}>
                      <button className={styles.deployBtn}>
                        <Layers size={16} />
                        <span>Backtesting</span>
                      </button>
                      <button className={styles.compileBtn}>
                        <RotateCcw size={16} />
                        <span>Re-test Scenario</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer Navigation */}
              <div className={styles.previewFooterBar}>
                <div className={styles.stepDotsNav}>
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      className={`${styles.navDot} ${activeStep === i ? styles.navDotActive : ""}`}
                      onClick={() => setActiveStep(i)}
                      aria-label={`Jump to step ${i + 1}`}
                    />
                  ))}
                </div>
                <div className={styles.quickStepToggle}>
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className={styles.stepBtnSmall}
                  >
                    Prev
                  </button>
                  <button
                    disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    className={styles.stepBtnSmallPrimary}
                  >
                    Next Step <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Bottom Interactive CTA Banner */}
        <div className={styles.bottomCtaBanner}>
          <div className={styles.ctaGlowSphere} />
          <div className={styles.ctaContentCol}>
            <h4>
              Ready to Build Your <span>AI Trading Bot?</span>
            </h4>
            <p>
              Start conversations with AlgoMatic AI and transform your market vision into high-yield
              automated algorithms in minutes.
            </p>
          </div>
          <div className={styles.ctaButtonCol}>
            <Commonarrowbutton
              Text="Build Bot With AI"
              link="/ai-bot-market-place"
              buttonclassName={styles.themeCtaBtn}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
