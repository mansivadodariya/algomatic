import React from "react";
import styles from "./contactBottomCta.module.scss";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

export default function ContactBottomCta() {
  const { utilitySettings } = useAppContext();
  const rawPhone = utilitySettings?.phoneNo || "917046279434";
  const cleanPhone = rawPhone.replace(/[^0-9]/g, "");

  return (
    <section className={styles.bottomCtaSection}>
      <div className="container-xl">
        <div className={styles.ctaCard}>
          <div className={styles.glowSphere} />
          <div className={styles.ctaContent}>
            <h3>
              Have an Urgent Strategy Idea? <span>Let's Talk Directly.</span>
            </h3>
            <p>
              Connect with our experienced quantitative developers and trading desk engineers for
              instant, one-on-one discovery and technical feasibility reviews.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a
              href={`https://wa.me/${cleanPhone}?text=Hi%20Algomatic%20Team,%20I%20have%20an%20urgent%20trading%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              <MessageCircle size={18} />
              <span>Chat with Quant Expert</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
