import React, { useState, useEffect, useRef } from "react";
import styles from "./howitworkssection.module.scss";
import Commonlable from "@/components/commonlable";
import {
  Scan,
  Zap,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Layers,
  ChevronRight,
} from "lucide-react";

const cardimage1 = "/assets/images/cardimage1.svg";
const cardimage2 = "/assets/images/cardimage2.svg";
const cardimage3 = "/assets/images/cardimage3.svg";

export default function Howitworkssection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNumber: "01",
      stepTag: "SCANNING ENGINE",
      title: "Price Gap Detection",
      description:
        "Algomatic scans the Spot and Future markets for profitable price discrepancies.",
      image: cardimage1,
      badgeText: "Real-time Scanner",
      icon: Scan,
      accentColor: "#9657fa",
      floatingTag: "⚡ Spread Found: +$63.00 Gap",
      features: [
        {
          title: "Spot vs Futures Scanner",
          desc: "Continuously tracks live quotes across global spot and derivatives exchanges.",
        },
        {
          title: "Nanosecond Discrepancy Alert",
          desc: "Catches micro-deviations before the market naturally rebalances.",
        },
      ],
    },
    {
      stepNumber: "02",
      stepTag: "DUAL-LEG EXECUTION",
      title: "Trade Execution",
      description:
        "It buys low in the Spot market and sells high in the Future market, securing risk-free profits.",
      image: cardimage2,
      badgeText: "Instant Hedged Pair",
      icon: Zap,
      accentColor: "#8b5cf6",
      floatingTag: "🔒 100% Market-Neutral Hedged",
      features: [
        {
          title: "Simultaneous Dual-Leg Fill",
          desc: "Executes buy on Spot and sell on Futures in milliseconds with zero slip.",
        },
        {
          title: "100% Market Hedged",
          desc: "Completely neutralizes directional risk so gold price swings do not matter.",
        },
      ],
    },
    {
      stepNumber: "03",
      stepTag: "YIELD SETTLEMENT",
      title: "Profit Logging",
      description:
        "With nanosecond execution, Algomatic ensures seamless trades and consistent profits.",
      image: cardimage3,
      badgeText: "Zero Drawdown",
      icon: TrendingUp,
      accentColor: "#22c55e",
      floatingTag: "💰 Instant Settlement & Yield Locked",
      features: [
        {
          title: "Instant Spread Capture",
          desc: "The spread differential is locked directly into your trading account balance.",
        },
        {
          title: "Automated Ledger & Telemetry",
          desc: "Transparent logs, execution timestamps, and real-time performance tracking.",
        },
      ],
    },
  ];

  // Infinite auto-advance through the 3 phases every 5 seconds continuously
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeStep, steps.length]);

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section className={styles.howitworkssectionmain} id="Howitworks">
      {/* Background ambient lighting */}
      <div className={styles.ambientGlow}></div>

      <div className="container-xl">
        {/* Section Header */}
        <div className={styles.howitworkstitle}>
          <Commonlable Text="Work Pattern" />
          <h3>
            How It <span>Works?</span>
          </h3>
          <p>
            Algomatic detects price inefficiencies and executes trades instantly,
            with zero risk.
          </p>
        </div>

        {/* =========================================================================
            STAGE CONTROLLER (3 Connected Interactive Phase Selectors)
           ========================================================================= */}
        <div className={styles.stageControllerTrack}>
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                type="button"
                key={idx}
                className={`${styles.stageSelectorBtn} ${
                  isActive ? styles.activeStageBtn : ""
                }`}
                onClick={() => setActiveStep(idx)}
              >
                <div className={styles.btnTopRow}>
                  <div className={styles.stepNumPill}>
                    <span>PHASE</span>
                    <strong>{step.stepNumber}</strong>
                  </div>
                  <div className={styles.iconCircle}>
                    <StepIcon size={16} />
                  </div>
                </div>

                <div className={styles.btnBody}>
                  <h5>{step.title}</h5>
                  <span className={styles.badgeLabel}>{step.badgeText}</span>
                </div>

                {/* Animated active timeline bar */}
                <div className={styles.btnProgressTrack}>
                  {isActive && (
                    <div
                      key={`prog-bar-${activeStep}`}
                      className={`${styles.btnProgressBar} ${styles.runningProgress}`}
                    ></div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            CENTRAL SPOTLIGHT SHOWCASE (Dynamic Interactive Stage Theater)
           ========================================================================= */}
        <div className={styles.spotlightContainer}>
          {/* Left Column: Stage Detail & Telemetry */}
          <div className={styles.spotlightContentCol}>
            <div className={styles.stageTagBadge}>
              <span className={styles.stageTagDot}></span>
              <span>
                STAGE {current.stepNumber} OF 03 • {current.stepTag}
              </span>
            </div>

            <h4 className={styles.stageTitle}>{current.title}</h4>
            <p className={styles.stageDescription}>{current.description}</p>

            {/* Deep-Dive Feature Breakdown */}
            <div className={styles.specificationsList}>
              {current.features.map((feat, fIdx) => (
                <div className={styles.specItem} key={fIdx}>
                  <div className={styles.specIconBox}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                  </div>
                  <div className={styles.specText}>
                    <h6>{feat.title}</h6>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Stage Switcher Controls */}
            <div className={styles.stageNavigationControls}>
              <button
                type="button"
                className={styles.navArrowBtn}
                aria-label="Previous Step"
                onClick={() =>
                  setActiveStep((prev) =>
                    prev === 0 ? steps.length - 1 : prev - 1
                  )
                }
              >
                <ArrowLeft size={16} />
              </button>

              <div className={styles.stageDotsRow}>
                {steps.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    aria-label={`Go to step ${dotIdx + 1}`}
                    className={`${styles.stageDot} ${
                      activeStep === dotIdx ? styles.activeDot : ""
                    }`}
                    onClick={() => setActiveStep(dotIdx)}
                  ></button>
                ))}
              </div>

              <button
                type="button"
                className={styles.navArrowBtn}
                aria-label="Next Step"
                onClick={() =>
                  setActiveStep((prev) => (prev + 1) % steps.length)
                }
              >
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                className={styles.nextStageActionBtn}
                onClick={() =>
                  setActiveStep((prev) => (prev + 1) % steps.length)
                }
              >
                <span>Next Stage</span>
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Stage Graphic Display Frame */}
          <div className={styles.spotlightVisualCol}>
            <div className={styles.visualFrameCard}>
              {/* Floating Live Telemetry Badge */}
              <div className={styles.floatingStatusBadge}>
                <span className={styles.badgePulse}></span>
                <span>{current.floatingTag}</span>
              </div>

              {/* Graphic Display Showcase */}
              <div className={styles.imageShowcaseBox}>
                <div className={styles.ambientImageGlow}></div>
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  className={styles.stageIllustration}
                />
              </div>

              {/* Bottom Micro Footer */}
              <div className={styles.frameFooter}>
                <div className={styles.frameFooterLeft}>
                  <ShieldCheck size={14} className={styles.footerShield} />
                  <span>Zero Market Risk Guarantee</span>
                </div>
                <span className={styles.executionSpeed}>Latency: &lt; 15ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
