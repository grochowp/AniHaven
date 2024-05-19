import styled from "styled-components";
import { PawIcon } from "../../../components/PawIcon";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const RecentlyFound = () => {
  const { t } = useTranslation();
  return (
    <Content>
      <PawIcon text={t("recentlyFound")} />

      <article>
        <div className="left">
          <img src="/images/cat0.png" />
          <Link to="/">
            <button>See more</button>
          </Link>
        </div>
        <div className="right">
          <div>
            <h1>{t("name")}</h1>
            <h2>Żarówka</h2>
          </div>
          <div>
            <h1>{t("age")}</h1>
            <h2>3 yo</h2>
          </div>
          <div>
            <h1>{t("sex")}</h1>
            <h2>3</h2>
          </div>
          <div>
            <h1>{t("about")}</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vulputate ornare justo fringilla interdum. Donec augue neque,
              auctor vitae hendrerit maximus, pellentesque nec dolor. Phasellus
              feugiat sollicitudin euismod. Maecenas sit amet fringilla nulla.
              Vivamus pharetra dolor vel sodales posuere. Mauris at sapien
              aliquam, dapibus turpis in, finibus erat. Curabitur sed velit
              tempor, laoreet libero in, aliquam dui. Sed commodo, ipsum vitae
              maximus pulvinar, eros dui pharetra metus, non semper libero erat
              vel leo. Sed tempus est est, sit amet egestas justo pellentesque
              at.
            </h3>
          </div>
          <Link to="/">
            <button>See more</button>
          </Link>
        </div>
      </article>
      <div className="switch">
        <button>{"<"}</button>
        <button>{">"}</button>
      </div>
    </Content>
  );
};

const Content = styled.section`
  background-color: ${(props) => props.theme.mainBackground};
  transition: 1.5s;
  padding: 5rem 0 2.5rem 0;

  article {
    display: flex;
    padding: 2.5rem clamp(1rem, 2.5vw, 5rem);
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;

    .left {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 3rem;

      button {
        width: 10rem;
        height: 3rem;
        border: none;
        border-radius: 1rem;
        background-color: ${(props) => props.theme.secondaryBackground};
        color: ${(props) => props.theme.mainText};
        font-size: 1.25rem;
        box-shadow: 10px 5px 5px ${(props) => props.theme.shadow};
        cursor: pointer;

        &:hover {
          transform: scale(0.95);
        }
      }

      img {
        width: clamp(20rem, 40vw, 40rem);
        border-radius: 1rem;
        box-shadow: 10px 10px 5px ${(props) => props.theme.shadow};

        @media (max-width: 770px) {
          width: clamp(17.5rem, 80vw, 30rem);
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      width: max-content;

      button {
        display: none;
      }

      &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 17.5rem;
        transform: translateX(clamp(6.25rem, 14.5vw, 14.5rem));
        background-color: ${(props) => props.theme.mainText};
      }

      div {
        gap: clamp(2.5rem, 5vw, 5rem);
        display: flex;
        color: ${(props) => props.theme.mainText};

        h1 {
          display: flex;
          justify-content: flex-end;
          width: clamp(5rem, 12vw, 12rem);

          height: 5rem;
          font: 400 normal clamp(1.5rem, 2vw, 2rem) "Inika";
          margin: 0;
        }

        h2 {
          font: 400 normal clamp(1.35rem, 1.5vw, 1.5rem) "Inika";
          margin: 0;
          transform: translateY(5px);
        }

        h3 {
          width: clamp(10rem, 30vw, 30rem);
          font: 300 normal clamp(0.75rem, 1vw, 1rem) "Karla", "sans-serif";
          margin: 0;
          transform: translateY(10px);
          flex-wrap: wrap;
        }
      }
    }
  }

  .switch {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    gap: 2rem;

    button {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      font-size: 2rem;
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.mainText};
      color: ${(props) => props.theme.mainText};
      cursor: pointer;

      &:hover {
        transform: scale(0.95);
      }
    }
  }
`;
