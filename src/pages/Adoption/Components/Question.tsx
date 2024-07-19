import styled from "styled-components";
import { IFAQ } from "../../../../public/utils";
import { IoIosArrowForward } from "react-icons/io";

export const Question = ({
  question,
  index,
}: {
  question: IFAQ;
  index: number;
}) => {
  return (
    <FAQ>
      <div>
        <span>{index}</span>
        <h1>{question.questionPL}</h1>
      </div>
      <button>
        <IoIosArrowForward />
      </button>
    </FAQ>
  );
};

const FAQ = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.secondaryBackground};
  gap: 1rem;
  color: ${(props) => props.theme.mainText};
  box-shadow: 0 8px 32px 5px ${(props) => props.theme.shadow};
  border-radius: 10px;
  // border: 1px solid ${(props) => props.theme.mainText};
  font-family: "Roboto", sans-serif;

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
      font-weight: 300;
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
