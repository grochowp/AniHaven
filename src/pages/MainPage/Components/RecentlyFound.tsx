import styled from "styled-components";
import { PawIcon } from "../../../components/PawIcon";
import { useTranslation } from "react-i18next";

export const RecentlyFound = () => {
  const { t } = useTranslation();
  return (
    <Content>
      <PawIcon text={t("recentlyFound")} />
    </Content>
  );
};

const Content = styled.article`
  padding-top: 4rem;
  background-color: ${(props) => props.theme.mainBackground};
  transition: 1s;
`;
