import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./payment-history.module.scss";
import Button from "@/components/button";
import { getPaymentHistory, editUser, updateMetaAccountNo, sendRejoiceBotExeToUser, getBotByName, sendSerlinkBotExeToUser } from "@/lib/strategyApi";
import { useAppContext } from "@/context/AppContext";
import Modal from "@/components/modal";
import toast from "react-hot-toast";
import Loader from "@/components/loader";

export default function Dashboard() {
  const router = useRouter();
  const [payments, setPayments] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("");
  (selectedPayment, "--------------selectedPayment");
  const [metaModalOpen, setMetaModalOpen] = useState(false);
  const [metaAccountNo, setMetaAccountNo] = useState("");
  const [savingMeta, setSavingMeta] = useState(false);
  const { isUserLoggedIn, setIsUserLoggedIn, user, setUser } = useAppContext();
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
        const data = await getPaymentHistory();
        setPayments(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  // meta account no popup open
  const openMetaModal = (payment) => {
    setSelectedPayment(payment);
    setMetaModalOpen(true);
  };
  const handleMetaSave = async () => {
    const trimmedMeta = metaAccountNo.trim();
    if (!trimmedMeta) {
      toast.error("Meta account number is required");
      return;
    }
    if (!/^\d+$/.test(trimmedMeta)) {
      toast.error("Meta account number must be numeric only");
      return;
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
        ("rejoice company bot sending mail ---------")
        await sendRejoiceBotExeToUser({
          email: user.email,
          metaAccountNo: metaAccountNo,
          date: selectedPayment.createdAt,
          planType: selectedPayment.planType,
          file_name: selectedPayment?.botName,
        });
      }
      // Algo client Serlink company id from db
      if (botData?.botProviderId == "6892012f94ce94c3494ad1f0") {
        await sendSerlinkBotExeToUser({
          email: user.email,
          metaAccountNo: metaAccountNo,
          date: selectedPayment.createdAt,
          planType: selectedPayment.planType,
          file_name: selectedPayment?.botName,
        })
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
                          {p.metaAccountNo == null ? (
                            p.paymentStatus === "paid" ? (
                              <button className={styles.addMetaBtn} onClick={() => openMetaModal(p)}>
                                + Add
                              </button>
                            ) : (
                              "-"
                            )
                          ) : (
                            p.metaAccountNo
                          )}
                        </td>

                        <td>
                          <span className={`${p.paymentStatus === "paid" ? styles.statusPaid : styles.statusPending}`}>{p.paymentStatus === "paid" ? "Paid" : p.paymentStatus === "pending" ? "Pending" : "Failed"}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {payments.length === 0 && (
                  <div className={styles.noTransactions}>
                    <Loader />
                  </div>
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
          <h3>Add Meta Account Number</h3>
          <input className={styles.input} type="text" value={metaAccountNo} onChange={(e) => setMetaAccountNo(e.target.value)} placeholder="Enter meta account no" style={{ width: "100%", padding: "0.5rem", margin: "1rem 0" }} />
          <Button text="Save" purple onClick={handleMetaSave} isBtnLoading={savingMeta} />
        </Modal>
      )}
    </>
  );
}
