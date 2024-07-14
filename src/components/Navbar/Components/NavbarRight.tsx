import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { iThemes } from "../../../reusableInterfaces";
import styled from "styled-components";

export const NavbarRight: React.FC<iThemes> = ({ theme, setTheme }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  return (
    <Navbar>
      <Link className={pathname === "news" ? "selected" : ""} to="/news">
        {t("newsButton")}
      </Link>
      <Link className={pathname === "animals" ? "selected" : ""} to="/animals">
        {t("animalButton")}
      </Link>
      <Link
        className={pathname === "adoption" ? "selected" : ""}
        to="/adoption"
      >
        {t("adoptionButton")}
      </Link>
      <Link className={pathname === "contact" ? "selected" : ""} to="/contact">
        {t("contactButton")}
      </Link>
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
    </Navbar>
  );
};

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(2rem, 3vw, 3rem);
  margin-right: 1rem;
  font-size: clamp(1.25rem, 1.5vw, 1.5rem);

  @media (max-width: 950px) {
    display: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.mainText};
    cursor: pointer;
    opacity: 0.5;
  }

  .selected {
    opacity: 1;
  }
  .lang {
    display: flex;
    background-color: ${(props) => props.theme.mainBackground};
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
`;
