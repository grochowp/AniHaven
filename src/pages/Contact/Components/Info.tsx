import React from "react";

import styled from "styled-components";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

export const Info = () => {
  return (
    <Container>
      <div className="card">
        <IoLocationOutline />
        <h1>Location</h1>
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
        <h1>Phone number</h1>
        <h2>+48 111 222 333</h2>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 75%;

  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .card {
    width: 30%;
    height: 90%;
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

    svg {
      transform: translateY(10px);
      height: 40%;
      width: 3rem;
    }

    h1 {
      height: 20%;
      font: 100 normal 1.25rem "Istok web", "sans-serif";
    }

    h2 {
      height: 40%;
      font: 100 normal 1.25rem "Istok web", "sans-serif";
    }
  }
`;
