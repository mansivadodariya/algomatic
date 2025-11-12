  import React from "react";
import classNames from "classnames";
import styles from "./modal.module.scss";

export default function Modal({ isOpen, onClose, children, size, modalclass = "default", noOverlay, closedBtn=true }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={noOverlay === false ? undefined : onClose}>
      <div className={classNames(
        styles.modal,
        size === "large" && styles.large,
        size === "medium" && styles.medium,
        size === "small" && styles.small,
        styles[modalclass]
      )} onClick={(e) => e.stopPropagation()}>
        {closedBtn && <button className={styles.close} onClick={onClose} aria-label="Close modal">
          &times;
        </button>}
        {children}
      </div>
    </div>
  );
}
  