import React, { useState, useEffect } from "react";
import styles from "./manualbotconfigsection.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";
import { useAppContext } from "@/context/AppContext";
import {
  SlidersHorizontal,
  Layers,
  Settings2,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Clock,
  Target,
  Cpu,
  FileCheck,
  Save,
  Filter,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Sliders,
  Check,
  Activity,
  Workflow,
  RotateCcw,
  Play,
  TrendingUp,
  FileText,
  Code2,
  Terminal,
} from "lucide-react";

export default function Manualbotconfigsection() {
  const { setShowLogin } = useAppContext();
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Interactive state within live configurator
  const [selectedPlatform, setSelectedPlatform] = useState("TradingView");
  const [selectedTimeframe, setSelectedTimeframe] = useState("M5");
  const [activeIndicators, setActiveIndicators] = useState(["EMA 20/50", "RSI (14)"]);
  const [trailingStopActive, setTrailingStopActive] = useState(true);
  const [breakEvenActive, setBreakEvenActive] = useState(true);
  const [sessionFilterActive, setSessionFilterActive] = useState(true);
  const [spreadFilterActive, setSpreadFilterActive] = useState(true);

  // Auto-advance infinitely through all 5 steps in a continuous loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Basic bot settings",
      shortTitle: "Basic Settings",
      subtitle:
        "Enter your bot name and description, select the supported trading platform, choose the market and symbol, and set the preferred timeframe.",
      icon: Settings2,
      badge: "Platform & Pair",
    },
    {
      id: 2,
      number: "02",
      title: "Entry and exit conditions",
      shortTitle: "Entry & Exit",
      subtitle:
        "Define buy and sell signals, indicator conditions, trade closing rules, and optional filters for when the bot should or should not trade.",
      icon: Workflow,
      badge: "Logic & Triggers",
    },
    {
      id: 3,
      number: "03",
      title: "Risk management",
      shortTitle: "Risk Management",
      subtitle:
        "Configure stop loss, take profit, lot sizing, risk per trade, maximum open trades, and optional daily loss limits.",
      icon: ShieldCheck,
      badge: "Risk Guardrails",
    },
    {
      id: 4,
      number: "04",
      title: "Advanced parameters",
      shortTitle: "Advanced Filters",
      subtitle:
        "Set trading sessions, spread filters, trailing stops, break-even rules, and other options supported by the selected strategy engine.",
      icon: SlidersHorizontal,
      badge: "Execution Filters",
    },
    {
      id: 5,
      number: "05",
      title: "Review and generate",
      shortTitle: "Review & Compile",
      subtitle:
        "Validate the configuration, review the final strategy summary, and submit it for bot generation, compilation, and testing.",
      icon: FileCheck,
      badge: "Validation & Export",
    },
  ];

  const toggleIndicator = (name) => {
    if (activeIndicators.includes(name)) {
      if (activeIndicators.length > 1) {
        setActiveIndicators(activeIndicators.filter((i) => i !== name));
      }
    } else {
      setActiveIndicators([...activeIndicators, name]);
    }
  };

  return (
    <section className={styles.manualbotsectionmain} id="ManualBotBuilder">
      <div className="container-xl">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIndexBadge}>
            <span className={styles.indexTitle}>MANUAL BOT CONFIGURATION</span>
          </div>

          <h2>
            Build Your Trading Bot. <span>Your Rules. Your Strategy.</span>
          </h2>

          <p className={styles.narrativeParagraph}>
            Configure your trading bot using a structured form designed for precise control over your
            strategy. Select your trading instruments, define entry and exit conditions, choose
            indicators, and configure risk management settings all in one place.
          </p>

          {/* Feature Badge Pills */}
          <div className={styles.pillBadgesRow}>
            <div className={styles.pillBadge}>
              <Layers size={16} className={styles.pillIcon} />
              <span>Form-Based Setup</span>
            </div>
            <div className={styles.pillBadge}>
              <SlidersHorizontal size={16} className={styles.pillIcon} />
              <span>Flexible Parameters</span>
            </div>
            <div className={styles.pillBadge}>
              <ShieldCheck size={16} className={styles.pillIcon} />
              <span>Full Strategy Control</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BRAND-NEW UI ARCHITECTURE: HORIZONTAL STUDIO WORKSTATION PIPELINE
           ========================================================================= */}
        <div className={styles.studioWorkstationWrapper}>
          {/* Horizontal 5-Step Pipeline Navigation Bar */}
          <div className={styles.pipelineStepperTrack}>
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;
              const isCompleted = idx < activeStep;

              return (
                <button
                  key={step.id}
                  type="button"
                  className={`${styles.stepTabItem} ${isActive ? styles.stepTabActive : ""} ${isCompleted ? styles.stepTabCompleted : ""
                    }`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className={styles.stepTabIconBox}>
                    {isCompleted ? (
                      <span className={styles.checkMark}>✓</span>
                    ) : (
                      <StepIcon size={18} />
                    )}
                  </div>
                  <div className={styles.stepTabMeta}>
                    <span className={styles.stepSeqText}>Step {step.number}</span>
                    <span className={styles.stepTitleText}>{step.shortTitle}</span>
                  </div>
                  <div className={styles.tabGlowUnderline} />
                </button>
              );
            })}
          </div>

          {/* Grand Studio Workbench Card */}
          <div className={styles.workbenchCard}>
            {/* Top Status Bar of Workbench */}
            <div className={styles.workbenchTopBar}>
              <div className={styles.barLeft}>
                <div className={styles.studioBadgeIcon}>
                  <SlidersHorizontal size={14} />
                </div>
                <div className={styles.studioTitleWrap}>
                  <span className={styles.mainTitle}>AlgoMatic Custom Studio Workstation</span>
                  <span className={styles.subTitle}>
                    Configuring Phase {steps[activeStep].number}: {steps[activeStep].title}
                  </span>
                </div>
              </div>

              <div className={styles.barRight}>
                <span className={styles.specEngineBadge}>
                  <span className={styles.pulseDot} />
                  Strategy Engine: {selectedPlatform} • {selectedTimeframe}
                </span>
              </div>
            </div>

            {/* Main Workbench Body: 2-Column Studio Grid */}
            <div className={styles.workbenchGrid}>
              {/* Left Column: Interactive Form Controls for Active Step */}
              <div className={styles.configControlsPanel}>
                <div className={styles.phaseHeaderRow}>
                  <div className={styles.phaseNumberBadge}>{steps[activeStep].number}</div>
                  <div className={styles.phaseHeaderText}>
                    <h4>{steps[activeStep].title}</h4>
                    <p>{steps[activeStep].subtitle}</p>
                  </div>
                  <span className={styles.phaseTag}>{steps[activeStep].badge}</span>
                </div>

                <div className={styles.activePhaseControls}>
                  {/* STEP 1: Basic Bot Settings */}
                  {activeStep === 0 && (
                    <div className={styles.phaseInputsView}>
                      <div className={styles.inputFieldGroup}>
                        <label>Bot Identification Name</label>
                        <div className={styles.mockInputBox}>
                          <span className={styles.inputText}>XAU Arbitrage Scalper Pro</span>
                          <span className={styles.inputVersionTag}>v1.0 Production</span>
                        </div>
                      </div>

                      <div className={styles.inputFieldGroup}>
                        <label>Target Trading Platform (Select to switch)</label>
                        <div className={styles.platformSelectorRow}>
                          {[
                            { name: "TradingView", label: "Pine / Webhook" },
                            { name: "Python Core", label: "Async API Engine" },
                            { name: "cTrader", label: "cBot Algorithmic" },
                            { name: "Custom API", label: "WebSocket / REST" },
                          ].map((plt) => (
                            <button
                              key={plt.name}
                              type="button"
                              className={`${styles.platformSelectBtn} ${selectedPlatform === plt.name ? styles.platformSelectActive : ""
                                }`}
                              onClick={() => setSelectedPlatform(plt.name)}
                            >
                              <span className={styles.pltName}>{plt.name}</span>
                              <span className={styles.pltLabel}>{plt.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className={styles.twoColRow}>
                        <div className={styles.inputFieldGroup}>
                          <label>Market & Trading Symbol</label>
                          <div className={styles.presetBadgeBox}>
                            <span className={styles.badgeKey}>Asset:</span>
                            <span className={styles.badgeVal}>XAUUSD (Gold)</span>
                          </div>
                        </div>

                        <div className={styles.inputFieldGroup}>
                          <label>Execution Timeframe</label>
                          <div className={styles.tfButtonGroup}>
                            {["M1", "M5", "M15", "H1", "H4"].map((tf) => (
                              <button
                                key={tf}
                                type="button"
                                className={`${styles.tfBtn} ${selectedTimeframe === tf ? styles.tfBtnActive : ""
                                  }`}
                                onClick={() => setSelectedTimeframe(tf)}
                              >
                                {tf}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Entry and Exit Conditions */}
                  {activeStep === 1 && (
                    <div className={styles.phaseInputsView}>
                      <div className={styles.inputFieldGroup}>
                        <label>Selected Indicator Stack (Click to toggle logic)</label>
                        <div className={styles.indicatorPillsWrapper}>
                          {[
                            "EMA 20/50",
                            "RSI (14)",
                            "MACD (12,26,9)",
                            "Bollinger Bands",
                            "Volume ATR",
                          ].map((ind) => {
                            const isSelected = activeIndicators.includes(ind);
                            return (
                              <button
                                key={ind}
                                type="button"
                                className={`${styles.indPillBtn} ${isSelected ? styles.indPillActive : ""
                                  }`}
                                onClick={() => toggleIndicator(ind)}
                              >
                                {isSelected ? "✓ " : "+ "}
                                {ind}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className={styles.signalCardsStack}>
                        <div className={styles.signalCardBuy}>
                          <div className={styles.signalHeader}>
                            <span className={styles.signalTagBuy}>LONG / BUY CONDITION</span>
                            <span className={styles.signalLogic}>Multi-indicator Confluence</span>
                          </div>
                          <div className={styles.conditionFormula}>
                            <code>Fast EMA(20) &gt; Slow EMA(50)</code>
                            <span className={styles.andBadge}>AND</span>
                            <code>RSI(14) &lt; 35 (Oversold)</code>
                          </div>
                        </div>

                        <div className={styles.signalCardSell}>
                          <div className={styles.signalHeader}>
                            <span className={styles.signalTagSell}>SHORT / SELL CONDITION</span>
                            <span className={styles.signalLogic}>Multi-indicator Confluence</span>
                          </div>
                          <div className={styles.conditionFormula}>
                            <code>Fast EMA(20) &lt; Slow EMA(50)</code>
                            <span className={styles.andBadge}>AND</span>
                            <code>RSI(14) &gt; 65 (Overbought)</code>
                          </div>
                        </div>

                        <div className={styles.exitFormulaCard}>
                          <span className={styles.exitTag}>AUTO-EXIT RULE:</span>
                          <span>Opposite EMA crossover signal OR Target TP / Stop Loss reached</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Risk Management */}
                  {activeStep === 2 && (
                    <div className={styles.phaseInputsView}>
                      <div className={styles.riskMetricsGrid}>
                        <div className={styles.metricCard}>
                          <div className={styles.metricTop}>
                            <span className={styles.metricName}>Stop Loss</span>
                            <span className={styles.metricBadgeRed}>Protective</span>
                          </div>
                          <div className={styles.metricValue}>25.0 Pips</div>
                          <span className={styles.metricNote}>Dynamic ATR multi-point limit</span>
                        </div>

                        <div className={styles.metricCard}>
                          <div className={styles.metricTop}>
                            <span className={styles.metricName}>Take Profit</span>
                            <span className={styles.metricBadgeGreen}>1 : 2.0 Ratio</span>
                          </div>
                          <div className={styles.metricValue}>50.0 Pips</div>
                          <span className={styles.metricNote}>Dynamic trailing profit target</span>
                        </div>

                        <div className={styles.metricCard}>
                          <div className={styles.metricTop}>
                            <span className={styles.metricName}>Risk Per Trade</span>
                            <span className={styles.metricBadgePurple}>Safe Sizing</span>
                          </div>
                          <div className={styles.metricValue}>1.0% Equity</div>
                          <span className={styles.metricNote}>Auto-calculated lot scale</span>
                        </div>

                        <div className={styles.metricCard}>
                          <div className={styles.metricTop}>
                            <span className={styles.metricName}>Max Daily Loss</span>
                            <span className={styles.metricBadgeAmber}>Circuit Breaker</span>
                          </div>
                          <div className={styles.metricValue}>3.0% Max</div>
                          <span className={styles.metricNote}>Hard stop trading for 24h</span>
                        </div>
                      </div>

                      <div className={styles.riskGuardInfoRow}>
                        <div className={styles.guardItem}>
                          <span className={styles.guardKey}>Max Concurrent Positions:</span>
                          <strong className={styles.guardVal}>3 Trades Max</strong>
                        </div>
                        <div className={styles.guardItem}>
                          <span className={styles.guardKey}>Lot Compounding:</span>
                          <strong className={styles.guardVal}>Exponential Balance Scaling</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Advanced Parameters */}
                  {activeStep === 3 && (
                    <div className={styles.phaseInputsView}>
                      <div className={styles.switchesList}>
                        <div
                          className={styles.switchRowItem}
                          onClick={() => setSessionFilterActive(!sessionFilterActive)}
                        >
                          <div className={styles.switchInfo}>
                            <h6>Trading Session Restrictor</h6>
                            <p>Execute exclusively during London & New York overlap (13:00 - 17:00 UTC)</p>
                          </div>
                          <div
                            className={`${styles.toggleSwitch} ${sessionFilterActive ? styles.toggleOn : ""
                              }`}
                          >
                            <span />
                          </div>
                        </div>

                        <div
                          className={styles.switchRowItem}
                          onClick={() => setSpreadFilterActive(!spreadFilterActive)}
                        >
                          <div className={styles.switchInfo}>
                            <h6>Maximum Spread Filter</h6>
                            <p>Reject order execution if broker spread exceeds 1.2 pips</p>
                          </div>
                          <div
                            className={`${styles.toggleSwitch} ${spreadFilterActive ? styles.toggleOn : ""
                              }`}
                          >
                            <span />
                          </div>
                        </div>

                        <div
                          className={styles.switchRowItem}
                          onClick={() => setTrailingStopActive(!trailingStopActive)}
                        >
                          <div className={styles.switchInfo}>
                            <h6>Dynamic Trailing Stop</h6>
                            <p>Locks in profits once trade achieves +15 pips, trails at 8 pips</p>
                          </div>
                          <div
                            className={`${styles.toggleSwitch} ${trailingStopActive ? styles.toggleOn : ""
                              }`}
                          >
                            <span />
                          </div>
                        </div>

                        <div
                          className={styles.switchRowItem}
                          onClick={() => setBreakEvenActive(!breakEvenActive)}
                        >
                          <div className={styles.switchInfo}>
                            <h6>Automated Break-Even Trigger</h6>
                            <p>Move stop loss to entry price + 2 pips after +18 pips in green</p>
                          </div>
                          <div
                            className={`${styles.toggleSwitch} ${breakEvenActive ? styles.toggleOn : ""
                              }`}
                          >
                            <span />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 5: Review and Generate */}
                  {activeStep === 4 && (
                    <div className={styles.phaseInputsView}>
                      <div className={styles.validationReportBox}>
                        <div className={styles.reportHead}>
                          <span className={styles.reportIcon}>✓</span>
                          <div>
                            <h5>Strategy Configuration 100% Validated</h5>
                            <p>All safety constraints and execution parameters passed integrity test</p>
                          </div>
                        </div>

                        <div className={styles.checklistGrid}>
                          <div className={styles.checkCard}>
                            <span className={styles.checkDot}>✓</span>
                            <span>Platform: {selectedPlatform} ({selectedTimeframe})</span>
                          </div>
                          <div className={styles.checkCard}>
                            <span className={styles.checkDot}>✓</span>
                            <span>Rules: {activeIndicators.join(", ")}</span>
                          </div>
                          <div className={styles.checkCard}>
                            <span className={styles.checkDot}>✓</span>
                            <span>Safety: 1:2 R:R (SL 25 / TP 50)</span>
                          </div>
                          <div className={styles.checkCard}>
                            <span className={styles.checkDot}>✓</span>
                            <span>Execution: Trailing & Spread On</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Live Strategy Architecture Inspector */}
              <div className={styles.blueprintInspectorPanel}>
                <div className={styles.inspectorHeader}>
                  <div className={styles.inspectorTitleWrap}>
                    <Code2 size={16} className={styles.inspectorIcon} />
                    <span>Live Architecture Inspector</span>
                  </div>
                </div>

                <div className={styles.blueprintContent}>
                  {/* Live Spec Overview Card */}
                  <div className={styles.specOverviewCard}>
                    <div className={styles.specHeaderRow}>
                      <span className={styles.specBotName}>XAU Arbitrage Scalper Pro</span>
                      <span className={styles.specPlatformPill}>{selectedPlatform}</span>
                    </div>

                    <div className={styles.specMiniGrid}>
                      <div className={styles.miniItem}>
                        <span className={styles.miniLabel}>Symbol:</span>
                        <span className={styles.miniVal}>XAUUSD (Gold)</span>
                      </div>
                      <div className={styles.miniItem}>
                        <span className={styles.miniLabel}>Timeframe:</span>
                        <span className={styles.miniVal}>{selectedTimeframe}</span>
                      </div>
                      <div className={styles.miniItem}>
                        <span className={styles.miniLabel}>R:R Ratio:</span>
                        <span className={styles.miniVal}>1 : 2.0</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Risk-Reward Meter */}
                  <div className={styles.riskRewardMeterBlock}>
                    <div className={styles.meterHeader}>
                      <span>Risk-Reward Calibration</span>
                      <strong>1 : 2.0 (Dynamic 25 / 50 Pips)</strong>
                    </div>
                    <div className={styles.meterTrack}>
                      <div className={styles.meterRiskPortion} style={{ width: "33%" }}>
                        <span>Risk 1.0%</span>
                      </div>
                      <div className={styles.meterRewardPortion} style={{ width: "67%" }}>
                        <span>Target 2.0%</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Signals Breakdown */}
                  <div className={styles.signalsBreakdownBox}>
                    <span className={styles.breakdownTitle}>Active Architecture Nodes</span>
                    <div className={styles.nodesList}>
                      <div className={styles.nodeItem}>
                        <span className={styles.nodeDot} />
                        <span className={styles.nodeKey}>Signal Stack:</span>
                        <span className={styles.nodeVal}>{activeIndicators.join(" + ")}</span>
                      </div>
                      <div className={styles.nodeItem}>
                        <span className={styles.nodeDot} />
                        <span className={styles.nodeKey}>Spread Filter:</span>
                        <span className={styles.nodeVal}>
                          {spreadFilterActive ? "< 1.2 Pips Max" : "Disabled"}
                        </span>
                      </div>
                      <div className={styles.nodeItem}>
                        <span className={styles.nodeDot} />
                        <span className={styles.nodeKey}>Trailing Stop:</span>
                        <span className={styles.nodeVal}>
                          {trailingStopActive ? "Active (+15 Pips)" : "Disabled"}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Workbench Bottom Footer Bar */}
            <div className={styles.workbenchFooterBar}>
              <div className={styles.stepperSummary}>
                <span className={styles.phaseCounterText}>
                  Phase {activeStep + 1} of {steps.length}:
                </span>
                <span className={styles.activePhaseName}>{steps[activeStep].title}</span>
              </div>

              <div className={styles.footerNavButtons}>
                <button
                  type="button"
                  className={styles.navBtnPrev}
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                >
                  <ArrowLeft size={14} />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  className={styles.navBtnNext}
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                >
                  <span>
                    {activeStep === steps.length - 1
                      ? "Generate Your Strategy"
                      : "Next Step"}
                  </span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner (AlgoMatic Theme) */}
        <div className={styles.builderBottomCtaCard}>
          <div className={styles.ctaGlowSphere} />
          <div className={styles.ctaContentCol}>
            <h4>
              Know your strategy? <span>Build it your way.</span>
            </h4>
            <p>
              Configure the rules and parameters that define how your bot should operate with our
              high-precision custom builder.
            </p>
          </div>
          <div className={styles.ctaButtonCol}>
            <Commonarrowbutton
              Text="Configure Bot Now"
              onClick={() => setShowLogin(true)}
              buttonclassName={styles.themeCtaBtn}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
