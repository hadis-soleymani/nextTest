// note: this file is header component

import React from "react";

import Link from "next/link";

//style
import styles from "../../styles/navbar.module.scss";

//icons
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

//components
import HamburgerMenu from "./hamburgerMenu";
import Button from "./button";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Button>ورود</Button>
        <Button>ثبت نام</Button>
      </div>

      <nav className={styles.center}>
        <MdOutlineNightlight />
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
        <MdOutlineLightMode />
      </nav>

      <nav className={styles.right}>
        <Link href="#">درباره ی ما</Link>
        <Link href="#">صفحه ی نخست</Link>
      </nav>
      {/* hamburgger menu just in mobile size */}
      <HamburgerMenu />
    </header>
  );
};
export default Navbar;
