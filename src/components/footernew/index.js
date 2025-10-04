import React from "react";
import styles from "./footernew.module.scss";
import Link from "next/link";
import Commonarrowbutton from "../commonarrowbutton";
import Whatsappicon from "../../../public/assets/icons/Whatsappicon";
import Emailicon from "../../../public/assets/icons/Emailicon";
import { useAppContext } from "@/context/AppContext";
import Mapicon from "../../../public/assets/icons/mapicon";
import Right from "../icons/right";
const Telegramicon = "/assets/icons/telegramicon.png";
const Instagramicon = "/assets/icons/instagramicon.png";
const Facebookicon = "/assets/icons/facebookicon.png";

const Logoimg = "/assets/logo/logo.png";
const QrImg = "/assets/images/qrimage.avif";

export default function Footernew() {
  const { utilitySettings } = useAppContext();

  return (
    <footer className={styles.footermain}>
      <div className="container-xl">
        <div className={styles.footerflx}>
          <div className={styles.footrleft}>
            <div>
              <div className={styles.footerlogo}>
                <Link href={"/"}>
                  <img src={Logoimg} alt="logo" />
                </Link>
              </div>
              <p>
                Join the revolution of forex trading with AlgoMatic. Let smart
                automation help you trade smarter, faster, and more efficiently.
              </p>
            </div>
            <Commonarrowbutton
              Text="Contact Us"
              Butttonvarient="darkoutlined"
              link={`https://wa.me/${utilitySettings?.phoneNo}`}
              Target="blank"
              buttonclassName="widthfull"
            />
          </div>

          <div>
            <div className={styles.footrright}>
              <div className={styles.footerrightflx}>
                <div className={styles.contactsection}>
                  <div className={styles.footercontentlinks}>
                    <div>
                      <h3>Contact Us</h3>
                      <Link
                        href={`https://wa.me/${utilitySettings?.phoneNo}`}
                        target="_blank"
                        className={styles.contactitem}
                      >
                        <Whatsappicon />
                        <p>{utilitySettings?.phoneNo}</p>
                      </Link>
                      <Link
                        href={`mailto:${utilitySettings?.email}`}
                        target="_blank"
                        className={styles.contactitem}
                      >
                        <Emailicon />
                        <p>{utilitySettings?.email}</p>
                      </Link>
                    </div>
                    <div className={styles.footeraddress}>
                      <h3>Address</h3>
                      <a
                        href="https://maps.app.goo.gl/7DYwA2hvBkaqamzc6"
                        target="__blank"
                      >
                        <Mapicon />
                        <p>30 N Gould St Ste R Sheridan, WY 82801</p>
                      </a>
                    </div>
                  </div>
                  <div className={styles.qrcontainer}>
                    <img src={QrImg} alt="QR Code" />
                  </div>
                </div>

                <div className={styles.risksection}>
                  <h3>Risk Warning</h3>
                  <p>
                    Forex trading, including automated trading with Algomatic,
                    involves significant risk and is not suitable for all
                    investors. You may lose more than your initial investment,
                    and past performance is not indicative of future results.
                    The forex market is highly volatile, and market conditions
                    can change rapidly. This website does not provide investment
                    advice, and users are encouraged to consult with a qualified
                    financial advisor before making any trading decisions. By
                    using Algomatic, you acknowledge and accept these risks.
                  </p>
                  <div className={styles.webinarlink}>
                    <Commonarrowbutton
                      Text="Join Webinar"
                      Butttonvarient="darkoutlined"
                      link={"/webinar"}
                    />
                  </div>
                </div>
              </div>

              {/* <div className={styles.footeraddress}>
              <h3>Address</h3>
              <a
                href="https://maps.app.goo.gl/7DYwA2hvBkaqamzc6"
                target="__blank"
              >
                <Mapicon />
                <p>30 N Gould St Ste R Sheridan, WY 82801</p>
              </a>
            </div> */}

              <div className={styles.footerbottom}>
                <div className={styles.copyrightpages}>
                  <Link href="/terms-conditions">Terms of Service</Link>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                  <Link href="/refund-policy">Refund Policy</Link>
                </div>
                <div className={styles.socials}>
                  {utilitySettings?.telegramLink && (
                    <Link
                      href={
                        utilitySettings?.telegramLink ??
                        "https://web.telegram.org/a/"
                      }
                      target="_blank"
                    >
                      <img src={Telegramicon} alt="Telegramicon" />
                    </Link>
                  )}
                  {utilitySettings?.instagramLink && (
                    <Link
                      href={
                        utilitySettings?.instagramLink ??
                        "https://www.instagram.com/"
                      }
                      target="_blank"
                    >
                      <img src={Instagramicon} alt="Instagramicon" />
                    </Link>
                  )}
                  {utilitySettings?.facebookLink && (
                    <Link
                      href={
                        utilitySettings?.facebookLink ??
                        "https://www.facebook.com/"
                      }
                      target="_blank"
                    >
                      <img src={Facebookicon} alt="Facebookicon" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerrightbottom}>
          <div className={styles.footerlinksgrd}>
            <Link href={"/call-agent"}>AI Calling Solutions</Link>
            <Link href={"/generative-ai-development-services"}>GenAI Development</Link>
            <Link href={"/web-mobile-app-development"}>Web-Mobile App Development</Link>
            <Link href={"/algo-bot"}>Customer Algo Bot Development</Link>
          </div>
        </div>
        <div className={styles.footercopyrightbox}>
          <p>©{new Date().getFullYear()} AlgoMatic All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
