import { useNavigate, useParams } from "react-router";
import { ButtonComponent, IconComponent, MainWrapperComponent, TitleComponent } from "../../components/common";
import {
  BookDescriptionComponent,
  BookDetailComponent,
  CommentComponent,
  CommentInputComponent,
} from "../../components/library";

const DetailContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const handleBackOnClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <MainWrapperComponent>
      <TitleComponent title="상세페이지">
        <IconComponent title="뒤로가기" icon="back_icon" fn={handleBackOnClick} />
      </TitleComponent>
      <BookDetailComponent>
        <ButtonComponent style={{ width: "80px", backgroundColor: "#ffd400" }} name="찜하기" />
        <ButtonComponent style={{ width: "80px", backgroundColor: "#4d377b" }} name="수정" />
        <ButtonComponent style={{ width: "80px", backgroundColor: "#8E0023" }} name="삭제" />
      </BookDetailComponent>
      <TitleComponent title="상세설명" />
      <BookDescriptionComponent />
      <TitleComponent title="댓글" />
      <CommentInputComponent placeholder="내용을 입력해주세요.">
        <ButtonComponent style={{ width: "80px", backgroundColor: "#8E0023" }} name="확인" type="submit" />
        <ButtonComponent style={{ width: "80px", backgroundColor: "#808080" }} name="취소" />
      </CommentInputComponent>
      <CommentComponent />
      <CommentComponent />
      <CommentComponent />
    </MainWrapperComponent>
  );
};

export default DetailContainer;
