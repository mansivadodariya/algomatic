import React from "react";
import styles from "./callagentsection.module.scss";
import callagentimg from "../../../../public/assets/images/callagentimg1.png";
import Image from "next/image";

export default function Callagentsection() {
  return (
    <>
      <div className={styles.callagentsectionmain}>
        <div className="container-xl">
          <div className={styles.contentholder}>
            <div className={styles.callagentsectiontitle}>
              <h1>Call AI Agent</h1>
              <p>
                Providing exceptional customer service is crucial for any brand,
                and our Call Agent (Welcomer AI) Solution ensures seamless
                client communication. This AI-powered virtual agent responds to
                calls on behalf of your business, handling inquiries, providing
                information, and engaging customers with a natural, professional
                tone. Whether it’s answering FAQs, scheduling appointments, or
                assisting with support requests, this intelligent solution
                ensures round-the-clock availability, reducing workload and
                improving customer satisfaction. With its ability to maintain a
                consistent brand voice, the Call Agent enhances efficiency and
                streamlines communication for businesses of all sizes.
              </p>
            </div>
            <div className={styles.callagentsectionimg}>
              <Image src={callagentimg} alt="callagentimg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
