import React from "react";
import styles from "./clientstories.module.scss";
import Commonlable from "@/components/commonlable";
import Marquee from "react-fast-marquee";
const profileimage1 = "/assets/images/profileimage1.png";
const profileimage2 = "/assets/images/profileimage2.png";
const profileimage3 = "/assets/images/profileimage3.png";
const profileimage4 = "/assets/images/profileimage4.png";
const profileimage5 = "/assets/images/profileimage5.png";
const profileimage6 = "/assets/images/profileimage6.png";
const profileimage7 = "/assets/images/profileimage7.png";

export default function Clientstories() {
  const Clientrevmap = [
    {
      message:
        "Algomatic has completely transformed the way I trade gold. The bot’s ability to detect price gaps between Spot and Future markets is impressive. It’s fast, reliable, and has helped me make consistent profits with minimal effort!",
      user: "Rajesh Kumar",
      location: "India",
      profileimage: profileimage1,
    },
    {
      message:
        "I’ve been using Algomatic for a few months now, and the results are amazing. The bot's high-speed execution and risk management features have made my trading journey much smoother. It’s a must-have tool for any serious trader",
      user: "Michael Davis",
      location: "USA",
      profileimage: profileimage2,
    },
    {
      message:
        "As a beginner in forex trading, Algomatic was exactly what I needed. Its easy-to-use interface and quick execution gave me confidence in automated trading. I’ve seen significant growth in my trades since using it.",
      user: "Ayesha Khan",
      location: "Nepal",
      profileimage: profileimage3,
    },
    {
      message:
        "Algomatic has truly simplified my trading process. I no longer need to constantly monitor the market. The bot does it all for me, finding profitable opportunities and executing trades faster than I ever could.",
      user: "Linh Nguyen",
      location: "India",
      profileimage: profileimage4,
    },
    {
      message:
        "With Algomatic, I’ve noticed significant improvements in my returns. The way it identifies and capitalizes on price gaps is unmatched. It’s an essential tool for anyone serious about forex trading.",
      user: "Arvind Sharma",
      location: "India",
      profileimage: profileimage5,
    },
    {
      message:
        "Algomatic has exceeded my expectations. I’ve been using automated trading bots for years, but this one is by far the most efficient. The combination of technology and human intelligence makes it a game-changer for my portfolio.",
      user: "Sarah Lee",
      location: "USA",
      profileimage: profileimage6,
    },
    {
      message:
        "Being new to the forex market, I was cautious at first, but Algomatic proved to be a game-changer. It’s intuitive, fast, and ensures I don’t miss out on any arbitrage opportunities. Highly recommend it to anyone looking to boost their trading strategy.",
      user: "Fahad Ali",
      location: "Bangladesh",
      profileimage: profileimage7,
    },
  ];
  return (
    <>
      <div className={styles.clientstoriesmain}>
        <div className="container-md">
          <div className={styles.clientstoriestitle}>
            <Commonlable Text="Our Pricing Plans" />
            <h5>
              See What <span>Our Clients</span> Are Saying
            </h5>
            <p>
              Learn how our solutions have empowered our clients to achieve
              success!
            </p>
          </div>
          <div className={styles.clientreviewmarquee}>
            <Marquee autoFill speed={100}>
              <div className={styles.clientreviewmarqueeflx}>
                {Clientrevmap.map((i, index) => (
                  <div key={index} className={styles.clientreviewboxmain}>
                    <div className={styles.clientreviewbody}>
                      <p>{i.message}</p>
                    </div>
                    <div className={styles.clientreviewfoot}>
                      <div className={styles.clientreviewfootimage}>
                        <img src={i.profileimage} alt={i.profileimage} />
                      </div>
                      <div className={styles.clientreviewfoottext}>
                        <span>{i.user}</span>
                        <p>{i.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}
