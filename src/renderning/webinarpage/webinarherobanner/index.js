import React, { useState } from "react";
import styles from "./webinarherobanner.module.scss";
import Commonlable from "@/components/commonlable";
import Image from "next/image";
import webinarbanner from "../../../../public/assets/images/webinarbanner.jpg";
import Calendaricon from "../../../../public/assets/icons/calendaricon";
import Timeicon from "../../../../public/assets/icons/timeicon";
import Videoicon from "../../../../public/assets/icons/videoicon";
import Globeicon from "../../../../public/assets/icons/globeicon";
import Truefillicon from "../../../../public/assets/icons/truefillicon";
import { WebinarInquiryForm } from "@/components/webinarInquiryForm";
import { useAppContext } from "@/context/AppContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg1 from "../../../../public/assets/images/sliderimg1.jpeg";
import sliderimg2 from "../../../../public/assets/images/sliderimg2.jpeg";
import sliderimg3 from "../../../../public/assets/images/sliderimg3.jpg";
import sliderimg4 from "../../../../public/assets/images/sliderimg4.jpg";
import sliderimg5 from "../../../../public/assets/images/sliderimg5.jpg";
import sliderimg6 from "../../../../public/assets/images/sliderimg6.jpg";
import { InquiryForm } from "@/components/inquiryForm";
import Whatsappicon from "../../../../public/assets/icons/Whatsappicon";

export default function Webinarherobanner() {
  const { utilitySettings } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  (console.log('-----------webinar'))

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <section className={styles.heroSection}>
        <div className="container-xl">
          <div className={styles.heroContent}>
            <div className={styles.title}>
              <Commonlable Text="Zero Loss Trading Strategy" />
              <h1>
                {/* Zero-Loss Trading Strategy in <span>XAUUSD</span> Pair */}
                Zero Risk Trading Strategy at <span>Zero Cost</span>
              </h1>
              <p>Discover a powerful trading strategy designed specifically for XAUUSD (Gold) that helps you minimize risks and maximize profits. Learn the proven system we use to trade with confidence—even in volatile markets.</p>
            </div>
            <div className={styles.grid}>
              <div className={styles.itemsleftmain}>
                <div className={styles.itemsleft}>
                  <div className={styles.webinarbannerimg}>
                    <Slider {...settings}>
                      <div>
                        <Image src={webinarbanner} alt="webinarbanner" />
                      </div>
                      {/* <div>
                        <Image src={sliderimg1} alt="sliderimg1" />
                      </div>
                      <div>
                        <Image src={sliderimg2} alt="sliderimg2" />
                      </div> */}
                      <div>
                        <Image src={sliderimg3} alt="sliderimg3" />
                      </div>
                      <div>
                        <Image src={sliderimg4} alt="sliderimg4" />
                      </div>
                      {/* <div>
                        <Image src={sliderimg5} alt="sliderimg5" />
                      </div>
                      <div>
                        <Image src={sliderimg6} alt="sliderimg6" />
                      </div> */}
                    </Slider>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.itemsright}>
                  <div className={styles.gridcards}>
                    <div className={styles.cards}>
                      <div className={styles.cardsicon}>
                        <Calendaricon />
                      </div>
                      <div className={styles.cardscontent}>
                        <span>Date</span>
                        <p>{utilitySettings?.webinar?.webinarDate}</p>
                      </div>
                    </div>
                    <div className={styles.cards}>
                      <div className={styles.cardsicon}>
                        <Timeicon />
                      </div>
                      <div className={styles.cardscontent}>
                        <span>Time</span>
                        <p>{utilitySettings?.webinar?.webinarTime}</p>
                      </div>
                    </div>
                    <div className={styles.cards}>
                      <div className={styles.cardsicon}>
                        <Videoicon />
                      </div>
                      <div className={styles.cardscontent}>
                        <span>Venue</span>
                        <p>{utilitySettings?.webinar?.webinarVenue}</p>
                      </div>
                    </div>
                    <div className={styles.cards}>
                      <div className={styles.cardsicon}>
                        <Globeicon />
                      </div>
                      <div className={styles.cardscontent}>
                        <span>Language</span>
                        <p>{utilitySettings?.webinar?.webinarLanguage}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rowlist}>
                    <div className={styles.list}>
                      <div className={styles.checked}>
                        <Truefillicon />
                      </div>
                      <p>XAUUSD Arbitrage Bot</p>
                    </div>
                    <div className={styles.list}>
                      <div className={styles.checked}>
                        <Truefillicon />
                      </div>
                      <p>Gold (XAUUSD) Future</p>
                    </div>
                    <div className={styles.list}>
                      <div className={styles.checked}>
                        <Truefillicon />
                      </div>
                      <p>Gold (XAUUSD) Spot</p>
                    </div>
                    <div className={styles.list}>
                      <div className={styles.checked}>
                        <Truefillicon />
                      </div>
                      <p>World Most Reliable Bot</p>
                    </div>
                  </div>
                  <div className={styles.ctabuttonmain}>
                    {/* <button className={styles.ctaButton} onClick={handleRegisterClick}>
                      Register Now
                    </button> */}
                    <a href={`https://wa.me/${utilitySettings?.phoneNo}`} target="_blank" className={styles.chatwithus}>
                      <Whatsappicon />
                      <span>Chat with us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WebinarInquiryForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
