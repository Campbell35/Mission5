import React from "react";
import style from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav className={style.navbar_main}>
      <ul className={style.navbar_menu}>
        <li>
          <a className={style.menu_item} href="/home">
            Home
          </a>
        </li>
        <li>
          <a className={style.menu_item} href="/Services">
            Services
          </a>
        </li>
        <li>
          <a className={style.menu_item} href="/property-search">
            Rental
          </a>
        </li>
        <li>
          <a className={style.menu_item} href="/application">
            Application
          </a>
        </li>
        <li>
          <a className={style.menu_item} href="/Favorites">
            Favorites
          </a>
        </li>
        <li>
          <a className={style.menu_item} href="/###">
            Random name
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
