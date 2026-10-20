import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useAppContext } from "@/context/AppContext";
import styles from "./dashboard.module.scss";
import toast from "react-hot-toast";
import AffiliateDashboard from "@/renderning/affiliateDashboard";
import DashboardSidebar from "@/renderning/dashboard/DashboardSidebar";
import TradingBotsOverview from "@/renderning/dashboard/TradingBotsOverview";
import ProfileView from "@/renderning/dashboard/ProfileView";
import PaymentsView from "@/renderning/dashboard/PaymentsView";
import DashboardModals from "@/renderning/dashboard/DashboardModals";
import MarketplaceView from "@/renderning/dashboard/MarketplaceView";
import PurchasedBotsView from "@/renderning/dashboard/PurchasedBotsView";
import SupportHelpView from "@/renderning/dashboard/SupportHelpView";
import {
  INITIAL_BOTS,
  INITIAL_LIVE_TRADES,
  DEFAULT_NEW_BOT,
} from "@/renderning/dashboard/constants";
import {
  getPaymentHistory,
  updateMetaAccountNo,
  getBotByName,
  sendBotExeToUser,
} from "@/lib/strategyApi";
import { calculatePlanEndDate } from "@/utils/common";
import {
  LayoutDashboard,
  Bot,
  ShoppingBag,
  User,
  CreditCard,
  Users,
  LogOut,
  Bell,
  Plus,
  Menu,
  HelpCircle,
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const { user, setUser, setIsUserLoggedIn, utilitySettings } = useAppContext();

  // Active navigation tab: 'dashboard' | 'profile' | 'payments' | 'affiliate'
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Dynamic greeting based on user's local time
  const [greetingText, setGreetingText] = useState("Good day");
  const [todayFormatted, setTodayFormatted] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreetingText("Good morning");
    } else if (hour < 18) {
      setGreetingText("Good afternoon");
    } else {
      setGreetingText("Good evening");
    }

    try {
      const options = { weekday: "short", month: "short", day: "numeric" };
      setTodayFormatted(new Date().toLocaleDateString("en-US", options));
    } catch (e) {
      // fallback
    }
  }, []);

  // Sync active tab with router query param ?tab=
  useEffect(() => {
    if (
      router.query.tab &&
      [
        "dashboard",
        "profile",
        "payments",
        "affiliate",
        "marketplace",
        "purchased-bots",
        "support",
      ].includes(router.query.tab)
    ) {
      setActiveTab(router.query.tab);
    }
  }, [router.query.tab]);

  // Auto-collapse sidebar on smaller screens (tablet & mobile)
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth <= 768) {
        setIsSidebarCollapsed(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tab switch handler
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setIsSidebarCollapsed(true);
    }
    router.push(
      {
        pathname: "/dashboard",
        query: tabKey === "dashboard" ? {} : { tab: tabKey },
      },
      undefined,
      { shallow: true }
    );
  };

  // Quick Action Command Palette states
  const [isQuickActionOpen, setIsQuickActionOpen] = useState(false);
  const [quickSearchQuery, setQuickSearchQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        (e.metaKey || e.ctrlKey) &&
        (e.key.toLowerCase() === "k" || e.key.toLowerCase() === "f")
      ) {
        e.preventDefault();
        setQuickSearchQuery("");
        setIsQuickActionOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsQuickActionOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll so dashboard layout is stable
  useEffect(() => {
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyHeight = document.body.style.height;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.height = originalBodyHeight;
    };
  }, []);

  const quickNavTabs = [
    {
      id: "dashboard",
      title: "Dashboard",
      description: "Overview, bot performance, execution engine & live signals",
      icon: LayoutDashboard,
      action: () => handleTabChange("dashboard"),
    },
    {
      id: "purchased-bots",
      title: "Purchased Bots",
      description: "Manage your acquired trading bots & MetaTrader licenses",
      icon: Bot,
      action: () => handleTabChange("purchased-bots"),
    },
    {
      id: "marketplace",
      title: "Marketplace",
      description: "Explore, acquire and deploy verified algorithmic strategies & bots",
      icon: ShoppingBag,
      action: () => handleTabChange("marketplace"),
    },
    {
      id: "profile",
      title: "Profile",
      description: "Account details, edit personal info & referral code",
      icon: User,
      action: () => handleTabChange("profile"),
    },
    {
      id: "payments",
      title: "Payment History",
      description: "Transaction records, strategy plans & manage Meta numbers",
      icon: CreditCard,
      action: () => handleTabChange("payments"),
    },
    {
      id: "affiliate",
      title: "Affiliate dashboard",
      description: "Referral network, commission earnings & withdrawal requests",
      icon: Users,
      action: () => handleTabChange("affiliate"),
    },
    {
      id: "support",
      title: "Support & Help",
      description: "Direct contact channels, submit tickets & bot setup guides",
      icon: HelpCircle,
      action: () => handleTabChange("support"),
    },
  ];

  const quickActionsList = [
    {
      id: "deploy_bot",
      title: "Deploy New Bot",
      description: "Deploy and connect an algorithmic trading bot to MetaTrader",
      icon: Plus,
      action: () => {
        setIsQuickActionOpen(false);
        setIsDeployModalOpen(true);
      },
    },
    {
      id: "logout",
      title: "Logout",
      description: "Sign out of your Algomatic user account",
      icon: LogOut,
      isDanger: true,
      action: () => {
        setIsQuickActionOpen(false);
        handleLogout();
      },
    },
  ];

  const filteredNavTabs = quickNavTabs.filter(
    (t) =>
      t.title.toLowerCase().includes(quickSearchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(quickSearchQuery.toLowerCase())
  );

  const filteredQuickActions = quickActionsList.filter(
    (a) =>
      a.title.toLowerCase().includes(quickSearchQuery.toLowerCase()) ||
      a.description.toLowerCase().includes(quickSearchQuery.toLowerCase())
  );

  // Trading Bots Overview States
  const [bots, setBots] = useState(INITIAL_BOTS);
  const [liveTrades] = useState(INITIAL_LIVE_TRADES);
  const [botFilterStatus, setBotFilterStatus] = useState("all");
  const [botSearchQuery, setBotSearchQuery] = useState("");
  const [seconds, setSeconds] = useState(16095);
  const [isEngineRunning, setIsEngineRunning] = useState(true);

  // Deploy New Bot Modal state
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);
  const [newBotData, setNewBotData] = useState(DEFAULT_NEW_BOT);

  useEffect(() => {
    let interval = null;
    if (isEngineRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isEngineRunning]);

  const formatTimer = (totalSec) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleToggleBot = (botId) => {
    setBots((prev) =>
      prev.map((b) => {
        if (b.id === botId) {
          const nextStatus = b.status === "live" ? "paused" : "live";
          toast.success(
            `${b.name} is now ${
              nextStatus === "live" ? "ACTIVE & AUTO-TRADING" : "PAUSED"
            }`
          );
          return { ...b, status: nextStatus };
        }
        return b;
      })
    );
  };

  const handleDeployBot = (e) => {
    e.preventDefault();
    if (!newBotData.name.trim()) {
      toast.error("Please enter a bot name");
      return;
    }
    const newBot = {
      id: Date.now(),
      name: newBotData.name.trim(),
      pair: newBotData.pair,
      strategy: newBotData.strategy,
      status: "live",
      profit: "+$0.00",
      profitNum: 0,
      winRate: "100%",
      todayTrades: 0,
      metaAccount: newBotData.metaAccount || "MT5 #849201",
      bg: "#ede9fe",
      color: "#7c3aed",
    };
    setBots([newBot, ...bots]);
    setIsDeployModalOpen(false);
    toast.success(
      `${newBot.name} deployed & live connected to ${newBot.metaAccount}!`
    );
  };

  const filteredBots = bots.filter((b) => {
    const matchesFilter =
      botFilterStatus === "all" || b.status === botFilterStatus;
    const matchesSearch =
      b.name.toLowerCase().includes(botSearchQuery.toLowerCase()) ||
      b.pair.toLowerCase().includes(botSearchQuery.toLowerCase()) ||
      b.strategy.toLowerCase().includes(botSearchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Payment History States & Handlers
  const [payments, setPayments] = useState([]);
  const [paymentsLoading, setPaymentsLoading] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [metaModalOpen, setMetaModalOpen] = useState(false);
  const [metaAccountNo, setMetaAccountNo] = useState([]);
  const [savingMeta, setSavingMeta] = useState(false);

  const fetchPayments = async () => {
    setPaymentsLoading(true);
    try {
      const data = await getPaymentHistory();
      setPayments(data || []);
    } catch (err) {
      console.error("Error fetching payments:", err);
      toast.error("Failed to load payment history");
    } finally {
      setPaymentsLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "payments" || activeTab === "purchased-bots") {
      fetchPayments();
    }
  }, [activeTab]);

  const openMetaModal = (payment) => {
    setSelectedPayment(payment);
    const existing = payment.metaAccountNo || [];
    const count =
      payment.noOfBots || (existing.length > 0 ? existing.length : 1);
    const initialArr = [];
    for (let i = 0; i < count; i++) {
      initialArr[i] = existing[i] || "";
    }
    setMetaAccountNo(initialArr);
    setMetaModalOpen(true);
  };

  const handleSaveMeta = async (idx) => {
    const finalMetaNo = metaAccountNo[idx];
    if (!finalMetaNo || finalMetaNo.trim() === "") {
      toast.error("Meta account number is required");
      return;
    }
    if (!/^\d+$/.test(finalMetaNo)) {
      toast.error("Meta account number must be numeric only");
      return;
    }

    setSavingMeta(true);
    try {
      setMetaModalOpen(false);
      await updateMetaAccountNo(selectedPayment._id, finalMetaNo);
      await fetchPayments();
      toast.success(
        "Meta account updated! The EXE file has been sent to your email."
      );

      const botName = selectedPayment?.botName;
      const botData = await getBotByName(botName);

      if (botData?.botProviderId === "6892010294ce94c3494ad1ef") {
        const formatedDate = calculatePlanEndDate(
          new Date(),
          selectedPayment.planType
        );
        await sendBotExeToUser({
          paymentId: selectedPayment._id,
          email: user?.email,
          metaAccountNo: finalMetaNo,
          date: formatedDate,
          planType: selectedPayment.planType,
          file_name: selectedPayment?.botName,
          botProviderId: botData?.botProviderId,
        });
      }
      setMetaAccountNo([]);
    } catch (err) {
      console.error("Error saving meta number:", err);
      toast.error("Failed to update Meta account number");
    } finally {
      setSavingMeta(false);
    }
  };

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("token");
    setIsUserLoggedIn(false);
    toast.success("Logged out successfully");
    router.push("/");
  };

  const getHeaderInfo = () => {
    switch (activeTab) {
      case "profile":
        return {
          title: "Profile",
          subtitle:
            "Manage your personal account details, security, and affiliate links.",
        };
      case "payments":
        return {
          title: "Payment History",
          subtitle:
            "Review transaction records, subscription details, and manage Meta accounts.",
        };
      case "affiliate":
        return {
          title: "Affiliate dashboard",
          subtitle:
            "Track your referral earnings, withdrawals, and affiliate network performance.",
        };
      case "marketplace":
        return {
          title: "Strategy Marketplace",
          subtitle:
            "Explore, acquire and deploy verified algorithmic trading strategies & bots.",
        };
      case "purchased-bots":
        return {
          title: "Purchased Bots",
          subtitle:
            "Manage your acquired algorithmic trading bots, active licenses & MetaTrader connections.",
        };
      case "support":
        return {
          title: "Support & Help Desk",
          subtitle:
            "Submit support tickets, connect via live chat & access bot setup documentation.",
        };
      case "dashboard":
      default:
        return {
          title: "Dashboard",
          subtitle:
            "Monitor your automated trading bots, live execution signals, and strategy performance.",
        };
    }
  };

  const headerInfo = getHeaderInfo();

  return (
    <ProtectedRoute>
      <Head>
        <title>{headerInfo.title} | Algomatic</title>
        <meta name="description" content="Algomatic User Dashboard" />
      </Head>

      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardFrame}>
          {/* SIDEBAR */}
          <DashboardSidebar
            styles={styles}
            activeTab={activeTab}
            handleTabChange={handleTabChange}
            isSidebarCollapsed={isSidebarCollapsed}
            setIsSidebarCollapsed={setIsSidebarCollapsed}
            setIsQuickActionOpen={setIsQuickActionOpen}
            setQuickSearchQuery={setQuickSearchQuery}
            handleLogout={handleLogout}
          />

          {/* Mobile backdrop when sidebar is open */}
          {!isSidebarCollapsed && (
            <div
              className={styles.sidebarOverlay}
              onClick={() => setIsSidebarCollapsed(true)}
              aria-label="Close sidebar"
            />
          )}

          {/* MAIN CONTENT AREA */}
          <main className={styles.mainArea}>
            {/* Sticky Header */}
            <div className={styles.topBar}>
              <div className={styles.topBarLeft}>
                <button
                  type="button"
                  className={styles.mobileMenuToggle}
                  onClick={() => setIsSidebarCollapsed((prev) => !prev)}
                  title="Toggle menu"
                  aria-label="Toggle menu"
                >
                  <Menu size={20} />
                </button>
                <div className={styles.headerText}>
                  <h1 className={styles.pageTitle}>{headerInfo.title}</h1>
                  <p className={styles.pageSubtitle}>{headerInfo.subtitle}</p>
                </div>
              </div>

              <div className={styles.topBarActions}>
                <button
                  className={styles.iconButton}
                  onClick={() => toast("You have 1 new system alert")}
                  title="Notifications"
                >
                  <Bell size={19} />
                  <span className={styles.notifDot} />
                </button>

                <div
                  className={styles.userProfileWidget}
                  onClick={() => handleTabChange("profile")}
                  title="Go to Profile"
                >
                  <div className={styles.avatarCircle}>
                    {user?.name
                      ? user.name.slice(0, 2).toUpperCase()
                      : "MV"}
                  </div>
                  <div className={styles.userInfo}>
                    <span className={styles.userName}>
                      {user?.name || "Mansi Vadodariya"}
                    </span>
                    <span className={styles.userEmail}>
                      {user?.email || "mansi365.rejoice@gmail.com"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Content Body */}
            <div
              className={`${styles.dashboardContentBody} ${
                activeTab !== "dashboard" ? styles.scrollableTabBody : ""
              }`}
            >
              {/* VIEW 1: DASHBOARD OVERVIEW (GRAPH & QUICK ACTIONS ONLY) */}
              {activeTab === "dashboard" && (
                <TradingBotsOverview
                  styles={styles}
                  user={user}
                  greetingText={greetingText}
                  todayFormatted={todayFormatted}
                  setIsDeployModalOpen={setIsDeployModalOpen}
                  openMetaModal={openMetaModal}
                  setIsQuickActionOpen={setIsQuickActionOpen}
                  handleTabChange={handleTabChange}
                />
              )}

              {/* VIEW 2: PROFILE VIEW & EDIT MODE */}
              {activeTab === "profile" && (
                <ProfileView styles={styles} user={user} setUser={setUser} />
              )}

              {/* VIEW 3: PAYMENT HISTORY */}
              {activeTab === "payments" && (
                <PaymentsView
                  styles={styles}
                  payments={payments}
                  paymentsLoading={paymentsLoading}
                  openMetaModal={openMetaModal}
                />
              )}

              {/* VIEW 4: AFFILIATE DASHBOARD */}
              {activeTab === "affiliate" && (
                <div className={styles.affiliateTabWrapper}>
                  <AffiliateDashboard />
                </div>
              )}

              {/* VIEW 5: STRATEGY MARKETPLACE */}
              {activeTab === "marketplace" && (
                <MarketplaceView />
              )}

              {/* VIEW 6: PURCHASED BOTS */}
              {activeTab === "purchased-bots" && (
                <PurchasedBotsView
                  styles={styles}
                  bots={bots}
                  handleToggleBot={handleToggleBot}
                  payments={payments}
                  paymentsLoading={paymentsLoading}
                  openMetaModal={openMetaModal}
                  setIsDeployModalOpen={setIsDeployModalOpen}
                  handleTabChange={handleTabChange}
                />
              )}

              {/* VIEW 7: SUPPORT & HELP */}
              {activeTab === "support" && (
                <SupportHelpView
                  user={user}
                  utilitySettings={utilitySettings}
                />
              )}
            </div>
          </main>
        </div>
      </div>

      {/* DASHBOARD MODALS */}
      <DashboardModals
        styles={styles}
        isDeployModalOpen={isDeployModalOpen}
        setIsDeployModalOpen={setIsDeployModalOpen}
        newBotData={newBotData}
        setNewBotData={setNewBotData}
        handleDeployBot={handleDeployBot}
        metaModalOpen={metaModalOpen}
        setMetaModalOpen={setMetaModalOpen}
        selectedPayment={selectedPayment}
        metaAccountNo={metaAccountNo}
        setMetaAccountNo={setMetaAccountNo}
        handleSaveMeta={handleSaveMeta}
        savingMeta={savingMeta}
        isQuickActionOpen={isQuickActionOpen}
        setIsQuickActionOpen={setIsQuickActionOpen}
        quickSearchQuery={quickSearchQuery}
        setQuickSearchQuery={setQuickSearchQuery}
        filteredNavTabs={filteredNavTabs}
        filteredQuickActions={filteredQuickActions}
        activeTab={activeTab}
      />
    </ProtectedRoute>
  );
}
