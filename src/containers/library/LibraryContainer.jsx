import { useNavigate } from "react-router";
import styled from "styled-components";

import { IconComponent, MainWrapperComponent, TitleComponent } from "../../components/common";
import { BookComponent } from "../../components/library";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
`;

const LibraryContainer = () => {
  const navigate = useNavigate();
  const handleBookOnClick = (e, id) => {
    e.preventDefault();
    navigate(`/library/detail/${id}`);
  };
  const handleAddOnClick = (e) => {
    e.preventDefault();
    navigate(`/library/add`);
  };
  return (
    <MainWrapperComponent>
      <TitleComponent title="책목록">
        <IconComponent icon="add_icon" fn={handleAddOnClick} />
      </TitleComponent>
      <Wrapper>
        <BookComponent fn={handleBookOnClick} />
        <BookComponent />
      </Wrapper>
    </MainWrapperComponent>
  );
};
export default LibraryContainer;
