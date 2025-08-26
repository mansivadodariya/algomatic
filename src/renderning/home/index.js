import React, { useEffect } from "react";
import Homeherobanner from "../homepage/homeherobanner";
import Whatalgosection from "../homepage/whatalgosection";
import Howitworkssection from "../homepage/howitworkssection";
import Keyfeaturessection from "../homepage/keyfeaturessection";
import Algovideosection from "../homepage/algovideosection";
import Pricingsection from "../homepage/pricingsection";
import Backtestingsection from "../homepage/backtestingsection";
import Recommendedbrokers from "../homepage/recommendedbrokers";
import Clientstories from "../homepage/clientstories";
import Faqsection from "../homepage/faqsection";
import Transformsection from "../homepage/transformsection";
export default function Homepage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      {/* <-- new sections --> */}
      <Homeherobanner />
      <Whatalgosection />
      <Howitworkssection />
      <Keyfeaturessection />
      <Algovideosection />
      <Pricingsection />
      <Backtestingsection />
      <Recommendedbrokers />
      <Clientstories />
      <Faqsection />
      <Transformsection />
    </div>
  );
}
