// note: this file is header component

import React, { useContext, useState } from "react";

import Link from "next/link";

//style
import styles from "../../styles/navbar.module.scss";

//icons
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

//components
import HamburgerMenu from "./hamburgerMenu";
import Button from "./button";
import { themeContext } from "../../context/themeProvider";

const Navbar = () => {
  const [checked, setChecked] = useState<boolean>(true);
  const { state, dispatch } = useContext(themeContext);
  
  const p = () => {
    setChecked(!checked);
   
    if (checked) {
      dispatch({ type: "dark", payload: "dark" });
    } else {
      dispatch({ type: "light", payload: "light" });
    }
  };

  return (
    <header
      className={styles.header}
    >
      <div className={styles.left}>
        <Button>ورود</Button>
        <Button>ثبت نام</Button>
      </div>

      <nav className={styles.center}>
        <MdOutlineNightlight size={20} />
        <label className={styles.switch}>
          <input type="checkbox" checked={checked} onClick={p} />
          <span className={styles.slider}></span>
        </label>
        <MdOutlineLightMode size={20} />
      </nav>

      <nav className={styles.right}>
        <Link href="/aboutUs">درباره ی ما</Link>
        <Link href="/landingpage">صفحه ی نخست</Link>
      </nav>
      {/* hamburgger menu just in mobile size */}
      <HamburgerMenu />
    </header>
  );
};
export default Navbar;
