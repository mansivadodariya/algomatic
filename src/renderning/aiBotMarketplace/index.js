import React, { useEffect, useState } from "react";
import styles from "./aiBotMarketplace.module.scss";
import AiMarketplaceHeroBanner from "./aiMarketplaceHeroBanner";
import Marketplacesection from "../homepage/marketplacesection";

export default function AiBotMarketplace() {
  const [openFaq, setOpenFaq] = useState(0);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const faqItems = [
    {
      q: "How do I activate and run a trading bot from the marketplace?",
      a: "Once you choose a strategy plan, you receive instant access along with detailed configuration guides. Simply link your broker account and activate automated trading.",
    },
    {
      q: "Do I need coding knowledge to use these bots?",
      a: "No coding skills are required! All marketplace bots are pre-compiled and fully automated with pre-configured presets for optimal execution.",
    },
    {
      q: "Can I backtest and verify strategies before using them?",
      a: "Yes. All strategies are tested against rigorous historical tick data to evaluate win rates, profit factors, and maximum drawdown metrics.",
    },
    {
      q: "Can I deploy the marketplace bots on any broker?",
      a: "Yes! Our bots are built to connect seamlessly with leading brokers, supporting standard, ECN, and prop firm accounts.",
    },
    {
      q: "What risk controls are automatically built into these bots?",
      a: "Every bot comes equipped with hard stop loss, trailing stop loss, take profit targets, maximum daily drawdown protection, and spread filters.",
    },
  ];

  return (
    <div className={styles.marketplaceContainer}>
      {/* 1. HERO BANNER */}
      <AiMarketplaceHeroBanner />

      {/* 2. MARKETPLACE BOTS SECTION (from Homepage) */}
      <Marketplacesection />

      {/* 4. FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className="container-xl">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Got Questions?</span>
            <h2>
              Frequently Asked <span>Questions</span>
            </h2>
            <p>
              Everything you need to know about creating, backtesting, and running
              Algomatic AI trading bots.
            </p>
          </div>

          <div className={styles.faqAccordion}>
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className={`${styles.faqItem} ${
                  openFaq === idx ? styles.open : ""
                }`}
              >
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  <span>{item.q}</span>
                  <span
                    className={`${styles.faqIcon} ${
                      openFaq === idx ? styles.rotated : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === idx && (
                  <div className={styles.faqAnswer}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
