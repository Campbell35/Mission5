import React from "react";
import styles from "./Header.module.css";
import NavBar from "../navBar/NavBar";

function Header() {
  return (
    <div>
      <div className={styles.header_banner}>
        <div className={styles.logo_div}>
          <img
            src="/images/Metro-logo.png"
            alt="logo"
            width="300"
            height="80"
          />
        </div>
        <div className={styles.navbar_div}>
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default Header;
