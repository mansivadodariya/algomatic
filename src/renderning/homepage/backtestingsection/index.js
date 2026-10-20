import React, { useState } from "react";
import styles from "./backtestingsection.module.scss";
import { useAppContext } from "@/context/AppContext";
import {
  Copy,
  Check,
  ShieldCheck,
  Server,
  Lock,
  KeyRound,
  ArrowUpRight,
  Activity,
  CheckCircle2,
} from "lucide-react";

const backtestingimage = "/assets/images/backtestingimage.png";
const myfxbook = "/assets/images/myfxbook.png";

export default function Backtestingsection() {
  const { utilitySettings } = useAppContext();
  const [copiedField, setCopiedField] = useState(null);

  const brokerName = utilitySettings?.brokerName || "NewEra Capital";
  const serverName = "NeweraCapitalMarkets-Live";
  const mt5Id = utilitySettings?.MT5ID || "250129";
  const investorPassword = utilitySettings?.investorPassword || "@Algomaticbot1";

  const handleCopy = (text, field) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  return (
    <section className={styles.backtestingsectionmain} id="Backtesting">
      {/* Background ambient lighting */}
      <div className={styles.ambientBackdrop}></div>

      <div className="container-xl">
        <div className={styles.backtestingsection}>
          {/* Top subtle ambient line */}
          <div className={styles.topAccentBar}></div>

          {/* Left Column: Phone Showcase Spotlight */}
          <div className={styles.backtestingsectionleft}>
            <div className={styles.spotlightBackdrop}>
              <div className={styles.ambientPhoneGlow}></div>

              {/* Floating verified badge */}
              <div className={styles.verifiedFloatingBadge}>
                <span className={styles.pulseDot}></span>
                <span>Live MT5 Verified</span>
              </div>

              {/* Phone graphic showcase */}
              <div className={styles.phoneImageWrapper}>
                <img src={backtestingimage} alt="Live Backtesting Trading Accounts" />
              </div>

              {/* Bottom live status strip */}
              <div className={styles.verifiedBottomTag}>
                <ShieldCheck size={14} className={styles.shieldIcon} />
                <span>100% Real Trading Telemetry</span>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Credentials & MyFxBook Showcase */}
          <div className={styles.backtestingsectionright}>
            <div className={styles.headerBlock}>
              <h3>
                <span>Backtesting</span> Data
              </h3>
              <p className={styles.subtitle}>
                Check our live account history and verify real-time performance directly in MetaTrader 5 or MyFxBook.
              </p>
            </div>

            {/* MT5 Investor Access Terminal Card */}
            <div className={styles.credentialsCard}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalHeaderLeft}>
                  <div className={styles.terminalDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className={styles.terminalTitle}>MT5 Read-Only Investor Access</span>
                </div>
                <span className={styles.liveBadge}>
                  <Activity size={12} /> Live Active
                </span>
              </div>

              <div className={styles.credentialsGrid}>
                {/* Broker Name */}
                <div className={styles.credItem}>
                  <div className={styles.credLabelRow}>
                    <ShieldCheck size={14} className={styles.credIcon} />
                    <span>Broker Name</span>
                  </div>
                  <strong className={styles.credValue}>{brokerName}</strong>
                </div>

                {/* Server */}
                <div className={styles.credItem}>
                  <div className={styles.credLabelRow}>
                    <Server size={14} className={styles.credIcon} />
                    <span>Server</span>
                  </div>
                  <strong className={styles.credValue}>{serverName}</strong>
                </div>

                {/* MT5 ID with copy */}
                <div className={styles.credItem}>
                  <div className={styles.credLabelRow}>
                    <KeyRound size={14} className={styles.credIcon} />
                    <span>MT5 ID</span>
                  </div>
                  <div className={styles.copyValueRow}>
                    <strong className={styles.credValueMono}>{mt5Id}</strong>
                    <button
                      type="button"
                      className={styles.copyBtn}
                      onClick={() => handleCopy(mt5Id, "mt5Id")}
                      title="Copy MT5 ID"
                    >
                      {copiedField === "mt5Id" ? (
                        <>
                          <Check size={12} className={styles.checkIcon} />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Investor Password with copy */}
                <div className={styles.credItem}>
                  <div className={styles.credLabelRow}>
                    <Lock size={14} className={styles.credIcon} />
                    <span>Investor Password</span>
                  </div>
                  <div className={styles.copyValueRow}>
                    <strong className={styles.credValueMono}>{investorPassword}</strong>
                    <button
                      type="button"
                      className={styles.copyBtn}
                      onClick={() => handleCopy(investorPassword, "password")}
                      title="Copy Investor Password"
                    >
                      {copiedField === "password" ? (
                        <>
                          <Check size={12} className={styles.checkIcon} />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Verification & Portfolio Links Deck */}
            <div className={styles.verificationDeck}>
              <div className={styles.myfxbookBrandBox}>
                <img src={myfxbook} alt="Myfxbook Verified" />
                <span className={styles.auditTag}>Audited Track Record</span>
              </div>

              <div className={styles.portfolioLinksRow}>
                {/* $100K Portfolio Button */}
                <a
                  href="https://www.myfxbook.com/members/Newera365/shameer-ahmed/12107681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.portfolioBtn}
                >
                  <div className={styles.btnContent}>
                    <span className={styles.btnLabel}>Portfolio</span>
                    <strong className={styles.btnValue}>$100K</strong>
                  </div>
                  <div className={styles.btnIconCircle}>
                    <ArrowUpRight size={14} />
                  </div>
                </a>

                {/* $10K Portfolio Button */}
                <a
                  href="https://www.myfxbook.com/members/Newera365/gaurav-salaria/12107697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.portfolioBtn}
                >
                  <div className={styles.btnContent}>
                    <span className={styles.btnLabel}>Portfolio</span>
                    <strong className={styles.btnValue}>$10K</strong>
                  </div>
                  <div className={styles.btnIconCircle}>
                    <ArrowUpRight size={14} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
