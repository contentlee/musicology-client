import styled from "styled-components";

const Wrapper = styled.main`
  position: relative;
  top: 58px;

  width: 100%;

  h1 {
    margin-left: 20px;
    font-size: 16px;
  }
  hr {
    margin: 0 12px;
  }
`;

const MainWrapperComponent = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainWrapperComponent;
