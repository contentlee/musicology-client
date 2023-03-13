import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";

import styled from "styled-components";

import { deleteFavoriteApi } from "../../apis/favorite";

import { IconComponent, MainWrapperComponent, TitleComponent } from "../../components/common";
import { FavoirteBookComponent } from "../../components/mypage";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const NullSpan = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

const FavoriteContainer = () => {
  const navigate = useNavigate();

  const { data } = useLoaderData();
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setBookList(data);
  }, [data]);
  return (
    <MainWrapperComponent>
      <TitleComponent title="추가된 책목록" />
      <Wrapper>
        {bookList.length !== 0 ? (
          bookList.map((book_info, i) => {
            const handleBookOnClick = (e) => {
              e.preventDefault();
              navigate(`/library/detail/${book_info._id}`);
            };

            const handleDeleteOnClick = (e) => {
              e.preventDefault();
              deleteFavoriteApi(book_info._id).then(() => {
                const temp = [...bookList];
                temp.splice(i, 1);
                setBookList(temp);
              });
            };

            return (
              <FavoirteBookComponent key={book_info._id} book_info={book_info} fn={handleBookOnClick}>
                <IconComponent title="삭제" icon="delete_icon" fn={handleDeleteOnClick} />
              </FavoirteBookComponent>
            );
          })
        ) : (
          <NullSpan>추가된 책이 없습니다.</NullSpan>
        )}
      </Wrapper>
    </MainWrapperComponent>
  );
};

export default FavoriteContainer;
