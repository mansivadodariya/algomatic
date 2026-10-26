import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./aiMarketplaceBotListing.module.scss";
import Commonarrowbutton from "@/components/commonarrowbutton";
import { getCategoryWithStrategies, getStrategies } from "@/lib/strategyApi";
import {
  Search,
  SlidersHorizontal,
  Layers,
  Tag,
  CircleDollarSign,
  ArrowUpDown,
  RotateCcw,
  X,
  Bot,
} from "lucide-react";

const AiIcon = "/assets/icons/ai-gen-xii.png";

export default function AiMarketplaceBotListing() {
  const [categories, setCategories] = useState([]);
  const [strategies, setStrategies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlanType, setSelectedPlanType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Fetch Categories & Strategies from API
  useEffect(() => {
    async function fetchMarketplaceData() {
      try {
        setLoading(true);

        const [catRes, stratRes] = await Promise.allSettled([
          getCategoryWithStrategies(1, 50),
          getStrategies(1, 50),
        ]);

        const rawCategories =
          catRes.status === "fulfilled" && catRes.value?.payload?.data
            ? catRes.value.payload.data
            : [];

        const rawStrategies =
          stratRes.status === "fulfilled" && stratRes.value?.payload?.data
            ? stratRes.value.payload.data
            : [];

        // Build category lookup map
        const categoryMap = {};
        rawCategories.forEach((cat) => {
          if (cat?._id) {
            categoryMap[cat._id] = cat.title || "Trading Strategy";
          }
        });

        // Collect all items
        const itemsMap = new Map();

        // 1. Strategies nested inside categories
        rawCategories.forEach((cat) => {
          if (Array.isArray(cat?.strategies)) {
            cat.strategies.forEach((st) => {
              if (st?._id && st.isActive !== false) {
                itemsMap.set(st._id, {
                  ...st,
                  categoryId: cat._id,
                  categoryTitle: cat.title || "Trading Bot",
                  strategyPlans: st.strategyPlans || st.strategyPlan || [],
                });
              }
            });
          }
        });

        // 2. Additional strategies from getStrategies
        rawStrategies.forEach((st) => {
          if (st?._id && !itemsMap.has(st._id) && st.isActive !== false) {
            itemsMap.set(st._id, {
              ...st,
              categoryId: st.categoryId || "uncategorized",
              categoryTitle:
                categoryMap[st.categoryId] || st.categoryName || "Trading Bot",
              strategyPlans: st.strategyPlans || st.strategyPlan || [],
            });
          }
        });

        const allItems = Array.from(itemsMap.values());
        setStrategies(allItems);
        setCategories(rawCategories);
      } catch (err) {
        console.error("Error fetching marketplace strategies:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMarketplaceData();
  }, []);

  // Compute Categories with Bot Counts
  const categoriesList = useMemo(() => {
    const list = [
      {
        id: "all",
        name: "All Bots",
        count: strategies.length,
      },
    ];

    categories.forEach((cat) => {
      const count = strategies.filter(
        (s) => s.categoryId === cat._id || s.categoryTitle === cat.title
      ).length;
      list.push({
        id: cat._id,
        name: cat.title,
        count: count,
      });
    });

    return list;
  }, [categories, strategies]);

  // Extract Available Plan Types
  const availablePlanTypes = useMemo(() => {
    const types = new Set();
    strategies.forEach((bot) => {
      if (Array.isArray(bot.strategyPlans)) {
        bot.strategyPlans.forEach((p) => {
          if (p?.planType) types.add(p.planType.trim());
        });
      }
    });
    return Array.from(types);
  }, [strategies]);

  // Active filters count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== "all") count++;
    if (searchQuery.trim() !== "") count++;
    if (selectedPlanType !== "all") count++;
    if (priceRange !== "all") count++;
    return count;
  }, [selectedCategory, searchQuery, selectedPlanType, priceRange]);

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSelectedPlanType("all");
    setPriceRange("all");
    setSortBy("featured");
  };

  // Filtered & Sorted Strategies
  const filteredStrategies = useMemo(() => {
    let result = [...strategies];

    // 1. Category Filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (bot) =>
          bot.categoryId === selectedCategory ||
          bot.categoryTitle?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // 2. Search Filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (bot) =>
          bot.title?.toLowerCase().includes(q) ||
          bot.shortDescription?.toLowerCase().includes(q) ||
          bot.categoryTitle?.toLowerCase().includes(q)
      );
    }

    // 3. Plan Type Filter
    if (selectedPlanType !== "all") {
      result = result.filter((bot) =>
        bot.strategyPlans?.some(
          (plan) =>
            plan?.planType?.toLowerCase() === selectedPlanType.toLowerCase()
        )
      );
    }

    // 4. Price Range Filter
    if (priceRange !== "all") {
      result = result.filter((bot) => {
        if (!bot.strategyPlans || bot.strategyPlans.length === 0) return true;
        const prices = bot.strategyPlans.map((p) => Number(p.price) || 0);
        const minPrice = Math.min(...prices);

        if (priceRange === "under200") return minPrice < 200;
        if (priceRange === "200to300") return minPrice >= 200 && minPrice <= 300;
        if (priceRange === "over300") return minPrice > 300;
        return true;
      });
    }

    // 5. Sorting
    if (sortBy === "priceAsc") {
      result.sort((a, b) => {
        const minA = a.strategyPlans?.length
          ? Math.min(...a.strategyPlans.map((p) => Number(p.price) || 0))
          : 0;
        const minB = b.strategyPlans?.length
          ? Math.min(...b.strategyPlans.map((p) => Number(p.price) || 0))
          : 0;
        return minA - minB;
      });
    } else if (sortBy === "priceDesc") {
      result.sort((a, b) => {
        const maxA = a.strategyPlans?.length
          ? Math.max(...a.strategyPlans.map((p) => Number(p.price) || 0))
          : 0;
        const maxB = b.strategyPlans?.length
          ? Math.max(...b.strategyPlans.map((p) => Number(p.price) || 0))
          : 0;
        return maxB - maxA;
      });
    } else if (sortBy === "nameAsc") {
      result.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    } else if (sortBy === "nameDesc") {
      result.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
    }

    return result;
  }, [strategies, selectedCategory, searchQuery, selectedPlanType, priceRange, sortBy]);

  // Slick Slider Settings for Plan cards
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    className: styles.planSlider,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Find active category name for display
  const activeCategoryObj = categoriesList.find((c) => c.id === selectedCategory);

  return (
    <section className={styles.marketplacesectionmain} id="Marketplace">
      <div className="container-xl">
        {/* Header Section */}
        <div className={styles.marketplacesectionheader}>
          <div className={styles.headerMain}>
            <div className={styles.headerContent}>
              <h2>
                Explore Our <span>Trading Strategies</span>
              </h2>
              <p>
                Browse automated algorithmic trading bots available in the
                Algomatic Marketplace. Fully integrated with real-time execution
                and risk management.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Filter Toggle & Category Pills */}
        <div className={styles.mobileFilterControls}>
          <div className={styles.mobileActionRow}>
            <button
              className={styles.mobileToggleBtn}
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              <SlidersHorizontal size={16} />
              <span>{isMobileFilterOpen ? "Hide Filters" : "Filters & Category"}</span>
              {activeFiltersCount > 0 && (
                <span className={styles.activeFilterCount}>
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <select
              className={styles.mobileSortSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="nameAsc">Name: A to Z</option>
            </select>
          </div>

          <div className={styles.mobileCategoryPills}>
            {categoriesList.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.mobileCatPill} ${selectedCategory === cat.id ? styles.mobileCatPillActive : ""
                  }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.name}</span>
                <span className={styles.pillCount}>({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main 2-Column Marketplace Layout */}
        <div className={styles.marketplaceLayout}>
          {/* LEFT COLUMN: Filter + Category Sidebar */}
          <aside
            className={`${styles.filterSidebar} ${isMobileFilterOpen ? styles.mobileSidebarOpen : ""
              }`}
          >
            {/* Sidebar Header */}
            <div className={styles.sidebarHeader}>
              <div className={styles.sidebarTitle}>
                <SlidersHorizontal size={18} />
                <span>Filters</span>
                {activeFiltersCount > 0 && (
                  <span className={styles.filterCountBadge}>
                    {activeFiltersCount} Active
                  </span>
                )}
              </div>
              {activeFiltersCount > 0 && (
                <button
                  className={styles.resetBtn}
                  onClick={handleResetFilters}
                  title="Reset all filters"
                >
                  <RotateCcw size={13} />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Search Input */}
            <div className={styles.searchBox}>
              <Search className={styles.searchIcon} size={16} />
              <input
                type="text"
                placeholder="Search trading bots..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className={styles.clearSearchBtn}
                  onClick={() => setSearchQuery("")}
                >
                  <X size={12} />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className={styles.filterGroup}>
              <div className={styles.groupTitle}>
                <Layers size={14} />
                <span>Category</span>
              </div>
              <div className={styles.categoryList}>
                {categoriesList.map((cat) => (
                  <button
                    key={cat.id}
                    className={`${styles.categoryItem} ${selectedCategory === cat.id
                        ? styles.categoryItemActive
                        : ""
                      }`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    <div className={styles.catItemLeft}>
                      <span className={styles.checkDot}></span>
                      <span>{cat.name}</span>
                    </div>
                    <span className={styles.catBadge}>{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Plan Duration Filter */}
            {availablePlanTypes.length > 0 && (
              <div className={styles.filterGroup}>
                <div className={styles.groupTitle}>
                  <Tag size={14} />
                  <span>Plan Duration</span>
                </div>
                <div className={styles.pillList}>
                  <button
                    className={`${styles.pillBtn} ${selectedPlanType === "all" ? styles.pillBtnActive : ""
                      }`}
                    onClick={() => setSelectedPlanType("all")}
                  >
                    All Plans
                  </button>
                  {availablePlanTypes.map((type) => (
                    <button
                      key={type}
                      className={`${styles.pillBtn} ${selectedPlanType === type ? styles.pillBtnActive : ""
                        }`}
                      onClick={() => setSelectedPlanType(type)}
                    >
                      {type.replace(/^(\d+)([a-zA-Z]+)$/, "$1 $2")}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Price Range Filter */}
            <div className={styles.filterGroup}>
              <div className={styles.groupTitle}>
                <CircleDollarSign size={14} />
                <span>Price Range</span>
              </div>
              <div className={styles.pillList}>
                <button
                  className={`${styles.pillBtn} ${priceRange === "all" ? styles.pillBtnActive : ""
                    }`}
                  onClick={() => setPriceRange("all")}
                >
                  All Prices
                </button>
                <button
                  className={`${styles.pillBtn} ${priceRange === "under200" ? styles.pillBtnActive : ""
                    }`}
                  onClick={() => setPriceRange("under200")}
                >
                  Under $200
                </button>
                <button
                  className={`${styles.pillBtn} ${priceRange === "200to300" ? styles.pillBtnActive : ""
                    }`}
                  onClick={() => setPriceRange("200to300")}
                >
                  $200 - $300
                </button>
                <button
                  className={`${styles.pillBtn} ${priceRange === "over300" ? styles.pillBtnActive : ""
                    }`}
                  onClick={() => setPriceRange("over300")}
                >
                  $300+
                </button>
              </div>
            </div>

            {/* Sort Options (Sidebar version for mobile / tablet) */}
            <div className={styles.filterGroup}>
              <div className={styles.groupTitle}>
                <ArrowUpDown size={14} />
                <span>Sort By</span>
              </div>
              <select
                className={styles.sortDropdown}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured / Recommended</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="nameAsc">Name: A to Z</option>
                <option value="nameDesc">Name: Z to A</option>
              </select>
            </div>
          </aside>

          {/* RIGHT COLUMN: Bot Cards Showcase */}
          <main className={styles.contentArea}>
            {/* Top Bar with Results Count & Active Filter Chips */}
            <div className={styles.contentTopBar}>
              <div className={styles.resultsInfo}>
                <span className={styles.countText}>
                  Showing <strong>{filteredStrategies.length}</strong>{" "}
                  {filteredStrategies.length === 1 ? "bot" : "bots"}
                </span>

                {activeFiltersCount > 0 && (
                  <div className={styles.activeChipsList}>
                    {selectedCategory !== "all" && activeCategoryObj && (
                      <span className={styles.filterChip}>
                        Category: {activeCategoryObj.name}
                        <button onClick={() => setSelectedCategory("all")}>
                          <X size={12} />
                        </button>
                      </span>
                    )}

                    {searchQuery.trim() !== "" && (
                      <span className={styles.filterChip}>
                        "{searchQuery}"
                        <button onClick={() => setSearchQuery("")}>
                          <X size={12} />
                        </button>
                      </span>
                    )}

                    {selectedPlanType !== "all" && (
                      <span className={styles.filterChip}>
                        Plan: {selectedPlanType}
                        <button onClick={() => setSelectedPlanType("all")}>
                          <X size={12} />
                        </button>
                      </span>
                    )}

                    {priceRange !== "all" && (
                      <span className={styles.filterChip}>
                        Price:{" "}
                        {priceRange === "under200"
                          ? "Under $200"
                          : priceRange === "200to300"
                            ? "$200 - $300"
                            : "$300+"}
                        <button onClick={() => setPriceRange("all")}>
                          <X size={12} />
                        </button>
                      </span>
                    )}

                    <button
                      className={styles.clearAllLink}
                      onClick={handleResetFilters}
                    >
                      Clear All
                    </button>
                  </div>
                )}
              </div>

              {/* Desktop Sort Dropdown */}
              <div className={styles.sortBoxDesktop}>
                <span className={styles.sortLabel}>Sort:</span>
                <select
                  className={styles.sortSelect}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="nameAsc">Name: A to Z</option>
                </select>
              </div>
            </div>

            {/* Dynamic Bot Cards Grid */}
            {loading ? (
              <div className={styles.loadingContainer}>
                {[1, 2].map((n) => (
                  <div className={styles.skeletonCard} key={n}>
                    <div className={styles.skeletonImage} />
                    <div className={`${styles.skeletonLine} ${styles.title}`} />
                    <div className={`${styles.skeletonLine} ${styles.sub}`} />
                    <div className={`${styles.skeletonLine} ${styles.plans}`} />
                    <div className={`${styles.skeletonLine} ${styles.btn}`} />
                  </div>
                ))}
              </div>
            ) : filteredStrategies.length > 0 ? (
              <div className={styles.botCardsGrid}>
                {filteredStrategies.map((item, index) => (
                  <div
                    className={styles.strategiesCard}
                    key={item?._id || index}
                  >
                    <div className={styles.cardTop}>
                      <Link
                        href={`/marketplace/${item?._id}`}
                        className={styles.imageWrapper}
                      >
                        <Image
                          src={item?.imageUrl || AiIcon}
                          alt={item?.title || "strategy bot"}
                          layout="fill"
                          objectFit="cover"
                        />
                        {item?.categoryTitle && (
                          <span className={styles.categoryBadge}>
                            {item.categoryTitle}
                          </span>
                        )}
                        <span className={styles.statusBadge}>
                          <span className={styles.pulseDot}></span>
                          Automated
                        </span>
                      </Link>

                      <div className={styles.details}>
                        <Link href={`/marketplace/${item?._id}`}>
                          <h3>{item?.title}</h3>
                        </Link>
                        <p>{item?.shortDescription}</p>
                      </div>
                    </div>

                    {item?.strategyPlans?.length > 0 && (
                      <div className={styles.sliderContainer}>
                        <Slider
                          {...sliderSettings}
                          slidesToShow={Math.min(item.strategyPlans.length, 2)}
                        >
                          {item.strategyPlans.map((plan) => (
                            <div key={plan?._id}>
                              <div className={styles.plantag}>
                                <div className={styles.planhead}>
                                  <span className={styles.planType}>
                                    {plan?.planType?.replace(
                                      /^(\d+)([a-zA-Z]+)$/,
                                      "$1 $2"
                                    )}
                                  </span>
                                  <span className={styles.planPrice}>
                                    ${plan?.price}
                                  </span>
                                </div>
                                <div className={styles.planmrp}>
                                  <span className={styles.planmrpitle}>
                                    M.R.P.:
                                  </span>
                                  <del className={styles.planmrpamount}>
                                    ${plan?.initialPrice ?? 0}
                                  </del>
                                </div>
                                <div className={styles.plandiscount}>
                                  <span className={styles.plandiscountitle}>
                                    Discount :
                                  </span>
                                  <span className={styles.plandiscountamount}>
                                    -{plan?.discount ?? 0}%
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    )}

                    <Commonarrowbutton
                      Text="Buy Now"
                      Butttonvarient="Blueoutlined"
                      link={`/marketplace/${item?._id}`}
                      Target="blank"
                      buttonclassName="widthfull"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyContainer}>
                <div className={styles.emptyIconWrap}>
                  <Bot size={28} />
                </div>
                <h4>No Trading Bots Found</h4>
                <p>
                  No bots match your current filter criteria. Try adjusting or
                  resetting your filters to see more results.
                </p>
                <button
                  className={styles.resetEmptyBtn}
                  onClick={handleResetFilters}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
