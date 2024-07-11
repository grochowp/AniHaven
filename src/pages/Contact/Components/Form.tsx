import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

interface FormInputs {
  fullName: string;
  phoneNumber: number;
  message: string;
}

export const Form = () => {
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className="inputBox">
        <input
          type="text"
          required
          defaultValue="test"
          {...register("fullName", { required: true })}
        />
        <span>Full name</span>
      </div>
      <div className="inputBox">
        <input
          type="text"
          required
          {...register("phoneNumber", { required: true })}
        />
        <span>Phone Number</span>
      </div>
      <div className="inputBox">
        <textarea
          className="message"
          required
          {...register("message", { required: true })}
        />
        <span>Message</span>
      </div>
      <input type="submit" />
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2rem;

  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .inputBox {
    position: relative;
    width: 100%;
    transform: translateX(30px);
  }

  .inputBox input,
  .inputBox textarea {
    width: 70%;
    height: 2.5rem;
    padding: 10px;
    outline: none;
    color: ${(props) => props.theme.mainText};
    border: 2px solid ${(props) => props.theme.secondaryBackground};
    border-radius: 10px;
    background-color: transparent;

    &.message {
      height: 12rem;
      resize: none;
      padding-top: 1rem;
      padding-left: 1rem;
    }
  }

  input[type="text"] {
    padding-left: 1rem;
  }

  input[type="submit"] {
    width: 30%;
    height: 3rem;
    transform: translateX(95px);
    background-color: ${(props) => props.theme.secondaryBackground};
    color: ${(props) => props.theme.mainText};
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &:hover {
      transform: scale(0.95) translateX(100px);
    }
  }

  .inputBox span {
    position: absolute;
    left: 0;
    padding: 20px 15px;
    pointer-events: none;
    color: ${(props) => props.theme.mainText};
    transition: 0.5s;
  }

  .inputBox input:valid ~ span,
  .inputBox input:focus ~ span,
  .inputBox textarea:valid ~ span,
  .inputBox textarea:focus ~ span {
    color: #00dfc4;
    transform: translate(10px, -7px);
    font-size: 0.9rem;
    padding: 0 10px;
    background: ${(props) => props.theme.shadow};
    border-left: 2px solid #00dfc4;
    border-right: 2px solid #00dfc4;
    letter-spacing: 0.2em;
  }

  .inputBox input:valid,
  .inputBox input:focus,
  .inputBox textarea:valid,
  .inputBox textarea:focus {
    border: 2px solid #00dfc4;
  }
`;
