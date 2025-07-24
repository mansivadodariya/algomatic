import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Modal from "../modal";
import styles from "./verifyOtpForm.module.scss";
import toast from "react-hot-toast";
import { sendOtp, verifyOtp } from "@/lib/authApi";
import ChangePassword from "../changePassword";

const Logo = "/assets/logo/logo.svg";

const VerifyOtpModal = ({ email, formData, handleResendOTP, isOpen, setShowVerifyOtpModal, onClose }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [errors, setErrors] = useState("");
  const [timer, setTimer] = useState(60);
  const [isLoading, setIsLoading] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    let countdown;
    if (isOpen) {
      setTimer(60);
      countdown = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setOtp(["", "", "", "", "", ""]);
      setErrors("");
    }
  }, [isOpen]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");

    if (finalOtp.length < 6) {
      setErrors("Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);
    setErrors("");

    try {
      const res = await verifyOtp(email, finalOtp);
      if (res?.success) {
        toast.success("OTP verified successfully");
        setShowVerifyOtpModal(false);
        setShowChangePasswordModal(true);
        onClose();
      } else {
        setErrors("Invalid OTP. Please try again.");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (timer === 0 && !isLoading) {
      // handleResendOTP();
      setTimer(60);
      const apiRes = await sendOtp(email);
      if (apiRes?.success) {
        toast.success("OTP sent successfully");
        // setShowVerifyOtpModal(false);
        // setShowChangePasswordModal(true);
        // onClose();
      }
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="large">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <Image src={Logo} alt="Logo" width={180} height={45} />
            </div>
            <h2 className={styles.otpLabel}>Verify OTP</h2>
          </div>

          <p className={styles.instructions}>
            Enter the 6-digit OTP sent to
            {/* <strong>{email}</strong>. */}
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.otpInputs}>
              {otp.map((digit, index) => (
                <input key={index} type="text" maxLength="1" value={digit} disabled={isLoading} onChange={(e) => handleChange(e.target.value, index)} onKeyDown={(e) => handleKeyDown(e, index)} ref={(el) => (inputRefs.current[index] = el)} className={styles.otpInput} />
              ))}
            </div>

            {/* {errors && <div className={styles.errorText}>{errors}</div>} */}

            <button type="submit" className={styles.primaryButton} disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>

            <div className={styles.resendSection}>
              {timer > 0 ? (
                <span className={styles.timerText}>Resend OTP in {timer}s</span>
              ) : (
                <button type="button" onClick={handleResend} className={styles.resendButton} disabled={isLoading}>
                  Resend OTP
                </button>
              )}
            </div>

            {/* <div className={styles.backToLogin}>
              <button type="button" onClick={onClose} disabled={isLoading}>
                ← Back to Login
              </button>
            </div> */}
          </form>
        </div>
      </Modal>

      <ChangePassword email={email} formDataOfSentOtpModal={formData} isOpen={showChangePasswordModal} setShowChangePasswordModal={setShowChangePasswordModal} onClose={() => setShowChangePasswordModal(false)} />
    </>
  );
};

export default VerifyOtpModal;
