import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 10px;
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

    &:focus {
      outline: none;
    }
  }
`;

const CommentInputComponent = ({ placeholder, fn, children }) => {
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
      <form onSubmit={fn}>
        <textarea ref={ref} placeholder={placeholder} onChange={handleTextareaOnChange}></textarea>
        {children}
      </form>
    </Wrapper>
  );
};

export default CommentInputComponent;
