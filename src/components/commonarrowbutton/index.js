import React from "react";
import styles from "./commonarrowbutton.module.scss";
import Arrowicon from "../../../public/assets/icons/arrowicon";
import Link from "next/link";
import Loader from "../loader";

export default function Commonarrowbutton({ Text, Butttonvarient, link, Target, buttonclassName, icon, onClick, isBtnLoading, disabled }) {
  const showIcon = icon !== "none" && !isBtnLoading;

  // Handle multiple variant classes
  const getVariantClasses = (variants) => {
    if (!variants) return '';
    return variants.split(' ').map(variant => styles[variant]).filter(Boolean).join(' ');
  };

  const buttonContent = (
    <button className={`${styles.commonarrowbutton} ${getVariantClasses(Butttonvarient)} ${styles[buttonclassName] || buttonclassName || ''}`} onClick={onClick} disabled={disabled || isBtnLoading}>
      <span>{Text}</span>
      {showIcon && (
        <div className={styles.butonarrow}>
          <Arrowicon />
          <Arrowicon />
        </div>
      )}
      {isBtnLoading && <Loader />}
    </button>
  );

  if (link && link !== "none") {
    const linkProps = {};
    if (Target) linkProps.target = Target;

    return (
      <Link href={link} {...linkProps}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
