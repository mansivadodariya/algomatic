import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "./brokerListing.module.scss";
import BrokerCard from "@/components/brokerCard";
import {
  getAllBrokers,
  getBrokerCategories,
} from "@/lib/brokerApi";
import {
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Landmark,
  ArrowUpDown,
  RotateCcw,
} from "lucide-react";

export default function BrokerListing() {
  const [brokers, setBrokers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters & Pagination State
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categoriesList, setCategoriesList] = useState(["all"]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  // Fetch unique categories directly from API on mount
  useEffect(() => {
    async function loadCategories() {
      try {
        const cats = await getBrokerCategories();
        if (Array.isArray(cats) && cats.length > 0) {
          setCategoriesList(["all", ...cats]);
        }
      } catch (err) {
        console.warn("Could not load categories from API:", err);
      }
    }
    loadCategories();
  }, []);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1);
    }, 350);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch Brokers from API
  const fetchBrokersData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllBrokers({
        page: currentPage,
        limit: 9,
        search: debouncedSearch,
        category: selectedCategory !== "all" ? selectedCategory : undefined,
        is_active: true,
        sortBy,
        sortOrder,
      });

      const list = res?.payload?.data || [];
      if (Array.isArray(list) && list.length > 0) {
        setBrokers(list);
        setTotalRecords(res?.payload?.totalRecords ?? list.length);
        setTotalPages(res?.payload?.totalPages ?? 1);

        // Include any categories returned in the data
        setCategoriesList((prev) => {
          const catSet = new Set(prev);
          list.forEach((b) => {
            if (b.category && b.category.trim()) {
              catSet.add(b.category.trim());
            }
          });
          return Array.from(catSet);
        });
      } else {
        setBrokers([]);
        setTotalRecords(0);
        setTotalPages(1);
      }
    } catch (err) {
      console.warn("Error fetching brokers from API:", err);
      setBrokers([]);
      setTotalRecords(0);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  }, [currentPage, debouncedSearch, selectedCategory, sortBy, sortOrder]);

  useEffect(() => {
    fetchBrokersData();
  }, [fetchBrokersData]);

  const handleResetFilters = () => {
    setSearch("");
    setDebouncedSearch("");
    setSelectedCategory("all");
    setSortBy("createdAt");
    setSortOrder("desc");
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    const val = e.target.value;
    if (val === "newest") {
      setSortBy("createdAt");
      setSortOrder("desc");
    } else if (val === "nameAsc") {
      setSortBy("name");
      setSortOrder("asc");
    } else if (val === "nameDesc") {
      setSortBy("name");
      setSortOrder("desc");
    }
    setCurrentPage(1);
  };

  const currentSortVal =
    sortBy === "name" && sortOrder === "asc"
      ? "nameAsc"
      : sortBy === "name" && sortOrder === "desc"
      ? "nameDesc"
      : "newest";

  const handleImageError = (id) => {
    setBrokenImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className={styles.brokerListingSection} id="brokers-directory">
      <div className="container-xl">
        {/* Controls Bar */}
        <div className={styles.controlsBar}>
          <div className={styles.topRow}>
            {/* Search Input */}
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={18} />
              <input
                type="text"
                placeholder="Search brokers by name, asset or feature..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  className={styles.clearBtn}
                  onClick={() => setSearch("")}
                  title="Clear search"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className={styles.sortWrapper}>
              <span className={styles.sortLabel}>
                <ArrowUpDown size={14} /> Sort By:
              </span>
              <select
                className={styles.sortSelect}
                value={currentSortVal}
                onChange={handleSortChange}
              >
                <option value="newest">Newest Added</option>
                <option value="nameAsc">Name (A to Z)</option>
                <option value="nameDesc">Name (Z to A)</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className={styles.categoryPillsRow}>
            {categoriesList.map((cat, idx) => (
              <button
                key={idx}
                className={`${styles.categoryPill} ${
                  selectedCategory === cat ? styles.activePill : ""
                }`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
              >
                {cat === "all" ? "All Categories" : cat}
              </button>
            ))}
          </div>

          {/* Active Filter Meta Info */}
          <div className={styles.filterMetaRow}>
            <span className={styles.countInfo}>
              Showing <strong>{brokers.length}</strong> of <strong>{totalRecords}</strong> certified brokers
            </span>

            {(search || selectedCategory !== "all" || currentSortVal !== "newest") && (
              <button className={styles.resetBtn} onClick={handleResetFilters}>
                <RotateCcw size={13} /> Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Loading Skeletons */}
        {loading ? (
          <div className={styles.skeletonGrid}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={styles.skeletonCard}>
                <div className={`${styles.skeletonBox} ${styles.sLogo}`} />
                <div className={`${styles.skeletonBox} ${styles.sTitle}`} />
                <div className={`${styles.skeletonBox} ${styles.sSub}`} />
                <div className={`${styles.skeletonBox} ${styles.sDesc}`} />
                <div className={`${styles.skeletonBox} ${styles.sPills}`} />
                <div className={`${styles.skeletonBox} ${styles.sBtn}`} />
              </div>
            ))}
          </div>
        ) : brokers.length > 0 ? (
          /* Brokers Cards Grid using common BrokerCard */
          <div className={styles.brokersGrid}>
            {brokers.map((broker, idx) => (
              <BrokerCard
                key={broker._id || broker.id || `b-${idx}`}
                broker={broker}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className={styles.emptyState}>
            <div className={styles.emptyIconWrap}>
              <Landmark size={36} />
            </div>
            <h3>No Brokers Found</h3>
            <p>
              {search || selectedCategory !== "all"
                ? `We couldn't find any certified brokers matching "${search || selectedCategory}". Try searching with different keywords or reset your filters.`
                : "No certified brokers are currently listed. Please check back later."}
            </p>
            {(search || selectedCategory !== "all") && (
              <button className={styles.resetAllBtn} onClick={handleResetFilters}>
                Reset All Filters
              </button>
            )}
          </div>
        )}

        {/* Pagination Controls */}
        {!loading && totalPages > 1 && (
          <div className={styles.paginationWrapper}>
            <button
              className={styles.pageBtn}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage <= 1}
            >
              <ChevronLeft size={16} /> Previous
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  className={`${styles.pageBtn} ${
                    currentPage === p ? styles.activePage : ""
                  }`}
                  onClick={() => setCurrentPage(p)}
                >
                  {p}
                </button>
              );
            })}

            <button
              className={styles.pageBtn}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage >= totalPages}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
