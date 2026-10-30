import React, { useState } from "react";
import styles from "./faqsection.module.scss";
import Dropdownicon from "../../../../public/assets/images/dropdownicon";

const faqData = [
  {
    id: "01",
    question: "What is AlgomaticBot?",
    answer: (
      <p>
        AlgomaticBot is a trading bot marketplace and creation platform where
        users can discover available bots, create their own strategies, and
        request custom bot development.
      </p>
    ),
  },
  {
    id: "02",
    question: "Can I create my own trading bot?",
    answer: (
      <p>
        Yes. The planned platform offers an AI Bot Builder for conversational
        strategy creation and a Custom Bot Builder for configuring strategy
        rules through a form.
      </p>
    ),
  },
  {
    id: "03",
    question: "Can I request a custom bot from an expert?",
    answer: (
      <p>
        Yes. You can submit your requirements to the expert development team
        to discuss the strategy, feasibility, scope, pricing, and delivery
        terms.
      </p>
    ),
  },
  {
    id: "04",
    question: "How do I purchase a trading bot?",
    answer: (
      <p>
        Browse the marketplace, review a listing's details and license terms,
        and complete checkout. After successful payment, the bot will become
        available according to its delivery method.
      </p>
    ),
  },
  {
    id: "05",
    question: "How do I receive a purchased MT5 bot?",
    answer: (
      <p>
        For downloadable bots, eligible purchases provide access to the
        compiled bot file and installation instructions. Managed deployment
        may be offered separately for supported environments.
      </p>
    ),
  },
  {
    id: "06",
    question: "Can I sell a bot I create?",
    answer: (
      <p>
        Eligible creators can submit their bots for marketplace review.
        Approved listings can be published under the platform's seller terms
        and commission policy.
      </p>
    ),
  },
  {
    id: "07",
    question: "Does AlgomaticBot guarantee profits?",
    answer: (
      <p>
        No. Trading involves risk, and no trading bot can guarantee profits or
        eliminate losses. Historical backtests and past performance do not
        guarantee future results.
      </p>
    ),
  },
  {
    id: "08",
    question: "Which markets and platforms are supported?",
    answer: (
      <p>
        Availability depends on the specific bot, supported instruments,
        broker, and execution platform. Review each listing for compatibility
        details.
      </p>
    ),
  },
];

export default function Faqsection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqsectionmain} id="CommonQuestion">
      <div className="container-xl">
        <div className={styles.faqsectiontitle}>
          <h6>
            Frequently <span>Asked</span> Questions
          </h6>
          <p className={styles.faqSubtitle}>
            Everything you need to know about AlgomaticBot marketplace, bot creation, and custom development.
          </p>
        </div>

        {/* Single Column (One Line per FAQ) Container */}
        <div className={styles.faqSingleColumn}>
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.faqboxmain} ${
                  isOpen ? styles.faqboxmainactive : ""
                }`}
                onClick={() => handleToggle(index)}
              >
                <div className={styles.faqboxheader}>
                  <div className={styles.questionGroup}>
                    <h2 className={styles.faqQuestionText}>{faq.question}</h2>
                  </div>
                  <div className={styles.faqicon}>
                    <Dropdownicon />
                  </div>
                </div>
                <div className={styles.faqboxcontent}>{faq.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
