import React, { useEffect, useState } from "react";
import styles from "./privacy.module.scss";
import Listicon from "../../../public/assets/icons/listicon";
import { getUtilitySettings } from "@/lib/utilitySettingsApi";

export default function PrivacyPolicy() {
  const [utilitySettings, setUtilitySettings] = useState({});
  useEffect(() => {
    getUtilitySettings().then((res) => {
      setUtilitySettings(res?.payload);
    });
  }, []);
  return (
    <div className={styles.termspagemain}>
      {/* Banner Section */}
      <div className={styles.termspagebanner}>
        <div className="container-xl">
          <h1>Privacy Policy</h1>
          <p>Last Updated: August 23, 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.termspagecontent}>
        <div className="container-xl">
          {/* Intro */}
          <div className={styles.termscontent}>
            <p>
            This privacy policy describes our policies and procedures for the collection, use, and disclosure of your information when you use the service and tells you about your privacy rights and how the law protects you. We use your personal data to provide and improve the service. By using the service, you agree to the collection and use of information per this privacy policy.
            </p>
            <p>
            Welcome to AlgoMatic ("we," "us," or "our"). This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className={styles.termscontent}>
            <h2>Information We Collect</h2>
            <h3>1. Personally-Identifiable Information</h3>
            <p>
              We may collect personal information such as your name, email
              address, phone number, and billing details when you voluntarily
              provide it to us.
            </p>

            <h3>2. Sensitive Personal Data</h3>
            <p>
              Certain information, such as payment data or identity documents,
              may be collected only when required for services and is handled
              with strict confidentiality.
            </p>

            <h3>3. Non-Personally-Identifiable Information</h3>
            <p>
              This includes browser type, device information, and general usage
              patterns to help us improve our website.
            </p>

            <h3>4. Cookies & Tracking Technologies</h3>
            <p>
              We use cookies, pixel tags, and other technologies to improve your
              experience, remember preferences, and analyze site performance.
            </p>
          </div>

          {/* How We Use Information */}
          <div className={styles.termscontent}>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To provide, operate, and maintain our services</li>
              <li>To personalize your experience on our website</li>
              <li>To process payments securely</li>
              <li>To send you updates, promotions, and service information</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          {/* Disclosure */}
          <div className={styles.termscontent}>
            <h2>Disclosure of Information</h2>
            <div className={styles.listtext}>
              <Listicon />
              <h4>Service Providers</h4>
            </div>
            <p>
              We may share information with trusted third-party providers who
              help us deliver our services.
            </p>

            <div className={styles.listtext}>
              <Listicon />
              <h4>Legal Requirements</h4>
            </div>
            <p>
              We may disclose personal information when required to comply with
              legal obligations or protect our rights.
            </p>
          </div>

          {/* Data Security */}
          <div className={styles.termscontent}>
            <h2>Data Security</h2>
            <p>
              We use appropriate security measures to protect your personal
              information. However, no method of transmission over the Internet
              is 100% secure.
            </p>
          </div>

          {/* Your Rights */}
          <div className={styles.termscontent}>
            <h2>Your Rights</h2>
            <ul>
              <li>Access, correct, or delete your personal information</li>
              <li>Opt out of marketing emails at any time</li>
              <li>Request details about how we process your data</li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.termscontent}>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
              <strong>AlgoMatic a smart trading</strong>
            {/* <p>
              <br />
              A-301, Atlanta Shopping Mall, Near Sudama Chowk,
              <br />
              Surat, Gujarat 394101, India
            </p> */}
            <p className={styles.email}>Email: {utilitySettings?.email}</p>
            <p className={styles.phone}>Phone: {utilitySettings?.phoneNo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

