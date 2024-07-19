import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";

export const FormModal = ({
  handleModal,
}: {
  handleModal: (value: boolean) => void;
}) => {
  const { t } = useTranslation();

  return (
    <ModalContainer>
      <Modal>
        <div>
          <h1>{t("messageAfterSubmitingForm")}</h1>
          <button onClick={() => handleModal(false)}>{t("back")}</button>
        </div>
        <p></p>
      </Modal>
    </ModalContainer>
  );
};

const hideModal = keyframes`
    from {
        width: 100%;
    }
  
    to {
        width: 0%;
    }
`;

const ModalContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(128, 128, 128, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const Modal = styled.div`
  width: 30rem;
  max-width: 80%;
  height: 10rem;
  background-color: ${(props) => props.theme.mainBackground};
  z-index: 5;
  display: flex;
  text-align: center;
  border-radius: 10px;
  color: ${(props) => props.theme.mainText};
  flex-direction: column;
  justify-content: space-between;

  button {
    margin-top: 1rem;
    height: 2rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.shadow};
    color: ${(props) => props.theme.mainText};
    font-size: 1.15rem;
    border: none;
    cursor: pointer;
    width: 30%;

    &:hover {
      transform: scale(0.95);
    }
  }

  p {
    background-color: red;
    height: 10px;
    margin: 0;
    border-radius: 0 0 10px 10px;
    animation: ${hideModal} 3s ease-in;
  }
`;
