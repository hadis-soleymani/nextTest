import type { NextPage } from "next";
import React, { useContext } from "react";
import ThemeProvider, { themeContext } from "../context/themeProvider";
import AboutUs from "./aboutUs";

const Home: NextPage = () => {
  const { state } = useContext(themeContext);
  console.log(state);
  return (
    <ThemeProvider>
      <div >
        <AboutUs />
      </div>
    </ThemeProvider>
  );
};

export default Home;
