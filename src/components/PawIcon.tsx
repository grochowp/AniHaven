import styled from "styled-components";

export const PawIcon = ({
  text,
  special,
}: {
  text: string;
  special?: string;
}) => {
  return (
    <Container className={special} onClick={() => 0}>
      <img alt="paw logo" />
      <h1>{text}</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
  color: ${(props) => props.theme.mainText};

  img {
    height: 48px;
    width: 150px;
    content: url(${(props) =>
      props.theme.name === "dark"
        ? "/images/pawWhite.png"
        : "/images/pawBlack.png"});
  }

  h1 {
    margin: 0.5rem 0 1rem 0;
    font: 400 normal clamp(1.5rem, 2vw, 2rem) "Roboto", sans-serif;
  }

  &.gold {
    h1 {
      color: ${(props) => props.theme.gold};
    }

    img {
      content: url("/images/pawGold.png");
    }
  }
`;
