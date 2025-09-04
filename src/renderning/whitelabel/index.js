import React from "react";
import Whitelabelherobanner from "./herobanner";
import Whatissection from "./whatwesection";
import Benefits from "./benefits";
import Iblink from "../affiliate/iblink";
import Howitworks from "./howitworks";
import Transformsection from "../homepage/transformsection";
import Whocanjoin from "./whocanjoin";

export default function WhitelabelPage() {
  return (
    <>
      <Whitelabelherobanner />
      <Whatissection />
      <Benefits />
      <Iblink />
      <Howitworks />
      <Whocanjoin />
      <Transformsection />
    </>
  );
}
