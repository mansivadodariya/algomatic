import React, { useState } from "react";
import styles from "./mobileHeader.module.scss";
import Link from "next/link";
import Image from "next/image";
import DownArrow from "../icons/downArrow";
import classNames from "classnames";
import Commonarrowbutton from "../commonarrowbutton";
const Logo = "/assets/logo/logo.svg";

export default function MobileHeader({ setHeader, header }) {
  return (
    <>
      <div className={classNames(styles.mobileHeaderoverlay, header ? styles.open : styles.hide)}></div>
      <div className={classNames(styles.mobileHeader, header ? styles.show : styles.hide)}>
        <div className={styles.menudetails}>
          <div className={styles.menulinks}>
            <Link href="/#About" onClick={() => setHeader(!header)}>
              About
            </Link>
            <Link href="/#Howitworks" onClick={() => setHeader(!header)}>
              How It Works
            </Link>
            <Link href="/#Keyfeatures" onClick={() => setHeader(!header)}>
              Features
            </Link>
            <Link href="/#Backtesting" onClick={() => setHeader(!header)}>
              Backtesting
            </Link>
            <Link href="/marketplace" onClick={() => setHeader(!header)}>
              Marketplace
            </Link>
          </div>
          <Commonarrowbutton Text="Contact Us" Butttonvarient="lightoutlined" link="https://api.whatsapp.com/send?phone=971509706562" Target="blank" />
        </div>
      </div>
    </>
  );
}
