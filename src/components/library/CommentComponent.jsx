import { useRef, useState } from "react";

import styled from "styled-components";
import { format } from "date-fns";

import { ButtonComponent } from "../common";
const Wrapper = styled.section`
  display: flex;

  padding: 20px;
  word-break: break-all;
`;

const UserWrapper = styled.span`
  width: 140px;
  font-weight: 600;
`;

const ContentsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0;
  margin-left: 10px;

  width: 100%;
  min-height: 60px;

  p {
    white-space: pre-wrap;

    margin: 0;
  }

  label {
    span {
      display: none;
    }
  }

  textarea {
    width: 100%;
    height: auto;
    padding: 15px;

    resize: none;
    overflow: hidden;

    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);

    white-space: pre-wrap;
    &:focus {
      outline: none;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 12px;
  color: #808080;
  button {
    background-color: transparent;
    border: none;
    border-radius: 10px;

    font-size: 12px;
    color: #808080;

    &:hover {
      cursor: pointer;
    }
  }

  span {
    margin-right: 20px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CommentComponent = ({ comment_info, edit_fn, delete_fn }) => {
  const [mode, setMode] = useState("basic");

  const { _id, comment, edit_authority, create_date, edit_date, user_name } = comment_info;

  const ref = useRef(null);
  const handleTextareaOnChange = (e) => {
    e.preventDefault();

    if (ref) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + `px`;
    }
  };

  return (
    <Wrapper>
      <UserWrapper>{user_name}</UserWrapper>
      {mode === "basic" && (
        <ContentsForm onSubmit={(e) => delete_fn(e, _id)}>
          <p>{comment}</p>
          <InfoWrapper>
            {edit_authority && (
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setMode("edit");
                  }}
                >
                  수정
                </button>
                <button type="submit">삭제</button>
              </div>
            )}
            <span>
              {create_date === edit_date
                ? format(new Date(create_date), "yyyy.MM.dd HH:mm:ss")
                : `${format(new Date(edit_date), "yyyy.MM.dd HH:mm:ss")} (수정됨)`}
            </span>
          </InfoWrapper>
        </ContentsForm>
      )}

      {mode === "edit" && (
        <ContentsForm
          onSubmit={async (e) => {
            await edit_fn(e, comment_info);
            setMode("basic");
          }}
        >
          <textarea ref={ref} id="edit" defaultValue={comment} onChange={handleTextareaOnChange} />
          <BtnWrapper>
            <ButtonComponent style={{ width: "80px", backgroundColor: "#8E0023" }} name="확인" type="submit" />
            <ButtonComponent
              style={{ width: "80px", backgroundColor: "#808080" }}
              name="취소"
              fn={(e) => {
                e.preventDefault();
                setMode("basic");
              }}
            />
          </BtnWrapper>
        </ContentsForm>
      )}
    </Wrapper>
  );
};

export default CommentComponent;
