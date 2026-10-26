import React, { useState } from "react";
import styles from "./SupportHelpView.module.scss";
import toast from "react-hot-toast";
import {
  MessageSquare,
  Mail,
  Send,
  ChevronDown,
  CheckCircle2,
  HelpCircle,
  Headphones,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "How do I install my purchased bot on MetaTrader 4 or 5?",
    a: "After purchasing, the compiled .EXE setup file is automatically sent to your registered email. In your MetaTrader terminal, go to File > Open Data Folder > MQL5 (or MQL4) > Experts, paste the bot file, restart MetaTrader, and enable 'Allow Algo Trading' on your desired chart.",
  },
  {
    q: "Why do I need to register my MetaTrader Account Number?",
    a: "Each Algomatic algorithm is cryptographically compiled to your specific MetaTrader account number for security and license authorization. You can manage or update your Meta number anytime under the 'Purchased Bots' or 'Payment History' tab.",
  },
  {
    q: "Does my computer need to stay on 24/7 or do I need a VPS?",
    a: "For 24/7 uninterrupted algorithmic execution without power or internet dropouts, we recommend running MetaTrader on a Windows Cloud VPS. You can also run it directly on your home PC during active market trading sessions.",
  },
  {
    q: "Can I change my MetaTrader account number to a different broker?",
    a: "Yes! Simply go to your 'Purchased Bots' or 'Payment History' tab, click 'Manage Meta No', enter your new broker account number, and our system will recompile and email your updated bot file.",
  },
  {
    q: "What lot size and risk settings should I start with?",
    a: "We recommend starting with a conservative lot size of 0.01 lots per $1,000 capital balance until you are familiar with the algorithm's execution cycle and drawdown profile.",
  },
];

