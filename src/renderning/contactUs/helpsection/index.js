import React, { useState } from "react";
import styles from "./helpsection.module.scss";
import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
  User,
  Globe,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAppContext } from "@/context/AppContext";
import { fetchIpAddress } from "@/utils/common";
import { addInquiryForm } from "@/lib/inquiryApi";

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Singapore",
  "Australia",
  "Canada",
  "Germany",
  "France",
  "Switzerland",
  "Netherlands",
  "Saudi Arabia",
  "South Africa",
  "Nigeria",
  "Malaysia",
  "Indonesia",
  "Brazil",
  "Japan",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Argentina",
  "Armenia",
  "Austria",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Belgium",
  "Chile",
  "China",
  "Colombia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Egypt",
  "Finland",
  "Greece",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "Ireland",
  "Israel",
  "Italy",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Luxembourg",
  "Mauritius",
  "Mexico",
  "New Zealand",
  "Norway",
  "Oman",
  "Pakistan",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Spain",
  "Sweden",
  "Thailand",
  "Turkey",
  "Vietnam",
  "Other",
];

export default function Helpsection() {
  const { utilitySettings } = useAppContext();
  const rawPhone = utilitySettings?.phoneNo || "917046279434";
  const cleanPhone = rawPhone.replace(/[^0-9]/g, "");
  const displayPhone = rawPhone.startsWith("+") ? rawPhone : `+${rawPhone}`;
  const telegramLink = utilitySettings?.telegramLink || "https://t.me/algomaticbot";
  const officialEmail = utilitySettings?.email || "support@algomaticbot.com";

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "India",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const disposableDomains = [
    "soebing",
    "yopmail",
    "sharklasers",
    "guerrillamail",
    "getairmail",
    "grr",
    "guerrillamailblock",
    "pokemail",
    "spam4",
    "cazlq",
    "sloveniakm",
    "mybx",
    "memsg",
    "matra",
    "maildrop",
  ];

  const validate = () => {
    let isValid = true;
    let err = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!contactData.name.trim()) {
      err.name = "Full name is required";
      isValid = false;
    }

    if (!contactData.email.trim()) {
      err.email = "Email address is required";
      isValid = false;
    } else if (!emailRegex.test(contactData.email.trim())) {
      err.email = "Please enter a valid email address";
      isValid = false;
    } else {
      const parts = contactData.email.split("@");
      if (parts[1]) {
        const domain = parts[1].split(".")[0]?.toLowerCase();
        if (disposableDomains.includes(domain)) {
          err.email = "Temporary disposable emails are not permitted";
          isValid = false;
        }
      }
    }

    if (!contactData.phone.trim()) {
      err.phone = "Phone number is required";
      isValid = false;
    } else if (contactData.phone.replace(/[^0-9]/g, "").length < 7) {
      err.phone = "Please enter a valid phone number";
      isValid = false;
    }

    if (!contactData.message.trim()) {
      err.message = "Please write a brief message or requirement";
      isValid = false;
    }

    setErrors(err);
    return isValid;
  };

  const handleInputChange = (field, value) => {
    setContactData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // 1. Send to Slack Webhook for team alert
      const slackMessage = {
        text: `🚀 *New Contact Inquiry - Algomatic Web*\n\n` +
          `*Name:* ${contactData.name}\n` +
          `*Email:* ${contactData.email}\n` +
          `*Phone:* ${contactData.phone}\n` +
          `*Country:* ${contactData.country}\n` +
          `*Message:* ${contactData.message}\n` +
          `*Timestamp:* ${new Date().toLocaleString()}`,
      };

      await axios("https://hooks.slack.com/services/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", {
        method: "POST",
        data: JSON.stringify(slackMessage),
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      }).catch((err) => {
        console.warn("Slack notification error:", err);
      });

      // 2. Also register with inquiry backend if available
      try {
        const ip = await fetchIpAddress();
        await addInquiryForm({
          ipAddress: ip || "0.0.0.0",
          name: contactData.name,
          email: contactData.email,
          phone: contactData.phone,
        });
      } catch (backendErr) {
        console.warn("Backend inquiry sync fallback:", backendErr);
      }

      setIsSuccess(true);
      toast.success("Thank you! Your message has been received. Our team will contact you shortly.");
    } catch (err) {
      console.error("Submission failed:", err);
      toast.error("Something went wrong. Please reach out to us on WhatsApp directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setContactData({
      name: "",
      email: "",
      phone: "",
      country: "India",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section className={styles.helpSectionMain} id="contact-form">
      <div className="container-xl">
        <div className={styles.contentGrid}>
          {/* ─── LEFT COLUMN: INFO & DIRECT CHANNELS ─── */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <div className={styles.sectionBadge}>Direct Communication</div>

                <h3>
                  We're Here to <span>Empower Your Trading</span>
                </h3>

                <p className={styles.narrative}>
                  Whether you are an individual trader looking to automate strategies, need dedicated quant
                  bot development, or require enterprise brokerage infrastructure, our global desk is ready
                  to assist with high speed and precision.
                </p>
              </div>

              {/* Direct Contact Cards */}
              <div className={styles.contactCardsList}>
                <a
                  href={`https://wa.me/${cleanPhone}?text=Hi%20Algomatic%20Desk,%20I%20would%20like%20to%20connect.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactDetailCard}
                >
                  <div className={styles.cardIcon}>
                    <Phone size={20} />
                  </div>
                  <div className={styles.cardText}>
                    <span className={styles.cardLabel}>Direct Phone & WhatsApp</span>
                    <span className={styles.cardValue}>{displayPhone}</span>
                  </div>
                  <ArrowRight size={16} className={styles.cardLinkAction} />
                </a>

                <a href={`mailto:${officialEmail}`} className={styles.contactDetailCard}>
                  <div className={styles.cardIcon}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.cardText}>
                    <span className={styles.cardLabel}>Official Support Email</span>
                    <span className={styles.cardValue}>{officialEmail}</span>
                  </div>
                  <ArrowRight size={16} className={styles.cardLinkAction} />
                </a>

                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactDetailCard}
                >
                  <div className={styles.cardIcon}>
                    <MessageCircle size={20} />
                  </div>
                  <div className={styles.cardText}>
                    <span className={styles.cardLabel}>Telegram Community & Support</span>
                    <span className={styles.cardValue}>@algomaticbot</span>
                  </div>
                  <ArrowRight size={16} className={styles.cardLinkAction} />
                </a>

                <div className={`${styles.contactDetailCard} ${styles.staticCard}`}>
                  <div className={styles.cardIcon}>
                    <Clock size={20} />
                  </div>
                  <div className={styles.cardText}>
                    <span className={styles.cardLabel}>Trading Desk Hours</span>
                    <span className={styles.cardValue}>24/5 Live Market Coverage (Mon - Fri)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: CLEAN & SIMPLE CONTACT FORM ─── */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              {isSuccess ? (
                <div className={styles.successCard}>
                  <div className={styles.successIconWrapper}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3>Message Received!</h3>
                  <p>
                    Thank you for reaching out to Algomatic. Our team has received your inquiry and a
                    dedicated specialist will respond shortly.
                  </p>
                  <div className={styles.successActions}>
                    <a
                      href={`https://wa.me/${cleanPhone}?text=Hi%20Algomatic%20Desk,%20I%20just%20submitted%20an%20inquiry%20via%20your%20website.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.urgentWhatsAppBtn}
                    >
                      <MessageCircle size={16} />
                      <span>Chat Urgently on WhatsApp</span>
                    </a>
                    <button type="button" onClick={handleReset} className={styles.resetBtn}>
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className={styles.formHeader}>
                    <div className={styles.sectionBadge}>Inquiry Desk</div>
                    <h3>Send Us a Message</h3>
                    <p className={styles.narrative}>
                      Fill out the form below. Our quantitative specialists will review and get back to
                      you promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className={styles.formContent}>
                    {/* Input Fields */}
                    <div className={styles.inputsRow}>
                      <div className={styles.inputGroup}>
                        <label>
                          <span>
                            Full Name <span className={styles.req}>*</span>
                          </span>
                          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                        </label>
                        <div className={styles.inputWithIcon}>
                          <User size={16} className={styles.fieldIcon} />
                          <input
                            type="text"
                            placeholder="e.g. Alex Morgan"
                            value={contactData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className={errors.name ? styles.hasError : ""}
                          />
                        </div>
                      </div>

                      <div className={styles.inputGroup}>
                        <label>
                          <span>
                            Email Address <span className={styles.req}>*</span>
                          </span>
                          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                        </label>
                        <div className={styles.inputWithIcon}>
                          <Mail size={16} className={styles.fieldIcon} />
                          <input
                            type="email"
                            placeholder="e.g. alex@trader.com"
                            value={contactData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className={errors.email ? styles.hasError : ""}
                          />
                        </div>
                      </div>

                      <div className={styles.inputGroup}>
                        <label>
                          <span>
                            Phone / WhatsApp <span className={styles.req}>*</span>
                          </span>
                          {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                        </label>
                        <div className={styles.inputWithIcon}>
                          <Phone size={16} className={styles.fieldIcon} />
                          <input
                            type="text"
                            placeholder="e.g. +1 555 123 4567"
                            value={contactData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className={errors.phone ? styles.hasError : ""}
                          />
                        </div>
                      </div>

                      <div className={styles.inputGroup}>
                        <label>
                          <span>Country</span>
                        </label>
                        <div className={styles.inputWithIcon}>
                          <Globe size={16} className={styles.fieldIcon} />
                          <select
                            value={contactData.country}
                            onChange={(e) => handleInputChange("country", e.target.value)}
                          >
                            {COUNTRIES.map((country, idx) => (
                              <option key={idx} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className={`${styles.inputGroup} ${styles.messageGroup}`}>
                      <label>
                        <span>
                          Message / Requirements <span className={styles.req}>*</span>
                        </span>
                        {errors.message && (
                          <span className={styles.errorText}>{errors.message}</span>
                        )}
                      </label>
                      <textarea
                        placeholder="Tell us about your trading platform, strategy idea, or specific questions..."
                        value={contactData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className={errors.message ? styles.hasError : ""}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className={styles.formFooter}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={styles.submitBtn}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Inquiry</span>
                            <Send size={15} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
