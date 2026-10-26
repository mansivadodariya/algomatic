import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import MobileHeader from "../mobileHeader";
import AuthModal from "../authModal";
import { useAppContext } from "../../context/AppContext";
import { ChevronDown, UserCircle, ArrowRight } from "lucide-react";
import Right from "../icons/right";

const Logo = "/assets/logo/logo.svg";

export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [header, setHeader] = useState(false);
  const { showLogin, setShowLogin } = useAppContext();
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { isUserLoggedIn, setIsUserLoggedIn, user, setUser, utilitySettings } =
    useAppContext();

  const menuRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        0;

      // Scrolled past 200px threshold
      setIsScrolled(currentScrollY > 200);

      // Keep header visible at the top of the page or when mobile drawer is open
      if (currentScrollY <= 80 || header) {
        setIsVisible(true);
      } else {
        // If scrolling down, hide the header
        if (currentScrollY > lastScrollY.current + 6) {
          setIsVisible(false);
          setHoveredMenu(null);
        }
        // If scrolling up, reveal the header
        else if (currentScrollY < lastScrollY.current - 6) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [header]);

  useEffect(() => {
    if (header) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [header]);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");
    setIsUserLoggedIn(loginStatus);
    const storedUser =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : null;
    setUser(storedUser);
  }, []);

  useEffect(() => {
    if (!showMenu) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  const handleMouseEnter = (index) => {
    setHoveredMenu(index);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const handleLinkClick = () => {
    setHoveredMenu(null);
  };

  const getUserInitials = (name) => {
    if (!name || typeof name !== "string") return "U";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return parts[0]?.slice(0, 2)?.toUpperCase() || "U";
  };

  const menuItems = [
    
    // {
    //   title: "How It Works",
    //   submenu: [],
    //   routes: "/#Howitworks",
    // },
    // {
    //   title: "Features",
    //   submenu: [],
    //   routes: "/#Keyfeatures",
    // },
    // {
    //   title: "Backtesting",
    //   submenu: [],
    //   routes: "/#Backtesting",
    // },
    {
      title: "AI Bot Marketplace",
      submenu: [],
      routes: "/ai-bot-market-place",
    },
    {
      title: "Bot Builder",
      submenu: [],
      routes: "/bot-builder",
    },
    {
      title: "Ask our expert",
      submenu: [],
      routes: "/ask-our-expert",
    },
    {
      title: "Partner with us",
      submenu: [
        {
          title: "Affiliate",
          redirectLink: "/partner-with-us/partner-affiliate",
        },
        {
          title: "White-Label",
          redirectLink: "/partner-with-us/white-label",
        },
      ],
      routes: "",
    },
    {
      title: "Broker",
      submenu: [],
      routes: "/broker",
    },
    // {
    //   title: "Contact Us",
    //   submenu: [],
    //   routes: "/contact-us",
    // },
  ];

  return (
    <>
      <header
        className={classNames(styles.header, {
          [styles.scrolled]: isScrolled,
          [styles.headerHidden]: !isVisible,
        })}
      >
        {/* White Top Strip (Taskbet-style) */}
        <div className={styles.whiteTopStrip}></div>

        {/* Navbar Container (centered, max-width) */}
        <div className={styles.navbarContainer}>
          <div className={styles.navbarWrapper}>
            <div className={styles.headerAlignment}>
              {/* Left Section: Logo */}
              <div className={styles.logo}>
                <Link href="/">
                  <img src={Logo} alt="AlgoMatic" />
                </Link>
              </div>

              {/* Center Section: Navigation Links */}
              <nav className={styles.menuAlignment}>
                {menuItems.map((menu, index) => (
                  <div
                    key={index}
                    className={styles.relativeHeader}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menu.submenu.length > 0 ? (
                      <div
                        className={classNames(styles.menu, {
                          [styles.active]: hoveredMenu === index,
                        })}
                      >
                        <span>{menu.title}</span>
                        <ChevronDown
                          className={classNames(styles.chevronIcon, {
                            [styles.rotated]: hoveredMenu === index,
                          })}
                        />
                      </div>
                    ) : (
                      <Link
                        href={menu.routes}
                        target={menu.Target || ""}
                        onClick={handleLinkClick}
                        className={classNames(styles.menuLink, {
                          [styles.active]: router.pathname === menu.routes,
                        })}
                      >
                        {menu.title}
                      </Link>
                    )}

                    {/* Spacious luxury dropdown panel for Partner with us */}
                    {menu.submenu.length > 0 && (
                      <div
                        className={classNames(
                          styles.submenubox,
                          hoveredMenu === index ? styles.show : styles.hide,
                          { [styles.scrolledSubmenu]: isScrolled }
                        )}
                      >
                        <div className="container-xl">
                          <div className={styles.grid}>
                            {menu.submenu.map((item, i) => (
                              <Link
                                key={i}
                                className={styles.boxLine}
                                href={item?.redirectLink}
                                onClick={handleLinkClick}
                                target={item.isNewTab ? "_blank" : ""}
                              >
                                <div className={styles.cardHeader}>
                                  <h3>{item.title}</h3>
                                  {item.description && <p>{item.description}</p>}
                                </div>
                                <div className={styles.solution}>
                                  <span>See Solution</span>
                                  <Right />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right Section: Action Buttons */}
              <div className={styles.buttonDesign}>
                {/* Login Button / User Profile Dropdown */}
                {isUserLoggedIn ? (
                  <div className={styles.userMenuWrapper} ref={menuRef}>
                    <button
                      className={styles.userButton}
                      onClick={() => setShowMenu((prev) => !prev)}
                    >
                      <UserCircle className={styles.userIcon} />
                      <span>{getUserInitials(user?.name)}</span>
                      <ChevronDown className={styles.userDownIcon} />
                    </button>
                    {showMenu && (
                      <div className={styles.userDropdown}>
                        <button
                          onClick={() => {
                            setShowMenu(false);
                            router.push("/dashboard");
                          }}
                        >
                          Dashboard
                        </button>
                        <button
                          onClick={() => {
                            setShowMenu(false);
                            router.push("/dashboard?tab=profile");
                          }}
                        >
                          Profile
                        </button>
                        <button
                          onClick={() => {
                            setShowMenu(false);
                            router.push("/dashboard?tab=payments");
                          }}
                        >
                          Payment History
                        </button>
                        <button
                          onClick={() => {
                            setShowMenu(false);
                            router.push(`/affiliate/${user?._id}`);
                          }}
                        >
                          Affiliate Dashboard
                        </button>
                        <div className={styles.dropdownDivider} />
                        <button
                          className={styles.logoutBtn}
                          onClick={() => {
                            localStorage.removeItem("user");
                            localStorage.removeItem("isLogin");
                            localStorage.removeItem("token");
                            router.push("/");
                            setIsUserLoggedIn(false);
                            setShowMenu(false);
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    className={styles.loginButton}
                    onClick={() => setShowLogin(true)}
                  >
                    <span>Login</span>
                    <div className={styles.loginBtnArrow}>
                      <ArrowRight />
                    </div>
                  </button>
                )}

                {/* Mobile Menu Hamburger Toggle */}
                <div
                  className={classNames(styles.mobileMenuToggle, {
                    [styles.active]: header,
                  })}
                  onClick={() => setHeader(!header)}
                >
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer header and auth modal */}
      <MobileHeader
        header={header}
        setHeader={setHeader}
        setShowLogin={setShowLogin}
        isUserLoggedIn={isUserLoggedIn}
        user={user}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
      <AuthModal
        isOpen={showLogin}
        setShowLogin={setShowLogin}
        onClose={() => setShowLogin(false)}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
    </>
  );
}
