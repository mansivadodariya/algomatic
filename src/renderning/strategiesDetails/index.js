import React, { useEffect, useRef, useState } from "react";
import { BaseURL } from "@/utils/config";
import { marked } from "marked";
import styles from "./strategiesDetails.module.scss";
import RightBlackLg from "@/components/icons/rightBlackLg";
import { useRouter } from "next/router";
import { getStrategyById, getStrategyPlans } from "@/lib/strategyApi";
import StrategiesPlans from "../strategies/strategiesPlans";
import Slider from "react-slick";
import Leftarrow from "../../../public/assets/icons/leftarrow";
import Dropdownicon from "../../../public/assets/icons/dropdownicon";
import { capitalize } from "lodash";
import Iblink from "../affiliate/iblink";

// Arrow Components
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

// Skeleton Loader
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

// Main Component
export default function StrategiesDetails() {
  const [sterategyDetails, setSterategyDetails] = useState(null);
  const [strategyCards, setStrategyCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [currentUrl, setCurrentUrl] = useState([]);
  const router = useRouter();
  const { id } = router?.query;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!id) return;
    async function fetchStrategy() {
      setLoading(true);
      try {
        const res = await getStrategyById(id);
        const strategy = res.payload;
        setSterategyDetails(strategy);

        if (strategy?.link?.length > 0) {
          setSelectedLanguage(strategy.link[0].language);
          setCurrentUrl([strategy.link[0]]);
        }

        const data = await getStrategyPlans(id);
        setStrategyCards(data?.payload || []);
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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    nextArrow: (
      <SampleNextArrow
        disabled={currentSlide >= (currentUrl?.length || 0) - 1}
      />
    ),
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

  const handleLanguageDropdown = (item) => {
    const filtered = sterategyDetails?.link?.filter(
      (link) => link.language === item.language
    );
    setSelectedLanguage(item.language);
    setCurrentUrl(filtered || []);
    setDropdownOpen(false);
  };

  if (loading) return <Skeleton />;

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

            {/* Tutorial Video */}
            <h2>Tutorial</h2>
            <div className={styles.dropdowncompo} ref={dropdownRef}>
              <p>Select your preferred language :</p>
              <div className={styles.dropdownrel}>
                <div
                  className={`${styles.drodpdowninput} ${
                    dropdownOpen ? styles.active : ""
                  }`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>{capitalize(selectedLanguage)}</span>
                  <Dropdownicon />
                </div>
                <div
                  className={`${styles.dropdownmain} ${
                    dropdownOpen ? styles.active : ""
                  }`}
                >
                  <div className={styles.dropdownalignment}>
                    {sterategyDetails?.link?.map((item) => (
                      <span
                        key={item?.language}
                        onClick={() => handleLanguageDropdown(item)}
                      >
                        {capitalize(item?.language)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.tutorialslider}>
              <Slider {...settings}>
                {currentUrl?.map((item, i) => (
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
                {strategyCards?.length > 0 &&
                  strategyCards.map((item, i) => (
                    <StrategiesPlans item={item} index={i} key={i} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Iblink />
    </div>
  );
}
