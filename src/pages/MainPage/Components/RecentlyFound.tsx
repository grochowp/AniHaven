import styled from "styled-components";
import { PawIcon } from "../../../components/PawIcon";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { animalData } from "../../../../public/utils";
import { AnimatePresence, motion } from "framer-motion";

export const RecentlyFound = () => {
  const [selectedAnimalIndex, setSelectedAnimalIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const animal = animalData[selectedAnimalIndex];
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -200,
      opacity: 0,
    }),
  };

  const handleChange = (newIndex: number) => {
    if (newIndex < 0 || newIndex > animalData.length - 1) return;

    const newDirection = newIndex > selectedAnimalIndex ? 1 : -1;
    setDirection(newDirection);

    setTimeout(() => {
      setSelectedAnimalIndex(newIndex);
    }, 10);
  };

  return (
    <Content>
      <PawIcon text={t("recentlyFound")} />

      <article className="contentContainer">
        <AnimatePresence mode="wait">
          <MotionContainer
            key={selectedAnimalIndex}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            custom={direction}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <Image>
              <img src={animal.imageLink} alt="animal image" />
              <Link to="/contact">
                <button>
                  {t("adopt")} <CiHeart />
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
          </MotionContainer>
        </AnimatePresence>
      </article>
      <Switch>
        <button onClick={() => handleChange(selectedAnimalIndex - 1)}>
          {"<"}
        </button>
        <button onClick={() => handleChange(selectedAnimalIndex + 1)}>
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
`;

const MotionContainer = styled(motion.div)`
  display: flex;
  padding: 2.5rem clamp(1rem, 2.5vw, 5rem);
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
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
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    font-size: 1.5rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.mainText};
    color: ${(props) => props.theme.mainText};
    cursor: pointer;
    transition: 1s;

    &:hover {
      transform: scale(1.05);
      background-color: ${(props) => props.theme.shadow};
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
    box-shadow: 4px 4px 8px ${(props) => props.theme.secondaryBackground};
    cursor: pointer;
    transition: 1s;

    gap: 5px;

    svg {
      font-size: 120%;
    }

    &:hover {
      transform: scale(1.05);
      background-color: ${(props) => props.theme.shadow};
    }
  }

  img {
    width: clamp(20rem, 40vw, 40rem);
    aspect-ratio: 24/15;
    border-radius: 1rem;
    box-shadow: 4px 4px 8px ${(props) => props.theme.secondaryBackground};
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
      font: 400 normal clamp(1.25rem, 2vw, 2rem) "Roboto";
      margin: 0;
    }

    h2 {
      font: 400 normal clamp(1.35rem, 1.5vw, 1.5rem) "Roboto";
      margin: 0;
      transform: translateY(7px);
      @media (max-width: 770px) {
        transform: translateY(0);
      }
    }

    .description {
      width: clamp(10rem, 30vw, 30rem);
      font: 300 normal clamp(0.75rem, 1vw, 1rem) "Roboto", "sans-serif";
      margin: 0;
      transform: translateY(10px);
      flex-wrap: wrap;
    }
  }

  @media (max-width: 770px) {
    // display: none;
  }
`;
