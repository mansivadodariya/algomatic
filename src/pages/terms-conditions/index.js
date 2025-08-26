import React from "react";
import styles from "./termspage.module.scss";
import { useAppContext } from "@/context/AppContext";

export default function Termsconditions() {
  const { utilitySettings } = useAppContext();

  return (
    <div className={styles.termspagemain}>
      {/* Banner Section */}
      <div className={styles.termspagebanner}>
        <div className="container-xl">
          <h1>Terms & Conditions</h1>
          <p>Last Updated: August 23, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className={styles.termspagecontent}>
        <div className="container-xl">
          {/* Acceptance */}
          <div className={styles.termscontent}>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the Algomatic website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.</p>
          </div>

          {/* Use of Services */}
          <div className={styles.termscontent}>
            <h2>2. Use of Services</h2>
            <p>You agree to use Algomatic's services for lawful purposes and in a manner consistent with these terms and conditions and applicable laws and regulations.</p>
          </div>

          {/* User Accounts */}
          <div className={styles.termscontent}>
            <h2>3. User Accounts</h2>
            <p>To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
          </div>

          {/* Intellectual Property */}
          <div className={styles.termscontent}>
            <h2>4. Intellectual Property</h2>
            <p>All content and materials on the Algomatic website, including but not limited to text, graphics, logos, images, and software, are the property of Algomatic and are protected by copyright and other intellectual property laws.</p>
          </div>

          {/* Prohibited Conduct */}
          <div className={styles.termscontent}>
            <h2>5. Prohibited Conduct</h2>
            <ul>
              <li>Violating any applicable laws or regulations</li>
              <li>Impersonating any person or entity</li>
              <li>Uploading or transmitting malicious code or content</li>
              <li>Interfering with the proper functioning of the website</li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className={styles.termscontent}>
            <h2>6. Limitation of Liability</h2>
            <p>Algomatic and its affiliates, officers, employees, or agents shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with the use of our services.</p>
          </div>

          {/* Termination */}
          <div className={styles.termscontent}>
            <h2>7. Termination</h2>
            <p>We reserve the right to terminate or suspend your account and access to our services at our discretion, without prior notice, for any reason, including if we believe that you have violated these Terms and Conditions.</p>
          </div>

          {/* Changes */}
          <div className={styles.termscontent}>
            <h2>8. Changes to Terms and Conditions</h2>
            <p>Algomatic may update these terms and conditions from time to time. The latest version will be posted on this page with the updated date.</p>
          </div>

          {/* Governing Law */}
          <div className={styles.termscontent}>
            <h2>9. Governing Law</h2>
            <p>These legal terms shall be governed by and defined following the laws of India. Algomatic and you irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute that may arise in connection with these legal terms.</p>
          </div>

          {/* Contact */}
          <div className={styles.termscontent}>
            <h2>10. Contact Us</h2>
            <p>If you have any questions or concerns regarding these terms and conditions, please contact us at:</p>
            <strong>Algomatic smart trading</strong>
            <p className={styles.email}>Email: {utilitySettings?.email}</p>
            <p className={styles.phone}>Phone: {utilitySettings?.phoneNo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
