import React from "react";
import styles from "./askOurExpertHeroBanner.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";
import { useAppContext } from "@/context/AppContext";
import { Check } from "lucide-react";

export default function AskOurExpertHeroBanner() {
  const { utilitySettings } = useAppContext();

  return (
    <section className={styles.heroBanner}>
      <div className="container-xl">
        <div className={styles.bannerContent}>
          {/* Label */}
          <div className={styles.labelWrapper}>
            <Commonlable Text="Algomatic Quant Engineering" />
          </div>

          {/* Heading */}
          <h1>
            Turn Your Strategy Into Reality With <span>Expert Bot Development</span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Collaborate directly with our algorithmic trading engineers to design, build,
            backtest, and deploy personalized automated trading bots tailored precisely to your
            rules, risk parameters, and trading goals.
          </p>

          {/* Action Buttons */}
          <div className={styles.actionsRow}>
            <Commonarrowbutton
              Text="Submit Requirements"
              Butttonvarient="dark"
              link="#AskOurExpert"
            />
            <Commonarrowbutton
              Text="Talk to Quant Expert"
              Butttonvarient="Blueoutlined"
              link={`https://wa.me/${utilitySettings?.phoneNo || "917046279434"}`}
              Target="_blank"
            />
          </div>

          {/* Highlights */}
          <div className={styles.highlightsRow}>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>1-on-1 Expert Consultation</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>100% IP & Strategy Confidentiality</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Multi-Broker & API Integration</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Rigorous Historical Backtesting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
