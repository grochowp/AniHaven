import React from "react";
import styled from "styled-components";
import { PawIcon } from "../../../components/PawIcon";
import { adoptionQuestions, IFAQ } from "../../../../public/utils";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

  const [direction, setDirection] = React.useState(0);

  const handleChange = (newIndex: number) => {
    setDirection(newIndex > selectedIndex ? 1 : -1);
    handleChangeQuestion(newIndex);
  };

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
          <motion.p
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            custom={direction}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            key={selectedIndex}
          >
            {currentLanguage == "en" ? question.answerENG : question.answerPL}
          </motion.p>
        </Content>
        <Buttons>
          <button
            style={{ opacity: selectedIndex === 0 ? "0" : "1" }}
            onClick={() => handleChange(selectedIndex - 1)}
          >
            {t("previous")}
          </button>
          {selectedIndex === adoptionQuestions.length - 1 ? (
            <button onClick={() => navigate("/contact")}>{t("adopt")}</button>
          ) : (
            <button onClick={() => handleChange(selectedIndex + 1)}>
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
    width: 80%;
    height: 80%;
    max-height: 45rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.mainText};

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
    box-shadow: 2px 2px 16px ${(props) => props.theme.shadow};
    transition: 1s;
    &:hover {
      transform: scale(1.05);
      background-color: ${(props) => props.theme.shadow};
    }
  }

  @media (max-width: 1350px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 1000px) {
    margin-bottom: 1rem;
  }
`;
