import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./payment-history.module.scss";
import Button from "@/components/button";
import { getPaymentHistory, editUser, updateMetaAccountNo, sendRejoiceBotExeToUser, getBotByName, sendSpiralBotExeToUser } from "@/lib/strategyApi";
import { useAppContext } from "@/context/AppContext";
import Modal from "@/components/modal";
import toast from "react-hot-toast";
import Loader from "@/components/loader";
import Useicon from "../../../../public/assets/icons/useicon";
import CommonButton from "@/components/commonButton";

export default function Dashboard() {
  const router = useRouter();
  const [payments, setPayments] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [metaModalOpen, setMetaModalOpen] = useState(false);
  const [metaAccountNo, setMetaAccountNo] = useState([]);
  const [viewMoreMetaData, setViewMoreMetaData] = useState([]);
  const [viewMoreMetaDataModalOpen, setViewMoreMetaDataModalOpen] = useState(false);
  const [savingMeta, setSavingMeta] = useState(false);
  const { isUserLoggedIn, setIsUserLoggedIn, user, setUser } = useAppContext();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const storedUser = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) : null;
    if (!storedUser) {
      router.push("/");
    }
    setUser(storedUser);
  }, [isUserLoggedIn]);

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
  const handleMetaSave = async () => {
    // validation error
    for (let i = 0; i < metaAccountNo.length; i++) {
      const trimmedMeta = metaAccountNo[i].trim();

      if (!trimmedMeta) {
        toast.error(`Meta account number ${i + 1} is required`);
        return;
      }

      if (!/^\d+$/.test(trimmedMeta)) {
        toast.error(`Meta account number ${i + 1} must be numeric only`);
        return;
      }

      if (trimmedMeta.length < 6) {
        toast.error(`Meta account number ${i + 1} must be at least 6 digits`);
        return;
      }
    }

    setSavingMeta(true);
    try {
      await updateMetaAccountNo(selectedPayment._id, metaAccountNo);
      const refreshed = await getPaymentHistory();
      setPayments(refreshed);
      setMetaModalOpen(false);
      toast.success("Meta account updated! The EXE file has been sent to your email.");

      const botName = selectedPayment?.botName;
      const botData = await getBotByName(botName);

      // Rejoice company id from db
      if (botData?.botProviderId == "6892010294ce94c3494ad1ef") {
        console.log("rejoice company bot sending mail ---------");
        // send multiple rejoice bot exe to user
        metaAccountNo.map(async (metaNo, idx) => {
          await sendRejoiceBotExeToUser({
            email: user.email,
            metaAccountNo: metaNo,
            date: selectedPayment.createdAt,
            planType: selectedPayment.planType,
            file_name: selectedPayment?.botName,
          });
        });
      }

      // Algo client spiral company id from db
      if (botData?.botProviderId == "6892012f94ce94c3494ad1f0") {
        console.log("spiral company bot sending mail ---------");
        // send multiple spiral bot exe to user
        metaAccountNo.map(async (metaNo, idx) => {
          await sendSpiralBotExeToUser({
            email: user.email,
            metaAccountNo: metaNo,
            date: selectedPayment.createdAt,
            planType: selectedPayment.planType,
            file_name: selectedPayment?.botName,
          });
        });
      }
    } catch (e) {
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
                      <th>#</th>
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
                          {p.metaAccountNo == null || p.metaAccountNo.length === 0 ? (
                            p.paymentStatus === "paid" ? (
                              <button className={styles.addMetaBtn} onClick={() => openMetaModal(p)}>
                                + Add Meta Account No
                              </button>
                            ) : (
                              "-"
                            )
                          ) : (
                            <button
                              className={styles.addMetaBtn}
                              onClick={() => {
                                setViewMoreMetaDataModalOpen(true);
                                setViewMoreMetaData(p.metaAccountNo);
                              }}
                            >
                              View More
                            </button>
                          )}
                        </td>
                        {/* <td>
                          {p.metaAccountNo == null || p.metaAccountNo.length === 0 ? (
                            p.paymentStatus === "paid" ? (
                              <button className={styles.addMetaBtn} onClick={() => openMetaModal(p)}>
                                + Add
                              </button>
                            ) : (
                              "-"
                            )
                          ) : (
                            p.metaAccountNo.join(", ")
                          )}
                        </td> */}
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
                {payments.length === 0 && (
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
            return <input key={idx} className={styles.input} type="text" value={metaAccountNo[idx]} onChange={(e) => setMetaAccountNo((prev) => [...prev.slice(0, idx), e.target.value, ...prev.slice(idx + 1)])} placeholder="Enter meta account no" style={{ width: "100%", padding: "0.5rem", margin: "0.5rem 0" }} />;
          })}
          <Button text="Save" purple onClick={handleMetaSave} isBtnLoading={savingMeta} />
        </Modal>
      )}

      {/* view more meta data btn */}
      {viewMoreMetaDataModalOpen && (
        <Modal modalclass="metamodal" size="small" isOpen={viewMoreMetaDataModalOpen} onClose={() => setViewMoreMetaDataModalOpen(false)}>
          <div className={styles.modalbody}>
            <h3>Meta Account No</h3>
            <div className={styles.metamodalbody}>
              {viewMoreMetaData.map((metaNo, idx) => {
                return (
                  <p>
                    <span>{idx + 1}. </span>
                    {metaNo}
                  </p>
                );
              })}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
