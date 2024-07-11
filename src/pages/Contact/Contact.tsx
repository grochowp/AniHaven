import styled from "styled-components";
import { Info } from "./Components/Info";
import { Map } from "./Components/Map";
import { Form } from "./Components/Form";

const Contact = () => {
  return (
    <Container>
      <div className="left-side">
        <Info />
        <Map />
      </div>
      <div className="right-side">
        <Form />
      </div>
    </Container>
  );
};

export default Contact;
const Container = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  max-width: 1920px;
  height: calc(100vh - 5rem);
  max-height: 1080px;
  padding-top: 5rem;

  .left-side {
    width: 50%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .right-side {
    width: 40%;
    min-width: 320px;
  }

  @media (max-width: 828px) {
    height: max-content;
    max-height: max-content;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }
`;
