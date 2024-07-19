import styled from "styled-components";
import { adoptionQuestions, IFAQ } from "../../../public/utils";
import { Question } from "./Components/Question";
import { Answer } from "./Components/Answer";
import React, { useState } from "react";
import { show } from "../../animations/show";

const Adoption = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);

  const handleChangeQuestion = (index: number) => {
    if (index < 0 || index > adoptionQuestions.length - 1) return;
    setSelectedQuestionIndex(index);
  };

  return (
    <Container>
      <ul>
        {adoptionQuestions.map((question: IFAQ, index: number) => (
          <React.Fragment key={question.questionPL}>
            <Question
              question={question}
              index={index}
              selectedQuestionIndex={selectedQuestionIndex}
              handleChangeQuestion={handleChangeQuestion}
            />
          </React.Fragment>
        ))}
      </ul>

      <Answer
        question={adoptionQuestions[selectedQuestionIndex]}
        selectedQuestionIndex={selectedQuestionIndex}
        handleChangeQuestion={handleChangeQuestion}
      ></Answer>
    </Container>
  );
};

export default Adoption;

const Container = styled.article`
  animation: ${show} 2.5s;
  display: flex;
  background-color: ${(props) => props.theme.mainBackground};
  width: 100vw;
  max-width: 1920px;
  margin-top: 5rem;
  gap: 2rem;
  min-height: calc(100vh - 8rem);

  ul {
    display: flex;
    justify-content: center;
    margin-left: 3rem;
    flex-direction: column;
    gap: 2rem;
    padding: 0;
    min-width: 300px;
    width: 40vw;

    @media (max-width: 768px) {
      width: 90vw;
      margin-left: clamp(0.5rem, 3vw, 3rem);
    }
  }
`;
