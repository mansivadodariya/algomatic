import React from "react";
import styles from "./affiliateherobanner.module.scss";
import Commonlable from "@/components/commonlable";
import Commonarrowbutton from "@/components/commonarrowbutton";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/router";

export default function Affiliateherobanner() {
  const { setShowLogin, user } = useAppContext();
  const router = useRouter();

  const handleClick = () => {
    if (user) {
      router.push(`/affiliate/${user.id}`);
      return;
    } else {
      setShowLogin(true);      
    }

  };
  return (
    <div className={styles.affiliateherobannermain}>
      <div className={styles.affiliateherobannercontentmain}>
        <div className={styles.affiliateherowrapper}>
          <div className="container-xl">
            <div className={styles.affiliateherobannercontent}>
              <h1>
                Join Our Affiliate Program – Earn <span>25%</span> Lifetime Commission
              </h1>
              <p>Promote AlgomaticBot products and earn 25% commission on every sale you refer. No limits, no hidden terms – lifetime earnings for every client you bring.</p>
              <div className={styles.herobannerbuttons}>
                <Commonarrowbutton Text="Become an Affiliate Now" Butttonvarient="light" onClick={() => handleClick()} /* onClick={() => setShowLogin(true)} */ />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
