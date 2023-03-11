import { Navigate, useLoaderData, useNavigate } from "react-router";
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
  const { status, data } = useLoaderData();
  const navigate = useNavigate();

  const handleBookOnClick = (e, id) => {
    e.preventDefault();
    navigate(`/library/detail/${id}`);
  };
  const handleAddOnClick = (e) => {
    e.preventDefault();
    navigate(`/library/add`);
  };

  console.log(data);
  if (status === "error") return <Navigate to="/" />;

  return (
    <MainWrapperComponent>
      <TitleComponent title="책목록">
        <IconComponent icon="add_icon" fn={handleAddOnClick} />
      </TitleComponent>
      <Wrapper>
        {data.length !== 0 ? (
          data.map((book) => {
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
