import { useNavigate } from "react-router";
import styled from "styled-components";

import { MainWrapperComponent } from "../../components/common";
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
    navigate(`/library/${id}`);
  };
  return (
    <MainWrapperComponent>
      <hr />
      <h1>책목록</h1>
      <hr />
      <Wrapper>
        <BookComponent fn={handleBookOnClick} />
        <BookComponent />
      </Wrapper>
    </MainWrapperComponent>
  );
};
export default LibraryContainer;
