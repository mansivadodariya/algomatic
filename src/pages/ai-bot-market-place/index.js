import React from "react";
import Head from "next/head";
import AiBotMarketplace from "@/renderning/aiBotMarketplace";

export default function AiBotMarketplacePage() {
  return (
    <>
      <Head>
        <title>AI Bot Marketplace | Automated Algorithmic Trading Bots | Algomatic</title>
        <meta
          name="description"
          content="Explore and deploy top-tier AI algorithmic trading bots. Battle-tested strategies for Forex, Gold, Indices & Crypto with automated risk management."
        />
        <meta
          name="keywords"
          content="AI Bot Marketplace, Algo Trading, Forex Trading Bot, Automated Trading Strategies, Algomatic"
        />
        <meta property="og:title" content="AI Bot Marketplace | Algomatic" />
        <meta
          property="og:description"
          content="Discover, backtest, and deploy high-performance algorithmic trading bots engineered with cutting-edge AI."
        />
      </Head>
      <div>
        <AiBotMarketplace />
      </div>
    </>
  );
}
