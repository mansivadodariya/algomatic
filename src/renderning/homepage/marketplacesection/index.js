import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./marketplacesection.module.scss";
import Commonarrowbutton from "@/components/commonarrowbutton";
import { getCategoryWithStrategies, getStrategies } from "@/lib/strategyApi";

const AiIcon = "/assets/icons/ai-gen-xii.png";

export default function Marketplacesection() {
  const [strategies, setStrategies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStrategiesFromApi() {
      try {
        setLoading(true);
        // Fetch from API
        const res = await getCategoryWithStrategies(1, 10);
        const categories = res?.payload?.data || [];
        let items = [];

        categories.forEach((cat) => {
          if (cat?.strategies?.length) {
            items.push(...cat.strategies);
          }
        });

        // Fallback to getStrategies if categories had no nested strategies
        if (items.length === 0) {
          const stratRes = await getStrategies(1, 10);
          items = stratRes?.payload?.data || [];
        }

        setStrategies(items);
      } catch (err) {
        console.error("Error fetching marketplace strategies:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchStrategiesFromApi();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    className: styles.planSlider,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.marketplacesectionmain} id="Marketplace">
      <div className="container-xl">
        {/* Header Section */}
        <div className={styles.marketplacesectionheader}>
          <div className={styles.headerMain}>
            <div className={styles.headerContent}>
              <h2>
                Explore Our <span>Trading Strategies</span>
              </h2>
              <p>
                Browse automated algorithmic trading bots available in the
                Algomatic Marketplace. Fully integrated with real-time execution
                and risk management.
              </p>
            </div>

            <div className={styles.headerActions}>
              <Commonarrowbutton
                Text="Explore Marketplace"
                Butttonvarient="dark"
                link="/marketplace"
              />
            </div>
          </div>
        </div>

        {/* Dynamic Strategies Cards Grid */}
        <div className={styles.botCardsGrid}>
          {loading ? (
            <div className={styles.loadingContainer}>
              <p>Loading strategies from marketplace...</p>
            </div>
          ) : strategies.length > 0 ? (
            strategies.slice(0, 6).map((item, index) => (
              <Link
                href={`/marketplace/${item?._id}`}
                className={styles.strategiesCard}
                key={item?._id || index}
              >
                <div>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item?.imageUrl || AiIcon}
                      alt="strategy"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.details}>
                    <h3>{item?.title}</h3>
                    <p>{item?.shortDescription}</p>
                  </div>
                </div>

                {item?.strategyPlans?.length > 0 && (
                  <div className={styles.sliderContainer}>
                    <Slider {...sliderSettings}>
                      {item.strategyPlans.map((plan) => (
                        <div key={plan?._id}>
                          <div className={styles.plantag}>
                            <div className={styles.planhead}>
                              <span className={styles.planType}>
                                {plan?.planType?.replace(/^(\d+)([a-zA-Z]+)$/, "$1 $2")}
                              </span>
                              <span className={styles.planPrice}>
                                ${plan?.price}
                              </span>
                            </div>
                            <div className={styles.planmrp}>
                              <span className={styles.planmrpitle}>M.R.P.:</span>
                              <del className={styles.planmrpamount}>
                                ${plan?.initialPrice ?? 0}
                              </del>
                            </div>
                            <div className={styles.plandiscount}>
                              <span className={styles.plandiscountitle}>Discount :</span>
                              <span className={styles.plandiscountamount}>
                                -{plan?.discount ?? 0}%
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                )}

                <Commonarrowbutton
                  Text="Buy Now"
                  Butttonvarient="Blueoutlined"
                  link={`/marketplace/${item?._id}`}
                  Target="blank"
                  buttonclassName="widthfull"
                />
              </Link>
            ))
          ) : (
            <div className={styles.emptyContainer}>
              <p>No active strategies found in the marketplace.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
