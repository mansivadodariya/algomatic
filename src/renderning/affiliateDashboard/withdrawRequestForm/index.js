import React, { useState } from "react";
import styles from "./withdrawRequestForm.module.scss";
import toast from "react-hot-toast";
import { sendWithdrawRequest } from "@/lib/userApi";
import { useAppContext } from "@/context/AppContext";
import { ClipboardCheck, Copy, Share2 } from "lucide-react";

export default function WithdrawRequestForm() {
  const [formData, setFormData] = useState({
    withdrawAmount: "",
  });

  const [copied, setCopied] = useState(false);
  const { user } = useAppContext();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.withdrawAmount === "") {
      toast.error("Invalid amount.");
      return;
    }

    sendWithdrawRequest(formData)
      .then((res) => {
        if (res?.data?.success) {
          toast.success(res.data.message);
        }
        setFormData({ withdrawAmount: "" });
      })
      .catch((err) => {
        toast.error(err.message || "Failed to send withdraw request.");
        setFormData({ withdrawAmount: "" });
      });
  };

  const handleCopy = async () => {
    if (user?.myAffiliateCode) {
      await navigator.clipboard.writeText(`https://algomaticbot.com?affiliateCode=${user.myAffiliateCode}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = () => {
    const code = user?.myAffiliateCode;
    const signupUrl = `https://algomaticbot.com?affiliateCode=${encodeURIComponent(code)}`;
    const shareText = `Join AlgoMatic using my affiliate code!\n${signupUrl}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className={styles.withdrawformmain}>
      <div className="container-xl">
        <div className={styles.withdrawformlayout}>
          <div className={styles.withdrawformtitle}>
            <h3>Withdraw Request</h3>
            <div className={styles.affiliateCoderel}>
              Affiliate Code
              <div className={styles.copyIcon} title="Copy" onClick={handleCopy}>
                {copied ? <ClipboardCheck /> : <Copy />}
              </div>
              <div className={styles.copyIcon} title="Share" onClick={handleShare}>
                <Share2 />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.withdrawform}>
            <div className={styles.formgroup}>
              <label htmlFor="amount">Amount</label>
              <input type="number" id="amount" placeholder="Enter amount" onChange={handleFormChange} name="withdrawAmount" value={formData.withdrawAmount} />
            </div>

            <div className={styles.formactions}>
              <button type="submit" className={styles.submitbtn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
