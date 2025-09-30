import React from "react";
import Webinarherobanner from "./webinarherobanner";
import Whyattend from "./whyattend";
import Whatlearn from "./whatlearn";
import Benefits from "./benefits";
import Workshopfor from "./workshopfor";
import Testimonials from "./testimonials";
import Webinarfaq from "./webinarfaq";
import Webinarfooter from "./webinarfooter";
import Backtesting from "./backtesting";

export default function Webinarpage() {
  return (
    <>
      <Webinarherobanner />
      <Whyattend />
      <Whatlearn />
      <Benefits />
      <Workshopfor />
      <Testimonials />
      {/* <Backtesting /> */}
      <Webinarfaq />
      <Webinarfooter />
    </>
  );
}
