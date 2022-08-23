// note: in this file I create hamburger menu component in mobile size

import React, { useState } from "react";
import Link from "next/link";
//styles
import styles from "../../styles/hamburgerMenu.module.scss";
//icons
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import styled from "styled-components";

interface Props {
  first?: boolean;
  open?: boolean;
}
//styled components
const Div = styled.div<Props>`
  display: none;
  @media (max-width: 968px) {
    display: ${(props) => (!props.first ? "flex" : "none")};
    width: 0vw;
    height: 0vh;
    padding: 0;
    margin: 0;
    background-color: #187df1;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 20;
    align-items: center;
    flex-direction: column;
    color: #fff;
    cursor: pointer;
    animation-timing-function: linear;
    animation-name: ${(props) => (!props.open ? "menu_close" : "menu_open")};
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    @keyframes menu_open {
      0% {
        width: 0vw;
        height: 0;
        border-radius: 0 0 0 50%;
      }
      10% {
        width: 10vw;
        height: 10vw;
        border-radius: 0 0 0 10vw;
      }
      20% {
        width: 20vw;
        height: 20vw;
        border-radius: 0 0 0 20vw;
      }
      40% {
        width: 50vw;
        height: 50vw;
        border-radius: 0 0 0 50vw;
      }
      50% {
        width: 80vw;
        height: 80vw;
        border-radius: 0 0 0 80vw;
      }
      75% {
        width: 100vw;
        height: 100vh;
        border-radius: 0 0 0 100vw;
      }
      100% {
        width: 100vw;
        height: 100vh;
        border-radius: 0%;
      }
    }

    @keyframes menu_close {
      0% {
        width: 100vw;
        height: 100vh;
        border-radius: 0%;
      }
      10% {
        width: 100vw;
        height: 100vh;
        border-radius: 0 0 0 100vw;
      }
      20% {
        width: 80vw;
        height: 80vw;
        border-radius: 0 0 0 80vw;
      }
      40% {
        width: 50vw;
        height: 50vw;
        border-radius: 0 0 0 50vw;
      }
      50% {
        width: 20vw;
        height: 20vw;
        border-radius: 0 0 0 20vw;
      }
      75% {
        width: 10vw;
        height: 10vw;
        border-radius: 0 0 0 10vw;
      }
      100% {
        width: 0vw;
        height: 0;
        border-radius: 0 0 0 50%;
      }
    }
  }
`;
const Ul = styled.ul<Props>`
  display: ${(props) => (props.open ? "flex" : "none")};
  margin:0;
  text-align:center;
  padding-left: 0;
`;

type ClickObject = {
  خانه?: false;
  فروشگاه?: false;
  AboutMe?: false;
  Expriences?: false;
  Works?: false;
  Blog?: false;
  ContactUs?: false;
};

const HamburgerMenu = () => {
  //for scroll with click
  const [clicked, setClicked] = useState<ClickObject>({
    خانه: false,
    فروشگاه: false,
    AboutMe: false,
    Expriences: false,
    Works: false,
    Blog: false,
    ContactUs: false,
  });

  //open and close menu
  const [open, setOpen] = useState(false);

  //for prevent from closing animation at loading time
  const [first, setFirst] = useState(true);

  const clickedItem = () => {
    //  setClicked({ [event.target.textContent]: true });
    setOpen(!open);
  };

  //open & close hamburger menu
  const hamburger_change_state = () => {
    setOpen(!open);
    setFirst(false);
  };

  return (
    <>
      <GiHamburgerMenu
        className={styles.hamburger_icon}
        onClick={hamburger_change_state}
        size={"1.5rem"}
      />

      <Div open={open} first={first}>
        {/* close icon */}
        <div className={styles.close_container}>
          <AiOutlineClose onClick={hamburger_change_state} size={"1.5rem"} />
        </div>

        {/* list of items in menu */}
        <Ul
          className={styles.hamburger_list}
          onClick={hamburger_change_state}
          open={open}
        >
          <Link href="/aboutUs"> درباره ی ما</Link>
          <Link href="/landingpage"> صفحه ی نخست</Link>
        </Ul>
      </Div>
    </>
  );
};

export default HamburgerMenu;
