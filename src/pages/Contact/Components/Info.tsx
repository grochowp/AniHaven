import React from "react";

import styled from "styled-components";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export const Info = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="card">
        <IoLocationOutline />
        <h1>{t("location")}</h1>
        <h2>
          Biała Podlaska <br /> Olszowa 4
        </h2>
      </div>
      <div className="card">
        <CiMail />
        <h1>E-mail</h1>
        <h2>Haven@mail.com</h2>
      </div>
      <div className="card">
        <BsTelephone />
        <h1>{t("phoneNumber")}</h1>
        <h2>+48 111 222 333</h2>
      </div>
    </Container>
  );
};

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
    transform: translateY(20px);
    display: flex;
    background-color: ${(props) => props.theme.secondaryBackground};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: ${(props) => props.theme.mainText};
    transition: 1s;
    box-shadow: 5px 5px 5px ${(props) => props.theme.shadow};

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
