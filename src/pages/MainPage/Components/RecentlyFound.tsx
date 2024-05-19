import styled from "styled-components";
import { PawIcon } from "../../../components/PawIcon";
import { useTranslation } from "react-i18next";

export const RecentlyFound = () => {
  const { t } = useTranslation();
  return (
    <Content>
      <PawIcon text={t("recentlyFound")} />
      <article>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/images/cat0.png" alt="cat image" />
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/images/cat0.png" alt="cat image" />
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/images/cat0.png" alt="cat image" />
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/images/cat0.png" alt="cat image" />
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/images/cat0.png" alt="cat image" />
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </article>
    </Content>
  );
};

const Content = styled.section`
  background-color: ${(props) => props.theme.mainBackground};
  transition: 1.5s;
  padding: 5rem 0;

  article {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    margin-left: 4vw;
    overflow-x: scroll;

    width: 92vw;
    max-width: 1800px;
    gap: 1rem;
    height: clamp(25rem, 30vw, 30rem);

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.mainText};
    }

    @media (max-width: 600px) {
      flex-direction: column;
      height: max-content;
      overflow: hidden;
    }

    .flip-card {
      width: clamp(15rem, 30vw, 30rem);
      aspect-ratio: 1.5/1;
      perspective: 1000px;
    }

    .flip-card-inner {
      transition: 5s;
      position: relative;
      width: clamp(15rem, 30vw, 30rem);
      aspect-ratio: 1.5/1;
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      box-shadow: 0 4px 8px 0 ${(props) => props.theme.shadow};
    }

    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
      transition: 1.5s;

      @media (max-width: 600px) {
        transform: none;
      }
    }

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    img {
      width: clamp(15rem, 30vw, 30rem);
      aspect-ratio: 1.5/1;
      border-radius: 0.5rem;
      box-shadow: 10px 10px 5px ${(props) => props.theme.shadow};
    }

    .flip-card-back {
      background-color: ${(props) => props.theme.secondaryBackground};
      color: ${(props) => props.theme.mainText};
      border-radius: 0.5rem;
      box-shadow: 10px 10px 5px ${(props) => props.theme.shadow};
      transform: rotateY(180deg);
    }
  }
`;
