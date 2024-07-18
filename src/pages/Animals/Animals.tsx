import styled from "styled-components";
import { SelectBar } from "./Components/SelectBar";
import { CardsContainer } from "./Components/CardsContainer";
import { SelectBarProvider } from "../../contexts/SelectBarContext";

const Animals = () => {
  return (
    <Container>
      <SelectBarProvider>
        <SelectBar />
        <CardsContainer />
      </SelectBarProvider>
    </Container>
  );
};

export default Animals;
const Container = styled.article`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 5rem;
  max-width: 1920px;
  min-height: calc(100vh - 8rem);
  background-color: ${(props) => props.theme.mainBackground};
  position: relative;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: start;
  }
`;
