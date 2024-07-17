import React, { useState } from "react";
import styled from "styled-components";
import { CiMenuBurger } from "react-icons/ci";
import { iThemes } from "../../../reusableInterfaces";

import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const NavbarMobile: React.FC<iThemes> = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const handleMenuState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar isOpen={isOpen}>
      <div className="closed-navbar">
        <CiMenuBurger onClick={handleMenuState} />
      </div>
      <div className="open-navbar">
        <div className="close-button">
          <CiMenuBurger onClick={handleMenuState} />
        </div>
        <div className="links">
          <Link className={pathname === "" ? "selected" : ""} to="/">
            AniHaven
          </Link>
          <Link className={pathname === "news" ? "selected" : ""} to="/news">
            {t("newsButton")}
          </Link>
          <Link
            className={pathname === "animals" ? "selected" : ""}
            to="/animals"
          >
            {t("animalButton")}
          </Link>
          <Link
            className={pathname === "adoption" ? "selected" : ""}
            to="/adoption"
          >
            {t("adoptionButton")}
          </Link>
          <Link
            className={pathname === "contact" ? "selected" : ""}
            to="/contact"
          >
            {t("contactButton")}
          </Link>
        </div>
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
      </div>
    </Navbar>
  );
};

interface INavbar {
  isOpen: boolean;
}

const Navbar = styled.div<INavbar>`
  @media (min-width: 951px) {
    display: none;
  }
  .closed-navbar {
    display: ${(props) => (props.isOpen ? "none" : "flex")};
    margin-right: 1rem;
    cursor: pointer;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  .open-navbar {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
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

      a {
        margin-left: 3rem;
        text-decoration: none;
        color: #d9d9d9;
        cursor: pointer;
        opacity: 0.5;
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
