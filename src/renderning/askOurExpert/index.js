import React, { useEffect } from "react";
import AskOurExpertHeroBanner from "./askOurExpertHeroBanner";
import Personalizedbotsection from "../homepage/personalizedbotsection";

export default function AskOurExpert() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      {/* 1. HERO BANNER */}
      <AskOurExpertHeroBanner />

      {/* 2. PERSONALIZED BOT DEVELOPMENT SECTION */}
      <Personalizedbotsection />
    </div>
  );
}
