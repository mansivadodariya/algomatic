import React from "react";
import styles from "./affiliatetable.module.scss";
import Paginationicon from "../../../../public/assets/icons/paginationicon";

export default function Affiliatetable() {
  return (
    <>
      <div className={styles.affiliatetablemain}>
        <div className="container-xl">
          <div className={styles.affiliatetablelayout}>
            <div className={styles.affiliatetabletitle}>
              <h3>Affiliate table</h3>
            </div>
            <div className={styles.affiliatetablescroll}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Customer Name</th>
                    <th>Customer Email</th>
                    <th>Customer Status</th>
                    <th>Customer Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className={styles.tableid}>1</span>
                    </td>
                    <td>
                      <span className={styles.tablecustomername}>John Doe</span>
                    </td>
                    <td>john.doe@example.com</td>
                    <td>Active</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={styles.tableid}>2</span>
                    </td>
                    <td>
                      <span className={styles.tablecustomername}>John Doe</span>
                    </td>
                    <td>john.doe@example.com</td>
                    <td>Active</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={styles.tableid}>3</span>
                    </td>
                    <td>
                      <span className={styles.tablecustomername}>John Doe</span>
                    </td>
                    <td>john.doe@example.com</td>
                    <td>Active</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={styles.tableid}>4</span>
                    </td>
                    <td>
                      <span className={styles.tablecustomername}>John Doe</span>
                    </td>
                    <td>john.doe@example.com</td>
                    <td>Active</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <td>
                      <span className={styles.tableid}>5</span>
                    </td>
                    <td>
                      <span className={styles.tablecustomername}>John Doe</span>
                    </td>
                    <td>john.doe@example.com</td>
                    <td>Active</td>
                    <td>View</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.tablepaginationmain}>
                <div className={styles.tablepagination}>
                    <div className={`${styles.paginationleft} ${styles.disabled}`}>
                      <Paginationicon />
                    </div>
                    <div className={styles.paginationcenter}>
                      <div className={`${styles.paginationcenteritem} ${styles.active}`}>
                        <span>1</span>
                      </div>
                      <div className={styles.paginationcenteritem}>
                        <span>2</span>
                      </div>
                    </div>
                    <div className={styles.paginationright}>
                      <Paginationicon />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