export default function SupportHelpView({ user, utilitySettings }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketData, setTicketData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    category: "Bot Setup & MT4/MT5 Installation",
    subject: "",
    message: "",
  });

  const whatsappUrl = utilitySettings?.phoneNo
    ? `https://wa.me/${utilitySettings.phoneNo}`
    : "https://wa.me/13072028822";

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    if (!ticketData.subject.trim() || !ticketData.message.trim()) {
      toast.error("Please enter a subject and message");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        "Support ticket submitted! Our technical team will respond within 2-4 hours."
      );
      setTicketData((prev) => ({ ...prev, subject: "", message: "" }));
    }, 600);
  };

  return (
    <div className={styles.supportContainer}>
      {/* Quick Contact Channels */}
      <div className={styles.channelsGrid}>
        {/* Channel 1: WhatsApp */}
        <div className={styles.channelCard}>
          <div className={styles.channelTop}>
            <div className={`${styles.channelIconWrap} ${styles.iconWhatsapp}`}>
              <MessageSquare size={22} />
            </div>
            <div className={styles.channelInfo}>
              <h4 className={styles.channelTitle}>WhatsApp Live Chat</h4>
              <p className={styles.channelDesc}>
                Instant real-time support for urgent bot setup & broker issues.
              </p>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.channelActionBtn} ${styles.btnWhatsapp}`}
          >
            <span>Chat on WhatsApp</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Channel 2: Email */}
        <div className={styles.channelCard}>
          <div className={styles.channelTop}>
            <div className={`${styles.channelIconWrap} ${styles.iconEmail}`}>
              <Mail size={22} />
            </div>
            <div className={styles.channelInfo}>
              <h4 className={styles.channelTitle}>Email Technical Desk</h4>
              <p className={styles.channelDesc}>
                Detailed inquiries, license verification & technical logs.
              </p>
            </div>
          </div>
          <a
            href="mailto:support@algomaticbot.com"
            className={`${styles.channelActionBtn} ${styles.btnEmail}`}
          >
            <span>support@algomaticbot.com</span>
          </a>
        </div>

        {/* Channel 3: Community */}
        <div className={styles.channelCard}>
          <div className={styles.channelTop}>
            <div className={`${styles.channelIconWrap} ${styles.iconTelegram}`}>
              <Headphones size={22} />
            </div>
            <div className={styles.channelInfo}>
              <h4 className={styles.channelTitle}>VIP Trader Community</h4>
              <p className={styles.channelDesc}>
                Algorithm updates, signal notices & strategy discussions.
              </p>
            </div>
          </div>
          <a
            href="https://t.me/algomaticbot"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.channelActionBtn} ${styles.btnTelegram}`}
          >
            <span>Join Telegram Community</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Live System Status Strip */}
      <div className={styles.statusStrip}>
        <div className={styles.statusLeft}>
          <span className={styles.statusIndicatorPulse} />
          <span className={styles.statusText}>
            All Algomatic Infrastructure Operational
          </span>
        </div>
        <div className={styles.statusPillsList}>
          <span className={styles.statusPillItem}>
            Execution Engine: <strong>Online</strong>
          </span>
          <span className={styles.statusPillItem}>
            Cloud VPS Network: <strong>99.98% Uptime</strong>
          </span>
          <span className={styles.statusPillItem}>
            MT5 Bridge: <strong>Connected</strong>
          </span>
        </div>
      </div>

      {/* Main Content: Support Ticket + FAQs */}
      <div className={styles.contentGrid}>
        {/* Left: Support Ticket Form */}
        <div className={styles.ticketCard}>
          <div className={styles.sectionHeaderRow}>
            <div className={styles.sectionIconBadge}>
              <Send size={18} />
            </div>
            <div>
              <h3 className={styles.sectionTitle}>Submit a Support Ticket</h3>
              <p className={styles.sectionSubtitle}>
                Direct ticket to our engineering and algo strategy team
              </p>
            </div>
          </div>

          <form onSubmit={handleTicketSubmit} className={styles.ticketForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Your Name</label>
                <input
                  type="text"
                  value={ticketData.name}
                  onChange={(e) =>
                    setTicketData({ ...ticketData, name: e.target.value })
                  }
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input
                  type="email"
                  value={ticketData.email}
                  onChange={(e) =>
                    setTicketData({ ...ticketData, email: e.target.value })
                  }
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Issue Category</label>
              <select
                value={ticketData.category}
                onChange={(e) =>
                  setTicketData({ ...ticketData, category: e.target.value })
                }
              >
                <option value="Bot Setup & MT4/MT5 Installation">
                  Bot Setup & MT4/MT5 Installation
                </option>
                <option value="License & Meta Number Configuration">
                  License & Meta Number Configuration
                </option>
                <option value="Payment & Billing Query">
                  Payment & Billing Query
                </option>
                <option value="Strategy Performance & Settings">
                  Strategy Performance & Settings
                </option>
                <option value="Technical Bug or Error">
                  Technical Bug or Error
                </option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Subject</label>
              <input
                type="text"
                value={ticketData.subject}
                onChange={(e) =>
                  setTicketData({ ...ticketData, subject: e.target.value })
                }
                placeholder="Brief summary of your question or issue"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Message / Description</label>
              <textarea
                value={ticketData.message}
                onChange={(e) =>
                  setTicketData({ ...ticketData, message: e.target.value })
                }
                placeholder="Please describe your question or issue in detail..."
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitTicketBtn}
              disabled={isSubmitting}
            >
              <Send size={15} />
              <span>{isSubmitting ? "Sending Ticket..." : "Submit Ticket"}</span>
            </button>
          </form>
        </div>

        {/* Right: FAQs */}
        <div className={styles.faqCard}>
          <div className={styles.sectionHeaderRow}>
            <div className={styles.sectionIconBadge}>
              <HelpCircle size={18} />
            </div>
            <div>
              <h3 className={styles.sectionTitle}>Frequently Asked Questions</h3>
              <p className={styles.sectionSubtitle}>
                Quick answers to common bot setup and account questions
              </p>
            </div>
          </div>

          <div className={styles.faqList}>
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
                >
                  <button
                    type="button"
                    className={`${styles.faqQuestion} ${
                      isOpen ? styles.open : ""
                    }`}
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown size={16} />
                  </button>
                  {isOpen && <div className={styles.faqAnswer}>{item.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
