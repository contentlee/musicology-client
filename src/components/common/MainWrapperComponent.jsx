import styled from "styled-components";

const Wrapper = styled.main`
  position: relative;
  top: 58px;

  width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
`;

const MainWrapperComponent = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainWrapperComponent;
