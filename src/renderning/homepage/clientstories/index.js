import React from "react";
import styles from "./clientstories.module.scss";

const profileimage1 = "/assets/images/profileimage1.png";
const profileimage2 = "/assets/images/profileimage2.png";
const profileimage3 = "/assets/images/profileimage3.png";
const profileimage4 = "/assets/images/profileimage4.png";
const profileimage5 = "/assets/images/profileimage5.png";
const profileimage6 = "/assets/images/profileimage6.png";
const profileimage7 = "/assets/images/profileimage7.png";

export default function Clientstories() {
  const leftColumnReviews = [
    {
      message:
        "Algomatic has completely transformed the way I trade gold. The bot's ability to detect price gaps between Spot and Future markets is impressive. It's fast, reliable, and has helped me make consistent profits with minimal effort!",
      user: "Rajesh Kumar",
      location: "India",
      rating: "5.0",
      profileimage: profileimage1,
    },
    {
      message:
        "As a beginner in forex trading, Algomatic was exactly what I needed. Its easy-to-use interface and quick execution gave me confidence in automated trading. I've seen significant growth in my trades since using it.",
      user: "Ayesha Khan",
      location: "India",
      rating: "4.9",
      profileimage: profileimage3,
    },
    {
      message:
        "With Algomatic, I've noticed significant improvements in my returns. The way it identifies and capitalizes on price gaps is unmatched. It's an essential tool for anyone serious about forex trading.",
      user: "Arvind Sharma",
      location: "India",
      rating: "5.0",
      profileimage: profileimage5,
    },
    {
      message:
        "Being new to the forex market, I was cautious at first, but Algomatic proved to be a game-changer. It's intuitive, fast, and ensures I don't miss out on any arbitrage opportunities. Highly recommend it to anyone looking to boost their trading strategy.",
      user: "Fahad Ali",
      location: "Bangladesh",
      rating: "4.9",
      profileimage: profileimage7,
    },
  ];

  const rightColumnReviews = [
    {
      message:
        "I've been using Algomatic for a few months now, and the results are amazing. The bot's high-speed execution and risk management features have made my trading journey much smoother. It's a must-have tool for any serious trader.",
      user: "Michael Davis",
      location: "USA",
      rating: "4.9",
      profileimage: profileimage2,
    },
    {
      message:
        "Algomatic has truly simplified my trading process. I no longer need to constantly monitor the market. The bot does it all for me, finding profitable opportunities and executing trades faster than I ever could.",
      user: "Linh Nguyen",
      location: "South Korea",
      rating: "5.0",
      profileimage: profileimage4,
    },
    {
      message:
        "Algomatic has exceeded my expectations. I've been using automated trading bots for years, but this one is by far the most efficient. The combination of technology and human intelligence makes it a game-changer for my portfolio.",
      user: "Sarah Lee",
      location: "USA",
      rating: "4.9",
      profileimage: profileimage6,
    },
  ];

  return (
    <section className={styles.clientstoriesmain}>
      <div className={styles.sectionInnerWrapper}>
        <div className={styles.threeColumnsGrid}>
          {/* Left Column of Cards */}
          <div className={styles.cardsColumnLeft}>
            {leftColumnReviews.map((item, idx) => (
              <div key={`left-${idx}`} className={styles.reviewCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatarWrap}>
                    <img src={item.profileimage} alt={item.user} />
                  </div>
                  <div className={styles.userInfo}>
                    <h4>{item.user}</h4>
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <p>“{item.message}”</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.ratingBox}>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="#f59e0b"
                      stroke="#f59e0b"
                      strokeWidth="2"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Sticky Title with dedicated spacing */}
          <div className={styles.centerColumnSticky}>
            <div className={styles.stickyTitleContent}>
              <h5>
                See What <span>Our Clients</span> Are Saying
              </h5>
              <p>
                Learn how our solutions have empowered our clients to achieve
                success!
              </p>
            </div>
          </div>

          {/* Right Column of Cards (Staggered offset) */}
          <div className={styles.cardsColumnRight}>
            {rightColumnReviews.map((item, idx) => (
              <div key={`right-${idx}`} className={styles.reviewCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatarWrap}>
                    <img src={item.profileimage} alt={item.user} />
                  </div>
                  <div className={styles.userInfo}>
                    <h4>{item.user}</h4>
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <p>“{item.message}”</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.ratingBox}>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="#f59e0b"
                      stroke="#f59e0b"
                      strokeWidth="2"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
