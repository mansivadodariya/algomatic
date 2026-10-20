import React from "react";
import styles from "./contactChannels.module.scss";
import { MessageCircle, Code2, Building2, Clock, ArrowRight } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";

export default function ContactChannels() {
  const { utilitySettings } = useAppContext();
  const rawPhone = utilitySettings?.phoneNo || "917046279434";
  const cleanPhone = rawPhone.replace(/[^0-9]/g, "");

  const channels = [
    {
      icon: <MessageCircle size={28} strokeWidth={2} />,
      title: "Direct WhatsApp Support",
      description:
        "Fastest way to get real-time help for bot license activation, setup guidance, and quick inquiries.",
      actionText: "Chat on WhatsApp",
      actionLink: `https://wa.me/${cleanPhone}?text=Hi%20Algomatic%20Team,%20I%20have%20a%20question%20about%20your%20trading%20bots.`,
      isExternal: true,
    },
    {
      icon: <Code2 size={28} strokeWidth={2} />,
      title: "Quant & Strategy Inquiries",
      description:
        "Reach our algorithmic engineers for custom bot builds, TradingView webhooks, and cTrader / Broker API algorithmic bots.",
      actionText: "Send Strategy Request",
      actionLink: "#contact-form",
      isExternal: false,
    },
    {
      icon: <Building2 size={28} strokeWidth={2} />,
      title: "Institutional & White-Label",
      description:
        "Custom marketplace solutions, brokerage CRM turnkey systems, and high-tier IB affiliate structures.",
      actionText: "Explore White-Label",
      actionLink: "/partner-with-us/white-label",
      isExternal: false,
    },
    {
      icon: <Clock size={28} strokeWidth={2} />,
      title: "Operational Desk Hours",
      description:
        "Active through Tokyo, London, and New York market trading sessions (Monday 00:00 to Friday 23:59 GMT).",
      actionText: "Connect with Desk",
      actionLink: `https://wa.me/${cleanPhone}?text=Hi%20Algomatic%20Desk,%20is%20someone%20available%20for%20live%20assistance?`,
      isExternal: true,
      isLiveStatus: true,
      statusText: "Active Now • Desk Online",
    },
  ];

  return (
    <section className={styles.channelsSection}>
      <div className="container-xl">
        <div className={styles.sectionHeader}>
          <div className={styles.channelBadge}>Communication Channels</div>
          <h2>
            Choose the Best Way to <span>Connect</span>
          </h2>
          <p>
            Whether you need instant technical support or want to scope an institutional trading strategy, our global desk is ready.
          </p>
        </div>

        <div className={styles.channelsGrid}>
          {channels.map((channel, idx) => {
            const cardInner = (
              <>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrapper}>{channel.icon}</div>
                  <h3>{channel.title}</h3>
                  <p>{channel.description}</p>
                </div>

                <div className={styles.cardBottom}>
                  {channel.isLiveStatus ? (
                    <div className={styles.statusIndicator}>
                      <span className={styles.pulseDot}></span>
                      <span>{channel.statusText}</span>
                    </div>
                  ) : (
                    <div className={styles.cardAction}>
                      <span>{channel.actionText}</span>
                      <ArrowRight size={15} />
                    </div>
                  )}
                </div>
              </>
            );

            if (channel.isExternal) {
              return (
                <a
                  key={idx}
                  href={channel.actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelCard}
                >
                  {cardInner}
                </a>
              );
            }

            return (
              <Link key={idx} href={channel.actionLink} className={styles.channelCard}>
                {cardInner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
