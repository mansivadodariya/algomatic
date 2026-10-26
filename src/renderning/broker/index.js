import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./broker.module.scss";
import BrokerHeroBanner from "./brokerHeroBanner";
import BrokerListing from "./brokerListing";
import { ArrowRight, MessageSquare, Bot, Key, CheckCircle2 } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

export default function Broker() {
  const { utilitySettings } = useAppContext();
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const steps = [
    {
      num: "01",
      title: "Choose a Certified Broker",
      desc: "Select an institutional or retail broker matching your preferred asset class, spreads, and leverage from our verified directory.",
    },
    {
      num: "02",
      title: "Generate Trading Keys / Account",
      desc: "Create an active trading account. Obtain your secure read/trade API credentials or MetaTrader 4/5 account login.",
    },
    {
      num: "03",
      title: "Deploy Automated Bot",
      desc: "Link your credentials into Algomatic. Launch any strategy from our Marketplace with automated 24/7 risk management.",
    },
  ];

  const faqs = [
    {
      q: "Can I use Algomatic bots on any broker or only listed ones?",
      a: "You can connect Algomatic bots to any broker supporting standard FIX Protocol, REST Webhooks, or MetaTrader 4 / MetaTrader 5 terminals. Our directory showcases brokers with certified low-latency bridges.",
    },
    {
      q: "Are my broker account credentials secure?",
      a: "Yes. Algomatic operates using encrypted read/trade tokens or client-side terminal routing. We never request or store withdrawal permissions.",
    },
    {
      q: "What is the recommended broker execution model for bot trading?",
      a: "We recommend True ECN or STP (Straight-Through Processing) accounts with raw spreads starting from 0.0 pips and direct market depth for high-frequency or scalping algorithms.",
    },
    {
      q: "Do these brokers support Prop Firm challenge accounts?",
      a: "Yes! Many listed brokers and prop-friendly liquidity providers offer low slippage and no minimum trade duration constraints, perfect for algorithmic challenge passing.",
    },
    {
      q: "How does VPS hosting improve execution speed?",
      a: "Deploying bots on our co-located Equinix LD4 / NY4 servers ensures 0.0ms - 1.5ms latency directly to the broker matching engine, preventing order slippage during news spikes.",
    },
  ];

  const cleanPhone = (utilitySettings?.phoneNo || "917046279434").replace(/[^0-9]/g, "");

  return (
    <div className={styles.brokerPageMain}>
      {/* 1. HERO BANNER */}
      <BrokerHeroBanner />

      {/* 2. BROKER LISTING WITH LIVE SEARCH & FILTERS */}
      <BrokerListing />

      {/* 3. THREE-STEP INTEGRATION PROCESS */}
      <section className={styles.integrationStepsSection}>
        <div className="container-xl">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Simple Onboarding</span>
            <h2>
              How to Connect Your <span>Broker with Algomatic</span>
            </h2>
            <p>
              Get started in minutes with direct execution and institutional-grade algorithmic bot
              automation.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((st, i) => (
              <div key={i} className={styles.stepCard}>
                <div className={styles.stepNumber}>{st.num}</div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className="container-xl">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Frequently Asked Questions</span>
            <h2>
              Broker Integration <span>FAQs</span>
            </h2>
            <p>
              Everything you need to know about connecting accounts, latency, spreads, and supported
              platforms.
            </p>
          </div>

          <div className={styles.faqAccordion}>
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className={`${styles.faqItem} ${openFaq === idx ? styles.open : ""}`}
              >
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  <span>{item.q}</span>
                  <span
                    className={`${styles.faqIcon} ${openFaq === idx ? styles.rotated : ""}`}
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

      {/* 5. BOTTOM CTA BANNER */}
      <section className={styles.ctaBanner}>
        <div className="container-xl">
          <div className={styles.ctaBox}>
            <div className={styles.ctaGlowSphere} />
            <div className={styles.ctaText}>
              <h3>
                Need Help Choosing the <span>Right Broker?</span>
              </h3>
              <p>
                Our quant specialists and brokerage experts can help you select the optimal
                liquidity provider based on your target trading strategies, deposit size, and latency requirements.
              </p>
            </div>

            <div className={styles.ctaButtons}>
              <Link href="/ask-our-expert" className={styles.ctaPrimaryBtn}>
                <span>Consult Our Expert</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href={`https://wa.me/${cleanPhone}?text=Hi%20Algomatic,%20I%20need%20assistance%20choosing%20a%20broker%20for%20bot%20trading.`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondaryBtn}
              >
                <MessageSquare size={16} />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
