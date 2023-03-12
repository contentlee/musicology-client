import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";

import styled from "styled-components";

import { addFavoriteApi } from "../../apis/favorite";

import { IconComponent, MainWrapperComponent, TitleComponent } from "../../components/common";
import { BookComponent } from "../../components/library";

import { Sign } from "../../contexts/UserContext";

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
  const navigate = useNavigate();

  const { isSignedIn } = useContext(Sign);

  const { data } = useLoaderData();

  const handleBookOnClick = (e, id) => {
    e.preventDefault();
    navigate(`/library/detail/${id}`);
  };
  const handleAddOnClick = (e) => {
    e.preventDefault();
    navigate(`/library/add`);
  };

  const handleFavoriteOnClick = (e, book_id) => {
    e.preventDefault();
    if (!isSignedIn) navigate("/signin");
    else {
      addFavoriteApi(book_id)
        .then((res) => alert(res.message))
        .catch((err) => alert(err.message));
    }
  };

  return (
    <MainWrapperComponent>
      <TitleComponent title="책목록">
        <IconComponent icon="add_icon" fn={handleAddOnClick} />
      </TitleComponent>
      <Wrapper>
        {data.length !== 0 ? (
          data.map((book) => {
            return <BookComponent key={book._id} book={book} fn={handleBookOnClick} icon_fn={handleFavoriteOnClick} />;
          })
        ) : (
          <NullSpan>데이터가 없습니다.</NullSpan>
        )}
      </Wrapper>
    </MainWrapperComponent>
  );
};
export default LibraryContainer;
