import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

//styles
import styles from "../../styles/button.module.scss";

//icons
import { FiUser } from "react-icons/fi";
import { themeContext } from "../../context/themeProvider";

//prop interface
interface Props {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
  const { state } = useContext(themeContext);
  const router = useRouter();

  return (
    <div className={styles.button_container}>
      <button
        className={state.theme === "light" ? styles.button : styles.button_dark}
        onClick={() => router.push("/landingpage")}
      >
        {children}
      </button>
      <FiUser size={20} />
    </div>
  );
};

export default Button;
