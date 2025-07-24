import React, { useState } from 'react'
import styles from './faqSection.module.scss';
import CommonButton from '@/components/commonButton';
import DownArrow from '@/components/icons/downArrow';
import classNames from 'classnames';

const FAQ_Content = [
    {
        question: "What is a Forex CRM?",
        answer: "A Customer Relationship Management platform helps businesses manage everything related to their customers, from contact information and customer support inquiries to financial data and payment processing. In the Forex industry, a CRM is a tool that brokers can use to manage everything related to their clients’ accounts, from Know-Your-Client (KYC) compliance to wallets and payments. In other words, it is a complete software solution that helps businesses in the Forex industry streamline their operations and improve their bottom line. This all-in-one solution can make it easier for brokers to keep track of their clients’ needs and provide them with the best possible service.",
    },
    {
        question: "What if I want to import the users from my previous solution?",
        answer: "We support any type of data import, we will customise the script under your specifications and will make a migration so that all the data is safely transferred to Algomatic .",
    },
    {
        question: "After the purchase how can I familiarise myself with the product functionalities?",
        answer: "We have built a strong onboarding procedures. You will have a personal account manager that will provide you with all the necessary documentation on the product possibilities. In addition, we will schedule a call with the product manager that will walk you through the functionality and will answer all of your questions.",
    },
    {
        question: "What if I need something extra development for my Algomatic  solution?",
        answer: "We have a team of 30+ dedicated developers that are working on Algomatic  improvements and new features and we are always open for client wishes. All you will need to do is to give us a technical description of what you want and our team will take care about the implementation and your personal account manager will keep you posted about the release dates.",
    },
    {
        question: "How do I report any issues regarding the product?",
        answer: "In case you find a bug in the product, we have a 24/7 Helpdesk system with 20+ Support specialists behind it. Your personal account manager will walk you through it so that once you face a problem you can quickly report it and our support team will immediately start working on the fix.",
    },
    {
        question: "How can I connect the payment system that is already in your integrated list?",
        answer: "It is as simple as creating a method in your admin panel for deposits and withdrawals and entering the API keys in order to connect to the platform, this can be done in a matter of minutes.",
    },
    {
        question: "What if I have a lot of managers and they all need different access rights to the admin panel?",
        answer: "Specifically for that we built a right-based User groups, where you will be able to assign to the users only the sections that are specifically needed for his/her department. In addition, we launched a tag system, that will allow your admins to monitor only the clients’ data that are “tagged” to them.",
    },
];
export default function FaqSection() {
    const [toogle, setToogle] = useState(false);
    const handleToggle = (index) => {
        if (toogle === index) {
            setToogle(null);
        } else {
            setToogle(index);
        }
    };
    return (
        <div className={styles.faqSection}>
            <div className="container">
                <div className={styles.center}>
                    <CommonButton text="FAQ" />
                </div>
                <h2>
                    Frequently Asked Questions
                </h2>
                <div className={styles.mainBox}>
                    {FAQ_Content?.map((item, i) => {
                        return (
                            <div className={classNames(styles.faq, toogle === i ? styles.toogle : '')}>
                                <div className={styles.faqHeader}>
                                    <p>{item?.question}</p>
                                    <div className={styles.icon} onClick={() => handleToggle(i)}>
                                        <DownArrow />
                                    </div>
                                </div>
                                <div className={classNames(styles.faqBody, toogle === i ? styles.show : styles.hide)}>
                                    <p>
                                        {item?.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
