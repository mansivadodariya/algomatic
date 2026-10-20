import React, { useState } from "react";
import styles from "./personalizedbotsection.module.scss";
import Commonlable from "@/components/commonlable";
import { useAppContext } from "@/context/AppContext";
import {
  Sparkles,
  UserCheck,
  Headphones,
  CheckCircle2,
  FileText,
  Briefcase,
  ShieldCheck,
  Send,
  MessageCircle,
  Lock,
  Code2,
  Cpu,
  BarChart3,
  ArrowRight,
  Clock,
  Check,
  ChevronRight,
} from "lucide-react";

export default function Personalizedbotsection() {
  const { utilitySettings } = useAppContext();

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("TradingView Webhook");
  const [market, setMarket] = useState("Forex & Metals");
  const [needType, setNeedType] = useState("Build a new trading bot");
  const [budget, setBudget] = useState("Need expert guidance");
  const [requirements, setRequirements] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const processSteps = [
    {
      number: "01",
      title: "Share your requirements",
      subtitle:
        "Complete the bot development request form with your strategy idea, trading platform, instruments, preferred features, and budget.",
      icon: FileText,
      tag: "Scoping",
    },
    {
      number: "02",
      title: "Discuss your idea with our team",
      subtitle:
        "An expert contacts you to clarify your strategy, understand your expectations, and discuss the technical requirements.",
      icon: Headphones,
      tag: "Consultation",
    },
    {
      number: "03",
      title: "Review the project proposal",
      subtitle:
        "After assessing feasibility, our team shares the proposed scope, deliverables, estimated timeline, and pricing for your approval.",
      icon: Briefcase,
      tag: "Feasibility",
    },
    {
      number: "04",
      title: "Develop and review your bot",
      subtitle:
        "Once the scope is approved, the team develops the agreed bot, performs the specified checks, and shares the deliverables according to the project agreement.",
      icon: CheckCircle2,
      tag: "Deployment",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert("Please fill in your Full Name and Email Address.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section className={styles.personalizedsectionmain} id="AskOurExpert">
      <div className="container-xl">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIndexBadge}>
            <span className={styles.indexTitle}>PERSONALIZED BOT DEVELOPMENT</span>
          </div>

          <h2>
            Your Strategy. <span>Our Expertise.</span>
          </h2>

          <p className={styles.narrativeParagraph}>
            Have a unique trading idea or a strategy that needs custom development? Tell us what you
            want to build, submit your requirements through our contact form, and our team will reach
            out to discuss your project, technical requirements, feasibility, and next steps.
          </p>

          {/* Feature Badge Pills */}
          <div className={styles.pillBadgesRow}>
            <div className={styles.pillBadge}>
              <UserCheck size={16} className={styles.pillIcon} />
              <span>Custom Requirements</span>
            </div>
            <div className={styles.pillBadge}>
              <Headphones size={16} className={styles.pillIcon} />
              <span>Expert Consultation</span>
            </div>
            <div className={styles.pillBadge}>
              <Sparkles size={16} className={styles.pillIcon} />
              <span>Personalized Development</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            COMPONENT 1: HORIZONTAL CONNECTED TIMELINE JOURNEY
           ========================================================================= */}
        <div className={styles.timelineJourneySection}>

          <div className={styles.timelineTrackGrid}>
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={step.number} className={styles.timelineNodeCard}>
                  <div className={styles.nodeHeaderRow}>
                    <div className={styles.nodeIconCircle}>
                      <StepIcon size={20} />
                    </div>
                    <span className={styles.nodeNumberBadge}>{step.number}</span>
                  </div>

                  <span className={styles.nodeTag}>{step.tag}</span>
                  <h4 className={styles.nodeTitle}>{step.title}</h4>
                  <p className={styles.nodeSubtitle}>{step.subtitle}</p>

                  {idx < processSteps.length - 1 && (
                    <div className={styles.nodeArrowConnector}>
                      <ChevronRight size={18} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            COMPONENT 2: FULL-WIDTH CLEAN CONSULTATION DESK (SINGLE-CARD LAYOUT)
           ========================================================================= */}
        <div className={styles.fullWidthConsultationDesk}>
          {/* Card Top Title & Trust Bar */}
          <div className={styles.deskHeaderBar}>
            <div className={styles.deskHeaderTitleCol}>
              <div className={styles.deskBadge}>
                <Cpu size={14} />
                <span>Custom Engineering Desk</span>
              </div>
              <h3>Tell Us About Your Trading Bot</h3>
              <p>
                Submit your project specifications below for a confidential feasibility assessment
                by our quantitative development team.
              </p>
            </div>

            {/* Horizontal Trust Highlights */}
            <div className={styles.trustBadgesRow}>
              <div className={styles.trustItem}>
                <Lock size={14} className={styles.trustIcon} />
                <span>100% NDA Protected</span>
              </div>
              <div className={styles.trustItem}>
                <Code2 size={14} className={styles.trustIcon} />
                <span>MT5 • MT4 • TradingView • Python</span>
              </div>
              <div className={styles.trustItem}>
                <BarChart3 size={14} className={styles.trustIcon} />
                <span>Tick-by-Tick Stress Tested</span>
              </div>
              <div className={styles.trustItem}>
                <ShieldCheck size={14} className={styles.trustIcon} />
                <span>14-Day Delivery Warranty</span>
              </div>
            </div>
          </div>

          {/* Form Body or Success State */}
          <div className={styles.deskFormBody}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className={styles.singleCardForm}>
                {/* Section 1: Contact Details */}
                <div className={styles.formSectionBlock}>
                  <div className={styles.sectionHeaderLine}>
                    <span className={styles.sectionStepNum}>1</span>
                    <span className={styles.sectionHeading}>Your Contact Information</span>
                  </div>

                  <div className={styles.twoColumnGrid}>
                    <div className={styles.fieldBox}>
                      <label>
                        Full Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Henderson"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={styles.inputControl}
                      />
                    </div>

                    <div className={styles.fieldBox}>
                      <label>
                        Email Address <span>*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@trader.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.inputControl}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Platform & Asset */}
                <div className={styles.formSectionBlock}>
                  <div className={styles.sectionHeaderLine}>
                    <span className={styles.sectionStepNum}>2</span>
                    <span className={styles.sectionHeading}>Platform & Trading Instruments</span>
                  </div>

                  <div className={styles.selectionStack}>
                    <div className={styles.fieldBox}>
                      <label>Select Trading Platform</label>
                      <div className={styles.pillsRow}>
                        {[
                          "TradingView Webhook",
                          "Broker API / Webhook",
                          "Python Quant Engine",
                          "cTrader / Custom API",
                        ].map((plt) => (
                          <button
                            key={plt}
                            type="button"
                            className={`${styles.pillChoiceBtn} ${
                              platform === plt ? styles.pillChoiceActive : ""
                            }`}
                            onClick={() => setPlatform(plt)}
                          >
                            {platform === plt && <Check size={13} className={styles.checkIcon} />}
                            <span>{plt}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.twoColumnGrid}>
                      <div className={styles.fieldBox}>
                        <label>Market & Asset Focus</label>
                        <select
                          value={market}
                          onChange={(e) => setMarket(e.target.value)}
                          className={styles.selectControl}
                        >
                          <option value="Forex & Metals">Forex & Metals (Gold XAUUSD, EURUSD)</option>
                          <option value="Crypto">Crypto (BTC, ETH, Altcoins)</option>
                          <option value="Indices">Indices (US30, NAS100, SPX500)</option>
                          <option value="Multi-Asset">Multi-Asset Mixed Portfolio</option>
                        </select>
                      </div>

                      <div className={styles.fieldBox}>
                        <label>Estimated Project Budget</label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className={styles.selectControl}
                        >
                          <option value="Need expert guidance">Need expert guidance</option>
                          <option value="Under $1,000">Under $1,000</option>
                          <option value="$1,000 - $3,000">$1,000 - $3,000 (Recommended)</option>
                          <option value="$3,000+">$3,000+ Enterprise / Multi-strategy</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Project Scope */}
                <div className={styles.formSectionBlock}>
                  <div className={styles.sectionHeaderLine}>
                    <span className={styles.sectionStepNum}>3</span>
                    <span className={styles.sectionHeading}>What Would You Like to Build?</span>
                  </div>

                  <div className={styles.scopeOptionsGrid}>
                    {[
                      {
                        title: "Build a new trading bot",
                        desc: "Turn a strategy from scratch into an automated algorithm",
                      },
                      {
                        title: "Modify an existing bot",
                        desc: "Add new indicator filters, risk rules, or optimize speed",
                      },
                      {
                        title: "Convert indicator into bot",
                        desc: "Automate custom indicator signals into direct order execution",
                      },
                      {
                        title: "Discuss custom strategy idea",
                        desc: "Evaluate technical feasibility before committing to full build",
                      },
                    ].map((srv) => (
                      <div
                        key={srv.title}
                        className={`${styles.scopeCard} ${
                          needType === srv.title ? styles.scopeCardActive : ""
                        }`}
                        onClick={() => setNeedType(srv.title)}
                      >
                        <div className={styles.scopeRadio}>
                          <span className={styles.radioDot} />
                        </div>
                        <div className={styles.scopeText}>
                          <h6>{srv.title}</h6>
                          <p>{srv.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 4: Specifications Textarea */}
                <div className={styles.formSectionBlock}>
                  <div className={styles.sectionHeaderLine}>
                    <span className={styles.sectionStepNum}>4</span>
                    <span className={styles.sectionHeading}>
                      Strategy Specifications & Requirements <span>*</span>
                    </span>
                  </div>

                  <div className={styles.fieldBox}>
                    <textarea
                      rows={3}
                      required
                      placeholder="Share your entry/exit signals, indicators, preferred timeframe, risk parameters (SL/TP), or any custom rules..."
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      className={styles.textareaControl}
                    />
                    <span className={styles.helperText}>
                      Tip: You can include entry triggers, trailing stop requirements, or specific
                      broker conditions.
                    </span>
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className={styles.formBottomActionBar}>
                  <div className={styles.actionButtons}>
                    <button type="submit" className={styles.primarySubmitBtn}>
                      <Send size={15} />
                      <span>Submit Development Request</span>
                    </button>

                    <a
                      href={`https://wa.me/${utilitySettings?.phoneNo || ""}`}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.directWhatsappBtn}
                    >
                      <MessageCircle size={16} />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                  </div>

                  <div className={styles.ndaGuaranteeNote}>
                    <Lock size={13} />
                    <span>Strict NDA Guarantee • Confidential & Protected</span>
                  </div>
                </div>
              </form>
            ) : (
              <div className={styles.fullWidthSuccessView}>
                <div className={styles.successCheckIcon}>
                  <CheckCircle2 size={44} />
                </div>
                <h3>Request Logged Successfully!</h3>
                <p className={styles.successSubtext}>
                  Thank you, <strong>{fullName}</strong>. Your custom bot development project for{" "}
                  <strong>{platform}</strong> has been assigned to our senior quantitative trading
                  engineers.
                </p>

                <div className={styles.successMilestoneTracker}>
                  <div className={styles.trackerStep}>
                    <span className={styles.trackerBadge}>1</span>
                    <div>
                      <h6>Technical Review</h6>
                      <p>Quant team reviews feasibility & architecture within 24 hours</p>
                    </div>
                  </div>
                  <div className={styles.trackerStep}>
                    <span className={styles.trackerBadge}>2</span>
                    <div>
                      <h6>Formal Proposal</h6>
                      <p>Detailed technical scope & pricing schedule sent to {email}</p>
                    </div>
                  </div>
                  <div className={styles.trackerStep}>
                    <span className={styles.trackerBadge}>3</span>
                    <div>
                      <h6>1-on-1 Alignment Call</h6>
                      <p>Private strategy call with our lead developer before coding</p>
                    </div>
                  </div>
                </div>

                <div className={styles.successButtonsRow}>
                  <a
                    href={`https://wa.me/${utilitySettings?.phoneNo || ""}`}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.whatsappConnectBtn}
                  >
                    <MessageCircle size={16} />
                    <span>Chat With Lead Engineer on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setRequirements("");
                    }}
                    className={styles.resetButton}
                  >
                    Submit Another Requirement
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA Banner (AlgoMatic Theme) */}
        <div className={styles.expertBottomCtaCard}>
          <div className={styles.ctaGlowSphere} />
          <div className={styles.ctaContentCol}>
            <h4>
              Have a Custom Idea in Mind? <span>Let's Build It Together.</span>
            </h4>
            <p>
              Connect with our experienced quantitative and Python developers to engineer high-frequency,
              arbitrage, or custom trend-following algorithms tailored to your exact rules.
            </p>
          </div>
          <div className={styles.ctaButtonCol}>
            <a
              href={`https://wa.me/${utilitySettings?.phoneNo || ""}`}
              target="_blank"
              rel="noreferrer"
              className={styles.themeCtaBtn}
            >
              <span>Consult Our Experts</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
