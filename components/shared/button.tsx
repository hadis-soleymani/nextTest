import React from "react";
import styles from "../../styles/button.module.scss";
import { BiDetail } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
interface Props {
  children: React.ReactNode;
}
const Button: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.button_container}>
      <button className={styles.button}>{children}</button>
      <FiUser size={20} />
    </div>
  );
};

export default Button;
