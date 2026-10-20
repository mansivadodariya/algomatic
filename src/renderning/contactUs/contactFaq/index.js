import React, { useState } from "react";
import styles from "./contactFaq.module.scss";
import Commonlable from "@/components/commonlable";
import { ChevronDown } from "lucide-react";

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How quickly will I receive a response to my inquiry?",
      answer:
        "During live financial market trading sessions (Monday through Friday 24/5), our WhatsApp desk typically answers within 15 minutes. Contact inquiries submitted via our web form or email are reviewed and addressed by a quantitative specialist within 1 to 2 hours.",
    },
    {
      question: "Can I schedule a 1-on-1 discovery call with an algorithmic engineer?",
      answer:
        "Yes! For traders requiring bespoke automated trading bots, indicators, or webhook integrations, our team offers 1-on-1 technical discovery sessions via Google Meet or Zoom to discuss architecture and parameters.",
    },
    {
      question: "Do you sign a Non-Disclosure Agreement (NDA) before reviewing my strategy?",
      answer:
        "Absolutely. We respect intellectual property and treat client trading models with strict institutional confidentiality. We routinely execute bilateral NDAs prior to in-depth strategy reviews.",
    },
    {
      question: "How do I get technical assistance for bot deployment on VPS or cTrader / Broker APIs?",
      answer:
        "Our support engineers provide end-to-end setup guidance, VPS connection instructions, and remote walkthroughs to ensure your bot runs uninterrupted 24/7 with minimal execution latency.",
    },
    {
      question: "What are the official Algomatic channels to avoid impersonators?",
      answer:
        "Our official phone and WhatsApp number is +91 7046279434, our official website domain is algomaticbot.com, and our verified Telegram is @algomaticbot. Algomatic staff will NEVER ask for your broker account passwords or solicit personal wallet deposits.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container-xl">
        <div className={styles.faqHeader}>
          <div className={styles.badgeWrap}>
            <Commonlable Text="Questions & Answers" />
          </div>
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>
          <p>
            Quick answers regarding our support response times, custom development agreements, and
            onboarding procedures.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`${styles.faqCard} ${openIndex === idx ? styles.active : ""}`}
              onClick={() => toggleFaq(idx)}
            >
              <div className={styles.faqQuestionRow}>
                <span className={styles.qText}>{faq.question}</span>
                <div className={styles.faqToggleIcon}>
                  <ChevronDown size={18} />
                </div>
              </div>

              {openIndex === idx && (
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
