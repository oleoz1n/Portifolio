import { useState, useEffect } from "react";
import styles from "./backtop.module.css";
import { motion } from "framer-motion";

export default function ScrollPage() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnimationStart = () => {
    const backTopElement = document.getElementById("backTopAnimation");
    if (backTopElement) {
      const computedStyle = window.getComputedStyle(backTopElement);
      const opacityValue = computedStyle.getPropertyValue("opacity");

      if (opacityValue === "0") {
        backTopElement.style.display = "flex";
      }
    }
  };

  const handleAnimationComplete = () => {
    const backTopElement = document.getElementById("backTopAnimation");
    if (backTopElement) {
      const computedStyle = window.getComputedStyle(backTopElement);
      const opacityValue = computedStyle.getPropertyValue("opacity");

      if (opacityValue === "0") {
        backTopElement.style.display = "none";
      }
    }
  };

  return (
    <motion.div
      className={styles.containerBacktop}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      onAnimationStart={handleAnimationStart}
      onAnimationComplete={handleAnimationComplete}
      id="backTopAnimation"
    >
      <a href="#header">
        <span className={`${styles.backtopIcon} material-symbols-outlined`}>
          arrow_upward
        </span>
      </a>
    </motion.div>
  );
}
