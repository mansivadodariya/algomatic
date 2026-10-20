import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { editUser } from "@/lib/strategyApi";
import {
  SquarePen,
  ChevronLeft,
  Copy,
  ClipboardCheck,
  Share2,
  Info,
  Eye,
  EyeOff,
} from "lucide-react";

export default function ProfileView({ styles, user, setUser }) {
  const [isProfileEdit, setIsProfileEdit] = useState(false);
  const [profileSaving, setProfileSaving] = useState(false);
  const [copied, setCopied] = useState(false);

  // Profile editable fields
  const [profileForm, setProfileForm] = useState({
    name: "",
    countryCode: "",
    phone: "",
  });

  // Password fields
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });

  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  // Sync profileForm when user data changes or edit mode opened
  useEffect(() => {
    if (user) {
      setProfileForm({
        name: user?.name || "",
        countryCode: user?.countryCode || "",
        phone: user?.phone || "",
      });
    }
  }, [user, isProfileEdit]);

  const handleCopyAffiliate = async () => {
    if (user?.myAffiliateCode) {
      const link = `https://algomaticbot.com?affiliateCode=${user.myAffiliateCode}`;
      await navigator.clipboard.writeText(link);
      setCopied(true);
      toast.success("Affiliate link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareAffiliate = () => {
    const code = user?.myAffiliateCode;
    const signupUrl = `https://algomaticbot.com?affiliateCode=${encodeURIComponent(
      code || ""
    )}`;
    const shareText = `Join AlgoMatic using my affiliate code!\n${signupUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSaveProfile = async (e) => {
    if (e) e.preventDefault();

    if (
      passwordForm.password &&
      passwordForm.password !== passwordForm.confirmPassword
    ) {
      toast.error("New password and confirm password do not match");
      return;
    }

    setProfileSaving(true);
    try {
      await editUser(user._id, profileForm, passwordForm);
      const updatedUser = {
        ...user,
        name: profileForm.name,
        countryCode: profileForm.countryCode,
        phone: profileForm.phone,
      };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setIsProfileEdit(false);
      setPasswordForm({
        currentPassword: "",
        password: "",
        confirmPassword: "",
      });
      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Failed to update profile");
    } finally {
      setProfileSaving(false);
    }
  };

  return (
    <div className={styles.profileTabWrapper}>
      <div className={styles.profileCard}>
        <div className={styles.profileCardHeader}>
          <div className={styles.headerTitleGroup}>
            <h2 className={styles.sectionTitle}>
              {isProfileEdit ? "Edit Profile" : "Profile Details"}
            </h2>
            <p className={styles.sectionSubtitle}>
              {isProfileEdit
                ? "Update your personal credentials and security password."
                : "Your registered account details and affiliate referral link."}
            </p>
          </div>

          {isProfileEdit ? (
            <button
              className={styles.backBtn}
              onClick={() => setIsProfileEdit(false)}
            >
              <ChevronLeft size={16} />
              <span>Back to View</span>
            </button>
          ) : (
            <button
              className={styles.editProfileBtn}
              onClick={() => setIsProfileEdit(true)}
            >
              <SquarePen size={15} />
              <span>Edit Profile</span>
            </button>
          )}
        </div>

        {!isProfileEdit ? (
          /* PROFILE VIEW MODE */
          <div className={styles.profileInfoGrid}>
            <div className={styles.profileInfoTile}>
              <span className={styles.tileLabel}>Full Name</span>
              <p className={styles.tileValue}>{user?.name || "Not provided"}</p>
            </div>

            <div className={styles.profileInfoTile}>
              <span className={styles.tileLabel}>Email Address</span>
              <p className={styles.tileValue}>{user?.email || "Not provided"}</p>
            </div>

            <div className={styles.profileInfoTile}>
              <span className={styles.tileLabel}>Country Code</span>
              <p className={styles.tileValue}>{user?.countryCode || "-"}</p>
            </div>

            <div className={styles.profileInfoTile}>
              <span className={styles.tileLabel}>Phone Number</span>
              <p className={styles.tileValue}>{user?.phone || "-"}</p>
            </div>

            {/* Affiliate Code Showcase Box */}
            <div className={styles.affiliateTileWide}>
              <span className={styles.tileLabel}>
                My Affiliate Code & Referral Link
              </span>
              <div className={styles.affiliateRow}>
                <span className={styles.affiliateCodeBadge}>
                  {user?.myAffiliateCode || "Not Assigned"}
                </span>
                <div className={styles.affiliateActions}>
                  <button
                    className={`${styles.affiliateActionBtn} ${styles.copyBtn}`}
                    onClick={handleCopyAffiliate}
                    title="Copy Referral Link"
                  >
                    {copied ? (
                      <>
                        <ClipboardCheck size={16} color="#16a34a" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                  <button
                    className={`${styles.affiliateActionBtn} ${styles.shareBtn}`}
                    onClick={handleShareAffiliate}
                    title="Share via WhatsApp"
                  >
                    <Share2 size={16} />
                    <span>Share WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* PROFILE EDIT MODE */
          <form className={styles.editForm} onSubmit={handleSaveProfile}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={(e) =>
                    setProfileForm({
                      ...profileForm,
                      name: e.target.value,
                    })
                  }
                  className={styles.formInput}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Email Address</label>
                <div className={styles.disabledWrapper}>
                  <input
                    type="email"
                    value={user?.email || ""}
                    className={styles.formInput}
                    disabled
                  />
                  <span
                    className={styles.disabledNote}
                    title="Email address cannot be changed"
                  >
                    <Info size={14} /> Locked
                  </span>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Country Code</label>
                <input
                  type="text"
                  value={profileForm.countryCode}
                  onChange={(e) =>
                    setProfileForm({
                      ...profileForm,
                      countryCode: e.target.value,
                    })
                  }
                  className={styles.formInput}
                  placeholder="+1, +91, etc."
                />
              </div>

              <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={profileForm.phone}
                  onChange={(e) =>
                    setProfileForm({
                      ...profileForm,
                      phone: e.target.value,
                    })
                  }
                  className={styles.formInput}
                  placeholder="Enter your phone number"
                />
              </div>

              <div
                className={styles.formGroup}
                style={{ gridColumn: "1 / -1" }}
              >
                <label>My Affiliate Code</label>
                <div className={styles.disabledWrapper}>
                  <input
                    type="text"
                    value={user?.myAffiliateCode || ""}
                    className={styles.formInput}
                    disabled
                  />
                  <span
                    className={styles.disabledNote}
                    title="Affiliate code is permanent"
                  >
                    <Info size={14} /> System Code
                  </span>
                </div>
              </div>
            </div>

            {/* Change Password Section */}
            <div className={styles.passwordHeading}>
              Change Password (Optional)
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Current Password</label>
                <div className={styles.passwordInputBox}>
                  <input
                    type={showCurrentPass ? "text" : "password"}
                    value={passwordForm.currentPassword}
                    onChange={(e) =>
                      setPasswordForm({
                        ...passwordForm,
                        currentPassword: e.target.value,
                      })
                    }
                    className={styles.formInput}
                    placeholder="Enter current password"
                  />
                  <button
                    type="button"
                    className={styles.eyeToggleBtn}
                    onClick={() => setShowCurrentPass(!showCurrentPass)}
                  >
                    {showCurrentPass ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>New Password</label>
                <div className={styles.passwordInputBox}>
                  <input
                    type={showNewPass ? "text" : "password"}
                    value={passwordForm.password}
                    onChange={(e) =>
                      setPasswordForm({
                        ...passwordForm,
                        password: e.target.value,
                      })
                    }
                    className={styles.formInput}
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    className={styles.eyeToggleBtn}
                    onClick={() => setShowNewPass(!showNewPass)}
                  >
                    {showNewPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div
                className={styles.formGroup}
                style={{ gridColumn: "1 / -1" }}
              >
                <label>Confirm New Password</label>
                <div className={styles.passwordInputBox}>
                  <input
                    type={showConfirmPass ? "text" : "password"}
                    value={passwordForm.confirmPassword}
                    onChange={(e) =>
                      setPasswordForm({
                        ...passwordForm,
                        confirmPassword: e.target.value,
                      })
                    }
                    className={styles.formInput}
                    placeholder="Confirm new password"
                  />
                  <button
                    type="button"
                    className={styles.eyeToggleBtn}
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                  >
                    {showConfirmPass ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Form Buttons */}
            <div className={styles.formActionRow}>
              <button
                type="button"
                className={styles.cancelEditBtn}
                onClick={() => setIsProfileEdit(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={styles.saveChangesBtn}
                disabled={profileSaving}
              >
                {profileSaving ? "Saving Changes..." : "Save Changes"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
