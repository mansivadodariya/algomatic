import React, { useState } from "react";
import styles from "./mobileHeader.module.scss";
import Link from "next/link";
import classNames from "classnames";
import Commonarrowbutton from "../commonarrowbutton";
import { useAppContext } from "../../context/AppContext";
import DownArrow from "../icons/downArrow";

export default function MobileHeader({ setHeader, header }) {
  const { utilitySettings } = useAppContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <div
        className={classNames(
          styles.mobileHeaderoverlay,
          header ? styles.open : styles.hide
        )}
        onClick={() => setHeader(!header)}
      ></div>
      <div
        className={classNames(
          styles.mobileHeader,
          header ? styles.show : styles.hide
        )}
      >
        <div className={styles.menudetails}>
          <div className={styles.menulinks}>
            <Link
              href="/ai-bot-market-place"
              onClick={() => setHeader(!header)}
            >
              AI Bot Marketplace
            </Link>
            <Link
              href="/bot-builder"
              onClick={() => setHeader(!header)}
            >
              Bot Builder
            </Link>
            <Link
              href="/ask-our-expert"
              onClick={() => setHeader(!header)}
            >
              Ask our expert
            </Link>
            <div className={styles.sidebardropdownmain}>
              <div
                className={`${styles.sidebardropdownhead} ${
                  isDropdownOpen ? styles.active : ""
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Partner with us</span>
                <DownArrow />
              </div>
              <div
                className={`${styles.sidebardropdown} ${
                  isDropdownOpen ? styles.show : styles.hide
                }`}
              >
                <div className={styles.sidebardropdownlinks}>
                  <Link
                    href="/partner-with-us/partner-affiliate"
                    onClick={() => {
                      setHeader(!header);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Affiliate
                  </Link>
                  <Link
                    href="/partner-with-us/white-label"
                    onClick={() => {
                      setHeader(!header);
                      setIsDropdownOpen(false);
                    }}
                  >
                    White-Label
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomCtaWrapper}>
            <Commonarrowbutton
              Text="Contact Us"
              Butttonvarient="lightoutlined"
              buttonclassName="widthfull"
              link={`https://wa.me/${utilitySettings?.phoneNo}`}
              Target="blank"
            />
          </div>
        </div>
      </div>
    </>
  );
}
