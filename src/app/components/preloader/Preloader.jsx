// Preloader.js
import React from "react";
import styles from "./Preloader.module.css";

const Preloader = ({ isLoading }) => {
  return (
    <div className={`${styles.preloader} ${!isLoading ? styles.fadeOut : ""}`}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Preloader;
