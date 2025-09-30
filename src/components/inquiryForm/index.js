import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Modal from "@/components/modal";
import styles from "./inquiryForm.module.scss";
import { fetchIpAddress } from "@/utils/common";
import { addInquiryForm, getInquiryByIp } from "@/lib/inquiryApi";
import Commonarrowbutton from "../commonarrowbutton";
import PhoneInput from "react-phone-input-2";

export const InquiryForm = ({ isOpen, onClose }) => {
  const [isOpenInquiryForm, setIsOpenInquiryForm] = useState(false);
  const [errors, setErrors] = useState({});

  const initialData = {
    ipAddress: "",
    name: "",
    countryCode: "",
    phone: "",
    email: "",
    brokerName: "",
    tradingPlatform: "",
    equity: "",
  };
  const [formData, setFormData] = useState(initialData);

  // Use external control if provided, otherwise use internal logic
  const modalIsOpen = isOpen !== undefined ? isOpen : isOpenInquiryForm;
  const handleModalClose = onClose || (() => setIsOpenInquiryForm(false));

  useEffect(() => {
    // Only auto-open if not externally controlled
    if (isOpen === undefined) {
      fetchIpAddress().then(async (res) => {
        const response = await getInquiryByIp({ ipAddress: res });
        if (!response?.payload?.hasVisited) {
          setFormData((prev) => ({ ...prev, ipAddress: res }));
          setIsOpenInquiryForm(true);
        }
      });
    }
  }, [isOpen]);

  // Fetch IP address when modal is opened externally
  useEffect(() => {
    if (isOpen && !formData.ipAddress) {
      fetchIpAddress().then((res) => {
        setFormData((prev) => ({ ...prev, ipAddress: res }));
      });
    }
  }, [isOpen, formData.ipAddress]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required.";
    } else if (!/^[0-9]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Valid phone number required (7 to 15 digits)";
    }

    if (!formData.brokerName) {
      newErrors.brokerName = "Broker Name is required.";
    }

    if (!formData.equity) {
      newErrors.equity = "Equity is required.";
    }

    if (!formData.tradingPlatform) {
      newErrors.tradingPlatform = "Trading Platform is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate(errors);
    if (!error) return;

    try {
      const response = await addInquiryForm(formData);
      if (response?.success) {
        toast.success("Thanks for reaching out! Our team will contact you shortly.");
        handleModalClose();
        setFormData(initialData);
        setErrors({});
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };

  const handleClose = async () => {
    handleModalClose();
    await addInquiryForm({ ipAddress: formData.ipAddress });

    setFormData(initialData);
    setErrors({});
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} onClose={handleClose}>
        <div className={styles.wrapper}>
          <h2 className="text-xl font-bold mb-4">Let's Connect with us</h2>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className={styles.inputGroup}>
                <label>Name *</label> <span className={styles.error}>{errors.name}</span>
                <input type="name" name="name" placeholder={errors.name || "Enter your name"} value={formData?.name} onChange={handleInputChange} className={`${styles.input} ${errors.name ? styles.errorPlaceholder : ""}`} />
              </div>
              <div className={styles.inputGroup}>
                <label>Email *</label> <span className={styles.error}>{errors.email}</span>
                <input type="email" name="email" placeholder={errors.email || "Enter your email address"} value={formData?.email} onChange={handleInputChange} className={`${styles.input} ${errors.email ? styles.errorPlaceholder : ""}`} />
              </div>
              
              <div className={styles.inputGroup}>
                <label>Phone *</label> <span className={styles.error}>{errors.countryCode || errors.phone}</span>
                <PhoneInput
                  country={"in"}
                  enableSearch
                  placeholder={errors.phone || "Enter phone number"}
                  value={`${formData?.countryCode || ""}${formData?.phone || ""}`}
                  inputClass={`${styles.input} ${styles.phoneInput} ${errors.phone ? styles.errorPlaceholder : ""}`}
                  buttonClass={styles.phoneButton}
                  inputProps={{
                    name: "phone",
                    required: true,
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

                    setErrors((prev) => ({
                      ...prev,
                      phone: "",
                      countryCode: "",
                    }));
                  }}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Broker Name *</label> <span className={styles.error}>{errors.brokerName}</span>
                <input type="text" name="brokerName" placeholder={errors.brokerName || "Enter broker name"} value={formData?.brokerName} onChange={handleInputChange} className={`${styles.input} ${errors.brokerName ? styles.errorPlaceholder : ""}`} />
              </div>

              {/* Trading Platform */}
              <div className={styles.radio}>
                <label>
                  Trading Platform *<span className={styles.error}>{errors.tradingPlatform}</span>
                </label>
                <div className={styles.flexcol}>
                  <div className={styles.flex}>
                    <input type="radio" id="MT5" name="tradingPlatform" value="MT5" checked={formData.tradingPlatform === "MT5"} onChange={handleInputChange} className={styles.radio} />
                    <label htmlFor="MT5">MT5</label>
                  </div>
                  <div className={styles.flex}>
                    <input type="radio" id="CTrader" name="tradingPlatform" value="CTrader" checked={formData.tradingPlatform === "CTrader"} onChange={handleInputChange} className={styles.radio} />
                    <label htmlFor="CTrader">CTrader</label>
                  </div>
                </div>
              </div>

              {/* Equity */}
              <div className={styles.radio}>
                <label>
                  Equity *<span className={styles.error}>{errors.equity}</span>
                </label>
                <div className={styles.flexcol}>
                  <div className={styles.flex}>
                    <input type="radio" id="Above5K" name="equity" value="Above 5K USD" checked={formData.equity === "Above 5K USD"} onChange={handleInputChange} className={styles.radio} />
                    <label htmlFor="Above5K">Above 5K USD</label>
                  </div>
                  <div className={styles.flex}>
                    <input type="radio" id="2to5K" name="equity" value="2K to 5K USD" checked={formData.equity === "2K to 5K USD"} onChange={handleInputChange} className={styles.radio} />
                    <label htmlFor="2to5K">2K to 5K USD</label>
                  </div>
                  <div className={styles.flex}>
                    <input type="radio" id="1to2K" name="equity" value="1K to 2K USD" checked={formData.equity === "1K to 2K USD"} onChange={handleInputChange} className={styles.radio} />
                    <label htmlFor="1to2K">1K to 2K USD</label>
                  </div>
                  <div className={styles.flex}>
                    <input type="radio" id="Below1K" name="equity" value="Below 1K USD" checked={formData.equity === "Below 1K USD"} onChange={handleInputChange} className={styles.radio} />
                    <label htmlFor="Below1K">Below 1K USD</label>
                  </div>
                </div>
              </div>

              <div className={styles.buttons}>
                <Commonarrowbutton Text="Cancel" Butttonvarient="lightoutlined" onClick={handleClose} />
                <Commonarrowbutton Text="Submit" Butttonvarient="lightoutlined" />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};
