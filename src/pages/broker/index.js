import React from "react";
import Head from "next/head";
import Broker from "@/renderning/broker";

export default function BrokerPage() {
  return (
    <>
      <Head>
        <title>Certified Brokers & Liquidity Providers | Algomatic</title>
        <meta
          name="description"
          content="Explore certified Forex, Equities, Crypto, and Multi-Asset trading brokers compatible with Algomatic AI trading bots, automated strategies, and ultra-low latency FIX APIs."
        />
        <meta
          name="keywords"
          content="Certified Brokers, Forex Brokers, Algorithmic Trading Broker, FIX API, MT4, MT5, ECN Liquidity, Algomatic"
        />
        <meta property="og:title" content="Certified Brokers & Liquidity Providers | Algomatic" />
        <meta
          property="og:description"
          content="Connect automated algorithmic bots with institutional-grade, multi-regulated brokers for seamless execution."
        />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <Broker />
      </main>
    </>
  );
}
