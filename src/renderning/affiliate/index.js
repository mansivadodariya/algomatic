import React from "react";
import Affiliateherobanner from "./affiliateherobanner";
import Howitworks from "./howitworks";
import Whyalgomatic from "./whyalgomatic";
import Affiliatefeatures from "./affiliatefeatures";
import Transformsection from "../homepage/transformsection";
import Iblink from "./iblink";

export default function Affiliatepagecomponents() {
  return (
    <>
      <Affiliateherobanner />
      <Howitworks />
      {/* <Iblink /> */}
      <Whyalgomatic />
      <Affiliatefeatures />
      <Transformsection />
    </>
  );
}
