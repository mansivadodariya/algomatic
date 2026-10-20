import React from "react";
import Modal from "@/components/modal";
import { Search, ChevronRight } from "lucide-react";

export default function DashboardModals({
  styles,
  // Deploy Bot Modal
  isDeployModalOpen,
  setIsDeployModalOpen,
  newBotData,
  setNewBotData,
  handleDeployBot,
  // Manage Meta Modal
  metaModalOpen,
  setMetaModalOpen,
  selectedPayment,
  metaAccountNo,
  setMetaAccountNo,
  handleSaveMeta,
  savingMeta,
  // Command Palette
  isQuickActionOpen,
  setIsQuickActionOpen,
  quickSearchQuery,
  setQuickSearchQuery,
  filteredNavTabs,
  filteredQuickActions,
  activeTab,
}) {
  return (
    <>
      {/* ======================================================= */}
      {/* MODAL 1: DEPLOY NEW TRADING BOT MODAL                   */}
      {/* ======================================================= */}
      {isDeployModalOpen && (
        <Modal
          size="medium"
          isOpen={isDeployModalOpen}
          onClose={() => setIsDeployModalOpen(false)}
        >
          <div style={{ padding: "8px 4px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "700",
                marginBottom: "6px",
                color: "#111827",
              }}
            >
              Deploy New Trading Bot
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "#6b7280",
                marginBottom: "18px",
              }}
            >
              Configure and attach an automated trading bot algorithm to your MetaTrader account.
            </p>

            <form onSubmit={handleDeployBot}>
              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "6px",
                  }}
                >
                  Bot Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Gold Arbitrage Master EA"
                  value={newBotData.name}
                  onChange={(e) =>
                    setNewBotData({ ...newBotData, name: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid #d1d5db",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                  autoFocus
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "6px",
                    }}
                  >
                    Asset / Symbol
                  </label>
                  <select
                    value={newBotData.pair}
                    onChange={(e) =>
                      setNewBotData({ ...newBotData, pair: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: "1px solid #d1d5db",
                      fontSize: "14px",
                      boxSizing: "border-box",
                      background: "#ffffff",
                    }}
                  >
                    <option value="XAU/USD">XAU/USD (Gold)</option>
                    <option value="EUR/USD">EUR/USD (Forex)</option>
                    <option value="BTC/USD">BTC/USD (Crypto)</option>
                    <option value="US30">US30 (Index)</option>
                    <option value="GBP/JPY">GBP/JPY (Cross)</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "6px",
                    }}
                  >
                    Lot Size
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 0.50"
                    value={newBotData.lotSize}
                    onChange={(e) =>
                      setNewBotData({ ...newBotData, lotSize: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: "1px solid #d1d5db",
                      fontSize: "14px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "6px",
                  }}
                >
                  Strategy Model
                </label>
                <input
                  type="text"
                  placeholder="e.g. High Frequency Breakout Strategy"
                  value={newBotData.strategy}
                  onChange={(e) =>
                    setNewBotData({ ...newBotData, strategy: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid #d1d5db",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "6px",
                  }}
                >
                  MetaTrader Account
                </label>
                <select
                  value={newBotData.metaAccount}
                  onChange={(e) =>
                    setNewBotData({
                      ...newBotData,
                      metaAccount: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid #d1d5db",
                    fontSize: "14px",
                    boxSizing: "border-box",
                    background: "#ffffff",
                  }}
                >
                  <option value="MT5 #849201">MT5 #849201 (Raw Spread - Live)</option>
                  <option value="MT4 #392817">MT4 #392817 (ECN Standard - Live)</option>
                  <option value="Demo #102948">Demo #102948 (Paper Trading)</option>
                </select>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setIsDeployModalOpen(false)}
                  style={{
                    padding: "9px 18px",
                    background: "#f3f4f6",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                    color: "#4b5563",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "9px 20px",
                    background:
                      "linear-gradient(135deg, #498df9 0%, #6279f9 48%, #905afa 100%)",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                    color: "#ffffff",
                    boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
                  }}
                >
                  Deploy Bot to MetaTrader
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}

      {/* ======================================================= */}
      {/* MODAL 2: MANAGE META ACCOUNT NUMBER MODAL               */}
      {/* ======================================================= */}
      {metaModalOpen && selectedPayment && (
        <Modal
          size="small"
          isOpen={metaModalOpen}
          onClose={() => setMetaModalOpen(false)}
        >
          <div className={styles.metaModalWrapper}>
            <h3>Manage Meta Account Number</h3>
            <p>
              Enter the MetaTrader account number to bind your strategy EXE
              license file.
            </p>

            {Array.from({
              length:
                selectedPayment.noOfBots ||
                (selectedPayment.metaAccountNo?.length > 0
                  ? selectedPayment.metaAccountNo.length
                  : 1),
            }).map((_, idx) => (
              <div key={idx} className={styles.metaInputRow}>
                <input
                  type="text"
                  className={styles.metaInput}
                  value={
                    selectedPayment.metaAccountNo?.[idx]
                      ? selectedPayment.metaAccountNo[idx]
                      : metaAccountNo[idx] || ""
                  }
                  onChange={(e) => {
                    const copy = [...metaAccountNo];
                    copy[idx] = e.target.value;
                    setMetaAccountNo(copy);
                  }}
                  placeholder="Enter Meta account number"
                  disabled={Boolean(selectedPayment.metaAccountNo?.[idx])}
                />
                <button
                  type="button"
                  className={styles.metaSaveBtn}
                  onClick={() => handleSaveMeta(idx)}
                  disabled={
                    savingMeta ||
                    Boolean(selectedPayment.metaAccountNo?.[idx])
                  }
                >
                  {selectedPayment.metaAccountNo?.[idx]
                    ? "Active"
                    : savingMeta
                    ? "Saving..."
                    : "Get File"}
                </button>
              </div>
            ))}
          </div>
        </Modal>
      )}

      {/* ======================================================= */}
      {/* MODAL 3: QUICK ACTION COMMAND PALETTE POPUP            */}
      {/* ======================================================= */}
      {isQuickActionOpen && (
        <div
          className={styles.commandPaletteOverlay}
          onClick={() => setIsQuickActionOpen(false)}
        >
          <div
            className={styles.commandPaletteModal}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Header */}
            <div className={styles.commandSearchHeader}>
              <Search size={18} className={styles.searchIconActive} />
              <input
                type="text"
                className={styles.commandSearchInput}
                placeholder="Search tabs, actions, or jump directly..."
                value={quickSearchQuery}
                onChange={(e) => setQuickSearchQuery(e.target.value)}
                autoFocus
              />
              <button
                type="button"
                className={styles.closeKeyBadge}
                onClick={() => setIsQuickActionOpen(false)}
              >
                ESC
              </button>
            </div>

            {/* Command List */}
            <div className={styles.commandList}>
              {filteredNavTabs.length > 0 && (
                <div>
                  <div className={styles.commandGroupLabel}>NAVIGATION TABS</div>
                  {filteredNavTabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <div
                        key={tab.id}
                        className={`${styles.commandItem} ${
                          isActive ? styles.activeCommandItem : ""
                        }`}
                        onClick={() => {
                          tab.action();
                          setIsQuickActionOpen(false);
                        }}
                      >
                        <div className={styles.commandItemLeft}>
                          <div className={styles.commandItemIconBox}>
                            <Icon size={17} />
                          </div>
                          <div className={styles.commandItemText}>
                            <span className={styles.commandItemTitle}>
                              {tab.title}
                            </span>
                            <span className={styles.commandItemDesc}>
                              {tab.description}
                            </span>
                          </div>
                        </div>
                        <div className={styles.commandItemRight}>
                          {isActive && (
                            <span className={styles.commandActiveTag}>Active</span>
                          )}
                          <ChevronRight
                            size={15}
                            className={styles.commandItemArrow}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {filteredQuickActions.length > 0 && (
                <div
                  style={{
                    marginTop: filteredNavTabs.length > 0 ? "8px" : "0",
                  }}
                >
                  <div className={styles.commandGroupLabel}>QUICK ACTIONS</div>
                  {filteredQuickActions.map((act) => {
                    const Icon = act.icon;
                    return (
                      <div
                        key={act.id}
                        className={`${styles.commandItem} ${
                          act.isDanger ? styles.dangerCommandItem : ""
                        }`}
                        onClick={() => {
                          act.action();
                          setIsQuickActionOpen(false);
                        }}
                      >
                        <div className={styles.commandItemLeft}>
                          <div className={styles.commandItemIconBox}>
                            <Icon size={17} />
                          </div>
                          <div className={styles.commandItemText}>
                            <span className={styles.commandItemTitle}>
                              {act.title}
                            </span>
                            <span className={styles.commandItemDesc}>
                              {act.description}
                            </span>
                          </div>
                        </div>
                        <div className={styles.commandItemRight}>
                          <ChevronRight
                            size={15}
                            className={styles.commandItemArrow}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {filteredNavTabs.length === 0 &&
                filteredQuickActions.length === 0 && (
                  <div className={styles.commandEmpty}>
                    No tabs or actions found matching "{quickSearchQuery}"
                  </div>
                )}
            </div>

            {/* Footer */}
            <div className={styles.commandFooter}>
              <div className={styles.footerHints}>
                <span>
                  <kbd>↵</kbd> Select & Jump
                </span>
                <span>
                  <kbd>esc</kbd> Close
                </span>
              </div>
              <span>⌘K / ⌘F to open anytime</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
