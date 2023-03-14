import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

import styled from "styled-components";

import { addFavoriteApi, deleteFavoriteApi } from "../../apis/favorite";

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

const ParaWrapper = styled.div`
  padding: 10px;
`;

const LibraryContainer = () => {
  const navigate = useNavigate();

  const { word } = useParams();

  const { isSignedIn } = useContext(Sign);

  const { data, favorite_books } = useLoaderData();

  const [likedList, setLiked] = useState([]);

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
      addFavoriteApi(book_id).then((res) => {
        setLiked([...likedList, book_id]);
      });
    }
  };
  const handleCancelFvOnClick = (e, book_id) => {
    e.preventDefault();
    deleteFavoriteApi(book_id).then(() => {
      const temp = [...likedList];
      const index = likedList.indexOf(book_id);

      temp.splice(index, 1);
      setLiked(temp);
    });
  };

  useEffect(() => {
    if (favorite_books) {
      setLiked(favorite_books);
    }
  }, [favorite_books]);

  return (
    <MainWrapperComponent>
      <TitleComponent title={`책목록(${data.length})`}>
        <IconComponent icon="add_icon" fn={handleAddOnClick} />
      </TitleComponent>
      {word && (
        <ParaWrapper>
          "<b>{word}</b>"을(를) 검색하였습니다.
        </ParaWrapper>
      )}
      <Wrapper>
        {data.length !== 0 ? (
          data.map((book) => {
            return (
              <BookComponent
                key={book._id}
                book={book}
                fn={handleBookOnClick}
                liked_fn={handleFavoriteOnClick}
                unliked_fn={handleCancelFvOnClick}
                liked={likedList?.includes(book._id)}
              />
            );
          })
        ) : (
          <NullSpan>데이터가 없습니다.</NullSpan>
        )}
      </Wrapper>
    </MainWrapperComponent>
  );
};
export default LibraryContainer;
