import React from "react";
import { useRouter } from "next/router";
import {
  ChevronRight,
  ChevronLeft,
  Search,
  LayoutDashboard,
  Bot,
  ShoppingBag,
  User,
  CreditCard,
  Users,
  LogOut,
  HelpCircle,
} from "lucide-react";

export default function DashboardSidebar({
  styles,
  activeTab,
  handleTabChange,
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  setIsQuickActionOpen,
  setQuickSearchQuery,
  handleLogout,
}) {
  const router = useRouter();

  return (
    <aside
      className={`${styles.sidebar} ${
        isSidebarCollapsed ? styles.sidebarCollapsed : ""
      }`}
    >
      {/* Collapse / Expand Toggle Button */}
      <button
        type="button"
        className={styles.collapseToggleBtn}
        onClick={() => setIsSidebarCollapsed((prev) => !prev)}
        title={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isSidebarCollapsed ? (
          <ChevronRight size={13} strokeWidth={2.5} />
        ) : (
          <ChevronLeft size={13} strokeWidth={2.5} />
        )}
      </button>

      {/* Brand Logo Header: Aligned with topBar */}
      <div
        className={styles.brandArea}
        onClick={() => router.push("/")}
        title="Algomatic"
      >
        <img
          src={
            isSidebarCollapsed
              ? "/assets/logo/logo-small.svg"
              : "/assets/logo/logo.svg"
          }
          alt="Algomatic"
          className={
            isSidebarCollapsed
              ? styles.brandSmallLogoImg
              : styles.brandLogoImg
          }
        />
      </div>

      <div className={styles.sidebarInner}>
        {/* Quick Action Search */}
        <div className={styles.sidebarQuickAction}>
          <div className={styles.groupLabel}>QUICK ACTION</div>
          <div
            className={styles.sidebarSearchBox}
            onClick={() => {
              setQuickSearchQuery("");
              setIsQuickActionOpen(true);
            }}
            title={
              isSidebarCollapsed
                ? "Quick Search & Navigation (⌘K)"
                : "Quick Search & Navigation (⌘K or ⌘F)"
            }
          >
            <Search size={15} className={styles.sidebarSearchIcon} />
            <span className={styles.sidebarSearchPlaceholder}>
              Search or jump to...
            </span>
            <span className={styles.sidebarSearchShortcut}>⌘K</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className={styles.menuSection}>
          <div>
            <div className={styles.groupLabel}>OVERVIEW</div>
            <ul className={styles.navList}>
              <li>
                <div
                  className={`${styles.navItem} ${
                    activeTab === "dashboard" ? styles.active : ""
                  }`}
                  onClick={() => handleTabChange("dashboard")}
                  title="Dashboard"
                >
                  <div className={styles.navLeft}>
                    <LayoutDashboard size={18} />
                    <span>Dashboard</span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className={`${styles.navItem} ${
                    activeTab === "purchased-bots" ? styles.active : ""
                  }`}
                  onClick={() => handleTabChange("purchased-bots")}
                  title="Purchased Bots"
                >
                  <div className={styles.navLeft}>
                    <Bot size={18} />
                    <span>Purchased Bots</span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className={`${styles.navItem} ${
                    activeTab === "marketplace" ? styles.active : ""
                  }`}
                  onClick={() => handleTabChange("marketplace")}
                  title="Marketplace"
                >
                  <div className={styles.navLeft}>
                    <ShoppingBag size={18} />
                    <span>Marketplace</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className={styles.groupLabel}>MORE</div>
            <ul className={styles.navList}>
              <li>
                <div
                  className={`${styles.navItem} ${
                    activeTab === "profile" ? styles.active : ""
                  }`}
                  onClick={() => handleTabChange("profile")}
                  title="Profile"
                >
                  <div className={styles.navLeft}>
                    <User size={18} />
                    <span>Profile</span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className={`${styles.navItem} ${
                    activeTab === "payments" ? styles.active : ""
                  }`}
                  onClick={() => handleTabChange("payments")}
                  title="Payment History"
                >
                  <div className={styles.navLeft}>
                    <CreditCard size={18} />
                    <span>Payment History</span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className={`${styles.navItem} ${
                    activeTab === "affiliate" ? styles.active : ""
                  }`}
                  onClick={() => handleTabChange("affiliate")}
                  title="Affiliate dashboard"
                >
                  <div className={styles.navLeft}>
                    <Users size={18} />
                    <span>Affiliate dashboard</span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className={`${styles.navItem} ${
                    activeTab === "support" ? styles.active : ""
                  }`}
                  onClick={() => handleTabChange("support")}
                  title="Support & Help"
                >
                  <div className={styles.navLeft}>
                    <HelpCircle size={18} />
                    <span>Support & Help</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar Footer with Logout */}
      <div className={styles.sidebarFooter}>
        <div
          className={`${styles.navItem} ${styles.logoutItem}`}
          onClick={handleLogout}
          title="Logout"
        >
          <div className={styles.navLeft}>
            <LogOut size={18} />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
