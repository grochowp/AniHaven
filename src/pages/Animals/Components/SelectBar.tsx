import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useSelectBar } from "../../../contexts/SelectBarContext";

export const SelectBar = () => {
  const { t } = useTranslation();

  const {
    type,
    age,
    sex,
    handleTypeChange,
    handleAgeChange,
    handleSexChange,
    handleReset,
  } = useSelectBar();
  return (
    <Container>
      <div className="inside-container">
        <Select>
          <div>
            <h1>{t("type")}</h1>
          </div>
          <div className="options">
            <div>
              <input
                type="checkbox"
                id="type-all"
                checked={type === "All"}
                onChange={() => handleTypeChange("All")}
              />
              <label htmlFor="type-all">{t("all")}</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="type-dog"
                checked={type === "Dog"}
                onChange={() => handleTypeChange("Dog")}
              />
              <label htmlFor="type-dog">{t("dog")}</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="type-cat"
                checked={type === "Cat"}
                onChange={() => handleTypeChange("Cat")}
              />
              <label htmlFor="type-cat">{t("cat")}</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="type-other"
                checked={type === "Other"}
                onChange={() => handleTypeChange("Other")}
              />
              <label htmlFor="type-other">{t("other")}</label>
            </div>
          </div>
        </Select>

        <Select>
          <div>
            <h1>{t("age")}</h1>
          </div>
          <div className="options">
            <div>
              <input
                type="checkbox"
                id="age-all"
                checked={age === "All"}
                onChange={() => handleAgeChange("All")}
              />
              <label htmlFor="age-all">{t("all")}</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="age-1"
                checked={age === "1"}
                onChange={() => handleAgeChange("1")}
              />
              <label htmlFor="age-1">{t("age1")}</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="age-2"
                checked={age === "2"}
                onChange={() => handleAgeChange("2")}
              />
              <label htmlFor="age-2">{t("age2")}</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="age-3"
                checked={age === "3"}
                onChange={() => handleAgeChange("3")}
              />
              <label htmlFor="age-3">{t("age3")}</label>
            </div>
          </div>
        </Select>

        <Select>
          <div>
            <h1>{t("sex")}</h1>
          </div>
          <div className="options">
            <div>
              <input
                type="checkbox"
                id="sex-all"
                checked={sex === "All"}
                onChange={() => handleSexChange("All")}
              />
              <label htmlFor="sex-all">{t("all")}</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="sex-male"
                checked={sex === "Male"}
                onChange={() => handleSexChange("Male")}
              />
              <label htmlFor="sex-male">{t("male")}</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="sex-female"
                checked={sex === "Female"}
                onChange={() => handleSexChange("Female")}
              />
              <label htmlFor="sex-female">{t("female")}</label>
            </div>
          </div>
        </Select>
        <button onClick={handleReset}>Reset</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 15rem;
  position: fixed;
  top: 4rem;
  left: 2rem;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media (min-width: 1921px) {
    left: 50%;
    transform: translateX(-385%);
  }

  .inside-container {
    width: 70%;
    height: 90%;
    background-color: ${(props) => props.theme.secondaryBackground};
    box-shadow: 1px 1px 16px ${(props) => props.theme.shadow};
    border-radius: 10px;
    color: ${(props) => props.theme.mainText};
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    button {
      position: absolute;
      width: 80%;
      height: 2rem;
      border: 1px solid #c30010;
      letter-spacing: 0.1rem;
      font-size: 1.05rem;
      background: transparent;
      color: #c30010;
      border-radius: 5px;
      bottom: 1rem;
      left: 1rem;
      cursor: pointer;
      transition: 1s;

      &:hover {
        transform: scale(1.05);
      }

      @media (max-width: 960px) {
        display: none;
      }
    }
  }

  @media (max-width: 960px) {
    width: 70vw;
    min-width: 310px;
    height: max-content;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    margin: -2rem 0 1rem 0;

    .inside-container {
      width: 100%;
      gap: 0rem;
      left: 0;

      &:last-child {
        padding-bottom: 1rem;
      }
    }
  }
`;

const Select = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;

  .options {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    gap: 0.25rem;

    input[type="checkbox"]:not(:checked),
    input[type="checkbox"]:not(:checked) ~ label {
      opacity: 0.5;
    }

    input[type="checkbox"] {
      -webkit-appearance: none;
      appearance: none;
      background-color: #f0f0f0;
      margin: 0;
      width: 1rem;
      height: 1rem;
      border: 0.2rem solid ${(props) => props.theme.mainText};
      border-radius: 50%;
      transform: translateY(3px);
    }

    input[type="checkbox"]:checked {
      background-color: #212121;
    }

    @media (max-width: 960px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 0.5rem;

      div {
        display: flex;
        gap: 0.25rem;
      }

      label {
        cursor: pointer;
        padding-left: 0rem;
        transform: translateY(3px);
      }
    }
  }

  h1 {
    position: relative;
    margin-bottom: 2rem;
  }

  h1::after {
    content: "";
    width: 130px;
    height: 1px;
    position: absolute;
    top: 2.5rem;
    left: 0rem;
    background: ${(props) => props.theme.mainText};

    @media (max-width: 960px) {
      width: 65px;
    }
  }

  input {
    cursor: pointer;
  }

  label {
    cursor: pointer;
    padding-left: 0.5rem;
  }
`;
