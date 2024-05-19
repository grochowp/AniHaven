import styled from "styled-components";
import { Cards } from "./Components/Cards";
import { Stats } from "./Components/Stats";

export const MainPage = () => {
  return (
    <>
      <Container>
        <BackgroundImage />
        <Cards />
      </Container>
      <Stats />
    </>
  );
};

const Container = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100vw;
  max-width: 1920px;
  min-height: 100vh;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 1920px;
  height: 100%;
  background-image: url("images/MainImage.png");
  background-size: cover;
  background-position: center;
  z-index: -1;
`;
