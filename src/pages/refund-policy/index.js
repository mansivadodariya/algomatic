import React from "react";
import styles from "./redund-policy.module.scss";
import { getUtilitySettings } from "@/lib/utilitySettingsApi";
import { useEffect, useState } from "react";

export default function Refundpolicy() {
  const [utilitySettings, setUtilitySettings] = useState({});
  useEffect(() => {
    getUtilitySettings().then((res) => {
      setUtilitySettings(res?.payload);
    });
  }, []);

  return (
    <div className={styles.termspagemain}>
      <div className={styles.termspagebanner}>
        <div className="container-xl">
          <h1>Refund Policy</h1>
          <p>Last Updated: August 23, 2025</p>
          {/* <p>This Refund Policy outlines the terms under which Algomatic handles payments and refunds.</p> */}
        </div>
      </div>
      <div className={styles.termspagecontent}>
        <div className="container-xl">
          {/* Introduction */}
          <div className={styles.termscontent}>
            <h2>1. General Policy</h2>
            <p>At Algomatic, all sales are final. We do not offer refunds or exchanges for any products, subscriptions, or services once a purchase has been completed.</p>
          </div>

          {/* No Refund Cases */}
          <div className={styles.termscontent}>
            <h2>2. Non-Refundable Items</h2>
            <ul>
              <li>Subscription fees once processed</li>
              <li>Digital products or downloadable content</li>
              <li>Services that have already been delivered or accessed</li>
            </ul>
          </div>

          {/* Responsibility */}
          <div className={styles.termscontent}>
            <h2>3. Responsibility of Users</h2>
            <p>By completing a purchase with Algomatic, you acknowledge and agree that you are responsible for understanding the services and products you are buying. We encourage you to carefully review all product information before making a payment.</p>
          </div>

          {/* Exceptions */}
          <div className={styles.termscontent}>
            <h2>4. Exceptional Circumstances</h2>
            <p>While refunds are not provided, Algomatic reserves the right to review special cases at our sole discretion, such as duplicate transactions or technical errors. Approved cases, if any, will be resolved through account credits or alternative solutions rather than monetary refunds.</p>
          </div>

          {/* Contact */}
          <div className={styles.termscontent}>
            <h2>5. Contact Us</h2>
            <p>If you have questions regarding this Refund Policy, please contact us:</p>
            <strong>Algomatic smart trading</strong>
            <p className={styles.email}>Email: {utilitySettings?.email}</p>
            <p className={styles.phone}>Phone: {utilitySettings?.phoneNo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
