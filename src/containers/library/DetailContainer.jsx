import { useContext, useEffect, useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router";

import { deleteBookApi } from "../../apis/library";

import { Sign } from "../../contexts/UserContext";

import { ButtonComponent, IconComponent, MainWrapperComponent, TitleComponent } from "../../components/common";
import { BookDescriptionComponent, BookDetailComponent } from "../../components/library";

import { addFavoriteApi, deleteFavoriteApi } from "../../apis/favorite";

const DetailContainer = () => {
  const navigate = useNavigate();

  const { isSignedIn } = useContext(Sign);
  const { data, included } = useLoaderData();

  const [liked, setLiked] = useState(false);

  const handleBackOnClick = (e) => {
    e.preventDefault();
    navigate("/library");
  };

  const handleFavoriteOnClick = (e) => {
    e.preventDefault();
    if (!isSignedIn) navigate("/signin");
    else {
      addFavoriteApi(data._id).then(() => {
        setLiked(true);
      });
    }
  };

  const handleCancelFvOnClick = (e) => {
    e.preventDefault();
    deleteFavoriteApi(data._id).then(() => {
      setLiked(false);
    });
  };
  const handleEditOnClick = (e) => {
    e.preventDefault();
    if (!isSignedIn) navigate("/signin");
    navigate(`/library/edit/${data._id}`);
  };

  const handleDeleteOnClick = (e) => {
    e.preventDefault();
    if (!isSignedIn) navigate("/signin");
    if (window.confirm("삭제하시겠습니까?")) {
      deleteBookApi(data._id).then(() => {
        navigate(`/library`);
      });
    }
  };

  useEffect(() => {
    if (included) {
      setLiked(included);
    }
  }, [included]);

  return (
    <MainWrapperComponent>
      <TitleComponent title="상세페이지">
        <IconComponent title="뒤로가기" icon="back_icon" fn={handleBackOnClick} />
      </TitleComponent>

      <BookDetailComponent book={data}>
        {liked ? (
          <ButtonComponent
            style={{ width: "80px", backgroundColor: "#ffd400" }}
            name="찜취소"
            fn={handleCancelFvOnClick}
          />
        ) : (
          <ButtonComponent
            style={{ width: "80px", backgroundColor: "#ffd400" }}
            name="찜하기"
            fn={handleFavoriteOnClick}
          />
        )}
        {data.edit_authority && (
          <ButtonComponent style={{ width: "80px", backgroundColor: "#4d377b" }} name="수정" fn={handleEditOnClick} />
        )}
        {data.edit_authority && (
          <ButtonComponent style={{ width: "80px", backgroundColor: "#8E0023" }} name="삭제" fn={handleDeleteOnClick} />
        )}
      </BookDetailComponent>

      <TitleComponent title="상세설명" />
      <BookDescriptionComponent description={data.description} />

      <TitleComponent title="댓글" />

      <Outlet />
    </MainWrapperComponent>
  );
};

export default DetailContainer;
