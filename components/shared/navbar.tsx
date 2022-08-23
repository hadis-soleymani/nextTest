// note: this file is header component

import React, { useContext, useState, useEffect } from "react";

import Link from "next/link";

//style
import styles from "../../styles/navbar.module.scss";

//icons
import { MdLightMode, MdNightlight } from "react-icons/md";

//components
import HamburgerMenu from "./hamburgerMenu";
import Button from "./button";
import { themeContext } from "../../context/themeProvider";

const Navbar = () => {
  const [checked, setChecked] = useState<boolean>(true);
  const { state, dispatch } = useContext(themeContext);

  const p = (e: React.FormEvent) => {
    if (checked) {
      setChecked(false);
      dispatch({ type: "dark", payload: "dark" });
    } else {
      setChecked(true);
      dispatch({ type: "light", payload: "light" });
    }
  };

  return (
    <div style={{ backgroundColor: "#000" }}>
      <header
        className={state.theme === "dark" ? styles.header_dark : styles.header}
      >
        <div className={styles.left}>
          <Button>ورود</Button>
          <Button>ثبت نام</Button>
        </div>

        <nav className={styles.center}>
          <MdNightlight
            size={20}
            color={state.theme === "dark" ? "#FFB320" : "#000"}
          />
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={checked}
              onClick={p}
              onChange={(e) => p(e)}
            />
            <span className={styles.slider}></span>
          </label>
          <MdLightMode
            size={20}
            color={state.theme === "light" ? "#FFB320" : "#000"}
          />
        </nav>

        <nav className={styles.right}>
          <Link href="/aboutUs">درباره ی ما</Link>
          <Link href="/landingpage">صفحه ی نخست</Link>
        </nav>
        {/* hamburgger menu just in mobile size */}
        <HamburgerMenu />
      </header>
    </div>
  );
};
export default Navbar;
