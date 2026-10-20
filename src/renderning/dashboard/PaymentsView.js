import React from "react";
import Loader from "@/components/loader";
import { CreditCard, Info } from "lucide-react";

export default function PaymentsView({
  styles,
  payments,
  paymentsLoading,
  openMetaModal,
}) {
  return (
    <div className={styles.paymentsTabWrapper}>
      <div className={styles.paymentsCard}>
        <div className={styles.paymentsCardHeader}>
          <h2 className={styles.sectionTitle}>Transaction Records</h2>
          <span className={styles.paymentsCountBadge}>
            {payments.length} Records
          </span>
        </div>

        {paymentsLoading ? (
          <div className={styles.paymentsLoader}>
            <Loader />
          </div>
        ) : payments.length === 0 ? (
          <div className={styles.paymentsEmpty}>
            <div className={styles.emptyIconCircle}>
              <CreditCard size={26} />
            </div>
            <h3>No Payment Records Found</h3>
            <p>
              You haven't made any strategy subscriptions or payments yet.
            </p>
          </div>
        ) : (
          <div className={styles.paymentsTableWrapper}>
            <table className={styles.paymentsTable}>
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
                    <td>
                      {new Date(p.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td>
                      <div
                        className={styles.strategyTitleCell}
                        title={
                          p?.strategyPlanId?.strategyId?.title ||
                          p?.botName ||
                          "-"
                        }
                      >
                        {p?.strategyPlanId?.strategyId?.title ||
                          p?.botName ||
                          "-"}
                      </div>
                    </td>
                    <td>{p.planType || "-"}</td>
                    <td className={styles.amountCell}>${p.amount ?? "0"}</td>
                    <td>
                      <span className={styles.transactionIdCell}>
                        {p.transactionId || "-"}
                      </span>
                    </td>
                    <td>
                      {p.paymentStatus === "paid" ? (
                        p.strategyPlanId?.strategyId?.metaNoRequired ? (
                          <button
                            className={styles.metaBtn}
                            onClick={() => openMetaModal(p)}
                          >
                            Manage Meta No
                          </button>
                        ) : (
                          <span
                            className={styles.metaNotReqText}
                            title="Meta Account not required. The setup file was sent to your email."
                          >
                            <Info size={14} /> Not Required
                          </span>
                        )
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>
                      <span
                        className={`${styles.statusBadge} ${
                          p.paymentStatus === "paid"
                            ? styles.paid
                            : p.paymentStatus === "pending"
                            ? styles.pending
                            : styles.failed
                        }`}
                      >
                        {p.paymentStatus === "paid"
                          ? "Paid"
                          : p.paymentStatus === "pending"
                          ? "Pending"
                          : "Failed"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
