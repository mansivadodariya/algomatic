import React, { useEffect, useState } from "react";
import StrategiesCard from "../strategiesCard";
import styles from "./strategiesCardList.module.scss";
import { getStrategies } from "@/lib/strategyApi";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StrategiesCardList() {
  const [strategyCard, setStrategyCard] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 10;

  useEffect(() => {
    async function fetchStrategies() {
      const data = await getStrategies(page, limit);
      setStrategyCard(data?.payload?.data || []);
      setTotalCount(data?.payload?.totalRecords || 0);
    }
    fetchStrategies();
  }, [page]);

  const totalPages = Math.ceil(totalCount / limit);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  return (
    <div className="container">
      <div className={styles.strategiesCardList}>
        <div className={styles.grid}>
          {strategyCard.length > 0 ? (
            strategyCard.map((item, i) => (
              <StrategiesCard key={i} item={item} index={i} />
            ))
          ) : (
            <p className={styles.noData}>No Data Found</p>
          )}
        </div>

        {strategyCard.length > 0 && (
          <div className={styles.paginationBtn}>
            <button
              className={styles.btn}
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              <ChevronLeft className={styles.pagination_icon} />
            </button>

            <span className={styles.currentPage}>
              Page {page} of {totalPages}
            </span>

            <button
              className={styles.btn}
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              <ChevronRight className={styles.pagination_icon} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
