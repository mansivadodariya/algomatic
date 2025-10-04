import React from "react";
import styles from "./relatedservices.module.scss";
import Commonlable from "@/components/commonlable";
import Signupicon from "../../../../public/assets/icons/signupicon";
import Prompticon from "../../../../public/assets/icons/prompticon";
import Marketingtoolsicon from "../../../../public/assets/icons/marketingtoolsicon";
import Realtimeicon from "../../../../public/assets/icons/realtimeicon";
import Fastpayouticon from "../../../../public/assets/icons/fastpayouticon";
import Earnicon from "../../../../public/assets/icons/earnicon";
import Rocketicon from "../../../../public/assets/icons/rocketicon";
import Link from "next/link";
import Right from "@/components/icons/right";

export default function Relatedservices() {
  const relatedservicescard = [
    {
      Icon: <Rocketicon />,
      Title: "Custom AI Agents",
      Description:
        "Build autonomous AI agents that work 24/7 to automate workflows, enhance customer experiences, and boost productivity by ...",
      Cardlink: "/",
    },
    {
      Icon: <Rocketicon />,
      Title: "Business Process Automation",
      Description:
        "Streamline operations with intelligent automation that reduces manual work, eliminates errors, and scales your business ...",
      Cardlink: "/",
    },
  ];
  return (
    <div className={styles.relatedservicesmain}>
      <div className="container-xl">
        <div className={styles.contentholder}>
          <div className={styles.relatedservicestitle}>
            <Commonlable Text="Related Services" />
            <h2>
              Explore Our Other <span>AI Solutions</span>
            </h2>
            <p>
              Discover complementary services that can further accelerate your
              digital transformation journey.
            </p>
          </div>
          <div className={styles.relatedservicesgrid}>
            {relatedservicescard.map((item, index) => {
              return (
                <Link
                  href={item.Cardlink}
                  key={index}
                  className={styles.relatedservicesgriditem}
                >
                  <div className={styles.cardiconflx}>
                    <div className={styles.cardicon}>{item.Icon}</div>
                  </div>
                  <div>
                    <h6>{item.Title}</h6>
                    <p>{item.Description}</p>
                    <span>
                      Learn More <Right />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
