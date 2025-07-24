import React, { useState, useEffect } from "react";
import Modal from "../modal";
import Image from "next/image";
import styles from "./changePassword.module.scss";
import toast from "react-hot-toast";
import { changePassword } from "@/lib/authApi";
import { Eye, EyeOff } from "lucide-react";

const Logo = "/assets/logo/logo.svg";

const ChangePassword = ({ email, formDataOfSentOtpModal, isOpen, setShowChangePasswordModal, onClose }) => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      setFormData({ password: "", confirmPassword: "" });
      setErrors({});
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.password) {
      newErrors.password = "Password is required*";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required*";
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const res = await changePassword(email, formData.password, formData.confirmPassword);
    if (res?.success) {
      toast.success("Password changed successfully!");
      setShowChangePasswordModal(false);
      formDataOfSentOtpModal({});
      onClose();
    } else {
      toast.error(res?.message || "Something went wrong.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="large">
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Image src={Logo} alt="Logo" width={180} height={50} />
          <h2>Change Your Password</h2>
          <p className={styles.subtext}>Create a strong password that’s easy to remember and hard to guess.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* <div className={styles.inputGroup}>
            <input type="password" name="password" placeholder={errors.password || "New Password"} className={`${styles.input} ${errors.password ? styles.errorPlaceholder : ""}`} value={formData.password} onChange={handleInputChange} />

            <input type="password" name="confirmPassword" placeholder={errors.confirmPassword || "Confirm New Password"} className={`${styles.input} ${errors.confirmPassword ? styles.errorPlaceholder : ""}`} value={formData.confirmPassword} onChange={handleInputChange} />
          </div> */}
          <div className={styles.inputGroup}>
            <div className={styles.inputWithIcon}>
              <input type={showPassword ? "text" : "password"} name="password" placeholder={errors.password || "New Password"} className={`${styles.input} ${errors.password ? styles.errorPlaceholder : ""}`} value={formData.password} onChange={handleInputChange} />
              <span className={styles.icon} onClick={togglePasswordVisibility}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            <div className={styles.inputWithIcon}>
              <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder={errors.confirmPassword || "Confirm New Password"} className={`${styles.input} ${errors.confirmPassword ? styles.errorPlaceholder : ""}`} value={formData.confirmPassword} onChange={handleInputChange} />
              <span className={styles.icon} onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          <button type="submit" className={styles.primaryButton}>
            Change Password
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ChangePassword;
