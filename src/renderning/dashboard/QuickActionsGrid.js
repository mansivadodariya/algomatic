import React from "react";
import {
  Zap,
  Plus,
  Bot,
  Search,
  Users,
  CreditCard,
  Settings,
  ArrowUpRight,
} from "lucide-react";

export default function QuickActionsGrid({
  styles,
  setIsDeployModalOpen,
  openMetaModal,
  setIsQuickActionOpen,
  handleTabChange,
}) {
  return (
    <div className={styles.quickActionsCard}>
      <div className={styles.quickActionsCardHeader}>
        <div className={styles.quickTitleGroup}>
          <div className={styles.quickIconBadge}>
            <Zap size={16} />
          </div>
          <div>
            <h3 className={styles.quickCardTitle}>Quick Actions</h3>
            <p className={styles.quickCardSubtitle}>
              Instant shortcuts to deploy bots, link accounts & strategies
            </p>
          </div>
        </div>
        <span className={styles.quickCountBadge}>6 Actions</span>
      </div>

      <div className={styles.quickGrid}>
        {/* Action 1: Deploy New Bot */}
        <button
          type="button"
          className={`${styles.quickActionTile} ${styles.primaryActionTile}`}
          onClick={() => setIsDeployModalOpen(true)}
        >
          <div className={styles.quickTileLeft}>
            <div className={`${styles.quickTileIcon} ${styles.iconDeploy}`}>
              <Plus size={18} />
            </div>
            <div className={styles.quickTileText}>
              <h4 className={styles.quickActionName}>Deploy New Bot</h4>
              <p className={styles.quickActionDesc}>
                Launch an automated XAUUSD or crypto bot
              </p>
            </div>
          </div>
          <div className={styles.tileArrowCircle}>
            <ArrowUpRight size={14} />
          </div>
        </button>

        {/* Action 2: Connect MetaTrader */}
        <button
          type="button"
          className={styles.quickActionTile}
          onClick={() => (openMetaModal ? openMetaModal(null) : null)}
        >
          <div className={styles.quickTileLeft}>
            <div className={`${styles.quickTileIcon} ${styles.iconMeta}`}>
              <Bot size={18} />
            </div>
            <div className={styles.quickTileText}>
              <h4 className={styles.quickActionName}>Connect MetaTrader</h4>
              <p className={styles.quickActionDesc}>
                Link MT5/MT4 broker credentials
              </p>
            </div>
          </div>
          <div className={styles.tileArrowCircle}>
            <ArrowUpRight size={14} />
          </div>
        </button>

        {/* Action 3: Command Palette */}
        <button
          type="button"
          className={styles.quickActionTile}
          onClick={() => setIsQuickActionOpen(true)}
        >
          <div className={styles.quickTileLeft}>
            <div className={`${styles.quickTileIcon} ${styles.iconSearch}`}>
              <Search size={18} />
            </div>
            <div className={styles.quickTileText}>
              <h4 className={styles.quickActionName}>Command Palette</h4>
              <p className={styles.quickActionDesc}>
                Search any bot, pair or shortcut
              </p>
            </div>
          </div>
          <span className={styles.shortcutKbd}>⌘K</span>
        </button>

        {/* Action 4: Affiliate Dashboard */}
        <button
          type="button"
          className={styles.quickActionTile}
          onClick={() => handleTabChange("affiliate")}
        >
          <div className={styles.quickTileLeft}>
            <div className={`${styles.quickTileIcon} ${styles.iconAffiliate}`}>
              <Users size={18} />
            </div>
            <div className={styles.quickTileText}>
              <h4 className={styles.quickActionName}>Affiliate Network</h4>
              <p className={styles.quickActionDesc}>
                Referrals, commissions & payout requests
              </p>
            </div>
          </div>
          <div className={styles.tileArrowCircle}>
            <ArrowUpRight size={14} />
          </div>
        </button>

        {/* Action 5: Payment & License History */}
        <button
          type="button"
          className={styles.quickActionTile}
          onClick={() => handleTabChange("payments")}
        >
          <div className={styles.quickTileLeft}>
            <div className={`${styles.quickTileIcon} ${styles.iconPayments}`}>
              <CreditCard size={18} />
            </div>
            <div className={styles.quickTileText}>
              <h4 className={styles.quickActionName}>Payment History</h4>
              <p className={styles.quickActionDesc}>
                Subscriptions & transaction records
              </p>
            </div>
          </div>
          <div className={styles.tileArrowCircle}>
            <ArrowUpRight size={14} />
          </div>
        </button>

        {/* Action 6: Profile & Security */}
        <button
          type="button"
          className={styles.quickActionTile}
          onClick={() => handleTabChange("profile")}
        >
          <div className={styles.quickTileLeft}>
            <div className={`${styles.quickTileIcon} ${styles.iconProfile}`}>
              <Settings size={18} />
            </div>
            <div className={styles.quickTileText}>
              <h4 className={styles.quickActionName}>Profile & Security</h4>
              <p className={styles.quickActionDesc}>
                Manage account details & password
              </p>
            </div>
          </div>
          <div className={styles.tileArrowCircle}>
            <ArrowUpRight size={14} />
          </div>
        </button>
      </div>
    </div>
  );
}
