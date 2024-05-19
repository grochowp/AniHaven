import { useTranslation } from "react-i18next";
import { GiSittingDog } from "react-icons/gi";
import { FaCat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PiBirdFill } from "react-icons/pi";
import { IoIosInformationCircle } from "react-icons/io";

export const Cards = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Content>
      <section className="Title">
        <h1>
          <strong>AniHaven</strong> {t("intro")}
        </h1>
      </section>
      <section className="Buttons">
        <div onClick={() => navigate("/")}>
          <GiSittingDog />
          <h2>{t("dogsButton")}</h2>
        </div>
        <div onClick={() => navigate("/")}>
          <FaCat />
          <h2>{t("catsButton")}</h2>
        </div>
        <div onClick={() => navigate("/")}>
          <PiBirdFill />
          <h2>{t("otherAnimalsButton")}</h2>
        </div>
        <div onClick={() => navigate("/adoption")}>
          <IoIosInformationCircle />
          <h2>{t("adoptionButton")}</h2>
        </div>
      </section>
    </Content>
  );
};

const Content = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1920px;
  padding-bottom: 3rem;

  .Title {
    padding-left: clamp(1rem, 7vw, 9rem);
    color: ${(props) => props.theme.secondaryText};

    strong {
      font-size: clamp(2.25rem, 5vw, 5rem);
      margin-right: 1rem;
    }
    h1 {
      margin: 0;
      font-size: clamp(1rem, 3vw, 2.5rem);
    }
  }

  .Buttons {
    display: flex;
    flex-direction: rows;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 0.5rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      width: clamp(7.5rem, 14vw, 12rem);
      height: clamp(8.5rem, 17vw, 15rem);
      background: ${(props) => props.theme.gradientBackground};
      background: ${(props) => props.theme.gradientBackgroundSec};
      color: ${(props) => props.theme.mainText};
      border-radius: 1rem;
      cursor: pointer;
      gap: 2rem;
      padding-bottom: clamp(1rem, 2vw, 2rem);
      transition: 1s;

      &:hover {
        transform: translate(5%, -2.5%);
      }

      svg {
        width: clamp(3rem, 5vw, 5rem);
        height: clamp(3rem, 5vw, 5rem);
      }

      h2 {
        font: 400 normal clamp(0.85rem, 1.5vw, 1.5rem) "Inder", sans-serif;
      }
    }
  }
`;
