import React, { useState, useEffect } from "react";
import Button from "@/components/button";
import toast from "react-hot-toast";
import styles from "./strategiesPlan.module.scss";
import { getPaymentLink } from "@/lib/strategyApi";
import { useRouter } from "next/router";
import Modal from "@/components/modal";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import Commonarrowbutton from "@/components/commonarrowbutton";
import { getCouponByCouponCode } from "@/lib/couponApi";
const Logo = "/assets/logo/logo.svg";

export default function StrategiesPlans({ item, index }) {
  const router = useRouter();
  const [inputValueForDebauncing, setInputValueForDebauncing] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) : null;
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [showLoginInstructionModal, setShowLoginInstructionModal] = useState(false);
  const { showLogin, setShowLogin, backToStrategyPlan, setBackToStrategyPlan /* subscriptionPlanModalOpen, setSubscriptionPlanModalOpen  */ } = useAppContext();
  const [noOfPlans, setNoOfPlans] = useState(1);
  const [planPrice, setPlanPrice] = useState({
    initialPlanPrice: item?.price,
    finalPlanPrice: item?.price,
  });
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    metaAccountNo: "",
    couponId: "",
    couponCode: "",
    couponDiscount: "",
  });

  // debounce for coupon code
  useEffect(() => {
    if (!inputValueForDebauncing) return; // skip empty input

    const delayDebounce = setTimeout(async () => {
      const couponData = await getCouponByCouponCode(inputValueForDebauncing);
      if (!couponData?.success) {
        toast.error(couponData?.message || "Invalid coupon code!");
      } else {
        toast.success("Coupon code applied successfully!");
        setFormData((prev) => ({ ...prev, couponCode: inputValueForDebauncing, couponDiscount: couponData?.payload?.discount, couponId: couponData?.payload?._id ?? null }));
      }
    }, 800);
    return () => clearTimeout(delayDebounce);
  }, [inputValueForDebauncing]);

  useEffect(() => {
    if (user) {
      if (!formData.name || !formData.email) {
        setFormData({ name: user?.name, email: user?.email, metaAccountNo: "" });
      }
    }
  }, [user]);

  const validate = () => {
    const newErrors = {};
    if (!formData?.name) newErrors.name = "Name is required";
    if (!formData?.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData?.email)) newErrors.email = "Invalid email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handle buy now click
  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    setIsBtnLoading(true);
    try {
      const response = await getPaymentLink({ ...formData, strategyPlanId: item?._id, userId: user?._id, noOfBots: noOfPlans, couponId: formData?.couponId });
      if (response?.success == true) {
        router.push(response.url);
        toast.success("Submitted successfully!");
        setIsBtnLoading(false);
        return;
      }
      if (response?.success == false) {
        toast.error("Submission failed due to some error!");
        setIsBtnLoading(false);
        throw new Error("Failed to submit");
      }
      setModalOpen(false);
      setFormData({ name: user?.name || "", email: user?.email || "", metaAccountNo: "", couponCode: "" });
    } catch (error) {
      setIsBtnLoading(false);
      toast.error("Submission failed due to some error!"); //check ip is whitelist or not
    } finally {
      setLoading(false);
      setIsBtnLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
  }, [modalOpen]);

  const handleModalClose = () => {
    setModalOpen(false);
    setFormData({ name: user?.name || "", email: user?.email || "", metaAccountNo: "", couponCode: "" });
    setErrors({});
  };

  const handleClick = () => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      setModalOpen(true);
    } else {
      setShowLoginInstructionModal(true);
    }
  };

  const handleStrategyPlanQunatity = (type) => {
    if (type === "add") {
      setNoOfPlans(noOfPlans + 1);
      setPlanPrice({ ...planPrice, finalPlanPrice: planPrice.initialPlanPrice * (noOfPlans + 1) });
    } else {
      setNoOfPlans(noOfPlans - 1);
      setPlanPrice({ ...planPrice, finalPlanPrice: planPrice.initialPlanPrice * (noOfPlans - 1) });
    }
  };

  return (
    <>
      <div className={styles.strategiesCard} key={index}>
        <div className={styles.cardContent}>
          <div className={styles.buttonAlignment}>
            <h3 className={styles.planTitle}>{item?.planType}</h3>
            <div onClick={handleClick}>
              {/* <Button text="Buy Now" /> */}
              <Commonarrowbutton Text="Buy Now" Butttonvarient="Blueoutlined" />
            </div>
          </div>

          <div className={styles.planbottom}>
            <div className={styles.planpricing}>
              <div className={styles.planPriceflx}>
                <div className={styles.oldprice}>
                  <span>M.R.P.:</span>
                  <del className={styles.planPrice}>${item?.initialPrice}</del>
                </div>
                <div className={styles.discount}>
                  <span>Discount :</span>
                  <p className={styles.planPrice}>-{item?.discount}%</p>
                </div>
              </div>
              <p className={styles.discountedPlanPrice}>${planPrice.finalPlanPrice}</p>
            </div>
            <div className={styles.valueincreasermain}>
              <button className={noOfPlans <= 1 ? styles.disable : styles.enable} disabled={noOfPlans <= 1} onClick={() => handleStrategyPlanQunatity("subtract")}>
                -
              </button>
              <spam>{noOfPlans}</spam>
              <button onClick={() => handleStrategyPlanQunatity("add")}>+</button>
            </div>
          </div>
        </div>
      </div>

      {/* Show strategy buy now modal */}
      {modalOpen && (
        <div className={styles.linkmodal}>
          <div className={styles.whiteModal}>
            <div className={styles.modalClose}>
              <h2>Strategy Plan</h2>
              <div
                onClick={() => {
                  handleModalClose();
                  setInputValueForDebauncing("");
                }}
              >
                &#10005;
              </div>
            </div>
            <div className={styles.modalbody}>
              <h3>For {item?.planType}</h3>

              {/* Name input */}
              <div className={styles.inputGroup}>
                <label>Name{errors.name ? <span className={styles.error}>*</span> : ""}</label>
                <input
                  type="text"
                  name="name"
                  placeholder={formData?.name ? formData?.name : "Enter your name"}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    setErrors({ ...errors, name: "" });
                  }}
                  // required
                  disabled
                />
              </div>

              {/* Email input */}
              <div className={styles.inputGroup}>
                <label>Email{errors.email ? <span className={styles.error}>*</span> : ""}</label>
                <input
                  type="email"
                  name="email"
                  placeholder={formData?.email ? formData?.email : "Enter your email"}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setErrors({ ...errors, email: "" });
                  }}
                  // required
                  disabled
                />
              </div>

              {/* Add Coupon */}
              <div className={styles.inputGroup}>
                <label>Add Coupon Code</label>
                <input
                  type="text"
                  name="couponCode"
                  placeholder="Enter your coupon code"
                  value={formData.couponCode}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData((prev) => ({ ...prev, couponCode: value }));
                    setInputValueForDebauncing(value);
                  }}
                />
              </div>

              {/* show final ammounts */}
              <div className={`${styles.inputGroup} ${styles.finalAmountmain}`}>
                <label>Final Amount</label>
                <div className={styles.priceDetails}>
                  {console.log(item?.initialPrice,'--------------------------- iteam initial price')}
                  <p>
                    <span className={styles.label}>MRP:</span> ${item?.initialPrice}
                  </p>
                  <p>
                    <span className={styles.label}>Iteams:</span> {noOfPlans}
                  </p>
                  <p>
                    <span className={styles.label}>Discount:</span> {item?.discount ?? 0}%
                  </p>
                  {formData.couponDiscount > 0 && (
                    <p>
                      <span className={styles.label}>Coupon Discount:</span> {formData.couponDiscount}%
                    </p>
                  )}
                  <hr className={styles.separator} />
                  {/* <p className={styles.finalAmount}>Final Amount: ${(item?.initialPrice - (item?.initialPrice * (item?.discount ?? 0)) / 100 - (item?.initialPrice * (formData.couponDiscount ?? 0)) / 100).toFixed(2)}</p> */}
                  <p className={styles.finalAmount}>Final Amount: ${planPrice?.initialPlanPrice * noOfPlans - (formData?.couponDiscount ? (item?.initialPrice * (formData?.couponDiscount ?? 0)) / 100 : 0) * noOfPlans}</p>
                </div>
              </div>

              {/* Meta Account No input */}
              {/* <div className={styles.inputGroup}>
                <label>Meta Account No{errors.metaAccountNo ? <span className={styles.error}>*</span> : ""}</label>
                <input
                  type="text"
                  name="metaAccountNo"
                  placeholder="Enter your Meta Account No"
                  value={formData.metaAccountNo}
                  onChange={(e) => {
                    setFormData({ ...formData, metaAccountNo: e.target.value });
                  }}
                />
              </div> */}

              {/* Submit button */}
              <div className={styles.submitBtn}>
                <Commonarrowbutton Text={loading ? "Processing..." : "Proceed to pay"} Butttonvarient="Blueoutlined" onClick={handleSubmit} isBtnLoading={isBtnLoading} disabled={loading} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show warning modal */}
      {showLoginInstructionModal && (
        <Modal
          isOpen={showLoginInstructionModal}
          onClose={() => {
            setShowLoginInstructionModal(false);
          }}
          size="small"
          closeStyle={true}
        >
          <div className="px-6 py-8 sm:px-8 bg-white rounded-2xl shadow-xl max-w-md mx-auto text-center">
            <div className={styles.logo}>
              <Image src={Logo} alt="Algomatic" width={200} height={50} />
            </div>

            <p className="text-sm text-gray-500 mb-6">You need to be logged in before purchasing a strategy plan.</p>
            <br />

            <div className={styles.submitBtn}>
              <Commonarrowbutton
                Text="Login"
                Butttonvarient="Blueoutlined"
                buttonclassName="widthfull"
                onClick={() => {
                  setShowLoginInstructionModal(false);
                  setShowLogin(true);
                  setBackToStrategyPlan(true);
                }}
                isBtnLoading={isBtnLoading}
                disabled={loading}
              />

              {/* <Button
                text="Login"
                onClick={() => {
                  setShowLoginInstructionModal(false);
                  setShowLogin(true);
                  setBackToStrategyPlan(true);
                }}
                className="flex-1"
              /> */}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
