import styled from "styled-components";
import { GiSittingDog } from "react-icons/gi";
import { useTranslation } from "react-i18next";

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <BackgroundImage />
      <Content>
        <section className="Title">
          <h1>
            <strong>AniHaven</strong> Rescuing Lives!
          </h1>
        </section>
        <section className="Buttons">
          <div>
            <GiSittingDog />
            <h2>{t("dogsButton")}</h2>
          </div>
          <div>
            <GiSittingDog />
            <h2>{t("catsButton")}</h2>
          </div>
          <div>
            <GiSittingDog />
            <h2>{t("otherAnimalsButton")}</h2>
          </div>
          <div>
            <GiSittingDog />
            <h2>{t("adoptionButton")}</h2>
          </div>
        </section>
      </Content>
    </Container>
  );
};

const Container = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100vw;
  max-width: 1920px;
  min-height: 100vh;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 1920px;
  height: 100%;
  background-image: url("images/MainImage.png");
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const Content = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1920px;
  padding-bottom: 3rem;

  .Title {
    padding-left: 6rem;
    color: ${(props) => props.theme.secondaryTest};
    font: 400 normal 0 "Inder", sans-serif;

    strong {
      font-size: clamp(3rem, 5vw, 5rem);
      margin-right: 1rem;
    }
    h1 {
      margin: 0;
      font-size: clamp(2rem, 3vw, 2.5rem);
    }
  }

  .Buttons {
    display: flex;
    flex-direction: rows;
    justify-content: space-around;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: clamp(7.5rem, 15vw, 15rem);
    height: clamp(10rem, 20vw, 20rem);
    background: ${(props) => props.theme.gradientBackground};
    background: ${(props) => props.theme.gradientBackgroundSec};
    color: ${(props) => props.theme.mainText};
    border-radius: 1rem;

    svg {
      width: clamp(3rem, 6vw, 6rem);
      height: clamp(3rem, 6vw, 6rem);
      padding-bottom: clamp(0rem, 3vw, 3rem);
    }

    h2 {
      font: 400 normal clamp(1rem, 2vw, 2rem) "Inder", sans-serif;
    }
  }
`;
