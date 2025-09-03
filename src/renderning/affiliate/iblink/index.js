import React from "react";
import styles from "./iblink.module.scss";
import Commonlable from "@/components/commonlable";
import { useAppContext } from "@/context/AppContext";
import { ClipboardCheck, Copy } from "lucide-react";

export default function Iblink() {
  const { utilitySettings } = useAppContext();

  return (
    <>
      <div className={styles.iblinkmain}>
        <div className="container-xl">
          <div className={styles.iblinkboxmain}>
            <div className={styles.iblinktitle}>
              <Commonlable Text="IB link" />
              <h4>
                {/* IB <span>Link</span> */}
                Get your <span>IB</span> Link
              </h4>
              {/* <p></p> */}
            </div>

            <div className={styles.iblinkboxflxmain}>
              <div className={styles.iblinkbox}>
                <div className={styles.iblinkboxleft}>
                  <p>Ventage :-</p>
                </div>
                <div className={styles.iblinkboxright}>
                  <input
                    type="text"
                    value={utilitySettings?.vintage || "X7P9L2MZV8QW3RT1N6YD"}
                    readOnly
                  />
                  <div className={styles.copyicon} title="Copy">
                    {/* <ClipboardCheck /> */}
                    <Copy />
                  </div>
                </div>
              </div>
              <div className={styles.iblinkbox}>
                <div className={styles.iblinkboxleft}>
                  <p>Papperstone :-</p>
                </div>
                <div className={styles.iblinkboxright}>
                  <input
                    type="text"
                    value={
                      utilitySettings?.paperstone || "X7P9L2MZV8QW3RT1N6YD"
                    }
                    readOnly
                  />
                  <div className={styles.copyicon} title="Copy">
                    {/* <ClipboardCheck /> */}
                    <Copy />
                  </div>
                </div>
              </div>
              <div className={styles.iblinkbox}>
                <div className={styles.iblinkboxleft}>
                  <p>Skyriss :-</p>
                </div>
                <div className={styles.iblinkboxright}>
                  <input
                    type="text"
                    value={utilitySettings?.skyriss || "X7P9L2MZV8QW3RT1N6YD"}
                    readOnly
                  />
                  <div className={styles.copyicon} title="Copy">
                    {/* <ClipboardCheck /> */}
                    <Copy />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
