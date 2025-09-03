import styles from "./myAffiliateUserList.module.scss";
import Paginationicon from "../../../../public/assets/icons/paginationicon";
import React, { useEffect, useState } from "react";
import { myAffiliateUserList } from "@/lib/userApi";
import _ from "lodash";
import Loader from "@/components/loader";
import Useicon from "../../../../out/assets/icons/useicon";
import { useAppContext } from "@/context/AppContext";
import { ClipboardCheck, Copy, Share2 } from "lucide-react";

export default function MyAffiliateUserList() {
  const [userList, setUserList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [copied, setCopied] = useState(false);
  const { user } = useAppContext();

  useEffect(() => {
    setLoader(true);
    myAffiliateUserList(page, pageSize)
      .then((res) => {
        setUserList(res.payload);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  }, [page]);

  const handleNext = () => {
    if (userList?.totalPages > userList?.currentPage) {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    if (userList?.currentPage > 1) {
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
              <h3>Affiliate Users List</h3>
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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country Code</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {loader ? (
                    <tr>
                      <td colSpan={5}>
                        <div className={styles.loader}>
                          <Loader />
                        </div>
                      </td>
                    </tr>
                  ) : (
                    userList?.data?.map((item, index) => {
                      return (
                        <tr>
                          <td>
                            <span className={styles.tableid}>{index + 1 + (page - 1) * pageSize}</span>
                          </td>
                          <td>
                            <span className={styles.tablecustomername}>{item?.name ? _.capitalize(item?.name) : ""}</span>
                          </td>
                          <td>{item?.email}</td>
                          <td>{item?.countryCode}</td>
                          <td>{item?.phone}</td>
                        </tr>
                      );
                    })
                  )}
                  {userList?.data?.length === 0 && !loader && (
                    <>
                      <tr>
                        <td colSpan={5}>
                          <div className={styles.tablenodatamain}>
                            <div className={styles.tablenodataflx}>
                              <div className={styles.nodatausericon}>
                                <Useicon />
                              </div>
                              <h1>No data found</h1>
                              <p>No users records available.</p>
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
                <div onClick={handlePrevious} className={`${styles.paginationleft} ${userList?.currentPage === 1 ? styles.disabled : ""}`}>
                  <Paginationicon />
                </div>
                <div className={styles.paginationcenter}>
                  {userList?.currentPage > 1 && (
                    <div className={styles.paginationcenteritem} onClick={() => setPage(userList?.currentPage - 1)}>
                      <span>{userList?.currentPage - 1}</span>
                    </div>
                  )}
                  <div className={`${styles.paginationcenteritem} ${styles.active}`}>
                    <span>{userList?.currentPage}</span>
                  </div>
                  {userList?.totalPages > userList?.currentPage && (
                    <div className={styles.paginationcenteritem} onClick={() => setPage(userList?.currentPage + 1)}>
                      <span>{userList?.currentPage + 1}</span>
                    </div>
                  )}
                </div>
                <div onClick={handleNext} className={`${styles.paginationright} ${userList?.totalPages > userList?.currentPage ? "" : styles.disabled}`}>
                  <Paginationicon />
                </div>
              </div>

              <span className={styles.paginationrighttext}>{`Results: ${(page - 1) * pageSize + 1} - ${(page - 1) * pageSize + (userList?.data?.length || 0)} of ${userList?.totalRecords || 0}`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
