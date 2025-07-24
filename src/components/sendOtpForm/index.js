import React, { useState } from "react";
import Image from "next/image";
import Modal from "../modal";
import VerifyOtpModal from "../verifyOtpForm";
import styles from "./sendOtpModal.module.scss";
import toast from "react-hot-toast";
import { sendOtp } from "@/lib/authApi";
import { useAppContext } from "../../context/AppContext";

const Logo = "/assets/logo/logo.svg";

const SendOtpModal = ({ isOpen, setShowOtp, onClose }) => {
  const [showVerifyOtpModal, setShowVerifyOtpModal] = useState(false);
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false); // <-- Loader state
  const { setUser } = useAppContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Email is required*";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setIsLoading(true); // Start loader
      const res = await sendOtp(formData.email);
      if (res?.success) {
        toast.success("OTP sent successfully");
        setShowOtp(false);
        setShowVerifyOtpModal(true);
        // setFormData({});
        onClose();
      }
    } catch (err) {
      toast.error("Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false); // Stop loader
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setFormData({});
        }}
        size="large"
      >
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <Image src={Logo} alt="Logo" width={180} height={45} />
            </div>
            <h2 className={styles.title}>Secure Your Access with OTP</h2>
          </div>

          <div className={styles.description}>
            <p>To continue securely, please enter your registered email address. We’ll send you a One-Time Password (OTP) for verification.</p>
          </div>

          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.otpLabel}>Registered Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder={errors.email || "Enter your email"}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading} // Disable while loading
                  className={`${styles.input} ${errors.email ? styles.errorPlaceholder : ""}`}
                />
              </div>

              <button
                type="submit"
                className={styles.primaryButton}
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? "Sending..." : "Send OTP"} {/* Loader text */}
              </button>
            </form>
          </div>
        </div>
      </Modal>

      <VerifyOtpModal email={formData.email} formData={setFormData} isOpen={showVerifyOtpModal} setShowVerifyOtpModal={setShowVerifyOtpModal} onClose={() => setShowVerifyOtpModal(false)} handleResendOTP={handleSubmit} />
    </>
  );
};

export default SendOtpModal;
