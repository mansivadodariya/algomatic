import React from "react";
import styles from "./brokerHeroBanner.module.scss";
import { ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

export default function BrokerHeroBanner() {
  const highlights = [
    { icon: <Zap size={16} />, text: "Direct FIX API & MetaTrader 4/5" },
    { icon: <ShieldCheck size={16} />, text: "Top-Tier Global Regulatory Licenses" },
    { icon: <Globe size={16} />, text: "150+ Multi-Asset Markets" },
    { icon: <Cpu size={16} />, text: "0.0ms Low-Latency Server Bridge" },
  ];

  return (
    <section className={styles.heroBanner}>
      <div className={styles.glowCircleTop}></div>
      <div className="container-xl">
        <div className={styles.bannerContent}>
          <h1>
            Institutional & Retail <span>Trading Brokers</span>
          </h1>

          <p className={styles.description}>
            Connect with trusted global brokers and power your AlgomaticBot strategies with reliable liquidity, competitive spreads, fast execution, and seamless MetaTrader connectivity.
          </p>

          <div className={styles.highlightsRow}>
            {highlights.map((item, idx) => (
              <div key={idx} className={styles.highlightTag}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
