"use client";
import React, { useState } from "react";
import styles from "./genaifaq.module.scss";
import Commonlable from "@/components/commonlable";
import Dropdownicon from "../../../../public/assets/icons/dropdownicon";

const faqData = [
  {
    question: "What industries do you serve?",
    answer:
      "We serve clients across various industries including technology, healthcare, finance, e-commerce, education, and professional services. Our solutions are tailored to meet the unique needs of each industry.",
  },
  {
    question: "How do you ensure project quality and delivery?  ",
    answer:
      "We follow industry best practices, use agile methodologies, conduct regular quality checks, and maintain transparent communication throughout the project lifecycle to ensure successful delivery.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing models including project-based pricing, retainer agreements, and milestone-based payments. Pricing depends on project scope, complexity, and requirements.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we provide comprehensive ongoing support including maintenance, updates, monitoring, and optimization to ensure your solutions continue to perform optimally.",
  },
  {
    question: "How do you handle project communication and updates?",
    answer:
      "We maintain regular communication through scheduled meetings, progress reports, and real-time collaboration tools to keep you informed throughout the project.",
  },
  {
    question: "What technologies and tools do you use?",
    answer:
      "We use cutting-edge technologies and industry-standard tools including AI/ML frameworks, cloud platforms, development tools, and design software to deliver high-quality solutions.",
  },
];

export default function Genaifaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className={styles.faqsectionmain}>
        <div className="container-xl">
          <div className={styles.faqcontent}>
            <div className={styles.faqsectiontitle}>
              <Commonlable Text="Frequently Asked Questions" />
              <h6>
                Get Your <span>Questions</span> Answered
              </h6>
              <p>
                Everything you need to know about our AI implementation process
                and services. What industries do you serve?
              </p>
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
          </div>
        </div>
      </div>
    </>
  );
}
