import React from "react";
import DashboardGreeting from "./DashboardGreeting";
import MetricCardsRow from "./MetricCardsRow";
import PerformanceGraph from "./PerformanceGraph";
import QuickActionsGrid from "./QuickActionsGrid";

export default function TradingBotsOverview({
  styles,
  user,
  greetingText,
  setIsDeployModalOpen,
  openMetaModal,
  setIsQuickActionOpen,
  handleTabChange,
}) {
  return (
    <>
      {/* 1. Dynamic Greeting Section with Hero Gradient */}
      <DashboardGreeting
        styles={styles}
        user={user}
        greetingText={greetingText}
      />

      {/* 2. Top 4 Metric KPI Cards */}
      <MetricCardsRow styles={styles} />

      {/* 3. Main Overview Grid: Graph & Quick Actions */}
      <div className={styles.overviewMainGrid}>
        <PerformanceGraph styles={styles} />

        <QuickActionsGrid
          styles={styles}
          setIsDeployModalOpen={setIsDeployModalOpen}
          openMetaModal={openMetaModal}
          setIsQuickActionOpen={setIsQuickActionOpen}
          handleTabChange={handleTabChange}
        />
      </div>
    </>
  );
}
