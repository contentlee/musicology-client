import styled from "styled-components";

import { MainWrapperComponent } from "../../components/common";

const Wrapper = styled.section``;

const FavoriteContainer = () => {
  return (
    <MainWrapperComponent>
      <hr />
      <h1>추가된 책목록</h1>
      <hr />
      <Wrapper></Wrapper>
    </MainWrapperComponent>
  );
};

export default FavoriteContainer;
