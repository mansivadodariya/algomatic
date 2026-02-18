import React, { useState } from "react";
import styles from "./webinarfaq.module.scss";
import Commonlable from "@/components/commonlable";
import Dropdownicon from "../../../../public/assets/icons/dropdownicon";
import { WebinarInquiryForm } from "@/components/webinarInquiryForm";

const faqData = [
  {
    question: "What is AlgoMatic?",
    answer:
      "AlgoMatic is a logic-driven automated trading system designed to execute structured strategies such as arbitrage, hedging, and spread-based trading without relying on predictions or guesswork.",
  },
  {
    question: "What is arbitrage trading in AlgoMatic?",
    answer: "Arbitrage trading involves capturing price differences between markets. AlgoMatic detects temporary pricing gaps and executes trades using automated logic to capitalize on these inefficiencies.",
  },
  {
    question: "How does AlgoMatic work?",
    answer:
      "AlgoMatic uses predefined algorithms to identify market inefficiencies and execute trades automatically. It focuses on structure, speed, and disciplined execution rather than emotional decision-making.",
  },
  {
    question: "How does hedging work in AlgoMatic?",
    answer:
      "Hedging logic is built directly into the system. Each trade is structured with risk balance in mind to maintain consistency and capital protection across different market conditions.",
  },
  {
    question: "Is AlgoMatic suitable for volatile markets?",
    answer: "Yes. AlgoMatic is built to perform in volatile conditions by using automation and structured execution strategies instead of emotional reactions.",
  },

];

export default function Webinarfaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className={styles.faqsectionmain}>
        <div className="container-xl">
          <div className={styles.faqcontent}>
            <div className={styles.faqsectiontitle}>
              <Commonlable Text="Common Question" />
              <h6>
                Frequently <span>Asked</span> Questions
              </h6>
            </div>
            <div className={styles.faqgrdmain}>
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqboxmain} ${openIndex === index ? styles.faqboxmainactive : ""
                    }`}
                  onClick={() => handleToggle(index)}
                >
                  <div className={styles.faqboxheader}>
                    <h1>{faq.question}</h1>
                    <div className={styles.faqicon}>
                      <Dropdownicon />
                    </div>
                  </div>
                  <div className={styles.faqboxcontent}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.ctabuttonmain}>
              <button
                className={styles.ctaButton}
                onClick={handleRegisterClick}
              >
                Secure Your Seat Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <WebinarInquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
