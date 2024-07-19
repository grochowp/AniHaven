import styled from "styled-components";
import { Cards } from "./Components/Cards";
import { Stats } from "./Components/Stats";
import { RecentlyFound } from "./Components/RecentlyFound";
import { BehaviouristCorner } from "./Components/BehaviouristCorner";
import { show } from "../../animations/show";

const MainPage = () => {
  return (
    <Container>
      <ImageContainer>
        <BackgroundImage />
        <Cards />
      </ImageContainer>
      <Stats />
      <RecentlyFound />
      <BehaviouristCorner />
    </Container>
  );
};

export default MainPage;

const Container = styled.main`
  animation: ${show} 2.5s;
  width: 100vw;
  max-width: 1920px;
`;

const ImageContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100vw;
  max-width: 1920px;
  height: 100vh;
  max-height: 1080px;

  @media (max-width: 1000px) {
    max-height: clamp(720px, 120vw, 1080px);
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 1920px;
  height: 101%;
  background-image: url("images/MainImage.png");
  background-size: cover;
  background-position: center;
  z-index: -1;

  @media (max-width: 1000px) {
    background-position: -300px;
  }
`;
