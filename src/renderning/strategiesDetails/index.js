import React, { useEffect, useState } from "react";
import { BaseURL } from "@/utils/config";
const Strategies = "/assets/images/strategiesDetails.jpg";
import { marked } from "marked";
import styles from "./strategiesDetails.module.scss";
import RightBlackLg from "@/components/icons/rightBlackLg";
import { useRouter } from "next/router";
import { getStrategyById, getStrategyPlans } from "@/lib/strategyApi";
import StrategiesPlans from "../strategies/strategiesPlans";

// Simple skeleton loader component
function Skeleton() {
  return (
    <div className={styles.strategiesDetailsAlignment}>
      <div className="container">
        <div className={styles.center}>
          <div className={styles.backbtn} style={{ opacity: 0.5 }}>
            <div className={styles.skeleton} style={{ width: 24, height: 24, borderRadius: "50%" }} />
            <span className={styles.skeleton} style={{ width: 60, height: 20, display: "inline-block", borderRadius: 4 }}></span>
          </div>
          <div className={styles.details}>
            <div className={styles.skeleton} style={{ height: 32, width: 200, marginBottom: 16, borderRadius: 4 }}></div>
            <div className={`${styles.img} ${styles.skeleton}`} style={{ height: 200, borderRadius: 8, marginBottom: 16 }}></div>
            <div className={styles.skeleton} style={{ height: 80, width: "100%", marginBottom: 16, borderRadius: 4 }}></div>
            <div className={styles.skeleton} style={{ height: 32, width: 100, marginBottom: 16, borderRadius: 4 }}></div>
            <div className={styles.strategiesCardList}>
              <div className={styles.grid}>
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className={styles.skeleton} style={{ height: 120, borderRadius: 8, margin: 8, flex: 1 }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StrategiesDetails() {
  const [sterategyDetails, setSterategyDetails] = useState(null);
  const [stetaritegyCard, setStetaritegyCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router?.query;

  useEffect(() => {
    if (!id) return;
    async function fetchStrategy() {
      setLoading(true);
      try {
        const res = await getStrategyById(id);
        setSterategyDetails(res.payload);

        const data = await getStrategyPlans(id);
        setStetaritegyCard(data?.payload || []);
      } catch (error) {
        console.error("Error fetching strategy by id:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchStrategy();
  }, [id]);

  if (loading) return <Skeleton />;

  return (
    <div className={styles.strategiesDetailsAlignment}>
      <div className="container">
        <div className={styles.center}>
          <div className={styles.backbtn} onClick={() => router.push("/strategies")}>
            <RightBlackLg />
            <span>Back</span>
          </div>
          <div className={styles.details}>
            <h2>{sterategyDetails?.title}</h2>
            {/* image */}
            <div className={styles.img}>
              <img src={sterategyDetails?.imageUrl || Strategies} alt="Strategies" />
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: marked(sterategyDetails?.description || ""),
              }}
            />
            <h2>Plans</h2>
            {/* Plan cards */}
            <div>
              <div className={styles.strategiesCardList}>
                <div className={styles.grid}>
                  {stetaritegyCard?.length > 0 &&
                    stetaritegyCard?.map((item, i) => {
                      return <StrategiesPlans item={item} index={i} key={i} />;
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
