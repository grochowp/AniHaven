import styled, { css } from "styled-components";
import { IFAQ } from "../../../../public/utils";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import {
  hideText,
  showText,
  slideDown,
  slideUp,
} from "../../../animations/questionsDisplay";

interface IQuestion {
  question: IFAQ;
  index: number;
  selectedQuestionIndex: number;
  handleChangeQuestion: (index: number) => void;
}

export const Question: React.FC<IQuestion> = ({
  question,
  index,
  selectedQuestionIndex: selectedIndex,
  handleChangeQuestion,
}) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <FAQ
        onClick={() => handleChangeQuestion(index)}
        isSelected={index === selectedIndex}
      >
        <div>
          <span>{index + 1}</span>
          <h1>
            {currentLanguage === "en"
              ? question.questionENG
              : question.questionPL}
          </h1>
        </div>
        <button>
          <IoIosArrowForward />
        </button>
      </FAQ>
      <MobileAnswer isSelected={index === selectedIndex}>
        <p>
          {currentLanguage === "en" ? question.answerENG : question.answerPL}
        </p>
      </MobileAnswer>
    </div>
  );
};

interface IStyledFAQ {
  isSelected: boolean;
}

const MobileAnswer = styled.div<IStyledFAQ>`
  background: ${(props) => props.theme.secondaryBackground};
  align-items: center;
  z-index: 0;
  overflow: hidden;
  max-height: ${(props) => (props.isSelected ? "1000px" : "0")};
  opacity: ${(props) => (props.isSelected ? "1" : "0")};
  visibility: ${(props) => (props.isSelected ? "visible" : "hidden")};
  border-radius: 0 0 10px 10px;
  transition: max-height 2s ease-in-out, opacity 2s ease-in-out, visibility 2s;

  animation: ${(props) =>
    props.isSelected
      ? css`
          ${slideDown} 3s forwards
        `
      : css`
          ${slideUp} 1.5s forwards
        `};

  p {
    margin: 2rem 5rem 2rem 2rem;
    color: ${(props) => props.theme.mainText};
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    line-height: 1.2rem;
    animation: ${(props) =>
      props.isSelected
        ? css`
            ${showText} 3s forwards
          `
        : css`
            ${hideText} 1.5s forwards
          `};
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const FAQ = styled.li<IStyledFAQ>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.secondaryBackground};
  gap: 1rem;
  color: ${(props) => props.theme.mainText};
  box-shadow: 2px 2px 16px ${(props) => props.theme.shadow};
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  transform: ${(props) => (props.isSelected ? "translateX(30px)" : "")};
  transition: 1s;
  cursor: pointer;
  opacity: ${(props) => (props.isSelected ? "" : "0.25")};

  &:hover {
    transform: ${(props) => (props.isSelected ? "" : "translateX(15px)")};
    transition: 1s;
    opacity: ${(props) => (props.isSelected ? "" : "0.55")};
  }

  @media (max-width: 768px) {
    transform: translateX(0);
    border-radius: 10px 10px 0 0;
    box-shadow: 2px 2px 16px ${(props) => props.theme.shadow};

    &:hover {
      transform: translateX(0);
    }
  }

  div {
    width: 90%;
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 5rem;

    span {
      margin-left: 1rem;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${(props) => props.theme.mainText};
      border-radius: 50%;
    }

    h1 {
      font-weight: 400;
      width: 75%;
      @media (max-width: 1350px) {
        font-size: 1rem;
      }
    }
  }

  button {
    margin-right: 1rem;
    border: none;
    font-size: 2rem;
    display: flex;
    background-color: transparent;
    cursor: pointer;
    position: relative;

    svg {
      color: ${(props) => props.theme.mainText};

      @media (max-width: 768px) {
        transform: rotate(90deg) translateX(1px);
      }
    }

    &::before {
      content: "";
      width: 1px;
      height: 48px;
      position: absolute;
      background-color: ${(props) => props.theme.mainText};
      left: -1rem;
      top: -0.4rem;
    }
    @media (max-width: 1350px) {
      margin-right: 0.5rem;

      &::before {
        left: -0.5rem;
      }
    }
  }
`;
