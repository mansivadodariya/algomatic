import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./strategiesCard.module.scss";
import { BaseURL } from "@/utils/config";
import toast from "react-hot-toast";

const AiIcon = "/assets/icons/ai-gen-xii.png";

export default function StrategiesCard({ item, index }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
  }, [modalOpen]);

  const handleCopy = (user) => {
    navigator.clipboard.writeText(user);
    toast.success("Link copied!");
  };

  return (
    <>
      <div className={styles.strategiesCard} key={index}>
        <Link href={`/strategies/${item?._id}`}>
          <div className={styles.imageWrapper}>
            <Image
              src={item?.imageUrl || AiIcon}
              alt="strategy"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.details}>
            <h3>{item?.title}</h3>
            <p>{item?.shortDescription}</p>
          </div>
        </Link>
      </div>

      {modalOpen && (
        <div className={styles.linkmodal}>
          <div className={styles.whiteModal}>
            <div className={styles.modalClose}>
              <div onClick={() => setModalOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s...z" />
                </svg>
              </div>
            </div>
            <div className={styles.modalbody}>
              <h3>{item?.title}</h3>
              <span>Link</span>
              <div className={styles.linkText}>
                <a>{item?.link}</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  onClick={() => handleCopy(item?.link)}
                >
                  <path d="M384 336l-192...z" />
                </svg>
              </div>
              <p>
                Send your transaction screenshot to{" "}
                <a>yash@rejoicehub.com</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
