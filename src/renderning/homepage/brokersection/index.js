import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./brokersection.module.scss";
import BrokerCard from "@/components/brokerCard";
import { getAllBrokers } from "@/lib/brokerApi";
import { ArrowRight } from "lucide-react";

export default function Brokersection() {
  const [brokers, setBrokers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchBrokers = async () => {
      try {
        setLoading(true);
        const res = await getAllBrokers({ limit: 3, is_active: true });
        const list = Array.isArray(res?.payload?.data)
          ? res.payload.data
          : Array.isArray(res?.data)
            ? res.data
            : [];

        if (isMounted) {
          setBrokers(list.slice(0, 3));
        }
      } catch (err) {
        console.error("Error fetching homepage brokers:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchBrokers();
    return () => {
      isMounted = false;
    };
  }, []);

  if (!loading && (!brokers || brokers.length === 0)) {
    return null;
  }

  return (
    <section className={styles.brokersectionMain}>
      <div className="container-xl">
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Trusted <span>Broker</span> Partners
          </h2>
          <p className={styles.subtitle}>
            Trade with confidence through trusted and compatible broker partners, carefully selected to support seamless execution and reliable trading with AlgomaticBot.
          </p>
        </div>

        {loading ? (
          <div className={styles.loadingGrid}>
            {[1, 2, 3].map((n) => (
              <div key={n} className={styles.skeletonCard} />
            ))}
          </div>
        ) : (
          <div className={styles.brokerGrid}>
            {brokers.slice(0, 3).map((broker) => (
              <BrokerCard
                key={broker._id || broker.id}
                broker={broker}
                className={styles.homeBrokerCard}
              />
            ))}
          </div>
        )}

        <div className={styles.bottomAction}>
          <Link href="/broker" className={styles.viewAllBtn}>
            <span>View All Brokers</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
