import styled from "styled-components";
import { AnimalCard } from "./AnimalCard";
import { IAnimals, animalData } from "../../../../public/utils.ts";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useSelectBar } from "../../../contexts/SelectBarContext.tsx";

export const CardsContainer = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { type, age, sex } = useSelectBar();
  const [animalDataFiltered, setAnimalDataFiltered] =
    useState<IAnimals[]>(animalData);

  useEffect(() => {
    let filteredData = animalData;

    if (type !== "All") {
      filteredData = filteredData.filter((animal) => animal.typeENG === type);
    }

    if (age !== "All") {
      filteredData = filteredData.filter(
        (animal) => animal.ageCategory === age
      );
    }

    if (sex !== "All") {
      filteredData = filteredData.filter((animal) => animal.sex === sex);
    }

    setAnimalDataFiltered(filteredData);
  }, [type, age, sex]);

  return (
    <Container>
      {animalDataFiltered.map((animal: IAnimals) => (
        <AnimalCard animal={animal} language={currentLanguage} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: calc(100vw - 15rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: clamp(2rem, 4vw, 4rem);
  overflow-y: auto;
  padding: 3rem 0 3rem clamp(17.5rem, 20vw, 20rem);

  @media (max-width: 960px) {
    width: 100vw;
    padding: 4rem 0 3rem 0;
  }
`;
