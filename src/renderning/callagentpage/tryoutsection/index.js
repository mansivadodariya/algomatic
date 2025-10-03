import React from "react";
import styles from "./tryoutsection.module.scss";
import aiagentimage from "../../../../public/assets/images/aiagentimage.webp";
import Image from "next/image";
import Commonarrowbutton from "@/components/commonarrowbutton";

export default function Tryoutsection() {
  return (
    <>
      <div className={styles.tryoutsectionmain}>
        <div className="container-xl">
          <div className={styles.contentholder}>
            <div className={styles.tryoutsectionimg}>
              <Image src={aiagentimage} alt="aiagentimage" />
            </div>
            <div className={styles.tryoutbutton}>
              <Commonarrowbutton Text="Try it now" Target="blank" link="https://callintel.ai/" Butttonvarient="dark" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
