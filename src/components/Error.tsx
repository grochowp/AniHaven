import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("error")}</h1>
      <Link to="../">
        <button>{t("errorButton")}</button>
      </Link>
    </Container>
  );
};

export default Error;

const Container = styled.article`
  display: flex;
  flex-direction: column;

  justify-content: center;
  width: 100vw;
  max-width: 1920px;
  min-height: 100vh;
  align-items: center;
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.mainText};
  font: 400 normal 3rem "Roboto";

  button {
    font-size: 2rem;
    width: 15rem;
    height: 5rem;
    border: 1px solid ${(props) => props.theme.mainText};
    border-radius: 3rem;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.mainText} 50%,
      ${(props) => props.theme.mainBackground} 50%
    );
    background-size: 200% 100%;
    background-position: right bottom;
    color: ${(props) => props.theme.mainText};
    cursor: pointer;
    transition: 1s;
  }

  button:hover {
    background-position: left bottom;
    color: ${(props) => props.theme.mainBackground};
  }
`;
