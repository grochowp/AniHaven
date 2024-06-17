import styled from "styled-components";
import { PawIcon } from "../../../components/PawIcon";
import { useTranslation } from "react-i18next";
import { IoIosPaw } from "react-icons/io";
import { FaHeartbeat } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

export const Stats = () => {
  const { t } = useTranslation();
  return (
    <Content>
      <PawIcon text={t("shelterNumbers")} />
      <article>
        <div className="stat">
          <IoIosPaw style={{ color: "#D96675" }} />
          <h2>125</h2>
          <p>{t("shelterNumbersWaiting")}</p>
        </div>
        <div className="stat">
          <FaHeartbeat style={{ color: "red" }} />

          <h2>521</h2>
          <p>{t("shelterNumbersRescued")}</p>
        </div>
        <div className="stat">
          <FaHome style={{ color: "#006400" }} />

          <h2>311</h2>
          <p>{t("shelterNumbersFound")}</p>
        </div>
      </article>
    </Content>
  );
};

const Content = styled.section`
  background-color: ${(props) => props.theme.secondaryBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s;
  width: 100vw;
  max-width: 1920px;
  article {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: clamp(2.5rem, 10vw, 10rem);
    background-color: red;
    padding: 2rem clamp(1rem, 5vw, 5rem);
    background: ${(props) => props.theme.mainBackground};
    background: ${(props) => props.theme.gradientBackgroundSec};
    color: ${(props) => props.theme.mainText};
    border-radius: 10px;
    transform: translateY(1rem);
    margin-bottom: -3rem;

    .stat {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 9.35rem;
      transition: 1s;
      svg {
        height: 96px;
        width: 96px;
        transform: translateX(2px);
        margin-bottom: 10px;
      }

      h2 {
        font: 100 normal 2rem "Istok web", "sans-serif";
        margin: 0;

        &::after {
          content: "";
          position: absolute;
          display: flex;
          top: 68%;
          transform: translateX(-35px);
          height: 1px;
          width: 120px;
          background-color: ${(props) => props.theme.mainText};
        }
      }

      p {
        font: 400 normal 1.25rem "Inder";
      }
    }
    @media (max-width: 640px) {
      flex-direction: column;

      .stat h2::after {
        display: none;
      }
    }
  }
`;
