import React, { useEffect, useState } from "react";
import styles from "./withdrawList.module.scss";
import Paginationicon from "../../../../public/assets/icons/paginationicon";
import { withdrawReqList } from "@/lib/userApi";
import Link from "next/link";
import _ from "lodash";

export default function WithdrawList() {
  const [withdrawList, setWithdrawList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    withdrawReqList()
      .then((res) => {
        setWithdrawList(res.payload);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  }, []);

  return (
    <>
      <div className={styles.affiliatetablemain}>
        <div className="container-xl">
          <div className={styles.affiliatetablelayout}>
            <div className={styles.affiliatetabletitle}>
              <h3>Withdraw List</h3>
            </div>
            <div className={styles.affiliatetablescroll}>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Withdrawal Status</th>
                    <th>Requested Amount</th>
                    <th>Proof of Payment</th>
                    <th>Requested Date</th>
                    <th>Viewed by Admin</th>
                  </tr>
                </thead>
                <tbody>
                  {loader
                    ? "Loading..."
                    : withdrawList?.data?.map((item, index) => {
                        return (
                          <tr>
                            <td>
                              <span className={styles.tableid}>{index + 1}</span>
                            </td>
                            <td>
                              <span className={`${styles.tablecustomername} ${styles[item?.withdrawStatus === "approved" ? "red" : "green"]}`}>{item?.withdrawStatus ? _.capitalize(item?.withdrawStatus) : ""}</span>
                            </td>
                            <td>${item?.withdrawAmount}</td>
                            <td>
                              <Link href={item?.imageUrl} target="_blank">
                                <img className={styles.withdrawImage} src={item?.imageUrl} alt="payment img" />
                              </Link>
                            </td>
                            <td>{item?.createdAt.split("T")[0] + ", " + item?.createdAt.split("T")[1].split(".")[0]}</td>
                            <td>{item?.isSeenByAdmin ? "Reviewed" : "Not Review"}</td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className={styles.tablepaginationmain}>
              <div className={styles.tablepagination}>
                <div className={`${styles.paginationleft} ${withdrawList?.currentPage === 1 ? styles.disabled : ""}`}>
                  <Paginationicon />
                </div>
                <div className={styles.paginationcenter}>
                  {withdrawList.currentPage > 1 && (
                    <div className={styles.paginationcenteritem}>
                      <span>{withdrawList.currentPage + 1}</span>
                    </div>
                  )}
                  <div className={`${styles.paginationcenteritem} ${styles.active}`}>
                    <span>{withdrawList.currentPage}</span>
                  </div>
                  {withdrawList?.totalPages > withdrawList.currentPage && (
                    <div className={styles.paginationcenteritem}>
                      <span>{withdrawList.currentPage + 1}</span>
                    </div>
                  )}
                </div>
                <div className={`${styles.paginationright} ${withdrawList?.totalPages > withdrawList.currentPage ? "" : styles.disabled}`}>
                  <Paginationicon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
