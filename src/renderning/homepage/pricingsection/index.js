import React, { useEffect, useState } from "react";
import styles from "./pricingsection.module.scss";
import Commonlable from "@/components/commonlable";
import Coreicon from "../../../../public/assets/icons/coreicon";
import Checkicon from "../../../../public/assets/icons/checkicon";
import Commonarrowbutton from "@/components/commonarrowbutton";
import Plusplanicon from "../../../../public/assets/icons/plusplanicon";
import Trophyicon from "../../../../public/assets/icons/trophyicon";
import { getCategory } from "@/lib/categoryApi";

export default function Pricingsection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategory().then((res) => {
      console.log(res.payload.data[0]?.strategies, "----------------res2222")
      
      // setCategories(res.payload.data[0]?.strategies);
      setCategories(res.payload.data[0]?.strategies.slice(0, 3));
    });
  }, []);

  return (
    <>
      <div className={styles.pricingsectionmain}>
        <div className="container-xl">
          <div className={styles.pricingsectiontitle}>
            <Commonlable Text="Our Pricing Plans" />
            <h1>
              Choose the <span>Best Plan</span> for Your Needs
            </h1>
            <p>Find the right plan, with flexible choices and transparent pricing details.</p>
          </div>

          <div className={styles.pricingcardgrdmain}>
            {categories.map((item) => (
              <div className={`${styles.pricingcard} ${styles.pricingcardactive}`}>
                <div className={styles.pricingcardcontent}>
                  <div className={styles.pricingcardtitle}>
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.strategyPlans[0]?.planType}</p>
                    </div>
                    <div className={styles.pricingcardtitlebadge}>
                      <Coreicon />
                    </div>
                  </div>
                  <div className={styles.pricecardbody}>
                    <h3>${item.strategyPlans[0]?.price}</h3>
                    <div className={styles.priceingdetailsmain}>
                      <div className={styles.priceingdetailsflx}>
                        <Checkicon />
                        {/* <p>{item.strategyPlans.map((strategy) => strategy.title).join(", ")}</p> */}
                        <p>{item.shortDescription}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.pricingbutton}>
                  <Commonarrowbutton Text="Show more" Butttonvarient="lightoutlined" buttonclassName="widthfull" link="/marketplace" />
                </div>
              </div>
            ))}
          </div>          
        </div>
      </div>
    </>
  );
}
