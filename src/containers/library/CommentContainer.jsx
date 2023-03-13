import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

import styled from "styled-components";

import { addCommentApi, deleteCommentApi, editCommentApi } from "../../apis/comment";

import { ButtonComponent } from "../../components/common";
import { CommentComponent, CommentInputComponent } from "../../components/library";

import { Sign } from "../../contexts/UserContext";

const EmptyWrapper = styled.div`
  padding: 20px;
`;

const CommentContainer = () => {
  const { isSignedIn } = useContext(Sign);
  const { status, data } = useLoaderData();
  const { book_id } = useParams();

  const [commentList, setCommentList] = useState([]);

  const handleInputCommentOnSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "") {
      return alert("내용을 입력해주세요.");
    }
    const req = {
      book_id: book_id,
      comment: e.target[0].value,
    };
    addCommentApi(req).then((res) => {
      e.target[0].value = "";
      res.comment.edit_authority = true;
      setCommentList([res.comment, ...commentList]);
    });
  };

  const handleEditOnClick = (e, comment) => {
    e.preventDefault();
    if (e.target[0].value === "") {
      return alert("내용을 입력해주세요.");
    }
    const req = { comment: e.target[0].value };
    editCommentApi(comment._id, req).then(() => {
      const temp = [...commentList];
      const index = commentList.findIndex((item) => item._id === comment._id);
      comment.comment = e.target[0].value;
      comment.edit_date = new Date();
      temp.splice(index, 1, comment);
      setCommentList([...temp]);
    });
  };

  const handleDeleteOnClick = (e, comment_id) => {
    e.preventDefault();
    if (window.confirm("삭제하시겠습니까?")) {
      deleteCommentApi(comment_id).then(() => {
        const temp = [...commentList];
        const index = commentList.findIndex((item) => item._id === comment_id);
        temp.splice(index, 1);
        setCommentList([...temp]);
      });
    }
  };

  useEffect(() => {
    setCommentList([...data]);
  }, [data]);

  if (status === "error") return <EmptyWrapper>댓글을 불러오는데 실패했습니다.</EmptyWrapper>;
  return (
    <section>
      {isSignedIn && (
        <CommentInputComponent placeholder="내용을 입력해주세요." fn={handleInputCommentOnSubmit}>
          <ButtonComponent style={{ width: "80px", backgroundColor: "#8E0023" }} name="확인" type="submit" />
          <ButtonComponent style={{ width: "80px", backgroundColor: "#808080" }} name="취소" />
        </CommentInputComponent>
      )}
      {commentList.length > 0 ? (
        commentList.map((comment_info) => (
          <div key={comment_info._id}>
            <CommentComponent comment_info={comment_info} delete_fn={handleDeleteOnClick} edit_fn={handleEditOnClick} />
            <hr />
          </div>
        ))
      ) : (
        <EmptyWrapper>추가된 댓글이 없습니다.</EmptyWrapper>
      )}
    </section>
  );
};

export default CommentContainer;
