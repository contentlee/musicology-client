import { useState } from "react";
import { Outlet } from "react-router";

import styled from "styled-components";

import MenuContainer from "./MenuContainer";
import { LogoComponent, SearchInputComponent } from "../../components/common";

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

const WrapperContainer = () => {
  const [mode, setMode] = useState("search");
  return (
    <Wrapper>
      <Header>
        <LogoComponent />
        <SearchInputComponent />
        <MenuContainer />
      </Header>

      <Outlet />
    </Wrapper>
  );
};
export default WrapperContainer;
