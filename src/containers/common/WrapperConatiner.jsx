import { Outlet, useNavigate } from "react-router";

import styled from "styled-components";

import MenuContainer from "./MenuContainer";
import { LogoComponent, SearchInputComponent } from "../../components/common";
import { UserContext } from "../../contexts";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1020px;
`;

const Header = styled.header`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1020px;

  background-color: #fff;
  z-index: 10;
`;

const Footer = styled.footer`
  position: relative;
  top: 58px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;

  hr {
    width: 100%;
    margin: 0 12px;
    box-sizing: border-box;
  }
`;

const WrapperContainer = () => {
  const navigate = useNavigate();

  const handleSearchOnSubmit = (e) => {
    e.preventDefault();
    navigate(`/library/search/${e.target[0].value}`);
    e.target[0].value = "";
  };

  return (
    <Wrapper>
      <UserContext>
        <Header>
          <LogoComponent />
          <SearchInputComponent fn={handleSearchOnSubmit} />
          <MenuContainer />
        </Header>

        <Outlet />
      </UserContext>
      <Footer>
        <hr />
        <LogoComponent />
        <hr />
      </Footer>
    </Wrapper>
  );
};
export default WrapperContainer;
