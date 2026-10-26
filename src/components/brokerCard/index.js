import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./brokerCard.module.scss";
import { resolveBrokerLogo } from "@/lib/brokerApi";
import {
  ExternalLink,
  ChevronRight,
  Link2,
  Server,
  ShieldCheck,
} from "lucide-react";

/**
 * Reusable Common Broker Card Component
 * @param {Object} props
 * @param {Object} props.broker - Broker data object from API
 * @param {string} [props.className] - Optional custom CSS class
 */
export default function BrokerCard({ broker, className }) {
  const [imageError, setImageError] = useState(false);

  if (!broker) return null;

  const brokerId = broker._id || broker.id || "";
  const targetUrl = broker.website_url || broker.websiteUrl || "";
  const resolvedLogo = resolveBrokerLogo(broker.logo);
  const showInitials = imageError || !resolvedLogo;

  const initials = broker.name
    ? broker.name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "BR";

  // Clean backend features only - up to 3 items
  const features = Array.isArray(broker.features)
    ? broker.features
        .filter((f) => f && typeof f === "string" && f.trim())
        .slice(0, 3)
    : [];

  return (
    <div className={classNames(styles.brokerCard, className)}>
      {/* 1. Top Logo Banner */}
      <div className={styles.topLogoBanner}>
        <div className={styles.logoWrap}>
          {!showInitials ? (
            <img
              src={resolvedLogo}
              alt={broker.name || "Broker"}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={styles.initialsLogo}>{initials}</div>
          )}
        </div>
      </div>

      {/* 2. Card Content: Title, Subtitle, Description */}
      <div className={styles.cardContentWrapper}>
        <div className={styles.titleStack}>
          <h3 className={styles.brokerName}>{broker.name}</h3>
          {(broker.subtitle || broker.category) && (
            <p className={styles.brokerSubtitle}>
              {broker.subtitle || broker.category}
            </p>
          )}
        </div>

        {broker.description && (
          <p className={styles.brokerDescription}>{broker.description}</p>
        )}

        {/* 3. Three Full-Width Pill Rows with outline icons */}
        {features.length > 0 && (
          <div className={styles.featureRows}>
            {features.map((feat, fIdx) => (
              <div key={fIdx} className={styles.featureRowItem}>
                <span className={styles.featureRowIcon}>
                  {fIdx === 0 ? (
                    <Link2 size={16} />
                  ) : fIdx === 1 ? (
                    <Server size={16} />
                  ) : (
                    <ShieldCheck size={16} />
                  )}
                </span>
                <span className={styles.featureRowText}>{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* 4. Action Buttons (Visit Site & View Details side-by-side) */}
        <div className={styles.cardActionsRow}>
          {targetUrl && targetUrl !== "#" ? (
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.visitSiteBtn}
            >
              <ExternalLink size={14} />
              <span>Visit Site</span>
            </a>
          ) : (
            <Link
              href={`/broker/${brokerId}`}
              className={styles.visitSiteBtn}
            >
              <ExternalLink size={14} />
              <span>Visit Site</span>
            </Link>
          )}

          <Link
            href={`/broker/${brokerId}`}
            className={styles.viewDetailsBtn}
          >
            <span>View Details</span>
            <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
