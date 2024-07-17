import styled from "styled-components";
import { PawIcon } from "../../../components/PawIcon";
import { useTranslation } from "react-i18next";

export const BehaviouristCorner = () => {
  const { t } = useTranslation();

  return (
    <Content>
      <PawIcon text={t("behaviouristCorner")} special="gold" />
      <article>
        <div className="paragraph left-icon">
          <div>
            <img src="/images/dogIcon.png" alt="dog logo" />
          </div>
          <p>{t("dogTip1")}</p>
        </div>
        <div className="paragraph right-icon">
          <p>{t("catTip1")}</p>
          <div>
            <img src="/images/catIcon.png" alt="cat logo" />
          </div>
        </div>
        <div className="paragraph left-icon">
          <div>
            <img src="/images/dogIcon.png" alt="dog logo" />
          </div>
          <p>{t("dogTip2")}</p>
        </div>
        <div className="paragraph right-icon">
          <p>{t("catTip2")}</p>
          <div>
            <img src="/images/catIcon.png" alt="cat logo" />
          </div>
        </div>
      </article>
    </Content>
  );
};

const Content = styled.section`
  background-image: url("images/behaviourist.png");
  background-size: cover;
  background-position: center;
  height: max-content;
  

  article {
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    margin-top: 2rem;
  }

  .paragraph {
    flex: 1 1 calc(50% - 5rem);
    display: flex;
    align-items: center;
    margin-bottom: 5rem;
  }

  .paragraph p {
    width: 65%;
    min-width: 300px;
    font: 400 normal 1.15rem "Inika";
    color: #D9D9D9;
  }

  .paragraph div {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin: 0 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D9D9D9;
  }

  .right-icon {
    text-align: end;
    justify-content: flex-end;
  }

  @media (max-width: 640px) {
  .paragraph {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .right-icon {
    flex-direction: column-reverse;
  }
`;
