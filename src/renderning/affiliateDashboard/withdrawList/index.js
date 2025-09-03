import React, { useEffect, useState } from "react";
import styles from "./withdrawList.module.scss";
import Paginationicon from "../../../../public/assets/icons/paginationicon";
import { withdrawReqList } from "@/lib/userApi";
import Link from "next/link";
import _ from "lodash";
import Image from "next/image";
import { WITHDRAWAL_REQ_STATUS } from "@/utils/constant";
import Loader from "@/components/loader";
import Useicon from "../../../../out/assets/icons/useicon";
import { useAppContext } from "@/context/AppContext";
import { ClipboardCheck, Copy, Share2 } from "lucide-react";
const imageNotFound = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8LWlb8l34MXvr3BonwEYsd11lw1QKQVEiQ&s";

export default function WithdrawList() {
  const [withdrawList, setWithdrawList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
    const [copied, setCopied] = useState(false);
    const { user } = useAppContext();

  useEffect(() => {
    setLoader(true);
    withdrawReqList(page, pageSize)
      .then((res) => {
        setWithdrawList(res.payload);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  }, [page]);

  const handleNext = () => {
    if (withdrawList?.totalPages > withdrawList?.currentPage) {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (withdrawList?.currentPage > 1) {
      setPage(page - 1);
    }
  };
  const handleCopy = async () => {
    if (user?.myAffiliateCode) {
      await navigator.clipboard.writeText(`https://algomaticbot.com?affiliateCode=${user.myAffiliateCode}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = () => {
    const code = user?.myAffiliateCode;
    const signupUrl = `https://algomaticbot.com?affiliateCode=${encodeURIComponent(code)}`;
    const shareText = `Join AlgoMatic using my affiliate code!\n${signupUrl}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <>
      <div className={styles.affiliatetablemain}>
        <div className="container-xl">
          <div className={styles.affiliatetablelayout}>
            <div className={styles.affiliatetabletitle}>
              <h3>Withdraw List</h3>
              <div className={styles.affiliateCoderel}>
                Affiliate Code
                <div className={styles.copyIcon} title="Copy" onClick={handleCopy}>
                  {copied ? <ClipboardCheck /> : <Copy />}
                </div>
                <div className={styles.copyIcon} title="Share" onClick={handleShare}>
                  <Share2 />
                </div>
              </div>
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
                  {loader ? (
                    <tr>
                      <td colSpan={6}>
                        <div className={styles.loader}>
                          <Loader />
                        </div>
                      </td>
                    </tr>
                  ) : (
                    withdrawList?.data?.map((item, index) => {
                      return (
                        <tr>
                          <td>
                            <span className={styles.tableid}>{index + 1 + (page - 1) * pageSize}</span>
                          </td>
                          <td>
                            <span className={`${styles.tablecustomername} ${styles[item?.withdrawStatus === WITHDRAWAL_REQ_STATUS.APPROVED ? "green" : "red"]}`}>{item?.withdrawStatus ? _.capitalize(item?.withdrawStatus) : ""}</span>
                          </td>
                          <td>${item?.withdrawAmount}</td>
                          <td>
                            <Link href={item?.imageUrl || imageNotFound} target="_blank" rel="noopener noreferrer">
                              <div className={styles.withdrawImageContainer}>
                                <Image
                                  src={item?.imageUrl || imageNotFound}
                                  alt="payment proof"
                                  width={100}
                                  height={60}
                                  className={styles.withdrawImage}
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = imageNotFound;
                                  }}
                                />
                              </div>
                            </Link>
                          </td>
                          <td>{item?.createdAt.split("T")[0] + ", " + item?.createdAt.split("T")[1].split(".")[0]}</td>
                          <td>{item?.isSeenByAdmin ? "Reviewed" : "Not Review"}</td>
                        </tr>
                      );
                    })
                  )}
                  {withdrawList?.data?.length === 0 && !loader && (
                    <>
                      <tr>
                        <td colSpan={6}>
                          <div className={styles.tablenodatamain}>
                            <div className={styles.tablenodataflx}>
                              <div className={styles.nodatausericon}>
                                <Useicon />
                              </div>
                              <h1>No data found</h1>
                              <p>No withdrawal records available.</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className={styles.tablepaginationmain}>
              <div className={styles.tablepagination}>
                <div onClick={handlePrevious} className={`${styles.paginationleft} ${withdrawList?.currentPage === 1 ? styles.disabled : ""}`}>
                  <Paginationicon />
                </div>
                <div className={styles.paginationcenter}>
                  {withdrawList?.currentPage > 1 && (
                    <div className={styles.paginationcenteritem} onClick={() => setPage(withdrawList?.currentPage - 1)}>
                      <span>{withdrawList?.currentPage - 1}</span>
                    </div>
                  )}
                  <div className={`${styles.paginationcenteritem} ${styles.active}`}>
                    <span>{withdrawList?.currentPage}</span>
                  </div>
                  {withdrawList?.totalPages > withdrawList?.currentPage && (
                    <div className={styles.paginationcenteritem} onClick={() => setPage(withdrawList?.currentPage + 1)}>
                      <span>{withdrawList?.currentPage + 1}</span>
                    </div>
                  )}
                </div>
                <div onClick={handleNext} className={`${styles.paginationright} ${withdrawList?.totalPages > withdrawList?.currentPage ? "" : styles.disabled}`}>
                  <Paginationicon />
                </div>
              </div>

              <span className={styles.paginationrighttext}>{`Results: ${(page - 1) * pageSize + 1} - ${(page - 1) * pageSize + (withdrawList?.data?.length || 0)} of ${withdrawList?.totalRecords || 0}`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
