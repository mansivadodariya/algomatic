import React from "react";
import Head from "next/head";
import ContactUs from "@/renderning/contactUs";

export default function ContactUsPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Algomatic - Algorithmic Trading Bots & Quant Engineering</title>
        <meta
          name="description"
          content="Connect with Algomatic's quantitative trading bot engineers and customer support desk. Instant WhatsApp support, custom algorithmic development under NDA, and institutional partnership inquiries."
        />
        <meta
          name="keywords"
          content="Algomatic contact, algorithmic trading bot support, quant bot developer, forex trading bot, TradingView webhook bot support"
        />
        <meta property="og:title" content="Contact Us | Algomatic Trading Bots" />
        <meta
          property="og:description"
          content="Connect with Algomatic's quantitative trading bot engineers and customer support desk."
        />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <ContactUs />
      </div>
    </>
  );
}
