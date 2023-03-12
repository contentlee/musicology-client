import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";

import { deleteBookApi } from "../../apis/library";

import { Sign } from "../../contexts/UserContext";

import { ButtonComponent, IconComponent, MainWrapperComponent, TitleComponent } from "../../components/common";
import {
  BookDescriptionComponent,
  BookDetailComponent,
  CommentComponent,
  CommentInputComponent,
} from "../../components/library";

import { addFavoriteApi } from "../../apis/favorite";

const DetailContainer = () => {
  const navigate = useNavigate();

  const { isSignedIn } = useContext(Sign);
  const { data } = useLoaderData();

  const handleBackOnClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleFavoriteOnClick = (e) => {
    e.preventDefault();
    if (!isSignedIn) navigate("/signin");
    else {
      addFavoriteApi(data._id)
        .then((res) => alert(res.message))
        .catch((err) => alert(err.message));
    }
  };

  const handleEditOnClick = (e) => {
    e.preventDefault();
    if (!isSignedIn) navigate("/signin");
    navigate(`/library/edit/${data._id}`);
  };

  const handleDeleteOnClick = (e) => {
    e.preventDefault();
    if (!isSignedIn) navigate("/signin");

    deleteBookApi(data._id)
      .then(() => {
        navigate(`/library`);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <MainWrapperComponent>
      <TitleComponent title="상세페이지">
        <IconComponent title="뒤로가기" icon="back_icon" fn={handleBackOnClick} />
      </TitleComponent>

      <BookDetailComponent book={data}>
        <ButtonComponent
          style={{ width: "80px", backgroundColor: "#ffd400" }}
          name="찜하기"
          fn={handleFavoriteOnClick}
        />
        {isSignedIn && (
          <ButtonComponent style={{ width: "80px", backgroundColor: "#4d377b" }} name="수정" fn={handleEditOnClick} />
        )}
        {isSignedIn && (
          <ButtonComponent style={{ width: "80px", backgroundColor: "#8E0023" }} name="삭제" fn={handleDeleteOnClick} />
        )}
      </BookDetailComponent>

      <TitleComponent title="상세설명" />
      <BookDescriptionComponent description={data.description} />

      <TitleComponent title="댓글" />
      {isSignedIn && (
        <CommentInputComponent placeholder="내용을 입력해주세요.">
          <ButtonComponent style={{ width: "80px", backgroundColor: "#8E0023" }} name="확인" type="submit" />
          <ButtonComponent style={{ width: "80px", backgroundColor: "#808080" }} name="취소" />
        </CommentInputComponent>
      )}

      <CommentComponent />
      <CommentComponent />
      <CommentComponent />
    </MainWrapperComponent>
  );
};

export default DetailContainer;
