import React, { useState } from "react";
import styles from "./withdrawRequestForm.module.scss";
import toast from "react-hot-toast";
import { sendWithdrawRequest } from "@/lib/userApi";

export default function WithdrawRequestForm() {
  const [formData, setFormData] = useState({
    withdrawAmount: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.withdrawAmount === ""){
      toast.error("Invalid amount.");
      return;
    }
    
    sendWithdrawRequest(formData)
    .then((res) => {
      console.log(res,'------------------------- sendWithdrawRequest');
      // toast.success(res.message /* || "Withdraw request sent successfully." */);
      if(res?.data?.success){
        toast.success(res.data.message);
      }
    })
    .catch((err) => {
      console.log(err,'------------------------- sendWithdrawRequest');
      toast.error(err.message || "Failed to send withdraw request.");
    });
  };

  return (
    <div className={styles.withdrawformmain}>
      <div className="container-xl">
        <div className={styles.withdrawformlayout}>
          <div className={styles.withdrawformtitle}>
            <h3>Withdraw Request</h3>
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
