import React from "react";
import styled from "styled-components";
import { PawIcon } from "../../../components/PawIcon";
import { adoptionQuestions, IFAQ } from "../../../../public/utils";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface IAnswer {
  question: IFAQ;
  selectedQuestionIndex: number;
  handleChangeQuestion: (index: number) => void;
}

export const Answer: React.FC<IAnswer> = ({
  question,
  selectedQuestionIndex: selectedIndex,
  handleChangeQuestion,
}) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const navigate = useNavigate();

  return (
    <AnswerContainer>
      <div className="inner-container">
        <Content>
          <PawIcon
            text={
              currentLanguage == "en"
                ? question.questionENG
                : question.questionPL
            }
          />
          <p>
            {currentLanguage == "en" ? question.answerENG : question.answerPL}
          </p>
        </Content>
        <Buttons>
          <button
            style={{ opacity: selectedIndex === 0 ? "0" : "1" }}
            onClick={() => handleChangeQuestion(selectedIndex - 1)}
          >
            {t("previous")}
          </button>
          {selectedIndex === adoptionQuestions.length - 1 ? (
            <button onClick={() => navigate("/contact")}>{t("adopt")}</button>
          ) : (
            <button onClick={() => handleChangeQuestion(selectedIndex + 1)}>
              {t("next")}
            </button>
          )}
        </Buttons>
      </div>
    </AnswerContainer>
  );
};

const AnswerContainer = styled.div`
  width: calc(60vw - 10rem);
  display: flex;
  justify-content: center;
  align-items: center;

  .inner-container {
    // background-color: ${(props) => props.theme.secondaryBackground};
    width: 80%;
    height: 80%;
    max-height: 45rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.mainText};
    // box-shadow: 0 8px 32px 10px ${(props) => props.theme.shadow};
    border-radius: 10px;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 1350px) {
    width: calc(60vw - 7.5rem);

    .inner-container {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 1.75rem;
    display: flex;
  }

  p {
    font-family: "Roboto", sans-serif;
    width: 90%;
    font-weight: 300;
    line-height: 1.5rem;
    font-size: 1.25rem;

    @media (max-width: 1350px) {
      font-size: 1rem;
    }
  }
`;

const Buttons = styled.div`
  margin-bottom: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-around;

  button {
    width: 10rem;
    height: 2.75rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.mainText};
    color: ${(props) => props.theme.mainText};
    border-radius: 10px;
    font-size: 1.15rem;
    cursor: pointer;
    box-shadow: 0 8px 32px 3px ${(props) => props.theme.shadow};
    &:hover {
      transform: scale(0.95);
    }
  }

  @media (max-width: 1350px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 1000px) {
    margin-bottom: 1rem;
  }
`;
