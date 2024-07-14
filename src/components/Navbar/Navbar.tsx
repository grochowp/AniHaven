import styled from "styled-components";
import { BiSolidDog } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { NavbarMobile } from "./Components/NavbarMobile";
import { NavbarRight } from "./Components/NavbarRight";
import { iThemes } from "../../reusableInterfaces";

const Navbar: React.FC<iThemes> = ({ theme, setTheme }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="navbar-left" onClick={() => navigate("/")}>
        <BiSolidDog />
        <h1>AniHaven</h1>
      </div>
      <NavbarRight theme={theme} setTheme={setTheme} />
      <NavbarMobile theme={theme} setTheme={setTheme} />
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  background-color: ${(props) => props.theme.secondaryBackground};
  height: 5rem;
  width: 100vw;
  max-width: 1920px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: 400 normal 1rem "Inika", sans-serif;
  color: ${(props) => props.theme.mainText};
  z-index: 3;
  transition: 1s;

  .navbar-left {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    cursor: pointer;

    svg {
      width: clamp(3rem, 4vw, 4rem);
      height: clamp(3rem, 4vw, 4rem);
    }
  }
`;
