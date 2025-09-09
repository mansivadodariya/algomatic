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
            {/* <Link href="/#About" onClick={() => setHeader(!header)}>
              About
            </Link> */}
            <Link href="/#Howitworks" onClick={() => setHeader(!header)}>
              How It Works
            </Link>
            <Link href="/#Keyfeatures" onClick={() => setHeader(!header)}>
              Features
            </Link>
            <Link href="/#Backtesting" onClick={() => setHeader(!header)}>
              Backtesting
            </Link>
            <Link href="/marketplace" className={styles.hightlight} onClick={() => setHeader(!header)}>
              Algo Bot
            </Link>
            <Link
              href="/marketplace/#Trading Tools"
              className={styles.hightlight}
              onClick={() => setHeader(!header)}
            >
              Trading Tool
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
                    White Label
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Commonarrowbutton
            Text="Contact Us"
            Butttonvarient="lightoutlined"
            link={`https://wa.me/${utilitySettings?.phoneNo}`}
            Target="blank"
          />
        </div>
      </div>
    </>
  );
}
