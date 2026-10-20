import React, { useState } from "react";
import styles from "./PurchasedBotsView.module.scss";
import {
  Bot,
  Zap,
  Activity,
  CheckCircle2,
  PauseCircle,
  PlayCircle,
  Search,
  Plus,
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function PurchasedBotsView({
  bots = [],
  handleToggleBot,
  payments = [],
  paymentsLoading = false,
  openMetaModal,
  setIsDeployModalOpen,
  handleTabChange,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Paid strategy subscriptions from payments API
  const paidPayments = payments.filter((p) => p.paymentStatus === "paid");

  // Filter bots
  const filteredBots = bots.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.pair.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.strategy.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const liveCount = bots.filter((b) => b.status === "live").length;
  const totalCount = bots.length + paidPayments.length;

  return (
    <div className={styles.purchasedBotsContainer}>
      {/* Top Summary Stats */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={`${styles.statIconWrap} ${styles.iconPurple}`}>
            <Bot size={22} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Total Purchased</span>
            <span className={styles.statValue}>{totalCount}</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIconWrap} ${styles.iconGreen}`}>
            <Activity size={22} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Live & Trading</span>
            <span className={styles.statValue}>{liveCount}</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIconWrap} ${styles.iconBlue}`}>
            <ShieldCheck size={22} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Connected MT5/4</span>
            <span className={styles.statValue}>
              {bots.filter((b) => b.metaAccount).length}
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIconWrap} ${styles.iconAmber}`}>
            <TrendingUp size={22} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Today's Win Rate</span>
            <span className={styles.statValue}>91.2%</span>
          </div>
        </div>
      </div>

      {/* Controls Bar: Search, Filters & Actions */}
      <div className={styles.controlsBar}>
        <div className={styles.controlsLeft}>
          <div className={styles.searchBox}>
            <Search size={16} />
            <input
              type="text"
              placeholder="Search your bots by name or pair..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className={styles.filterTabs}>
            <button
              type="button"
              className={`${styles.filterTabBtn} ${
                statusFilter === "all" ? styles.active : ""
              }`}
              onClick={() => setStatusFilter("all")}
            >
              All Bots ({bots.length})
            </button>
            <button
              type="button"
              className={`${styles.filterTabBtn} ${
                statusFilter === "live" ? styles.active : ""
              }`}
              onClick={() => setStatusFilter("live")}
            >
              Live ({liveCount})
            </button>
            <button
              type="button"
              className={`${styles.filterTabBtn} ${
                statusFilter === "paused" ? styles.active : ""
              }`}
              onClick={() => setStatusFilter("paused")}
            >
              Paused ({bots.length - liveCount})
            </button>
          </div>
        </div>

        <div className={styles.controlsRight}>
          <button
            type="button"
            className={styles.secondaryActionBtn}
            onClick={() => handleTabChange("marketplace")}
          >
            <ShoppingBag size={15} />
            <span>Marketplace</span>
          </button>
          <button
            type="button"
            className={styles.primaryActionBtn}
            onClick={() => setIsDeployModalOpen(true)}
          >
            <Plus size={16} />
            <span>Deploy Bot</span>
          </button>
        </div>
      </div>

      {/* Bots Grid */}
      {filteredBots.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIconCircle}>
            <Bot size={28} />
          </div>
          <h3 className={styles.emptyTitle}>No Matching Bots Found</h3>
          <p className={styles.emptyDesc}>
            No trading bots matched your search query. You can acquire verified
            bots directly from the marketplace or deploy a custom instance.
          </p>
          <button
            type="button"
            className={styles.primaryActionBtn}
            onClick={() => handleTabChange("marketplace")}
          >
            <ShoppingBag size={16} />
            <span>Explore Marketplace</span>
          </button>
        </div>
      ) : (
        <div className={styles.botsGrid}>
          {filteredBots.map((bot) => (
            <div className={styles.botCard} key={bot.id}>
              <div>
                {/* Header row */}
                <div className={styles.cardHeaderRow}>
                  <div className={styles.botIdentity}>
                    <div
                      className={styles.botIconCircle}
                      style={{ background: bot.bg, color: bot.color }}
                    >
                      <Bot size={22} />
                    </div>
                    <div className={styles.botTitleWrap}>
                      <h4 className={styles.botName} title={bot.name}>
                        {bot.name}
                      </h4>
                      <span className={styles.botPairBadge}>{bot.pair}</span>
                    </div>
                  </div>

                  <span
                    className={`${styles.statusPill} ${
                      bot.status === "live"
                        ? styles.statusLive
                        : styles.statusPaused
                    }`}
                  >
                    {bot.status === "live" ? (
                      <>
                        <span className={styles.pulsingDot} />
                        Live
                      </>
                    ) : (
                      "Paused"
                    )}
                  </span>
                </div>

                {/* Strategy note */}
                <p className={styles.botStrategyDesc}>{bot.strategy}</p>
              </div>

              {/* Performance Metrics */}
              <div className={styles.metricsStrip}>
                <div className={styles.metricItem}>
                  <span className={styles.metricTitle}>Profit</span>
                  <span
                    className={`${styles.metricValue} ${styles.positive}`}
                  >
                    {bot.profit}
                  </span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricTitle}>Win Rate</span>
                  <span className={styles.metricValue}>{bot.winRate}</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricTitle}>Trades</span>
                  <span className={styles.metricValue}>
                    {bot.todayTrades} trades
                  </span>
                </div>
              </div>

              {/* MetaTrader Account row */}
              <div className={styles.metaAccountBox}>
                <div className={styles.metaInfoLeft}>
                  <Zap size={14} />
                  <span className={styles.metaAccountNum}>
                    {bot.metaAccount || "MT5 Connected"}
                  </span>
                </div>
                <button
                  type="button"
                  className={styles.manageMetaBtn}
                  onClick={() =>
                    openMetaModal ? openMetaModal({ botName: bot.name }) : null
                  }
                >
                  Configure MT5
                </button>
              </div>

              {/* Footer Toggle */}
              <div className={styles.cardFooter}>
                <button
                  type="button"
                  className={`${styles.toggleBotBtn} ${
                    bot.status === "live"
                      ? styles.btnPause
                      : styles.btnResume
                  }`}
                  onClick={() => handleToggleBot(bot.id)}
                >
                  {bot.status === "live" ? (
                    <>
                      <PauseCircle size={15} />
                      <span>Pause Auto-Trading</span>
                    </>
                  ) : (
                    <>
                      <PlayCircle size={15} />
                      <span>Resume Auto-Trading</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
