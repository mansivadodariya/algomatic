import React from "react";
import styles from "./footernew.module.scss";
import Link from "next/link";
import Commonarrowbutton from "../commonarrowbutton";
import Whatsappicon from "../../../public/assets/icons/Whatsappicon";
import Emailicon from "../../../public/assets/icons/Emailicon";
const Telegramicon = "/assets/icons/telegramicon.png";
const Instagramicon = "/assets/icons/instagramicon.png";
const Facebookicon = "/assets/icons/facebookicon.png";

const Logoimg = "/assets/logo/logo.png";
const QrImg = "/assets/images/qrimage.avif";

export default function Footernew() {
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
              buttonclassName="widthfull"
            />
          </div>

          <div className={styles.footrright}>
            <div className={styles.footerrightflx}>
              <div className={styles.contactsection}>
                <h3>Contact Us</h3>
                <Link
                  href="https://wa.me/971509706562"
                  target="_blank"
                  className={styles.contactitem}
                >
                  <Whatsappicon />
                  <p>+971 50 970 6562</p>
                </Link>
                <Link
                  href="mailto:support@algomaticbot.com"
                  target="_blank"
                  className={styles.contactitem}
                >
                  <Emailicon />
                  <p>support@algomaticbot.com</p>
                </Link>
                <div className={styles.qrcontainer}>
                  <img src={QrImg} alt="QR Code" />
                </div>
              </div>

              <div className={styles.risksection}>
                <h3>Risk Warning</h3>
                <p>
                  Forex trading, including automated trading with Algomatic,
                  involves significant risk and is not suitable for all
                  investors. You may lose more than your initial investment, and
                  past performance is not indicative of future results. The
                  forex market is highly volatile, and market conditions can
                  change rapidly. This website does not provide investment
                  advice, and users are encouraged to consult with a qualified
                  financial advisor before making any trading decisions. By
                  using Algomatic, you acknowledge and accept these risks.
                </p>
              </div>
            </div>

            <div className={styles.footerbottom}>
              <p>©2025 AlgoMatic All Rights Reserved</p>
              <div className={styles.socials}>
                <Link href="https://web.telegram.org/" target="_blank">
                  <img src={Telegramicon} alt="Telegramicon" />
                </Link>
                <Link href="http://instagram.com/" target="_blank">
                  <img src={Instagramicon} alt="Instagramicon" />
                </Link>
                <Link href="https://www.facebook.com/" target="_blank">
                  <img src={Facebookicon} alt="Facebookicon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
