import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import DownArrow from "../icons/downArrow";
import Button from "../button";
import RightLgArrow from "../icons/rightLgArrow";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import Right from "../icons/right";
import MobileHeader from "../mobileHeader";
import AuthModal from "../authModal";
import { useAppContext } from "../../context/AppContext";
import { ChevronDown, CircleUserRound, UserCircle } from "lucide-react";
import Commonarrowbutton from "../commonarrowbutton";
import { getUtilitySettings } from "@/lib/utilitySettingsApi";
const Logo = "/assets/logo/logo.svg";
const Logoimg = "/assets/logo/logo.png";
export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [header, setHeader] = useState(false);
  const { showLogin, setShowLogin } = useAppContext();
  const [showMenu, setShowMenu] = useState(false);
  const { isUserLoggedIn, setIsUserLoggedIn, user, setUser } = useAppContext();
  const [getUtilitySettingsData, setGetUtilitySettingsData] = useState({});

  const menuRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // check for login btn or menu btn show condition
    if (header) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [header]);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");
    setIsUserLoggedIn(loginStatus);
    const storedUser = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) : null;
  //   const storedUser = typeof window !== "undefined" && localStorage.getItem("user")
  // ? JSON.parse(localStorage.getItem("user"))
  // : null;

    setUser(storedUser);

    getUtilitySettings().then((res) => {
      setGetUtilitySettingsData(res.payload);
    });
  }, []);

  useEffect(() => {
    if (!showMenu) return; // no need to attach if hidden

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  const handleMouseEnter = (menu) => {
    if (menu != 0) {
      setHoveredMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const menuItems = [
    {
      title: "About",
      submenu: [],
      routes: "/#About",
    },
    {
      title: "How It Works",
      submenu: [],
      routes: "/#Howitworks",
    },
    {
      title: "Features",
      submenu: [],
      routes: "/#Keyfeatures",
    },
    {
      title: "Backtesting",
      submenu: [],
      routes: "/#Backtesting",
    },
    {
      title: "Algo Bot",
      submenu: [],
      routes: "/marketplace",
    },
    {
      title: "Contact Us",
      submenu: [],
      Target: "__blank",
      routes: `https://wa.me/${getUtilitySettingsData?.phoneNo}`,
    },
  ];

  const handleLinkClick = () => {
    setHoveredMenu(null);
  };

  return (
    <>
      <header className={styles.header}>
        <div className="container-xl">
          <div className={styles.headerAlignment}>
            <div className={styles.logo}>
              <Link href="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className={styles.menuAlignment}>
              {menuItems.map((menu, index) => (
                <div key={index} className={styles.relativeHeader} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                  <div className={styles.menu}>
                    {menu?.routes ? (
                      <Link href={menu?.routes} target={menu?.Target}>
                        {menu.title}
                      </Link>
                    ) : (
                      menu?.title
                    )}

                    {menu.submenu.length > 0 && <DownArrow />}
                  </div>
                  <div
                    onMouseEnter={handleMouseLeave}
                    className={classNames({
                      [styles.open]: hoveredMenu === index,
                      [styles.blurDiv]: hoveredMenu === index,
                    })}
                  ></div>
                  {menu.submenu.length > 0 && (
                    <div className={classNames(styles.submenubox, hoveredMenu === index ? styles.show : styles.hide)}>
                      <div className="container">
                        <div className={styles.grid}>
                          {menu.submenu.map((item, i) => (
                            <Link className={styles.boxLine} href={item?.redirectLink} onClick={handleLinkClick} target={item.isNewTab ? "_blank" : ""}>
                              <div key={i}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
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
            </div>
            <div className={styles.buttonDesign}>
              {isUserLoggedIn ? (
                <div className={styles.menuWrapper} ref={menuRef}>
                  <Button
                    btnStyle={true}
                    text={
                      <div className={styles.userIconWrapper}>
                        <UserCircle className={styles.userIcon} />
                        <span>{user?.name?.slice(0, 8).length > 8 ? "..." : user?.name}</span>
                        <ChevronDown className={styles.downIcon} />
                      </div>
                    }
                    onClick={() => setShowMenu((prev) => !prev)}
                  />
                  {showMenu && (
                    <div className={styles.menuDropdown}>
                      <button
                        onClick={() => {
                          setShowMenu(false);
                          router.push(`/profile/${user?._id}`);
                        }}
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => {
                          setShowMenu(false);
                          router.push(`/payment-history/${user?._id}`);
                        }}
                      >
                        Payment History
                      </button>
                      <button
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
                <>
                  <div onClick={() => setShowLogin(true)}>
                    <Commonarrowbutton Text="Login" Butttonvarient="lightoutlined" />
                  </div>
                </>
              )}
              {/* <div className={styles.menuAlignment}>
                <Commonarrowbutton
                  Text="Contact Us"
                  Butttonvarient="lightoutlined"
                  link="/contact-us"
                />
              </div> */}
              <div className={`${styles.mobileMenu} ${header ? styles.active : ""}`} onClick={() => setHeader(!header)}>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <header className={styles.header}>
        <div className="container-xl">
          <div className={styles.headerwrapper}>
            <div className={styles.headerlogo}>
              <Link href={"/"}>
                <img src={Logoimg} alt="logo" />
              </Link>
            </div>
            <div className={styles.headelinksflx}>
              <Link href={"/"}>About</Link>
              <Link href={"/"}>How It Works</Link>
              <Link href={"/"}>Features</Link>
              <Link href={"/"}>Backtesting</Link>
              <Link href={"/"}>Marketplace</Link>
              <Link href={"/"}>Contact Us</Link>
            </div>
            <div className={styles.headerbtn}>
              <Commonarrowbutton Text="Login" Butttonvarient="lightoutlined" />
            </div>
            <div className={`${styles.menubutton} ${styles.active}`}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header> */}
      <MobileHeader header={header} setHeader={setHeader} />
      <AuthModal isOpen={showLogin} setShowLogin={setShowLogin} onClose={() => setShowLogin(false)} setIsUserLoggedIn={setIsUserLoggedIn} />
    </>
  );
}
