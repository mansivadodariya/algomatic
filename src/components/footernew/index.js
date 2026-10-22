import React from "react";
import styles from "./footernew.module.scss";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { ShieldAlert } from "lucide-react";

const Logoimg = "/assets/logo/logo.png";
const Telegramicon = "/assets/icons/Telegramicon.png";
const Instagramicon = "/assets/icons/Instagramicon.png";
const Facebookicon = "/assets/icons/Facebookicon.png";

export default function Footernew() {
  const { utilitySettings } = useAppContext();

  return (
    <footer className={styles.footermain}>
      <div className="container">
        {/* Main 4-Column Grid */}
        <div className={styles.footerGrid}>
          {/* Column 1: Brand Info & Architecture Badges */}
          <div className={styles.brandCol}>
            <div className={styles.footerLogo}>
              <Link href={"/"}>
                <img src={Logoimg} alt="AlgomaticBot Logo" />
              </Link>
            </div>

            <p className={styles.brandTagline}>
              Discover, build, and explore algorithmic trading bots.
            </p>

            {/* Social Media Row */}
            <div className={styles.socialIconsRow}>
              {utilitySettings?.telegramLink && (
                <Link
                  href={utilitySettings?.telegramLink}
                  target="_blank"
                  className={styles.socialBtn}
                  aria-label="Telegram"
                >
                  <img src={Telegramicon} alt="Telegram" />
                </Link>
              )}
              {utilitySettings?.instagramLink && (
                <Link
                  href={utilitySettings?.instagramLink}
                  target="_blank"
                  className={styles.socialBtn}
                  aria-label="Instagram"
                >
                  <img src={Instagramicon} alt="Instagram" />
                </Link>
              )}
              {utilitySettings?.facebookLink && (
                <Link
                  href={utilitySettings?.facebookLink}
                  target="_blank"
                  className={styles.socialBtn}
                  aria-label="Facebook"
                >
                  <img src={Facebookicon} alt="Facebook" />
                </Link>
              )}
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className={styles.linksCol}>
            <div className={styles.colHeader}>
              <h4>Explore</h4>
            </div>
            <ul className={styles.linksList}>
              <li>
                <Link href="/marketplace">Marketplace</Link>
              </li>
              <li>
                <Link href="/ai-bot-market-place">AI Bot Builder</Link>
              </li>
              <li>
                <Link href="/bot-builder">Custom Bot Builder</Link>
              </li>
              <li>
                <Link href="/ask-our-expert">Expert Development</Link>
              </li>
              {/* <li>
                <Link href="/#AskOurExpert">Sell Your Bot</Link>
              </li> */}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className={styles.linksCol}>
            <div className={styles.colHeader}>
              <h4>Resources</h4>
            </div>
            <ul className={styles.linksList}>
              <li>
                <Link href="/marketplace">Getting Started</Link>
              </li>
              <li>
                <Link href="/marketplace">Bot Setup Guide</Link>
              </li>
              <li>
                <Link href="/#CommonQuestion">FAQs</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className={styles.linksCol}>
            <div className={styles.colHeader}>
              <h4>Legal</h4>
            </div>
            <ul className={styles.linksList}>
              <li>
                <Link href="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              {/* <li>
                <Link href="/refund-policy">Refund Policy</Link>
              </li> */}
              {/* <li>
                <Link href="/terms-conditions">Trading Risk Disclosure</Link>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Full-Width Institutional Risk Disclosure Block */}
        <div className={styles.riskDisclosureBox}>
          <div className={styles.riskIconWrap}>
            <ShieldAlert size={18} />
          </div>
          <div className={styles.riskTextWrap}>
            <strong className={styles.riskTitle}>Trading Risk Notice: </strong>
            <span>
              Trading involves risk. Bot availability, performance, compatibility, and execution
              conditions vary. Always understand a strategy and its risks before using it with a live
              trading account.
            </span>
          </div>
        </div>

        {/* Giant Brand Watermark */}
        <div className={styles.bigBrandWatermark}>
          <span>Algomatic</span>
        </div>

        {/* Copyright Bottom Bar */}
        <div className={styles.footerBottomBar}>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} AlgomaticBot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
