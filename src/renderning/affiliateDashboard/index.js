import React from "react";
import Affiliatetabs from "./affiliatetabs";
import Affiliatetable from "./affiliatetable";
import Modal from "@/components/modal";
import styles from "./affiliateDashboard.module.scss";

export default function AffiliateDashboard() {
  return (
    <>
      <Affiliatetabs />
      <Affiliatetable />
      <Modal isOpen={false} onClose={() => {}} size="large" modalclass="large">
        <div className={styles.modalheader}>
          <h4>Add Affiliate</h4>
        </div>
        <div className={styles.modalbody}>
          <form>
            <div className={styles.formgroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter name" />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter email" />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Modal>
    </>
  );
}
//
