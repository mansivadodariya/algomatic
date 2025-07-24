import React, { useState } from 'react'
import styles from './footer.module.scss';
import Footerbanner from './footerbanner';
import Image from 'next/image';
import Button from '../button';
import RightBlackLg from '../icons/rightBlackLg';
import Link from 'next/link';
import toast from 'react-hot-toast';
import axios from 'axios';
const Logo = '/assets/logo/logo.jpg';


export default function Footer() {
  const [contactData, setContactData] = useState({ country: "Afghanistan" });
  const disposableDomains = ["soebing", "yopmail", "sharklasers", "guerrillamail", "getairmail", "grr", "guerrillamailblock", "pokemail", "spam4", "cazlq", "sloveniakm", "mybx", "memsg", "matra", "maildrop"];
  const [error, setError] = useState({});

  const validateData = () => {
    let isValid = true;
    let err = {};
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!contactData?.email) {
      err.email = "Please enter your email address";
      isValid = false;
    } else if (contactData?.email && regexEmail.test(contactData?.email) === false) {
      err.email = "Please enter valid email address";
      isValid = false;
    }
    setError(err);
    return isValid;
  };
  const isDisposableEmail = (email) => {
    let domain = email.split("@")[1].split(".")[0];
    if (disposableDomains.includes(domain)) {
      return true;
    } else {
      return false;
    }
  };
  const functionPostContact = async () => {
    if (validateData()) {
      if (isDisposableEmail(contactData?.email)) {
        toast.error("This email is not allowed. Please use your official email");
        setContactData({
          ...contactData,
          email: "",
        });
      } else {


        const newData = {
          text: `Email:${contactData?.email}\n`,
        };
        await axios(`https://hooks.slack.com/services/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`, {
          method: "POST",
          data: JSON.stringify(newData),
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        })
          .then((res) => {
            toast.success("Thank you for contacting us. We will get back to you soon.");
            setContactData({
              email: "",
            });
          })
          .catch((err) => {
            toast.error("Something went wrong");
          });
      }
    }
  };
  return (
    <div>
      <Footerbanner />
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerGridItems}>
              <div className={styles.logo}>
                <Image src={Logo} layout="fill" />
              </div>
              <div className={styles.twoCol}>
                <div className={styles.twoColItems}>
                  <p>Email</p>
                  <a href="mailto:support@algomaticbot.com">support@algomaticbot.com</a>
                </div>
                <div className={styles.twoColItems}>
                  <p>Phone Number</p>
                  <a href="callto:+971 50 970 6562">+971 50 970 6562</a>
                </div>
                {/* <div className={styles.twoColItems}>
                  <p>Address</p>
                  <a>A-301, Atlanta mall, Sudama chowk, Digital Valley (Mota Varachha) , Surat, Gujarat, India 394101</a>
                </div> */}
              </div>
            </div>
            <div className={styles.footerGridItems}>
              <div className={styles.subtitle}>
                <h3>Links</h3>
              </div>
              <div className={styles.menuCol}>
                <div>
                  <Link href="/forex-crm">Forex CRM</Link>
                  <Link href="/mauritius-forex-license">Mauritius Forex License</Link>
                  <Link href="/vincent-forex-license">St. Vincent Forex License</Link>
                  <Link href="/algo-bot">Algo Bot & Strategies</Link>
                </div>
                <div>
                  <Link href="/strategies">Strategies</Link>
                  <Link href="/strategies">AI/ML Development</Link>
                  <Link href="/mobile-web-development">Web and Mobile Development</Link>
                  <Link href="/contact-us">Contact Us</Link>

                </div>
              </div>
            </div>
            <div className={styles.footerGridItems}>
              <div className={styles.lastText}>
                <h3>Get started to up your business with personal Algomatic </h3>
              </div>
              {/* <form onSubmit={functionPostContact}> */}
              <div className={styles.input}>
                <input type="email" placeholder="Enter your email address" value={contactData?.email} onChange={(e) => {
                  setContactData({
                    ...contactData,
                    email: e.target.value,
                  });
                  setError({ ...error, email: "" });
                }} />
                <span style={{ fontSize: "14px", color: "red" }}>{error?.email}</span>
              </div>
              <div className={styles.secButton} onClick={functionPostContact}>
                <Button text="Submit" outline={true} icon={<RightBlackLg />} />
              </div>
              {/* </form> */}
            </div>
          </div>
          <div className={styles.copyRight}>
            <p>© 2025 Algomatic . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
