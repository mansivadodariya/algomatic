import React from "react";
import styles from "./algovideosection.module.scss";
const algothumbnail = "/assets/images/algothumbnail.webp"

export default function Algovideosection() {
  return (
    <>
      <div className={styles.algovideosectionmain}>
        <div className="container-md">
          <div className={styles.algovideosectionvidealignment}>
            <iframe
              width="100%"
              height="506px"
              src="https://www.youtube.com/embed/8kG21pjj-yk"
              title="AlgoMatic Introduction| Arbitrage Trading | Algo Trading| Risk Free Trading Strategy| Forex Trading"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              thumbnail={algothumbnail}
            />
          </div>
        </div>
      </div>
    </>
  );
}
