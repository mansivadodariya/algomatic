import React, { useEffect, useState } from "react";
import StrategiesCard from "../strategiesCard";
import styles from "./strategiesCardList.module.scss";
import { getCategoryWithStrategies, getStrategies } from "@/lib/strategyApi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/router";

export default function StrategiesCardList() {
  const [strategyCard, setStrategyCard] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 10;
  const router = useRouter();

  const slugify = (str = "") =>
    str
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  useEffect(() => {
    async function fetchStrategies() {
      const data = await getCategoryWithStrategies(page, limit);
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

  useEffect(() => {
    if (!strategyCard || strategyCard.length === 0) return;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (!hash) return;
    const targetId = decodeURIComponent(hash.replace(/^#/, "").toLowerCase());
    if (!targetId) return;
    const scrollToTarget = () => {
      const el = document.getElementById(targetId);
      if (el) {
        const headerOffset = 88;
        const elementTop = el.getBoundingClientRect().top + window.scrollY;
        const offsetTop = Math.max(elementTop - headerOffset, 0);
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    };
    const t = setTimeout(scrollToTarget, 100);
    return () => clearTimeout(t);
  }, [strategyCard, router.asPath]);

  return (
    <>
      <div className="container-xl">
        <div className={styles.strategiesCardList}>
          {strategyCard.length > 0 &&
            strategyCard?.map((item, i) => {
              return (
                <div
                  className={styles.strategiesCategoryTitle}
                  id={slugify(item.title)}
                  key={i}
                >
                  <h1>{item.title}</h1>
                  {item.strategies.length > 0 && (
                    <div className={styles.grid}>
                      {item.strategies?.map((item, i) => (
                        <StrategiesCard key={i} item={item} index={i} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

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
    </>
  );
}
