import styled from "styled-components";
import { BiSolidDog } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Container>
      <div className="navbar-left" onClick={() => navigate("/")}>
        <BiSolidDog />
        <h1>AniHaven</h1>
      </div>
      <div className="navbar-right">
        <Link to="/news">{t("newsButton")}</Link>
        <Link to="/animals">{t("animalButton")}</Link>
        <Link to="/adoption">{t("adoptionButton")}</Link>
        <Link to="/contact">{t("contactButton")}</Link>
        <div className="lang">
          <img
            className={`${"pl" === i18n.language && "selected"}`}
            onClick={() => changeLanguage("pl")}
            src="/public/images/polishFlag.png"
            alt="polish flag"
          />
          <img
            className={`${"en" === i18n.language && "selected"}`}
            onClick={() => changeLanguage("en")}
            src="/public/images/ukFlag.png"
            alt="UK flag"
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.header`
  background-color: ${(props) => props.theme.secondaryBackground};
  height: 5rem;
  width: 100vw;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: 400 normal 1rem "Inika", sans-serif;
  color: ${(props) => props.theme.mainText};

  .navbar-left {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    cursor: pointer;

    svg {
      width: 4rem;
      height: 4rem;
    }
  }

  .navbar-right {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-right: 1rem;
    font-size: 1.5rem;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.mainText};
      cursor: pointer;
    }

    .lang {
      display: flex;
      background-color: ${(props) => props.theme.mainBackground};
      height: max-content;
      width: max-content;
      border-radius: 10rem;
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
`;
