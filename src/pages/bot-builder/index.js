import React from "react";
import Head from "next/head";
import BotBuilder from "@/renderning/botBuilder";

export default function BotBuilderPage() {
  return (
    <>
      <Head>
        <title>Bot Builder | Create AI & Manual Trading Bots | Algomatic</title>
        <meta
          name="description"
          content="Build, configure, and backtest automated trading bots using conversational AI or precision manual rules. Zero coding required."
        />
        <meta
          name="keywords"
          content="Bot Builder, AI Bot Builder, Algorithmic Trading Bot, Automated Strategy Builder, Algomatic"
        />
        <meta property="og:title" content="Bot Builder | Algomatic" />
        <meta
          property="og:description"
          content="Create custom algorithmic trading bots with conversational AI or structured manual parameters."
        />
      </Head>
      <div>
        <BotBuilder />
      </div>
    </>
  );
}
