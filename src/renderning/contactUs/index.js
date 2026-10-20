import React, { useEffect } from "react";
import styles from "./contactUs.module.scss";
import ContactUsBanner from "./contactUsBanner";
import ContactChannels from "./contactChannels";
import Helpsection from "./helpsection";
import ContactFaq from "./contactFaq";
import ContactBottomCta from "./contactBottomCta";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={styles.contactUsPage}>
      <ContactUsBanner />
      <Helpsection />
      <ContactChannels />
      <ContactFaq />
      <ContactBottomCta />
    </div>
  );
}
