import React, { useState } from "react";
import styles from "./faqsection.module.scss";
import Commonlable from "@/components/commonlable";
import Dropdownicon from "../../../../public/assets/images/dropdownicon";

const faqData = [
  {
    question: "What is AlgoMatic Bot and how does it work?",
    answer: (
      <p>
        AlgoMatic is an MT5-based automated trading bot that leverages
        spot-to-future arbitrage to generate low-risk profits. It identifies
        pricing differences between the spot and futures markets across brokers
        and executes simultaneous trades in milliseconds—eliminating manual
        delays, slippage, and human error.
      </p>
    ),
  },
  {
    question: "Is AlgoMatic truly risk-free?",
    answer: (
      <p>
        While no trading strategy is 100% risk-free, AlgoMatic uses a
        market-neutral arbitrage approach that minimizes directional risk. By
        buying in one market and selling in another at the same time, it aims to
        lock in small, consistent profits. That said, broker slippage, latency,
        and liquidity conditions can impact outcomes—so proper configuration and
        broker choice are essential.
      </p>
    ),
  },
  {
    question: "Which currency pairs or commodities work best with AlgoMatic?",
    answer: (
      <p>
        AlgoMatic can technically operate on any major forex pair or commodity,
        but it performs best on highly liquid and volatile instruments like
        XAUUSD (Gold/USD) and EURUSD. These markets frequently exhibit micro
        price inefficiencies across brokers, making them ideal for arbitrage.
      </p>
    ),
  },
  {
    question: "What do I need to start using AlgoMatic Bot?",
    answer: (
      <p>
        A PC or VPS with MT5 installed Accounts with two different brokers
        (preferably with different liquidity providers) The AlgoMatic setup file,
        provided via Telegram or email Basic configuration as per our setup
        guide (lot size, buffer, trade thresholds) Our team offers full
        installation support and configuration help if needed.
      </p>
    ),
  },
  {
    question: "Which brokers are recommended for AlgoMatic?",
    answer: (
      <p>
        We recommend brokers that support: Fast execution with low latency
        Variable spreads Different liquidity providers No restrictions on
        arbitrage Top suggestions include Skyriss, IC Markets, and Pepperstone.
        Always test your setup in demo mode before going live.
      </p>
    ),
  },
  {
    question: "Do you offer support or whitelabel options?",
    answer: (
      <p>
        Yes! AlgoMatic provides: 1-on-1 bot setup assistance Broker integration
        help Real-time troubleshooting White label & franchise solutions for
        trading educators, prop firms, and academies Contact us on Telegram at
        @joinalgomatic or visit www.algomaticbot.com to explore partnership
        options.
      </p>
    ),
  },
];

export default function Faqsection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqsLeft = faqData.slice(0, 3);
  const faqsRight = faqData.slice(3);

  return (
    <>
      <div className={styles.faqsectionmain}>
        <div className="container-xl">
          <div className={styles.faqsectiontitle}>
            <Commonlable Text="Common Question" />
            <h6>
              Frequently <span>Asked</span> Questions
            </h6>
          </div>
          <div className={styles.faqgrdmain}>
            <div className={styles.faqgrdleft}>
              {faqsLeft.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqboxmain} ${
                    openIndex === index ? styles.faqboxmainactive : ""
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  <div className={styles.faqboxheader}>
                    <h1>{faq.question}</h1>
                    <div className={styles.faqicon}>
                      <Dropdownicon />
                    </div>
                  </div>
                  <div className={styles.faqboxcontent}>{faq.answer}</div>
                </div>
              ))}
            </div>
            <div>
              {faqsRight.map((faq, index) => (
                <div
                  key={index + faqsLeft.length}
                  className={`${styles.faqboxmain} ${
                    openIndex === index + faqsLeft.length
                      ? styles.faqboxmainactive
                      : ""
                  }`}
                  onClick={() => handleToggle(index + faqsLeft.length)}
                >
                  <div className={styles.faqboxheader}>
                    <h1>{faq.question}</h1>
                    <div className={styles.faqicon}>
                      <Dropdownicon />
                    </div>
                  </div>
                  <div className={styles.faqboxcontent}>{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
