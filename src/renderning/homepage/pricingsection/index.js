import React, { useEffect, useState } from "react";
import styles from "./pricingsection.module.scss";
import Commonlable from "@/components/commonlable";
import Checkicon from "../../../../public/assets/icons/checkicon";
import Commonarrowbutton from "@/components/commonarrowbutton";
import { getCategory } from "@/lib/categoryApi";
import Coreicon from "../../../../public/assets/icons/coreicon";
import Plusplanicon from "../../../../public/assets/icons/plusplanicon";
import Trophyicon from "../../../../public/assets/icons/trophyicon";

export default function Pricingsection() {
  const [categories, setCategories] = useState([]);

  const icons = [
    <Coreicon />,
    <Plusplanicon />,
    <Trophyicon />,
  ]

  useEffect(() => {
    getCategory().then((res) => {
      setCategories(res.payload?.data[0]?.strategies.slice(0, 3));
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
            {categories && categories.map((item, index) => (
              <div className={`${styles.pricingcard} ${styles.pricingcardactive}`}>
                <div className={styles.pricingcardcontent}>
                  <div className={styles.pricingcardtitle}>
                    <div>
                      <h2 className={styles.cardsTitle}>{item.title}</h2>
                      {item.strategyPlans.map((plan) => (
                        // <span className={styles.planType}>{plan?.planType.replace(/^(\d+)([a-zA-Z]+)$/, "$1 $2")}</span>
                        <p className={styles.itemPrice}key={plan.id}>{plan.planType.replace(/^(\d+)([a-zA-Z]+)$/, "$1 $2")}: {plan.price}$</p>
                      ))}
                    </div>
                    <div className={styles.pricingcardtitlebadge}>
                      {icons[index]}
                    </div>
                  </div>
                  <div className={styles.pricecardbody}>
                    <div className={styles.priceingdetailsmain}>
                      <div className={styles.priceingdetailsflx}>
                        <Checkicon />
                        <p>{item.shortDescription}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.pricingbutton}>
                  <Commonarrowbutton Text="Show more" Butttonvarient="lightoutlined" buttonclassName="widthfull" link={`/marketplace/${item?._id}`} />
                </div>
              </div>
            ))}
          </div>          
        </div>
      </div>
    </>
  );
}
