// import React, { useState, useEffect } from "react";
// import Button from "@/components/button";
// import toast from "react-hot-toast";
// import styles from "./strategiesPlan.module.scss";
// import { getPaymentLink } from "@/lib/strategyApi";
// import { useRouter } from "next/router";

// export default function StrategiesPlans({ item, index }) {
//   const router = useRouter();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     metaAccountNo: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [isBtnLoading, setIsBtnLoading] = useState(false);

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
//     if (!formData.metaAccountNo) newErrors.metaAccountNo = "Meta Account No is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async () => {
//     if (!validate()) return;

//     setLoading(true);
//     setIsBtnLoading(true);
//     try {
//       const response = await getPaymentLink({ ...formData, strategyPlanId: item?._id });
//       if (response?.success == true) {
//         router.push(response.url);
//         return;
//       }
//       if (response?.success == false) {
//         throw new Error("Failed to submit");
//       }
//       toast.success("Submitted successfully!");
//       setModalOpen(false);
//       setFormData({ name: "", email: "", metaAccountNo: "" });
//     } catch (error) {
//       toast.error("Submission failed!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     document.body.style.overflow = modalOpen ? "hidden" : "";
//   }, [modalOpen]);

//   const handleModalClose = () => {
//     setModalOpen(false);
//     setFormData({ name: "", email: "", metaAccountNo: "" });
//     setErrors({});
//   };

//   return (
//     <>
//       <div className={styles.strategiesCard} key={index}>
//         <div className={styles.cardContent}>
//           <div className={styles.buttonAlignment}>
//             <h3 className={styles.planTitle}>{item?.planType}</h3>
//             <div onClick={() => setModalOpen(true)}>
//               <Button text="Buy Now" />
//             </div>
//           </div>

//           <p className={styles.planPrice}>${item?.price}</p>
//         </div>
//       </div>

//       {modalOpen && (
//         <div className={styles.linkmodal}>
//           <div className={styles.whiteModal}>
//             <div className={styles.modalClose}>
//               <h2>Strategy Plan</h2>
//               <div onClick={() => handleModalClose()}>&#10005;</div>
//             </div>
//             <div className={styles.modalbody}>
//               <h3>For {item?.planType}</h3>

//               <div className={styles.inputGroup}>
//                 <label>Name{errors.name ? <span className={styles.error}>*</span> : ""}</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your name"
//                   value={formData.name}
//                   onChange={(e) => {
//                     setFormData({ ...formData, name: e.target.value });
//                     setErrors({ ...errors, name: "" });
//                   }}
//                   required
//                 />
//               </div>

//               <div className={styles.inputGroup}>
//                 <label>Email{errors.email ? <span className={styles.error}>*</span> : ""}</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={(e) => {
//                     setFormData({ ...formData, email: e.target.value });
//                     setErrors({ ...errors, email: "" });
//                   }}
//                   required
//                 />
//               </div>

//               <div className={styles.inputGroup}>
//                 <label>Meta Account No{errors.metaAccountNo ? <span className={styles.error}>*</span> : ""}</label>
//                 <input
//                   type="text"
//                   name="metaAccountNo"
//                   placeholder="Enter your Meta Account No"
//                   value={formData.metaAccountNo}
//                   onChange={(e) => {
//                     setFormData({ ...formData, metaAccountNo: e.target.value });
//                     setErrors({ ...errors, metaAccountNo: "" });
//                   }}
//                   required
//                 />
//               </div>

//               <div className={styles.submitBtn}>
//                 <Button text={loading ? "Processing..." : "Proceed to pay"} onClick={handleSubmit} isBtnLoading={isBtnLoading} /* disabled={loading} */ />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import Button from "@/components/button";
import toast from "react-hot-toast";
import styles from "./strategiesPlan.module.scss";
import { getPaymentLink } from "@/lib/strategyApi";
import { useRouter } from "next/router";
import Modal from "@/components/modal";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
const Logo = "/assets/logo/logo.svg";

export default function StrategiesPlans({ item, index }) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) : null;
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [showLoginInstructionModal, setShowLoginInstructionModal] = useState(false);
  const { showLogin, setShowLogin, backToStrategyPlan, setBackToStrategyPlan /* subscriptionPlanModalOpen, setSubscriptionPlanModalOpen  */ } = useAppContext();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    metaAccountNo: "",
  });

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
    // if (!formData.metaAccountNo) newErrors.metaAccountNo = "Meta Account No is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    setIsBtnLoading(true);
    try {
      const response = await getPaymentLink({ ...formData, strategyPlanId: item?._id, userId: user?._id });
      if (response?.success == true) {
        router.push(response.url);
        toast.success("Submitted successfully!");
        return;
      }
      if (response?.success == false) {
        toast.error("Submission failed!");
        throw new Error("Failed to submit");
      }
      setModalOpen(false);
      setFormData({ name: user?.name || "", email: user?.email || "", metaAccountNo: "" });
    } catch (error) {
      toast.error("Submission failed!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
  }, [modalOpen]);

  const handleModalClose = () => {
    setModalOpen(false);
    setFormData({ name: user?.name || "", email: user?.email || "", metaAccountNo: "" });
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

  return (
    <>
      <div className={styles.strategiesCard} key={index}>
        <div className={styles.cardContent}>
          <div className={styles.buttonAlignment}>
            <h3 className={styles.planTitle}>{item?.planType}</h3>
            <div onClick={handleClick}>
              <Button text="Buy Now" />
            </div>
          </div>

          <p className={styles.planPrice}>${item?.price}</p>
        </div>
      </div>

      {/* Show strategy buy now modal */}
      {modalOpen && (
        <div className={styles.linkmodal}>
          <div className={styles.whiteModal}>
            <div className={styles.modalClose}>
              <h2>Strategy Plan</h2>
              <div onClick={() => handleModalClose()}>&#10005;</div>
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

              {/* Meta Account No input */}
              <div className={styles.inputGroup}>
                <label>Meta Account No{errors.metaAccountNo ? <span className={styles.error}>*</span> : ""}</label>
                <input
                  type="text"
                  name="metaAccountNo"
                  placeholder="Enter your Meta Account No"
                  value={formData.metaAccountNo}
                  onChange={(e) => {
                    setFormData({ ...formData, metaAccountNo: e.target.value });
                    // setErrors({ ...errors, metaAccountNo: "" });
                  }}
                  // required
                />
              </div>

              {/* Submit button */}
              <div className={styles.submitBtn}>
                <Button text={loading ? "Processing..." : "Proceed to pay"} onClick={handleSubmit} isBtnLoading={isBtnLoading} disabled={loading} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show warning modal */}
      {showLoginInstructionModal && (
        <Modal isOpen={showLoginInstructionModal} onClose={() => setShowLoginInstructionModal(false)} size="small" closeStyle={true}>
          <div className="px-6 py-8 sm:px-8 bg-white rounded-2xl shadow-xl max-w-md mx-auto text-center">
            <div className={styles.logo}>
              <Image src={Logo} alt="RejoiceFX" width={200} height={50} />
            </div>

            <p className="text-sm text-gray-500 mb-6">You need to be logged in before purchasing a strategy plan.</p>
            <br />

            <div className={styles.submitBtn}>
              <Button
                text="Login"
                onClick={() => {
                  setShowLoginInstructionModal(false);
                  setShowLogin(true);
                  setBackToStrategyPlan(true);
                }}
                className="flex-1"
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
