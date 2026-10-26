import React, { useState, useRef, useEffect } from "react";
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
  ChevronDown,
  Search,
  Check,
} from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAppContext } from "@/context/AppContext";
import { submitContactUs } from "@/lib/contactApi";

const COUNTRIES = [
  "United Arab Emirates",
  "India",
  "United States",
  "United Kingdom",
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

export const COUNTRY_DIAL_CODES = {
  "India": "+91",
  "United States": "+1",
  "United Kingdom": "+44",
  "United Arab Emirates": "+971",
  "Singapore": "+65",
  "Australia": "+61",
  "Canada": "+1",
  "Germany": "+49",
  "France": "+33",
  "Switzerland": "+41",
  "Netherlands": "+31",
  "Saudi Arabia": "+966",
  "South Africa": "+27",
  "Nigeria": "+234",
  "Malaysia": "+60",
  "Indonesia": "+62",
  "Brazil": "+55",
  "Japan": "+81",
  "Afghanistan": "+93",
  "Albania": "+355",
  "Algeria": "+213",
  "Argentina": "+54",
  "Armenia": "+374",
  "Austria": "+43",
  "Bahamas": "+1",
  "Bahrain": "+973",
  "Bangladesh": "+880",
  "Belgium": "+32",
  "Chile": "+56",
  "China": "+86",
  "Colombia": "+57",
  "Cyprus": "+357",
  "Czech Republic": "+420",
  "Denmark": "+45",
  "Egypt": "+20",
  "Finland": "+358",
  "Greece": "+30",
  "Hong Kong": "+852",
  "Hungary": "+36",
  "Iceland": "+354",
  "Ireland": "+353",
  "Israel": "+972",
  "Italy": "+39",
  "Jordan": "+962",
  "Kazakhstan": "+7",
  "Kenya": "+254",
  "Kuwait": "+965",
  "Luxembourg": "+352",
  "Mauritius": "+230",
  "Mexico": "+52",
  "New Zealand": "+64",
  "Norway": "+47",
  "Oman": "+968",
  "Pakistan": "+92",
  "Philippines": "+63",
  "Poland": "+48",
  "Portugal": "+351",
  "Qatar": "+974",
  "Romania": "+40",
  "Spain": "+34",
  "Sweden": "+46",
  "Thailand": "+66",
  "Turkey": "+90",
  "Vietnam": "+84",
  "Other": "+",
};

export const COUNTRY_ISO_MAP = {
  "India": "in",
  "United States": "us",
  "United Kingdom": "gb",
  "United Arab Emirates": "ae",
  "Singapore": "sg",
  "Australia": "au",
  "Canada": "ca",
  "Germany": "de",
  "France": "fr",
  "Switzerland": "ch",
  "Netherlands": "nl",
  "Saudi Arabia": "sa",
  "South Africa": "za",
  "Nigeria": "ng",
  "Malaysia": "my",
  "Indonesia": "id",
  "Brazil": "br",
  "Japan": "jp",
  "Afghanistan": "af",
  "Albania": "al",
  "Algeria": "dz",
  "Argentina": "ar",
  "Armenia": "am",
  "Austria": "at",
  "Bahamas": "bs",
  "Bahrain": "bh",
  "Bangladesh": "bd",
  "Belgium": "be",
  "Chile": "cl",
  "China": "cn",
  "Colombia": "co",
  "Cyprus": "cy",
  "Czech Republic": "cz",
  "Denmark": "dk",
  "Egypt": "eg",
  "Finland": "fi",
  "Greece": "gr",
  "Hong Kong": "hk",
  "Hungary": "hu",
  "Iceland": "is",
  "Ireland": "ie",
  "Israel": "il",
  "Italy": "it",
  "Jordan": "jo",
  "Kazakhstan": "kz",
  "Kenya": "ke",
  "Kuwait": "kw",
  "Luxembourg": "lu",
  "Mauritius": "mu",
  "Mexico": "mx",
  "New Zealand": "nz",
  "Norway": "no",
  "Oman": "om",
  "Pakistan": "pk",
  "Philippines": "ph",
  "Poland": "pl",
  "Portugal": "pt",
  "Qatar": "qa",
  "Romania": "ro",
  "Spain": "es",
  "Sweden": "se",
  "Thailand": "th",
  "Turkey": "tr",
  "Vietnam": "vn",
  "Other": "",
};

const extractSubscriberNumber = (phoneStr, dialCode) => {
  if (!phoneStr) return "";
  let clean = phoneStr.trim();
  if (dialCode && clean.startsWith(dialCode)) {
    return clean.slice(dialCode.length).trim();
  }
  if (clean.startsWith("+")) {
    return clean.replace(/^\+\d+[\s\-]*/, "").trim();
  }
  return clean;
};

export default function Helpsection() {
  const { utilitySettings } = useAppContext();
  const rawPhone = utilitySettings?.phoneNo || "917046279434";
  const cleanPhone = rawPhone.replace(/[^0-9]/g, "");
  const displayPhone = rawPhone.startsWith("+") ? rawPhone : `+${rawPhone}`;
  const telegramLink = utilitySettings?.telegramLink || "https://t.me/algomaticbot";
  const officialEmail = utilitySettings?.email || "support@algomaticbot.com";

  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "+971 ",
    country: "United Arab Emirates",
    message: "",
  });

  const currentIso = COUNTRY_ISO_MAP[contactData.country] || "ae";
  const currentDialCode = COUNTRY_DIAL_CODES[contactData.country] || "+971";

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target)
      ) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCountries = COUNTRIES.filter((c) => {
    const q = countrySearch.toLowerCase().trim();
    if (!q) return true;
    const nameMatch = c.toLowerCase().includes(q);
    const dialMatch = (COUNTRY_DIAL_CODES[c] || "").includes(q);
    return nameMatch || dialMatch;
  });

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

    if (!contactData.fullName?.trim()) {
      err.fullName = "Full name is required";
      isValid = false;
    }

    if (!contactData.email?.trim()) {
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

    const currentDialCode = COUNTRY_DIAL_CODES[contactData.country] || "";
    const subscriberNum = extractSubscriberNumber(contactData.phone, currentDialCode).replace(/[^0-9]/g, "");

    if (!subscriberNum) {
      err.phone = "Phone number is required";
      isValid = false;
    } else if (subscriberNum.length < 6) {
      err.phone = "Please enter a valid phone number";
      isValid = false;
    }

    if (!contactData.message?.trim()) {
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

  const handleCountryChange = (newCountry) => {
    const oldDialCode = COUNTRY_DIAL_CODES[contactData.country] || "";
    const newDialCode = COUNTRY_DIAL_CODES[newCountry] || "+";

    const subscriberNumber = extractSubscriberNumber(contactData.phone, oldDialCode);
    const newPhone = subscriberNumber ? `${newDialCode} ${subscriberNumber}` : `${newDialCode} `;

    setContactData((prev) => ({
      ...prev,
      country: newCountry,
      phone: newPhone,
    }));

    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handlePhoneChange = (e) => {
    const inputVal = e.target.value;
    const dialCode = COUNTRY_DIAL_CODES[contactData.country] || "+971";

    if (!inputVal || inputVal.trim() === "" || inputVal.trim() === "+") {
      setContactData((prev) => ({ ...prev, phone: `${dialCode} ` }));
      return;
    }

    if (!inputVal.startsWith("+")) {
      setContactData((prev) => ({ ...prev, phone: `${dialCode} ${inputVal.trimStart()}` }));
      if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
      return;
    }

    if (dialCode && !inputVal.startsWith(dialCode) && inputVal.startsWith("+")) {
      const remainingDigits = inputVal.replace(/^\+\d*[\s\-]*/, "");
      setContactData((prev) => ({
        ...prev,
        phone: remainingDigits ? `${dialCode} ${remainingDigits}` : `${dialCode} `,
      }));
      return;
    }

    setContactData((prev) => ({ ...prev, phone: inputVal }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const currentDialCode = COUNTRY_DIAL_CODES[contactData.country] || "";
      let finalPhone = (contactData.phone || "").trim();
      if (currentDialCode && !finalPhone.startsWith("+")) {
        finalPhone = `${currentDialCode} ${finalPhone}`;
      }

      const payload = {
        fullName: contactData.fullName.trim(),
        email: contactData.email.trim(),
        phone: finalPhone,
        country: contactData.country.trim(),
        message: contactData.message.trim(),
      };

      // 1. Submit to Contact Us API
      const response = await submitContactUs(payload);

      // 2. Fire Slack notification in background (non-blocking)
      const slackMessage = {
        text: `🚀 *New Contact Inquiry - Algomatic Web*\n\n` +
          `*Name:* ${payload.fullName}\n` +
          `*Email:* ${payload.email}\n` +
          `*Phone:* ${payload.phone}\n` +
          `*Country:* ${payload.country}\n` +
          `*Message:* ${payload.message}\n` +
          `*Timestamp:* ${new Date().toLocaleString()}`,
      };

      axios("https://hooks.slack.com/services/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", {
        method: "POST",
        data: JSON.stringify(slackMessage),
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      }).catch((slackErr) => {
        console.warn("Slack notification error:", slackErr);
      });

      setIsSuccess(true);
      toast.success(response?.message || "Contact form submitted successfully.");
    } catch (err) {
      console.error("Submission failed:", err);
      if (!err?.response?.data?.message) {
        toast.error(err?.message || "Something went wrong. Please reach out to us on WhatsApp directly.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    const defaultDialCode = COUNTRY_DIAL_CODES["United Arab Emirates"] || "+971";
    setContactData({
      fullName: "",
      email: "",
      phone: `${defaultDialCode} `,
      country: "United Arab Emirates",
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
                          {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
                        </label>
                        <div className={styles.inputWithIcon}>
                          <User size={16} className={styles.fieldIcon} />
                          <input
                            type="text"
                            placeholder="e.g. Jane Doe"
                            value={contactData.fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            className={errors.fullName ? styles.hasError : ""}
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
                          <div className={styles.flagBadge}>
                            {currentIso ? (
                              <img
                                src={`https://flagcdn.com/w40/${currentIso}.png`}
                                srcSet={`https://flagcdn.com/w80/${currentIso}.png 2x`}
                                width="22"
                                height="15"
                                alt={contactData.country}
                                className={styles.flagImg}
                              />
                            ) : (
                              <Phone size={16} className={styles.fieldIcon} />
                            )}
                          </div>
                          <input
                            type="tel"
                            placeholder={`e.g. ${currentDialCode} 99545 25365`}
                            value={contactData.phone}
                            onChange={handlePhoneChange}
                            className={errors.phone ? styles.hasError : ""}
                          />
                        </div>
                      </div>

                      <div className={styles.inputGroup}>
                        <label>
                          <span>Country</span>
                        </label>
                        <div className={styles.customCountrySelect} ref={countryDropdownRef}>
                          <div
                            className={`${styles.selectTrigger} ${isCountryOpen ? styles.open : ""}`}
                            onClick={() => {
                              setIsCountryOpen(!isCountryOpen);
                              setCountrySearch("");
                            }}
                          >
                            <div className={styles.selectedCountryLeft}>
                              {currentIso ? (
                                <img
                                  src={`https://flagcdn.com/w40/${currentIso}.png`}
                                  srcSet={`https://flagcdn.com/w80/${currentIso}.png 2x`}
                                  width="22"
                                  height="15"
                                  alt={contactData.country}
                                  className={styles.flagImg}
                                />
                              ) : (
                                <Globe size={16} className={styles.fieldIcon} />
                              )}
                              <span className={styles.countryNameText}>{contactData.country}</span>
                            </div>
                            <div className={styles.triggerRight}>
                              <span className={styles.dialBadge}>{currentDialCode}</span>
                              <ChevronDown
                                size={16}
                                className={`${styles.chevronIcon} ${isCountryOpen ? styles.rotateChevron : ""}`}
                              />
                            </div>
                          </div>

                          {isCountryOpen && (
                            <div className={styles.countryDropdownMenu}>
                              <div className={styles.searchWrap}>
                                <Search size={14} className={styles.searchIcon} />
                                <input
                                  type="text"
                                  placeholder="Search country or code..."
                                  value={countrySearch}
                                  onChange={(e) => setCountrySearch(e.target.value)}
                                  onClick={(e) => e.stopPropagation()}
                                  autoFocus
                                />
                              </div>

                              <div className={styles.countryListScroll}>
                                {filteredCountries.length > 0 ? (
                                  filteredCountries.map((c, idx) => {
                                    const iso = COUNTRY_ISO_MAP[c];
                                    const dial = COUNTRY_DIAL_CODES[c];
                                    const isSelected = contactData.country === c;

                                    return (
                                      <div
                                        key={idx}
                                        className={`${styles.countryItem} ${isSelected ? styles.selectedItem : ""}`}
                                        onClick={() => {
                                          handleCountryChange(c);
                                          setIsCountryOpen(false);
                                          setCountrySearch("");
                                        }}
                                      >
                                        <div className={styles.countryItemLeft}>
                                          {iso ? (
                                            <img
                                              src={`https://flagcdn.com/w40/${iso}.png`}
                                              srcSet={`https://flagcdn.com/w80/${iso}.png 2x`}
                                              width="20"
                                              height="14"
                                              alt={c}
                                              className={styles.flagImg}
                                            />
                                          ) : (
                                            <Globe size={14} className={styles.itemGlobe} />
                                          )}
                                          <span className={styles.countryItemName}>{c}</span>
                                        </div>

                                        <div className={styles.countryItemRight}>
                                          {dial && <span className={styles.countryDialCode}>{dial}</span>}
                                          {isSelected && <Check size={14} className={styles.checkIcon} />}
                                        </div>
                                      </div>
                                    );
                                  })
                                ) : (
                                  <div className={styles.noResults}>No countries found</div>
                                )}
                              </div>
                            </div>
                          )}
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
