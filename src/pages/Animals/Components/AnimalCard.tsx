import styled from "styled-components";
import { IoIosMale, IoIosFemale } from "react-icons/io";
import { IAnimals } from "../../../../public/utils.ts";
import { memo } from "react";

export const AnimalCard = memo(
  ({ animal, language }: { animal: IAnimals; language: string }) => {
    return (
      <Container>
        <img src={animal.imageLink} alt={animal.name}></img>
        <div className="header">
          <h1>{animal.name}</h1>
          <div>
            {animal.sex === "Male" ? (
              <IoIosMale style={{ color: "#0096FF" }} />
            ) : (
              <IoIosFemale style={{ color: "#FFC0CB " }} />
            )}
            <h2>{language === "en" ? animal.typeENG : animal.typePL}</h2>
          </div>
        </div>
        <p>
          {language === "en" ? animal.descriptionENG : animal.descriptionPL}
        </p>
        <span>Adopt me!</span>
      </Container>
    );
  }
);

const Container = styled.div`
  width: 19rem;
  height: 24rem;
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.mainText};
  box-shadow: 0 8px 32px 10px ${(props) => props.theme.shadow};
  border-radius: 10px;
  font-family: "Roboto", sans-serif;

  img {
    width: 100%;
    height: 12.25rem;
    border-radius: 10px 10px 0 0;
  }

  .header {
    display: flex;
    justify-content: space-between;

    h1 {
      margin: 0.5rem 0 0.5rem 1rem;
      font-weight: 400;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      opacity: 0.65;

      svg {
        width: 20px;
        height: 20px;
      }

      h2 {
        margin: 0.5rem 1rem 0.5rem 0;
        font-weight: 300;
        font-size: 1.25rem;
      }
    }
  }

  p {
    margin: 1rem;
    opacity: 0.65;
    height: 20%;
  }

  span {
    display: flex;
    justify-content: flex-end;
    margin-right: 1rem;
    cursor: pointer;
  }
`;
