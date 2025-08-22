import React, { useState, useEffect, useRef } from "react";
import Modal from "../modal";
import Image from "next/image";
import Button from "../button";
import styles from "./authModal.module.scss";
import { loginUser, signUpUser } from "@/lib/authApi";
import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";
import SendOtpModal from "../sendOtpForm";
import { Eye, EyeOff } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Loader from "../loader";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
const Logo = "/assets/logo/logo.svg";

const AuthModal = ({ isOpen, setShowLogin, onClose, setIsUserLoggedIn }) => {
  const router = useRouter();
  const params = useSearchParams();
  const alreadyOpened = useRef(false);
  const [mode, setMode] = useState("login");
  const [showOtp, setShowOtp] = useState(false);
  const { setUser, backToStrategyPlan, setBackToStrategyPlan /* subscriptionPlanModalOpen, setSubscriptionPlanModalOpen */ } = useAppContext();

  const initialData = {
    name: "",
    email: "",
    countryCode: "",
    phone: "",
    password: "",
    confirmPassword: "",
    uplineAffiliateCode: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  // redirect to signup modal for upcoming shared link users
  useEffect(() => {
    const affiliateCode = params.get("affiliateCode");

    if (affiliateCode && !isOpen && !alreadyOpened.current) {
      alreadyOpened.current = true;
      setMode("signup");
      setShowLogin(true);
      setFormData((prev) => ({
        ...prev,
        uplineAffiliateCode: affiliateCode,
      }));
      router.replace("/", { scroll: false });
    }
  }, [params]);

  useEffect(() => {
    if (!isOpen) {
      setFormData(initialData);
      setErrors({});
      setMode("login");
    }
  }, [isOpen]);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.password) {
      toast.error("Password is required");
      newErrors.password = "Password is required*";
    } else if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      newErrors.password = "Password must be at least 6 characters long*";
    }

    if (mode === "signup" && !formData.confirmPassword) {
      toast.error("Password is required");
      newErrors.confirmPassword = "Password is required*";
    } else if (mode === "signup" && formData.password !== formData.confirmPassword) {
      toast.error("Confirm passwords do not match");
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (mode === "signup" && !formData.phone) {
      toast.error("Phone is required");
      newErrors.phone = "Phone is required*";
    } else if (mode === "signup" && !/^[0-9]{7,15}$/.test(formData.phone)) {
      toast.error("Valid phone required");
      newErrors.phone = "Valid phone required";
    }

    if (mode === "signup" && !formData.countryCode) {
      toast.error("Country code is required");
      newErrors.countryCode = "Country code is required*";
    }

    if (!formData.email) {
      newErrors.email = "Email is required*";
      toast.error("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Valid email required");
      newErrors.email = "Invalid email";
    }

    if (mode === "signup" && !formData.name) {
      toast.error("Name is required");
      newErrors.name = "Name is required*";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      if (mode === "login") {
        const login = await loginUser(formData.email, formData.password);
        if (login?.success) {
          toast.success("Login Successful");
          localStorage.setItem("user", JSON.stringify(login.payload));
          localStorage.setItem("isLogin", true);
          localStorage.setItem("token", login.payload.token);
          setIsUserLoggedIn(true);
          setUser(login.payload);

          onClose();
        } else {
          toast.error(login?.message);
          setIsSubmitting(false);
        }
        setIsSubmitting(false);
      } else {
        const signup = await signUpUser(formData.name, formData.email, formData.phone, formData.password, formData.confirmPassword, formData.countryCode, formData?.uplineAffiliateCode);
        if (signup?.success) {
          toast.success("Signup Successful");
          setShowLogin(true);
          setFormData(initialData);
          setIsSubmitting(false);
          setMode("login");
        } else {
          toast.error(signup?.message);
          setIsSubmitting(false);
          // setIsSubmitting(false);
        }
      }
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} /* size="large" */>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <Image src={Logo} alt="Algomatic" width={200} height={50} />
            </div>
          </div>

          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
              {mode === "signup" && (
                <div className={styles.inputGroup}>
                  <input type="text" name="name" placeholder={errors.name || "Full Name"} value={formData?.name} onChange={handleInputChange} className={`${styles.input} ${errors.name ? styles.errorPlaceholder : ""}`} />
                </div>
              )}

              <div className={styles.inputGroup}>
                <input type="email" name="email" placeholder={errors.email || "Email Address"} value={formData?.email} onChange={handleInputChange} className={`${styles.input} ${errors.email ? styles.errorPlaceholder : ""}`} />
              </div>

              {/* affialiate code */}
              {mode === "signup" && (
                <div className={styles.passwordRow}>
                  <div className={styles.inputGroup}>
                    <input type="text" name="uplineAffiliateCode" placeholder={errors.uplineAffiliateCode || "Affiliate Code"} value={formData?.uplineAffiliateCode} onChange={handleInputChange} className={`${styles.input} ${errors.uplineAffiliateCode ? styles.errorPlaceholder : ""}`} />
                  </div>
                </div>
              )}

              {/* Country code and phone */}
              {mode === "signup" && (
                <div className={styles.passwordRowPhone}>
                  <div className={styles.inputGroup}>
                    <PhoneInput
                      country={"in"}
                      placeholder={errors.phone || "Enter phone number"}
                      enableSearch
                      inputClass={styles.phoneInput}
                      buttonClass={styles.phoneButton}
                      value={`${formData?.countryCode || ""}${formData?.phone || ""}`}
                      inputProps={{
                        onKeyDown: (e) => {
                          if (e.key === "Backspace") {
                            const localPhone = formData?.phone || "";
                            if (localPhone.trim().length === 0) {
                              e.preventDefault();
                              e.stopPropagation();
                            }
                          }
                        },
                      }}
                      onChange={(value, data) => {
                        const dialCode = data && data.dialCode ? String(data.dialCode) : "";
                        const onlyDigits = (value || "").replace(/\D/g, "");
                        const phoneWithoutCode = dialCode ? onlyDigits.replace(new RegExp("^" + dialCode), "") : onlyDigits;
                        setFormData((prev) => ({
                          ...prev,
                          countryCode: dialCode ? `+${dialCode}` : prev?.countryCode || "",
                          phone: phoneWithoutCode,
                        }));

                        setErrors((prev) => ({ ...prev, phone: "", countryCode: "" }));
                      }}
                    />
                  </div>
                </div>
              )}

              {mode === "signup" ? (
                <div className={styles.passwordRow}>
                  <div className={styles.inputGroup}>
                    <input type={showPassword ? "text" : "password"} name="password" placeholder={errors.password || "Password"} value={formData?.password} onChange={handleInputChange} className={`${styles.input} ${errors.password ? styles.errorPlaceholder : ""}`} />
                    <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                  </div>

                  <div className={styles.inputGroup}>
                    <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder={errors.confirmPassword || "Confirm Password"} value={formData?.confirmPassword} onChange={handleInputChange} className={`${styles.input} ${errors.confirmPassword ? styles.errorPlaceholder : ""}`} />
                    <span className={styles.eyeIcon} onClick={toggleConfirmPasswordVisibility}>
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                  </div>
                </div>
              ) : (
                <div className={styles.inputGroup}>
                  <input type={showPassword ? "text" : "password"} name="password" placeholder={errors.password || "Password"} value={formData.password} onChange={handleInputChange} className={`${styles.input} ${errors.password ? styles.errorPlaceholder : ""}`} />
                  <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                </div>
              )}

              {mode === "login" && (
                <div className={styles.forgot}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowOtp(true);
                      setShowLogin(false);
                    }}
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button type="submit" className={styles.primaryButton} disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className={styles.buttonLoader}>
                    <Loader />
                  </div>
                ) : mode === "login" ? (
                  "Login"
                ) : (
                  "Signup"
                )}
              </button>
            </form>

            <div className={styles.switch}>
              {mode === "login" ? (
                <>
                  Not a member?{" "}
                  <button type="button" onClick={() => handleModeChange("signup")} className={styles.switchButton}>
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button type="button" onClick={() => handleModeChange("login")} className={styles.switchButton}>
                    Log In
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </Modal>

      <SendOtpModal isOpen={showOtp} setShowOtp={setShowOtp} onClose={() => setShowOtp(false)} />
    </>
  );
};

export default AuthModal;
