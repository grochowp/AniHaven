import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FormModal } from "./FormModal";

interface FormInputs {
  fullName: string;
  phoneNumber: number;
  message: string;
}

export const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm<FormInputs>();
  const { t } = useTranslation();

  const handleModal = (value: boolean) => {
    setIsFormSubmitted(value);
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    handleModal(true);
    console.log(data); // TO-DO: add feature to send email whenever user use this function
    reset();
    setTimeout(() => {
      handleModal(false);
    }, 3000);
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <div className="inputBox">
          <input
            type="text"
            required
            {...register("fullName", { required: true })}
          />
          <span>{t("fullName")}</span>
        </div>
        <div className="inputBox">
          <input
            type="text"
            required
            {...register("phoneNumber", {
              required: true,
              pattern: /^\d{9}$/,
            })}
          />
          <span>{t("phoneNumberDigits")}</span>
        </div>
        <div className="inputBox">
          <textarea
            className="message"
            required
            {...register("message", { required: true })}
          />
          <span>{t("message")}</span>
        </div>

        <input type="submit" value={t("send")} />
      </FormContainer>

      {isFormSubmitted && <FormModal handleModal={handleModal} />}
    </>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  gap: 2rem;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  padding-bottom: 1rem;
  transform: translateX(33px);

  .inputBox {
    position: relative;
    width: 95%;
  }

  .inputBox input,
  .inputBox textarea {
    width: 100%;
    height: 2.5rem;
    padding: 10px;
    outline: none;
    color: ${(props) => props.theme.mainText};
    border: 2px solid ${(props) => props.theme.shadow};
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
    min-width: 6rem;
    height: 3rem;
    background-color: transparent;
    color: ${(props) => props.theme.mainText};
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.shadow};
    transition: 1s;
    margin-left: auto;

    &:hover {
      transform: scale(1.05);
      background-color: ${(props) => props.theme.shadow};
    }
  }

  .inputBox span {
    position: absolute;
    left: 0;
    top: 2px;
    padding: 20px 15px;
    pointer-events: none;
    color: ${(props) => props.theme.mainText};
    transition: 0.5s;
  }

  .inputBox input:valid ~ span,
  .inputBox input:focus ~ span,
  .inputBox textarea:valid ~ span,
  .inputBox textarea:focus ~ span {
    color: ${(props) => props.theme.formBorder};
    transform: translate(10px, -7px);
    font-size: 0.9rem;
    padding: 0 10px;
    background: ${(props) => props.theme.mainBackground};
    border-left: 2px solid ${(props) => props.theme.formBorder};
    border-right: 2px solid ${(props) => props.theme.formBorder};
    letter-spacing: 0.2rem;
  }

  .inputBox input:valid,
  .inputBox input:focus,
  .inputBox textarea:valid,
  .inputBox textarea:focus {
    border: 2px solid ${(props) => props.theme.formBorder};
  }
`;
