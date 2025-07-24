import React from "react";
import classNames from "classnames";
import styles from "./modal.module.scss";

export default function Modal({ isOpen, onClose, children, size = "default" }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={classNames(styles.modal, size === "large" && styles.large, size === "small" && styles.small)} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
