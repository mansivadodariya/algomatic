import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./payment-history.module.scss";
import Button from "@/components/button";
import { getPaymentHistory, updateMetaAccountNo, getBotByName, sendBotExeToUser } from "@/lib/strategyApi";
import { useAppContext } from "@/context/AppContext";
import Modal from "@/components/modal";
import toast from "react-hot-toast";
import Loader from "@/components/loader";
import Useicon from "../../../../public/assets/icons/useicon";
import { calculatePlanEndDate, calculatePlanEndDateWithTotalDays } from "@/utils/common";

export default function Dashboard() {
  const router = useRouter();
  const [payments, setPayments] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [metaModalOpen, setMetaModalOpen] = useState(false);
  const [metaAccountNo, setMetaAccountNo] = useState([]);
  const [savingMeta, setSavingMeta] = useState(false);
  const { user, setUser } = useAppContext();
  const [loading, setLoading] = useState(false);

  // check valid user
  useEffect(() => {
    const storedUser = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) : null;
    if (!storedUser) {
      router.push("/");
      return;
    }
    setUser(storedUser);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getPaymentHistory();
        setPayments(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // meta account no popup open
  const openMetaModal = (payment) => {
    setSelectedPayment(payment);
    setMetaModalOpen(true);
  };

  const handleMetaSave = async (idx) => {
    // validation error

    // const finalMetaNo = metaAccountNo[].filter((metaNo) => metaNo && metaNo.trim() !== "");
    const finalMetaNo = metaAccountNo[idx];
    console.log("finalMetaNo", finalMetaNo, typeof finalMetaNo);

    if (!finalMetaNo || finalMetaNo.trim() === "") {
      toast.error(`Meta account number is required`);
      return;
    }

    if (!/^\d+$/.test(finalMetaNo)) {
      toast.error("Meta account number must be numeric only");
      return;
    }

    if (finalMetaNo.length < 6) {
      toast.error("Meta account number must be at least 6 digits");
      return;
    }

    setSavingMeta(true);
    try {
      setMetaModalOpen(false);
      await updateMetaAccountNo(selectedPayment._id, finalMetaNo);
      const refreshed = await getPaymentHistory();
      setPayments(refreshed);
      toast.success("Meta account updated! The EXE file has been sent to your email.");

      const botName = selectedPayment?.botName;
      const botData = await getBotByName(botName);

      // Rejoice company id from db
      if (botData?.botProviderId == "6892010294ce94c3494ad1ef") {
        // const formatedDate = calculatePlanEndDate(selectedPayment.createdAt, selectedPayment.planType);
        const formatedDate = calculatePlanEndDate(new Date(), selectedPayment.planType);

        // send multiple rejoice bot exe to user
        // await Promise.all(
        // metaAccountNo.map(async (metaNo, idx) => {
        await sendBotExeToUser({
          paymentId: selectedPayment._id,
          email: user.email,
          metaAccountNo: finalMetaNo,
          date: formatedDate,
          planType: selectedPayment.planType,
          file_name: selectedPayment?.botName,
          botProviderId: botData?.botProviderId,
        });
        // setMetaAccountNo([]);
        // })
        // );
      }

      // Algo client spiral company id from db
      if (botData?.botProviderId == "6892012f94ce94c3494ad1f0") {
        // const { totalDays } = calculatePlanEndDateWithTotalDays(selectedPayment.createdAt, selectedPayment.planType);
        const { totalDays } = calculatePlanEndDateWithTotalDays(new Date(), selectedPayment.planType);

        // send multiple spiral bot exe to user
        // await Promise.all(
        // metaAccountNo.map(async (metaNo, idx) => {
        await sendBotExeToUser({
          paymentId: selectedPayment._id,
          email: user.email,
          metaAccountNo: finalMetaNo,
          totalDays: totalDays,
          planType: selectedPayment.planType,
          file_name: selectedPayment?.botName,
          botProviderId: botData?.botProviderId,
        });
        // setMetaAccountNo([]);
        // })
        // );
      }
      setMetaAccountNo([]);
    } catch (e) {
      setSavingMeta(false);
      console.error(e);
    }
  };

  return (
    <>
      <div className={styles.dashboarlayout}>
        <hr className={styles.hr} />
        <div className={styles.dashboardWrapper}>
          {/* <div className="container-xl"> */}
          <main className={styles.content}>
            <section>
              <h1 className={styles.contantHeader}>Payment History</h1>
              <div className={styles.tableWrapper}>
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Purchased Date</th>
                      <th>Strategy Name</th>
                      <th>Plan</th>
                      <th>Amount</th>
                      <th>Transaction ID</th>
                      <th>Meta Account No</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((p, idx) => (
                      <tr key={p._id || idx}>
                        <td>{idx + 1}</td>
                        <td>{new Date(p.createdAt).toLocaleString()}</td>
                        <td title={p?.strategyPlanId?.strategyId?.title ?? "-"}>
                          <div className={styles.truncateText}>{p?.strategyPlanId?.strategyId?.title ?? "-"}</div>
                        </td>
                        <td>{p.planType ?? "-"}</td>
                        <td>${p.amount ?? "-"}</td>
                        <td>{p.transactionId ?? "-"}</td>

                        <td>
                          {p.paymentStatus === "paid" ? (
                            p.strategyPlanId?.strategyId?.metaNoRequired == true ? (
                              <button className={styles.addMetaBtn} onClick={() => openMetaModal(p)}>
                                {/* + Add Meta No */}
                                Manage Meta No
                              </button>
                            ) : (
                              <span className={styles.infoIcon}>
                                i
                                <span className={styles.tooltip}>
                                  Meta Account not required. <br /> The setup file has already been sent to your email (check inbox/spam).
                                </span>
                              </span>
                            )
                          ) : (
                            "-"
                          )}
                        </td>
                        <td>
                          <span className={p.paymentStatus === "paid" ? styles.statusPaid : styles.statusPending}>{p.paymentStatus === "paid" ? "Paid" : p.paymentStatus === "pending" ? "Pending" : "Failed"}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {loading && (
                  <div className={styles.noTransactions}>
                    <Loader />
                  </div>
                )}
                {payments.length === 0 && !loading && (
                  <>
                    <div className={styles.tablenodatamain}>
                      <div className={styles.tablenodataflx}>
                        <div className={styles.nodatausericon}>
                          <Useicon />
                        </div>
                        <h1>No data found</h1>
                        <p>No payment records available.</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </section>
          </main>
          {/* </div> */}
        </div>
      </div>
      {/*    */}
      {metaModalOpen && (
        <Modal size="small" isOpen={metaModalOpen} onClose={() => setMetaModalOpen(false)}>
          <h3 style={{ marginBottom: "1rem", textAlign: "start" }}>Add Meta Account Number</h3>
          {Array.from({ length: selectedPayment.noOfBots }).map((_, idx) => {
            return (
              <div key={idx} className={styles.metaBoxWrapper}>
                <input
                  className={`${styles.input} ${selectedPayment.metaAccountNo[idx] ? styles.disabled : ""}`}
                  type="text"
                  value={selectedPayment.metaAccountNo[idx] ? selectedPayment.metaAccountNo[idx] : metaAccountNo[idx] ? metaAccountNo[idx] : ""} // each input uses its own index
                  onChange={(e) =>
                    setMetaAccountNo((prev) => {
                      const copy = [...prev];
                      copy[idx] = e.target.value;
                      return copy;
                    })
                  }
                  placeholder="Enter meta account no"
                  style={{ width: "60%", padding: "0.5rem", margin: "0.5rem 0" }}
                />
                <Button text="Get file" purple onClick={() => handleMetaSave(idx)} /* isBtnLoading={savingMeta} */ disabled={!!selectedPayment.metaAccountNo[idx]} />
              </div>
            );
          })}
        </Modal>
      )}
    </>
  );
}
