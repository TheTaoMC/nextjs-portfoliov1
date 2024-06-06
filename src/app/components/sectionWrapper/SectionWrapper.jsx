// components/SectionWrapper.js
import React, { useEffect, useRef } from "react";
import styles from "./FadeIn.module.css";

const SectionWrapper = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles["fade-in-visible"]);
          } else {
            entry.target.classList.remove(styles["fade-in-visible"]);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={styles["fade-in"]}>
      {children}
    </div>
  );
};

export default SectionWrapper;
