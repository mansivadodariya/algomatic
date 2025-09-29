import React, { useState } from "react";
import styles from "./webinarfaq.module.scss";
import Commonlable from "@/components/commonlable";
import Dropdownicon from "../../../../public/assets/icons/dropdownicon";
import { InquiryForm } from "@/components/inquiryForm";

const faqData = [
  {
    question: "Do I need prior trading experience?",
    answer:
      "No. The strategy is explained step-by-step and can be followed even by beginners.",
  },
  {
    question: "Is the webinar free?",
    answer:
      "Yes, the webinar is completely free, but spots are limited—register now.",
  },
  {
    question: "Will I get a recording of the webinar?",
    answer:
      "Yes. Registered participants will receive the recording after the session.",
  },
  {
    question: "How long is the webinar?",
    answer: "The session will last about 60–90 minutes including live Q&A.",
  },
  {
    question: "What do I need to attend?",
    answer: "Just a stable internet connection, a notebook, and your focus.",
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
      <InquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
