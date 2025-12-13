import React, { useState } from "react";
import styles from "./workshopfor.module.scss";
import Commonlable from "@/components/commonlable";
import { WebinarInquiryForm } from "@/components/webinarInquiryForm";
import Experiencedtraders from "../../../../public/assets/images/Experienced traders.png";
import Investors from "../../../../public/assets/images/Investors.png";
import Traders from "../../../../public/assets/images/Traders.png";
import Beginners from "../../../../public/assets/images/Beginners.png";
import Image from "next/image";
import { InquiryForm } from "@/components/inquiryForm";
import { useAppContext } from "@/context/AppContext";
import Whatsappicon from "../../../../public/assets/icons/Whatsappicon";

export default function Workshopfor() {
  const { utilitySettings } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className={styles.workshopsectionmain}>
        <div className="container-xl">
          <div className={styles.workshopcontent}>
            <div className={styles.title}>
              <Commonlable Text="Who Is" />
              <h4>
                Who Is <span>This Workshop For ?</span>
              </h4>
              <p>This webinar is perfect for</p>
            </div>
            <div className={styles.grid}>
              <div className={styles.items}>
                <Image src={Beginners} alt="Cards Image" />
                <p>
                  Beginners who want to <span>start trading with confidence</span>.
                </p>
              </div>
              <div className={styles.items}>
                <Image src={Traders} alt="Cards Image" />
                <p>
                  Traders struggling with <span>loss-making strategies</span>.
                </p>
              </div>
              <div className={styles.items}>
                <Image src={Investors} alt="Cards Image" />
                <p>
                  Investors looking for <span>safe opportunities in XAUUSD (Gold)</span>.
                </p>
              </div>
              <div className={styles.items}>
                <Image src={Experiencedtraders} alt="Cards Image" />
                <p>
                  Experienced traders who want to <span>refine their techniques</span>.
                </p>
              </div>
            </div>
            <div className={styles.ctabuttonmain}>
              {/* <button className={styles.ctaButton} onClick={handleRegisterClick}>
                Register Today
              </button> */}
              <a href={`https://wa.me/${utilitySettings?.phoneNo}?text=Hi%20want%20to%20Book%20a%20Live%20Session%20with%20Expert`}
                target="_blank"
                rel="noopener noreferrer" className={styles.chatwithus}>
                <Whatsappicon />
                <span>Chat with us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <WebinarInquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
