import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CiMenuBurger } from "react-icons/ci";
import { iThemes } from "../../../reusableInterfaces";

import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { stagger, useAnimate } from "framer-motion";
import { IoMdClose } from "react-icons/io";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      // @ts-expect-error wrong types, but it`s from 3rd party library, can`t do much about it
      ...menuAnimations,
    ]);
  }, [isOpen, animate]);

  return scope;
}

export const NavbarMobile: React.FC<iThemes> = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  const navigate = useNavigate();

  const scope = useMenuAnimation(isOpen);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleMenuState = (link: string) => {
    navigate(link);
    setIsOpen(!isOpen);
  };

  return (
    <Navbar ref={scope}>
      <div className="closed-navbar">
        <CiMenuBurger onClick={() => setIsOpen(!isOpen)} />
      </div>
      <nav className="open-navbar">
        <div className="close-button">
          <IoMdClose onClick={() => setIsOpen(!isOpen)} />
        </div>
        <ul className="links">
          <li
            className={pathname === "" ? "selected" : ""}
            onClick={() => handleMenuState("/")}
          >
            AniHaven
          </li>
          {/* <Link className={pathname === "news" ? "selected" : ""} to="/news">
            {t("newsButton")}
          </Link>  TO-DO  */}
          <li
            className={pathname === "animals" ? "selected" : ""}
            onClick={() => handleMenuState("/animals")}
          >
            {t("animalButton")}
          </li>
          <li
            className={pathname === "adoption" ? "selected" : ""}
            onClick={() => handleMenuState("/adoption")}
          >
            {t("adoptionButton")}
          </li>
          <li
            className={pathname === "contact" ? "selected" : ""}
            onClick={() => handleMenuState("/contact")}
          >
            {t("contactButton")}
          </li>
        </ul>
        <div className="app-state">
          <div className="lang">
            <img
              className={`${theme === "light" && "selected"}`}
              onClick={() => setTheme("light")}
              src="/images/sun.png"
              alt="sun icon"
            />
            <img
              className={`${theme === "dark" && "selected"}`}
              onClick={() => setTheme("dark")}
              src="/images/moon.png"
              alt="moon icon"
            />
          </div>

          <div className="lang">
            <img
              className={`${"pl" === i18n.language && "selected"}`}
              onClick={() => changeLanguage("pl")}
              src="/images/polishFlag.png"
              alt="polish flag"
            />
            <img
              className={`${"en" === i18n.language && "selected"}`}
              onClick={() => changeLanguage("en")}
              src="/images/ukFlag.png"
              alt="UK flag"
            />
          </div>
        </div>
      </nav>
    </Navbar>
  );
};

const Navbar = styled.div`
  @media (min-width: 951px) {
    display: none;
  }

  .closed-navbar {
    margin-right: 1rem;
    cursor: pointer;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  .open-navbar {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: clamp(20rem, 20vw, 30rem);
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    .close-button {
      display: flex;
      width: 100%;
      justify-content: flex-end;

      svg {
        color: #d9d9d9;
        margin: 1.5rem 1rem 0 0;
        width: 2rem;
        height: 2rem;
      }
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-size: 1.75rem;
      width: 100%;

      li {
        margin-left: 3rem;
        text-decoration: none;
        color: #d9d9d9;
        cursor: pointer;
        opacity: 0.5;
        white-space: nowrap;
        overflow: visible;
        list-style-type: none;
      }

      .selected {
        opacity: 1;
      }
    }

    .app-state {
      display: flex;
      width: 100%;
      justify-content: space-around;
      margin-bottom: 1rem;

      .lang {
        display: flex;
        background-color: #212121;
        height: max-content;
        width: max-content;
        border-radius: 10rem;
        transition: 1s;

        img {
          cursor: pointer;
          height: 2rem;
          padding: 0.3rem;
          opacity: 0.3;
          transition: 1s;
        }

        .selected {
          opacity: 1;
          transition: 1s;
        }
      }
    }
  }
`;
