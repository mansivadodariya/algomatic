import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./profile.module.scss";
import Button from "@/components/button";
import { getPaymentHistory, editUser } from "@/lib/strategyApi";
import { useAppContext } from "@/context/AppContext";
import Modal from "@/components/modal";
import { ArrowLeft, Check, ChevronLeft, ChevronLeftCircle, ChevronsLeft, ClipboardCheck, Copy, Info, MoveLeft, MoveLeftIcon, SquarePen, UserRoundCog, Wallet } from "lucide-react";

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");
  const [payments, setPayments] = useState([]);
  const [metaModalOpen, setMetaModalOpen] = useState(false);
  const [metaValue, setMetaValue] = useState("");
  const [savingMeta, setSavingMeta] = useState(false);
  const { isUserLoggedIn, setIsUserLoggedIn, user, setUser } = useAppContext();
  const [isProfileEdit, setIsProfileEdit] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const storedUser = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) : null;
    if (!storedUser) {
      router.push("/");
    }
    setUser(storedUser);
  }, [isUserLoggedIn]);

  useEffect(() => {
    if (activeTab === "payments") {
      (async () => {
        try {
          const data = await getPaymentHistory();
          setPayments(data);
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("token");
    setIsUserLoggedIn(false);
    router.push("/");
  };

  // profile edit handling
  const handleProfileSave = async () => {
    try {
      await editUser(user._id, user);
      const refreshed = await getPaymentHistory();
      setPayments(refreshed);
      setIsProfileEdit(false);
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
  };

  // meta account no edit handling
  const openMetaModal = (payment) => {
    setMetaValue(payment.metaAccountNo || "");
    setMetaModalOpen(true);
  };
  const handleMetaSave = async () => {
    if (!metaValue) return;
    setSavingMeta(true);
    try {
      await addMetaAccountNo(metaValue);
      // refresh list
      const refreshed = await getPaymentHistory();
      setPayments(refreshed);
      setMetaModalOpen(false);
    } catch (e) {
      console.error(e);
    } finally {
      setSavingMeta(false);
    }
  };

  const handleCopy = async () => {
    if (user?.myAffiliateCode) {
      await navigator.clipboard.writeText(user.myAffiliateCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <div className={styles.dashboarlayout}>
        <hr className={styles.hr} />
        <div className={styles.dashboardWrapper}>
          {/* <div className="container-xl"> */}
          <main className={styles.content}>
            {activeTab === "profile" && isProfileEdit ? (
              <section>
                <div
                  style={{ display: "flex", cursor: "pointer" }}
                  onClick={() => {
                    setActiveTab("profile");
                    setIsProfileEdit(false);
                  }}
                >
                  <div>
                    <ChevronLeft className={styles.arrowIcon} />
                  </div>
                  <h1 className={styles.contantHeader}>Back</h1>
                </div>
                <div className={styles.profileGrid}>
                  <div>
                    <span>Name</span>
                    {isProfileEdit ? <input type="text" value={user?.name} onChange={(e) => setUser({ ...user, name: e.target.value })} className={styles.inputField} /> : <p>{user.name}</p>}
                  </div>
                  <div>
                    <span>Email</span>
                    {isProfileEdit ? (
                      <div className={styles.affiliateCoderel}>
                        <input type="email" value={user?.email} /* onChange={(e) => setUser({ ...user, email: e.target.value })}  */ className={styles.inputField} disabled />
                        <div className={styles.iicon} title="You cannot edit this field">
                          <Info color="#616161" />
                        </div>
                      </div>
                    ) : (
                      <p>{user.email}</p>
                    )}
                  </div>
                  <div>
                    <span>Country Code</span>
                    {isProfileEdit ? <input type="tel" value={user?.countryCode} onChange={(e) => setUser({ ...user, countryCode: e.target.value })} className={styles.inputField} /> : <p>{user.countryCode}</p>}
                  </div>
                  <div>
                    <span>Phone</span>
                    {isProfileEdit ? <input type="tel" value={user?.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} className={styles.inputField} /> : <p>{user?.phone}</p>}
                  </div>
                  <div>
                    <span>My Affiliate Code</span>
                    {isProfileEdit ? (
                      <div className={styles.affiliateCoderel}>
                        <input type="text" value={user?.myAffiliateCode} onChange={(e) => setUser({ ...user, myAffiliateCode: e.target.value })} className={styles.inputField} disabled />
                        <div className={styles.iicon} title="You cannot edit this field">
                          <Info color="#616161" />
                        </div>
                      </div>
                    ) : (
                      <p>{user?.myAffiliateCode}</p>
                    )}

                    {/* {isProfileEdit ? (
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={user?.myAffiliateCode}
            disabled
            className="border px-2 py-1 rounded"
          />
        </div>
      ) : (
        <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
          <p className="font-medium">{user?.myAffiliateCode}</p>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            className="ml-2"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      )} */}
                  </div>
                </div>
                {isProfileEdit && (
                  <button
                    onClick={() => {
                      handleProfileSave();
                    }}
                    className={styles.saveButton}
                  >
                    Save Changes
                  </button>
                )}
              </section>
            ) : activeTab === "profile" && !isProfileEdit ? (
              <section>
                <div style={{ display: "flex", cursor: "pointer" }}>
                  <h1 className={styles.contantHeader}>Profile</h1>
                  <SquarePen
                    className={styles.editIcon}
                    onClick={() => {
                      setActiveTab("profile");
                      setIsProfileEdit(true);
                    }}
                  />
                </div>
                <div className={styles.profileGrid}>
                  <div>
                    <span>Name</span>
                    <p>{user?.name}</p>
                  </div>
                  <div>
                    <span>Email</span>
                    <p>{user?.email}</p>
                  </div>
                  <div>
                    <span>Country Code</span>
                    <p>{user?.countryCode ?? "-"}</p>
                  </div>
                  <div>
                    <span>Phone</span>
                    <p>{user?.phone}</p>
                  </div>
                  <div>
                    <span>My Affiliate Code</span>
                    <p>{user?.myAffiliateCode}</p>
                    <div className={styles.copyIcon} title="Copy" onClick={handleCopy}>
                      {copied ? <ClipboardCheck /> : <Copy />}
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              ""
            )}
          </main>
          {/* </div> */}
        </div>
      </div>
      {/*    */}
      {metaModalOpen && (
        <Modal size="small" isOpen={metaModalOpen} onClose={() => setMetaModalOpen(false)}>
          <h3>Add Meta Account Number</h3>
          <input type="text" value={metaValue} onChange={(e) => setMetaValue(e.target.value)} placeholder="Enter meta account no" style={{ width: "100%", padding: "0.5rem", margin: "1rem 0" }} />
          <Button text="Save" onClick={handleMetaSave} isBtnLoading={savingMeta} />
        </Modal>
      )}
    </>
  );
}
