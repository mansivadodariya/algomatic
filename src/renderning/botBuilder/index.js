import React, { useEffect } from "react";
import styles from "./botBuilder.module.scss";
import BotBuilderHeroBanner from "./botBuilderHeroBanner";
import Aibotbuildersection from "../homepage/aibotbuildersection";
import AiBotFeatures from "./aiBotFeatures";
import Manualbotconfigsection from "../homepage/manualbotconfigsection";
import ManualBotFeatures from "./manualBotFeatures";

export default function BotBuilder() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={styles.botBuilderContainer}>
      {/* 1. HERO BANNER */}
      <BotBuilderHeroBanner />

      {/* 2. AI BOT BUILDER SECTION */}
      <Aibotbuildersection />

      {/* 3. AI BOT KEY FEATURES HIGHLIGHTS */}
      <AiBotFeatures />

      {/* 4. MANUAL BOT CONFIG SECTION */}
      <Manualbotconfigsection />

      {/* 5. MANUAL BOT FEATURES (WHY USE CUSTOM BOT BUILDER) */}
      <ManualBotFeatures />
    </div>
  );
}
