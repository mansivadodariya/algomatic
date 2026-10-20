import React from "react";
import Head from "next/head";
import AskOurExpert from "@/renderning/askOurExpert";

export default function AskOurExpertPage() {
  return (
    <>
      <Head>
        <title>Ask Our Expert | Algomatic</title>
        <meta
          name="description"
          content="Connect with our experts at Algomatic to get personalized trading bot and algorithmic solutions."
        />
      </Head>
      <div>
        <AskOurExpert />
      </div>
    </>
  );
}
