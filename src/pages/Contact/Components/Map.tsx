import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { useTranslation } from "react-i18next";

export const Map = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <StyledMapContainer
        center={[51.9993181, 23.1160114]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png"
        />
        <Marker position={[51.9993181, 23.1160114]}>
          <Popup>{t("mapInfo")}</Popup>
        </Marker>
      </StyledMapContainer>
    </Container>
  );
};

const Container = styled.div`
  flex: 1 1 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMapContainer = styled(MapContainer)`
  border-radius: 10px;
  height: 75%;
  max-height: 500px;
  width: 75%;
  z-index: 1;
  box-shadow: 3px 3px 15px ${(props) => props.theme.shadow};
`;
