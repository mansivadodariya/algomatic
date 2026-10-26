import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import styles from "./brokerDetails.module.scss";
import { getBrokerById, resolveBrokerLogo } from "@/lib/brokerApi";
import {
  ArrowLeft,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Check,
  Globe,
} from "lucide-react";

export default function BrokerDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [broker, setBroker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    if (!id) return;

    async function loadBroker() {
      setLoading(true);
      try {
        const data = await getBrokerById(String(id));
        setBroker(data);
      } catch (err) {
        console.error("Error loading broker details:", err);
      } finally {
        setLoading(false);
      }
    }

    loadBroker();
  }, [id]);

  const resolvedLogo = broker?.logo ? resolveBrokerLogo(broker.logo) : "";
  const showInitials = imageError || !resolvedLogo;
  const initials = broker?.name
    ? broker.name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "BR";

  const targetUrl = broker?.website_url || broker?.websiteUrl || "";
  const features = Array.isArray(broker?.features) ? broker.features : [];

  return (
    <>
      <Head>
        <title>
          {broker?.name ? `${broker.name} - Certified Broker Details` : "Broker Details"}{" "}
          | Algomatic
        </title>
        <meta
          name="description"
          content={
            broker?.description ||
            "Explore verified broker specifications, spreads, API bridge, and automated algorithmic bot connectivity."
          }
        />
      </Head>

      <div className={styles.brokerDetailsPage}>
        {/* Breadcrumb Header Bar */}
        <section className={styles.breadcrumbBar}>
          <div className="container-xl">
            <div className={styles.breadcrumbContent}>
              <button
                type="button"
                className={styles.backBtn}
                onClick={() => router.push("/broker")}
              >
                <ArrowLeft size={16} />
                <span>Back to Brokers & Platforms</span>
              </button>

              <div className={styles.trail}>
                <Link href="/" className={styles.trailLink}>Home</Link>
                <ChevronRight size={13} className={styles.trailSep} />
                <Link href="/broker" className={styles.trailLink}>Brokers</Link>
                <ChevronRight size={13} className={styles.trailSep} />
                <span className={styles.trailActive}>
                  {loading ? "Loading..." : broker?.name || "Broker Details"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {loading ? (
          /* Loading Skeleton */
          <div className="container-xl">
            <div className={styles.skeletonWrapper}>
              <div className={styles.skeletonHero} />
              <div className={styles.skeletonBody} />
            </div>
          </div>
        ) : !broker ? (
          /* Not Found State */
          <div className="container-xl">
            <div className={styles.notFoundBox}>
              <ShieldCheck size={48} className={styles.notFoundIcon} />
              <h2>Broker Not Found</h2>
              <p>We couldn't find the broker details you requested. The broker may have been unlisted or the link might be outdated.</p>
              <Link href="/broker" className={styles.returnBtn}>
                Browse Certified Brokers
              </Link>
            </div>
          </div>
        ) : (
          /* Main Broker Content */
          <div className="container-xl">
            {/* 1. HERO PROFILE CARD (Layout matching Image 2 in Algomatic purple theme) */}
            <div className={styles.heroProfileCard}>
              <div className={styles.heroTopRow}>
                <div className={styles.logoWrap}>
                  {!showInitials ? (
                    <img
                      src={resolvedLogo}
                      alt={broker.name}
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className={styles.initialsBox}>{initials}</div>
                  )}
                </div>

                {broker.category && (
                  <span className={styles.categoryBadge}>
                    {broker.category.toUpperCase()}
                  </span>
                )}
              </div>

              <div className={styles.heroBottomInfo}>
                <h1 className={styles.brokerTitle}>{broker.name}</h1>
                {broker.subtitle && (
                  <p className={styles.brokerSubtitle}>{broker.subtitle}</p>
                )}
              </div>
            </div>

            {/* 2. MAIN DETAILS & SIDEBAR GRID */}
            <div className={styles.contentLayoutGrid}>
              {/* Left Column: About, Key Features & Infrastructure */}
              <div className={styles.primaryColumn}>
                {/* About Broker */}
                {broker.description && (
                  <div className={styles.detailCard}>
                    <h2 className={styles.cardTitle}>About {broker.name}</h2>
                    <p className={styles.descriptionText}>{broker.description}</p>
                  </div>
                )}

                {/* Key Features & Capabilities */}
                {features.length > 0 && (
                  <div className={styles.detailCard}>
                    <h2 className={styles.cardTitle}>Key Features & Capabilities</h2>
                    <div className={styles.featuresCheckList}>
                      {features.map((item, idx) => (
                        <div key={idx} className={styles.featureCheckItem}>
                          <span className={styles.checkCircle}>
                            <Check size={14} />
                          </span>
                          <span className={styles.featureText}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Integration & Trading Infrastructure */}
                <div className={styles.detailCard}>
                  <h2 className={styles.cardTitle}>Integration & Trading Infrastructure</h2>
                  <p className={styles.descriptionText}>
                    Algomatic connects with verified brokerage APIs and market trading environments to ensure execution speed, real-time logging, and secure data sync.
                  </p>
                </div>
              </div>

              {/* Right Sidebar: Official Site & Access (Matching Image 2 in Algomatic theme) */}
              <div className={styles.sidebarColumn}>
                <div className={styles.officialSiteCard}>
                  <h3 className={styles.officialSiteTitle}>Official Site & Access</h3>
                  <p className={styles.officialSiteDesc}>
                    Access the official platform directly to open accounts, manage funds, or review trading terms.
                  </p>

                  {targetUrl && targetUrl !== "#" && (
                    <div className={styles.urlPillBox}>
                      <Globe size={16} className={styles.globeIcon} />
                      <span className={styles.urlText} title={targetUrl}>
                        {targetUrl}
                      </span>
                    </div>
                  )}

                  {targetUrl && targetUrl !== "#" ? (
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.visitOfficialSiteBtn}
                    >
                      <span>Visit Official Site</span>
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className={styles.visitOfficialSiteBtn}
                    >
                      <span>Visit Official Site</span>
                      <ExternalLink size={16} />
                    </button>
                  )}
                </div>

                {/* Need Help Box */}
                <div className={styles.helpBox}>
                  <h4>Need Connection Assistance?</h4>
                  <p>Our quantitative engineers can help you configure your API bridges and VPS routing for optimal execution.</p>
                  <Link href="/ask-our-expert" className={styles.helpBoxBtn}>
                    <span>Consult Our Expert</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
