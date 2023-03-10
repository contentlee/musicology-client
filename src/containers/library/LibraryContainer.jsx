import { useLoaderData, useNavigate } from "react-router";
import styled from "styled-components";

import { IconComponent, MainWrapperComponent, TitleComponent } from "../../components/common";
import { BookComponent } from "../../components/library";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
`;

const NullSpan = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

const LibraryContainer = () => {
  const books = useLoaderData();
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
        {books.length !== 0 ? (
          books.map((book) => {
            return <BookComponent key={book._id} book={book} fn={handleBookOnClick} />;
          })
        ) : (
          <NullSpan>데이터가 없습니다.</NullSpan>
        )}
      </Wrapper>
    </MainWrapperComponent>
  );
};
export default LibraryContainer;
