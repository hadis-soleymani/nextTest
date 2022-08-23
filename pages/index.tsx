import type { NextPage } from "next";
import React, { useContext } from "react";
import ThemeProvider, { themeContext } from "../context/themeProvider";
import styles from "../styles/Home.module.scss";
import AboutUs from "./aboutUs";

const Home: NextPage = () => {
  const { state } = useContext(themeContext);
  console.log(state);
  return (
    <ThemeProvider>
      <div className={styles.container}>
        <AboutUs />
      </div>
    </ThemeProvider>
  );
};

export default Home;
