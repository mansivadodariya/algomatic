import React from "react";
import styles from "./keyfeaturessection.module.scss";
import Commonlable from "@/components/commonlable";
import Hoursicon from "../../../../public/assets/icons/hoursicon";
import Mindicon from "../../../../public/assets/icons/mindicon";
import Pricegapicon from "../../../../public/assets/icons/pricegapicon";
import Shockicon from "../../../../public/assets/icons/shockicon";
import Brokericon from "../../../../public/assets/icons/brokericon";
import Instanttradicon from "../../../../public/assets/icons/instanttradicon";
import Lockicon from "../../../../public/assets/icons/lockicon";
import Settingicon from "../../../../public/assets/icons/settingicon";

export default function Keyfeaturessection() {
  const Keyfeaturesmap = [
    {
      step: "01",
      title: "24/5 Automated Trading",
      description:
        "Algomatic continuously monitors markets and executes trades even while you sleep, ensuring you never miss a profitable opportunity.",
      icon: Hoursicon,
    },
    {
      step: "02",
      title: "Expert Advise",
      description:
        "Combining the accuracy of expert advisors with the insight of experienced traders, Algomatic delivers smarter, more reliable decisions",
      icon: Mindicon,
    },
    {
      step: "03",
      title: "Price Gap Arbitrage Engine",
      description:
        "Algomatic constantly scans Spot and Futures markets for even the smallest price gaps. When an opportunity appears, it executes high-speed trades to lock in profits before the gap closes.",
      icon: Pricegapicon,
    },
    {
      step: "04",
      title: "Real-Time Execution",
      description:
        "Trades are executed in milliseconds — far faster than any human reaction time. This lightning-fast execution ensures that price gaps are captured before they disappear, maximizing profitability.",
      icon: Shockicon,
    },
    {
      step: "05",
      title: "Broker Agnostic",
      description:
        "No need to change your broker. Algomatic is compatible with most MT4 and MT5 brokers, giving you the freedom to use your existing trading setup with zero limitations.",
      icon: Brokericon,
    },
    {
      step: "06",
      title: "Instant Trade Reports",
      description:
        "Stay informed with real-time updates on every trade executed by the bot. Access detailed logs, performance metrics, and profit reports directly from your dashboard, anytime.",
      icon: Instanttradicon,
    },
    {
      step: "07",
      title: "Encrypted & Secure",
      description:
        "Security is built into every layer of Algomatic. Your account data, MT5 credentials, and trading history are protected using enterprise-grade encryption and strict access controls.",
      icon: Lockicon,
    },
    {
      step: "08",
      title: "Emotionless Execution",
      description:
        "Algomatic trades without fear, greed, or hesitation. Every decision is based purely on logic, market data, and strategy — resulting in consistently rational, risk-free execution.",
      icon: Settingicon,
    },
  ];

  return (
    <section className={styles.keyfeaturessectionmain} id="Keyfeatures">
      <div className="container-xl">
        <div className={styles.keyfeaturesflx}>
          {/* Left Column (Sticky Sidebar) */}
          <div className={styles.keyfeaturesflxleft}>
            <Commonlable Text="Key Features" />
            <h5>
              <span>Power-Packed</span> Features, Built for Zero Losses
            </h5>
            <p>
              Everything you need for safe, smart, and automated gold trading.
            </p>
            <div className={styles.keyfeaturestagsflx}>
              <span className={styles.keyfeaturestag}>Robust Security</span>
              <span className={styles.keyfeaturestag}>Fast</span>
              <span className={styles.keyfeaturestag}>Accurate</span>
              <span className={styles.keyfeaturestag}>Automated Efficiency</span>
              <span className={styles.keyfeaturestag}>Profitable</span>
            </div>
          </div>

          {/* Right Column (Connected Glowing Timeline) */}
          <div className={styles.keyfeaturesflxright}>
            {/* Glowing Vertical Connecting Line */}
            <div className={styles.timelineLine}></div>

            {Keyfeaturesmap.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div className={styles.timelineItem} key={index}>
                  {/* Glowing Node Dot */}
                  <div className={styles.timelineNode}>
                    <div className={styles.nodeCore}></div>
                  </div>

                  {/* High-End Feature Card */}
                  <div className={styles.timelineCard}>
                    {/* Top ambient glow line */}
                    <div className={styles.cardHoverBar}></div>

                    <div className={styles.cardHeader}>
                      <div className={styles.keyfeaturesiconmain}>
                        <IconComponent />
                      </div>
                      <div className={styles.cardTitleWrap}>
                        <div className={styles.stepBadge}>STEP {item.step}</div>
                        <h6>{item.title}</h6>
                      </div>
                    </div>

                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
