"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Ghost } from "lucide-react";
import styles from "./404.module.scss";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={styles.card}
      >
        {/* Icon with bounce */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
          className={styles.iconWrapper}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={styles.iconCircle}
          >
            <Ghost className={styles.ghostIcon} />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={styles.title}
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className={styles.subtitle}
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className={styles.description}
        >
          We couldn’t find the page you requested. Please check the URL or return
          to the homepage.
        </motion.p>

        {/* Button with hover animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className={styles.buttonWrapper}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className={styles.homeButton}>
              ⬅ Go Home
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
