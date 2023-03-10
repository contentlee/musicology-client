import styled from "styled-components";

import { IconComponent, MainWrapperComponent, TitleComponent } from "../../components/common";
import { FavoirteBookComponent } from "../../components/mypage";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FavoriteContainer = () => {
  return (
    <MainWrapperComponent>
      <TitleComponent title="추가된 책목록" />
      <Wrapper>
        <FavoirteBookComponent>
          <IconComponent title="삭제" icon="delete_icon" />
        </FavoirteBookComponent>
        <FavoirteBookComponent>
          <IconComponent title="삭제" icon="delete_icon" />
        </FavoirteBookComponent>
        <FavoirteBookComponent>
          <IconComponent title="삭제" icon="delete_icon" />
        </FavoirteBookComponent>
      </Wrapper>
    </MainWrapperComponent>
  );
};

export default FavoriteContainer;
