import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./strategiesCard.module.scss";
import { BaseURL } from "@/utils/config";
import toast from "react-hot-toast";
import Commonarrowbutton from "../../../components/commonarrowbutton";

const AiIcon = "/assets/icons/ai-gen-xii.png";

export default function StrategiesCard({ item, index }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
  }, [modalOpen]);

  const handleCopy = (user) => {
    navigator.clipboard.writeText(user);
    toast.success("Link copied!");
  };

  var settings = {
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
    <>
      <Link href={`/marketplace/${item?._id}`} className={styles.strategiesCard} key={index}>
        <div>
          <div className={styles.imageWrapper}>
            <Image src={item?.imageUrl || AiIcon} alt="strategy" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.details}>
            <h3>{item?.title}</h3>
            <p>{item?.shortDescription}</p>
          </div>
        </div>
        {item?.strategyPlans?.length > 0 && (
          <div className={styles.sliderContainer}>
            <Slider {...settings}>
              {item.strategyPlans.map((plan) => (
                <div key={plan?._id}>
                  <div className={styles.plantag}>
                    <div className={styles.planhead}>
                      <span className={styles.planType}>{plan?.planType.replace(/^(\d+)([a-zA-Z]+)$/, "$1 $2")}</span>
                      <span className={styles.planPrice}>${plan?.price}</span>
                    </div>
                    <div className={styles.planmrp}>
                      <span className={styles.planmrpitle}>M.R.P.:</span>
                      <del className={styles.planmrpamount}>${plan?.initialPrice ?? 0}</del>
                    </div>
                    <div className={styles.plandiscount}>
                      <span className={styles.plandiscountitle}>Discount :</span>
                      <span className={styles.plandiscountamount}>-{plan?.discount ?? 0}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
        <Commonarrowbutton Text="Buy Now" Butttonvarient="Blueoutlined" /* darkoutlined */ link={`/marketplace/${item?._id}`} Target="blank" buttonclassName="widthfull" />
      </Link>

      {modalOpen && (
        <div className={styles.linkmodal}>
          <div className={styles.whiteModal}>
            <div className={styles.modalClose}>
              <div onClick={() => setModalOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s...z" />
                </svg>
              </div>
            </div>
            <div className={styles.modalbody}>
              <h3>{item?.title}</h3>
              <span>Link</span>
              <div className={styles.linkText}>
                <a>{item?.link}</a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={() => handleCopy(item?.link)}>
                  <path d="M384 336l-192...z" />
                </svg>
              </div>
              <p>
                Send your transaction screenshot to <a>yash@rejoicehub.com</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
