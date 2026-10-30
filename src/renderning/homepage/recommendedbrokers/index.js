import React, { useEffect, useState } from "react";
import styles from "./recommendedbrokers.module.scss";
import Marquee from "react-fast-marquee";
import { getAllBrokers, resolveBrokerLogo } from "@/lib/brokerApi";

export default function Recommendedbrokers() {
  const [brokers, setBrokers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchBrokers = async () => {
      try {
        setLoading(true);
        const res = await getAllBrokers({
          page: 1,
          limit: 10,
          is_active: true,
          sortBy: "createdAt",
          sortOrder: "desc",
        });

        const list = Array.isArray(res?.payload?.data)
          ? res.payload.data
          : Array.isArray(res?.data)
            ? res.data
            : [];

        if (isMounted) {
          setBrokers(list);
        }
      } catch (err) {
        console.error("Error fetching recommended brokers:", err);
        if (isMounted) {
          setBrokers([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchBrokers();

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter dynamic brokers that have a logo from API
  const brokersWithLogo = brokers.filter((b) => b?.logo && b.logo.trim());

  if (!loading && brokersWithLogo.length === 0) {
    return null;
  }

  return (
    <div className={styles.recommendedbrokersmain}>
      <div className="container-xl">
        <div className={styles.recommendedbrokerstitle}>
          <h4>
            <span>Recommended</span> Brokers
          </h4>
        </div>
      </div>
      <div className={styles.marqueecontainer}>
        <Marquee autoFill speed={70} pauseOnHover={true}>
          {brokersWithLogo.map((broker, idx) => (
            <div
              className={styles.brokerCard}
              key={broker?._id || broker?.id || idx}
              title={broker?.name || "Broker"}
            >
              <img
                src={resolveBrokerLogo(broker.logo)}
                alt={broker?.name || "Broker"}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
