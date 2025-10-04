import React, { useState } from "react";
import styles from "./iblink.module.scss";
import Commonlable from "@/components/commonlable";
import { ClipboardCheck, Copy } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

export default function Iblink() {
  const { utilitySettings } = useAppContext();
  const [copiedBroker, setCopiedBroker] = useState(null);

  const handleCopy = async (broker) => {
    const link = utilitySettings?.ibLinks?.[broker];
    if (!link) return;

    await navigator.clipboard.writeText(link);
    setCopiedBroker(broker);
    setTimeout(() => setCopiedBroker(null), 2000);
  };

  const brokers = [
    // { name: "vantage", label: "IC MARKET" },
    // { name: "pepperstone", label: "Pepperstone" },
    // { name: "skyriss", label: "Skyriss" },
    { name: "Anax Capital", label: "Anax Capital" },
  ];

  return (
    <div className={styles.iblinkmain}>
      <div className="container-xl">
        <div className={styles.iblinkboxmain}>
          <div className={styles.iblinktitle}>
            <Commonlable Text="IB links" />
            <h4>
              Get Our <span>IB</span> Links
            </h4>
          </div>

          <div className={styles.iblinkboxflxmain}>
            {brokers.map((broker) => (
              <div className={styles.iblinkbox} key={broker.name}>
                <div className={styles.iblinkboxleft}>
                  <p>{broker.label} :</p>
                </div>
                <div className={styles.iblinkboxright}>
                  <a
                    href={utilitySettings?.ibLinks?.[broker.name]}
                    target="__blank"
                  >
                    <input
                      type="text"
                      // value={
                      //   utilitySettings?.ibLinks?.[broker.name] ||
                      //   "X7P9L2MZV8QW3RT1N6YD"
                      // }
                      value="https://portal.anaxcapital.ae/marketing/links/go/20"
                      readOnly
                    />
                  </a>
                  <div
                    className={styles.copyicon}
                    title={copiedBroker === broker.name ? "Copied" : "Copy"}
                    onClick={() => handleCopy(broker.name)}
                  >
                    {copiedBroker === broker.name ? (
                      <ClipboardCheck />
                    ) : (
                      <Copy />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
