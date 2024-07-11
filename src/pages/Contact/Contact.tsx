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
  width: 100vw;
  max-width: 1920px;
  min-height: calc(100vh - 5rem);
  padding-top: 5rem;

  .left-side {
    // background-color: red;
    width: 50%;

    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .right-side {
    width: 50%;
    min-width: 320px;
    // background-color: blue;
  }
`;
