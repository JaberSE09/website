import styled from "styled-components";
import Image from "next/image"
import Logo from "../../public/assets/images/logo2.png"
const Header = () => {
  const Container = styled.div`
    padding: 10px;
  `;
  const Nav = styled.nav`
      display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
  `;
  const Left = styled.div`
    flex: 1;
  `;
  const LogoNav = styled(Image)`
  width: 20vw;
  height: 10vw;
  `



  const Center = styled.div`
    flex: 1;
  `;
  const Right = styled.div`
    flex: 1;
  `;

  return (
    <Container>
      <Nav>
        <Left>L</Left>
        <Center><LogoNav src={Logo} /></Center>
        <Right>Right</Right>
      </Nav>
    </Container>
  );
};

export default Header;
