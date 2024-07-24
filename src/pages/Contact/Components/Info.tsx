import styled, { keyframes } from "styled-components";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export const Info = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="card" style={{ animationDelay: "0s" }}>
        <IoLocationOutline />
        <h1>{t("location")}</h1>
        <h2>
          Biała Podlaska <br /> Olszowa 4
        </h2>
      </div>
      <div className="card" style={{ animationDelay: "1s" }}>
        <CiMail />
        <h1>E-mail</h1>
        <h2>Haven@mail.com</h2>
      </div>
      <div className="card" style={{ animationDelay: "2s" }}>
        <BsTelephone />
        <h1>{t("phoneNumber")}</h1>
        <h2>+48 111 222 333</h2>
      </div>
    </Container>
  );
};

const jump = keyframes`
  0% {
      transform: translateY(50px);
  }
  25% {
      transform: translateY(60px);
  }
  50% {
      transform: translateY(50px);
  }
  75% {
      transform: translateY(40px);
  }
  100% {
      transform: translateY(50px);
  }    
`;

const Container = styled.div`
  width: 75%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  .card {
    flex: 1 1 7.5rem;
    border-radius: 10px;
    transform: translateY(50px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: ${(props) => props.theme.mainText};
    transition: 1s;
    box-shadow: 1px 1px 8px ${(props) => props.theme.shadow};
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.shadow};
    animation: ${jump} 10s linear infinite;

    svg {
      transform: translateY(15px);
      height: 3rem;
      width: 3rem;
      margin-bottom: 5px;
    }

    h1 {
      height: 50px;
      font: 100 normal 1.25rem "Istok web", "sans-serif";
    }

    h2 {
      height: 50px;
      display: flex;
      align-items: center;
      font: 100 normal 1rem "Istok web", "sans-serif";
      margin-top: 0;
    }
  }
`;
