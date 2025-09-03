import React from "react";
import styles from "./howitworks.module.scss";
import Commonlable from "@/components/commonlable";
import Signupicon from "../../../../public/assets/icons/signupicon";
import Prompticon from "../../../../public/assets/icons/prompticon";
import Marketingtoolsicon from "../../../../public/assets/icons/marketingtoolsicon";
import Realtimeicon from "../../../../public/assets/icons/realtimeicon";
import Fastpayouticon from "../../../../public/assets/icons/fastpayouticon";
import Earnicon from "../../../../public/assets/icons/earnicon";

export default function Howitworks() {
  const Howitworkscard = [
    {
      Icon: <Signupicon />,
      Title: "Sign Up",
      Description: "Register for free and get your unique affiliate link.",
    },
    {
      Icon: <Prompticon />,
      Title: "Promote",
      Description:
        "Share your link on websites, blogs, emails, or social media.",
    },
    {
      Icon: <Earnicon />,
      Title: "Earn 25%",
      Description: "Get paid every time someone buys through your link.",
    },
    {
      Icon: <Marketingtoolsicon />,
      Title: "Marketing Tools",
      Description: "Banners, creatives and tracking",
    },
    {
      Icon: <Realtimeicon />,
      Title: "Real-time dashboard",
      Description: "Track your earnings and performance in real time.",
    },
    {
      Icon: <Fastpayouticon />,
      Title: "Fast Payouts",
      Description: "Get paid every time someone buys through your link.",
    },
  ];
  return (
    <div className={styles.howitworksmain}>
      <div className="container-xl">
        <div className={styles.howitworkstitle}>
          <Commonlable Text="How it works" />
          <h2>
            How it <span>works</span>
          </h2>
          {/* <p></p> */}
        </div>
        <div className={styles.howitworksgrid}>
          {Howitworkscard.map((item, index) => {
            return (
              <div key={index} className={styles.howitworksgriditem}>
                <div className={styles.cardiconflx}>
                  <div className={styles.cardicon}>{item.Icon}</div>
                </div>
                <div>
                  <h6>{item.Title}</h6>
                  <p>{item.Description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
