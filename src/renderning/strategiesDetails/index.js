import React, { useEffect, useState } from "react";
import { BaseURL } from "@/utils/config";
import { marked } from "marked";
import styles from "./strategiesDetails.module.scss";
import RightBlackLg from "@/components/icons/rightBlackLg";
import { useRouter } from "next/router";
import { getStrategyById, getStrategyPlans } from "@/lib/strategyApi";
import StrategiesPlans from "../strategies/strategiesPlans";
import Slider from "react-slick";
import Leftarrow from "../../../public/assets/icons/leftarrow";

// --- Arrow Components ---
function SampleNextArrow({ onClick, disabled }) {
  return (
    <div
      className={`${styles.nextArrow} ${disabled ? styles.disable : ""}`}
      onClick={disabled ? null : onClick}
    >
      <Leftarrow />
    </div>
  );
}

function SamplePrevArrow({ onClick, disabled }) {
  return (
    <div
      className={`${styles.prevArrow} ${disabled ? styles.disable : ""}`}
      onClick={disabled ? null : onClick}
    >
      <Leftarrow />
    </div>
  );
}

// --- Skeleton Loader ---
function Skeleton() {
  return (
    <div className={styles.strategiesDetailsAlignment}>
      <hr className={styles.hr} />
      <div className="container-xl">
        <div className={styles.center}>
          <div className={styles.backbtn} style={{ opacity: 0.5 }}>
            <div
              className={styles.skeleton}
              style={{ width: 24, height: 24, borderRadius: "50%" }}
            />
            <span
              className={styles.skeleton}
              style={{
                width: 60,
                height: 20,
                display: "inline-block",
                borderRadius: 4,
              }}
            ></span>
          </div>
          <div className={styles.details}>
            <div
              className={styles.skeleton}
              style={{
                height: 32,
                width: 200,
                marginBottom: 16,
                borderRadius: 4,
              }}
            ></div>
            <div
              className={`${styles.img} ${styles.skeleton}`}
              style={{ height: 200, borderRadius: 8, marginBottom: 16 }}
            ></div>
            <div
              className={styles.skeleton}
              style={{
                height: 80,
                width: "100%",
                marginBottom: 16,
                borderRadius: 4,
              }}
            ></div>
            <div
              className={styles.skeleton}
              style={{
                height: 32,
                width: 100,
                marginBottom: 16,
                borderRadius: 4,
              }}
            ></div>
            <div className={styles.strategiesCardList}>
              <div className={styles.grid}>
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className={styles.skeleton}
                    style={{ height: 120, borderRadius: 8, margin: 8, flex: 1 }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---
export default function StrategiesDetails() {
  const [sterategyDetails, setSterategyDetails] = useState(null);
  const [stetaritegyCard, setStetaritegyCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const router = useRouter();
  const { id } = router?.query;

  useEffect(() => {
    if (!id) return;
    async function fetchStrategy() {
      setLoading(true);
      try {
        const res = await getStrategyById(id);
        setSterategyDetails(res.payload);

        const data = await getStrategyPlans(id);
        setStetaritegyCard(data?.payload || []);
      } catch (error) {
        console.error("Error fetching strategy by id:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchStrategy();
  }, [id]);

  const getEmbedUrl = (url) => {
    if (!url) return "";
    const shortRegex = /https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/;
    const longRegex =
      /https?:\/\/(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
    const shortMatch = url.match(shortRegex);
    const longMatch = url.match(longRegex);
    if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
    if (longMatch) return `https://www.youtube.com/embed/${longMatch[2]}`;
    return url;
  };

  if (loading) return <Skeleton />;

  const totalSlides = sterategyDetails?.link?.length || 0;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    nextArrow: <SampleNextArrow disabled={currentSlide >= totalSlides - 1} />,
    prevArrow: <SamplePrevArrow disabled={currentSlide === 0} />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.strategiesDetailsAlignment}>
      <hr className={styles.hr} />
      <div className="container-xl">
        <div className={styles.center}>
          <div
            className={styles.backbtn}
            onClick={() => router.push("/marketplace")}
          >
            <RightBlackLg />
            <span>Back</span>
          </div>

          <div className={styles.details}>
            <h2>{sterategyDetails?.title}</h2>

            {/* Image */}
            <div className={styles.img}>
              <img
                src={
                  sterategyDetails?.imageUrl ||
                  "/assets/images/strategiesDetails.jpg"
                }
                alt="Strategies"
              />
            </div>

            {/* Description */}
            <div className={styles.description}>
              <p
                dangerouslySetInnerHTML={{
                  __html: marked(sterategyDetails?.description || ""),
                }}
              />
            </div>

            {/* Tutorial Video Slider */}
            <h2>Tutorial</h2>
            <div className={styles.tutorialslider}>
              <Slider {...settings}>
                {sterategyDetails?.link?.map((item, i) => (
                  <div key={i}>
                    <div className={styles.tutorialitem}>
                      <iframe
                        src={getEmbedUrl(item?.url)}
                        title={`YouTube video ${i}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        width="100%"
                        height="400"
                        frameBorder="0"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Strategy Plans */}
            <h2>Plans</h2>
            <div className={styles.strategiesCardList}>
              <div className={styles.grid}>
                {stetaritegyCard?.length > 0 &&
                  stetaritegyCard.map((item, i) => (
                    <StrategiesPlans item={item} index={i} key={i} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
