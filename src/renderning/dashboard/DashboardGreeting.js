import React from "react";

export default function DashboardGreeting({ styles, user, greetingText }) {
  return (
    <div className={styles.greetingHeader}>
      <div className={styles.greetingLeft}>
        <h2 className={styles.greetingTitle}>
          {greetingText},{" "}
          <span className={styles.greetingName}>
            {user?.name ? user.name.split(" ")[0] : "Trader"}!
          </span>
        </h2>
        <p className={styles.greetingSubtitle}>
          Welcome back! Here’s what’s happening with your algorithmic trading
          portfolio and execution engine today.
        </p>
      </div>
    </div>
  );
}
