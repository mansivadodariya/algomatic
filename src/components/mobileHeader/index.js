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
      <div
        className={classNames(
          styles.mobileHeaderoverlay,
          header ? styles.open : styles.hide
        )}
      ></div>
      <div
        className={classNames(
          styles.mobileHeader,
          header ? styles.show : styles.hide
        )}
      >
        <div className={styles.menudetails}>
          <div className={styles.menulinks}>
            <Link href="/">About</Link>
            <Link href="/">How It Works</Link>
            <Link href="/">Features</Link>
            <Link href="/">Backtesting</Link>
            <Link href="/">Marketplace</Link>
          </div>
          <Commonarrowbutton
            Text="Contact Us"
            Butttonvarient="lightoutlined"
            link="/contact-us"
          />
        </div>
      </div>
    </>
  );
}
