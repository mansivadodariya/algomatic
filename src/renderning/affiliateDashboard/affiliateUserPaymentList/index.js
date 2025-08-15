import React, { useEffect, useState } from "react";
import styles from "./affiliateUserPaymentList.module.scss";
import Paginationicon from "../../../../public/assets/icons/paginationicon";
import { affiliatePaymentList } from "@/lib/userApi";
import _ from "lodash";

export default function AffialiateUserPaymentList() {
  const [userList, setUserList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    affiliatePaymentList()
      .then((res) => {
        console.log(res.payload, "------------userList");
        setUserList(res.payload);
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
              <h3>Affiliate Payment List</h3>
            </div>
            <div className={styles.affiliatetablescroll}>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Purchase Amount</th>
                    <th>My Commission</th>
                    <th>Commission Amount</th>
                    <th>Purchased Date</th>
                  </tr>
                </thead>
                <tbody>
                  {loader
                    ? "Loading..."
                    : userList?.data?.map((item, index) => {
                        return (
                          <tr>
                            <td>
                              <span className={styles.tableid}>{index + 1}</span>
                            </td>
                            <td>
                              <span className={styles.tablecustomername}>{item?.name ? _.capitalize(item?.name) : ""}</span>
                            </td>
                            <td>{item?.email}</td>
                            <td>${item?.amount}</td>
                            <td>{item?.uplineCommissionPercentage}%</td>
                            <td className={styles.green}>${item?.uplineCommissionAmount}</td>
                            <td>{item?.createdAt.split("T")[0] + ", " + item?.createdAt.split("T")[1].split(".")[0]}</td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className={styles.tablepaginationmain}>
              <div className={styles.tablepagination}>
                <div className={`${styles.paginationleft} ${userList?.currentPage === 1 ? styles.disabled : ""}`}>
                  <Paginationicon />
                </div>
                <div className={styles.paginationcenter}>
                  {userList?.currentPage > 1 && (
                    <div className={styles.paginationcenteritem}>
                      <span>{userList?.currentPage + 1}</span>
                    </div>
                  )}
                  <div className={`${styles.paginationcenteritem} ${styles.active}`}>
                    <span>{userList?.currentPage}</span>
                  </div>
                  {userList?.totalPages > userList?.currentPage && (
                    <div className={styles.paginationcenteritem}>
                      <span>{userList?.currentPage + 1}</span>
                    </div>
                  )}
                </div>
                <div className={`${styles.paginationright} ${userList?.totalPages > userList?.currentPage ? "" : styles.disabled}`}>
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
