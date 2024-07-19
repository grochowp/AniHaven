import styled from "styled-components";
import { PawIcon } from "../../../components/PawIcon";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { animalData } from "../../../../public/utils";

export const RecentlyFound = () => {
  const [selectedAnimalIndex, setSelectedAnimalIndex] = useState<number>(0);
  const animal = animalData[selectedAnimalIndex];
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleChangeAnimal = (index: number) => {
    if (index < 0 || index > animalData.length - 1) return;
    setSelectedAnimalIndex(index);
  };
  return (
    <Content>
      <PawIcon text={t("recentlyFound")} />

      <article className="contentContainer">
        <Image>
          <img src={animal.imageLink} alt="animal image" />
          <Link to="/contact">
            <button>
              Adopt <CiHeart />
            </button>
          </Link>
        </Image>
        <Informations>
          <div className="info">
            <h1>{t("name")}</h1>
            <h2>{animal.name}</h2>
          </div>
          <div className="info">
            <h1>{t("age")}</h1>
            <h2>{animal.age}</h2>
          </div>
          <div className="info">
            <h1>{t("sex")}</h1>
            <h2>{currentLanguage == "en" ? animal.sex : animal.sexPL}</h2>
          </div>
          <div className="info">
            <h1>{t("about")}</h1>
            <h2 className="description">
              {currentLanguage == "en"
                ? animal.longDescriptionENG
                : animal.longDescriptionPL}
            </h2>
          </div>
        </Informations>
      </article>
      <Switch>
        <button onClick={() => handleChangeAnimal(selectedAnimalIndex - 1)}>
          {"<"}
        </button>
        <button onClick={() => handleChangeAnimal(selectedAnimalIndex + 1)}>
          {">"}
        </button>
      </Switch>
    </Content>
  );
};

const Content = styled.section`
  background-color: ${(props) => props.theme.mainBackground};
  transition: 1.5s;
  padding: 5rem 0 2.5rem 0;

  .contentContainer {
    display: flex;
    padding: 2.5rem clamp(1rem, 2.5vw, 5rem);
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Switch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 2rem;
  width: 100vw;
  max-width: 1920px;
  transition: 1s;

  button {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    font-size: 2rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.mainText};
    color: ${(props) => props.theme.mainText};
    cursor: pointer;
    transition: 1s;

    &:hover {
      transform: scale(0.95);
    }
  }
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  transition: 1s;

  a {
    text-decoration: none;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(10rem, 15vw, 12rem);
    height: clamp(3rem, 3.5vw, 3.5rem);
    border: none;
    border-radius: 1rem;
    border: 1px solid ${(props) => props.theme.mainText};
    background-color: transparent;
    color: ${(props) => props.theme.mainText};
    font-size: clamp(1.25rem, 1.5vw, 1.5rem);
    box-shadow: -5px 5px 5px ${(props) => props.theme.shadow};

    cursor: pointer;
    transition: 1s;

    gap: 5px;

    svg {
      font-size: 120%;
    }
    &:hover {
      transform: scale(0.95);
    }
  }

  img {
    width: clamp(20rem, 40vw, 40rem);
    aspect-ratio: 24/15;
    border-radius: 1rem;
    box-shadow: 10px 10px 5px ${(props) => props.theme.shadow};

    @media (max-width: 770px) {
      width: clamp(17.5rem, 80vw, 30rem);
    }
  }
`;

const Informations = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;

  &::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 17.5rem;
    transform: translateX(clamp(6.25rem, 14.5vw, 14.5rem));
    background-color: ${(props) => props.theme.mainText};
  }

  .info {
    gap: clamp(2.5rem, 5vw, 5rem);
    display: flex;
    color: ${(props) => props.theme.mainText};
    transition: 1s;

    h1 {
      display: flex;
      justify-content: flex-end;
      width: clamp(5rem, 12vw, 12rem);

      height: 5rem;
      font: 400 normal clamp(1.25rem, 2vw, 2rem) "Inika";
      margin: 0;
    }

    h2 {
      font: 400 normal clamp(1.35rem, 1.5vw, 1.5rem) "Inika";
      margin: 0;
      transform: translateY(7px);
      @media (max-width: 770px) {
        transform: translateY(0);
      }
    }

    .description {
      width: clamp(10rem, 30vw, 30rem);
      font: 300 normal clamp(0.75rem, 1vw, 1rem) "Karla", "sans-serif";
      margin: 0;
      transform: translateY(10px);
      flex-wrap: wrap;
    }
  }

  @media (max-width: 770px) {
    // display: none;
  }
`;
