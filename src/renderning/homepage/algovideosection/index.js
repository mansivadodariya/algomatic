import React, { useState } from "react";
import styles from "./algovideosection.module.scss";
const algothumbnail = "/assets/images/algothumbnail.webp";

const videoLinks = {
  // english: "https://www.youtube.com/embed/8kG21pjj-yk",
  english: "https://www.youtube.com/embed/F2pBWMHfvxI",
  spanish: "https://www.youtube.com/embed/VIDEO_ID_SPANISH",
  indonesian: "https://www.youtube.com/embed/VIDEO_ID_INDONESIAN",
  chinese: "https://www.youtube.com/embed/VIDEO_ID_CHINESE",
  hindi: "https://www.youtube.com/embed/8kG21pjj-yk",
};

export default function Algovideosection() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <>
      {/* <div className="container-xl">
        <div className={styles.algovideosectionlanguage}>
          <p>Select your preferred language :</p>
          <select value={selectedLanguage} onChange={handleLanguageChange} className={styles.languageSelect}>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="indonesian">Indonesian</option>
            <option value="chinese">Chinese</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
      </div> */}

      <div className={styles.algovideosectionmain}>
        <div className="container-xl">
          <div className={styles.algovideosectionvidealignment}>
            <iframe width="100%" height="506px" src={videoLinks[selectedLanguage]} title="AlgoMatic Tutorial" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen thumbnail={algothumbnail} />
          </div>
        </div>
      </div>
    </>
  );
}
