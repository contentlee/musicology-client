import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  span {
    margin: 10px;
    margin-right: 6px;

    font-size: 14px;
    font-weight: 700;
    color: gray;
  }

  textarea {
    margin: 4px;
    padding: 20px;

    width: 100%;
    height: auto;

    border: none;
    border-radius: 10px;

    background-color: rgba(0, 0, 0, 0.1);

    box-sizing: border-box;
    resize: none;
  }
`;

const TextareaComponent = ({ defaultValue, name, id, type, placeholder, fn, required }) => {
  const ref = useRef(null);
  const handleTextareaOnChange = (e) => {
    e.preventDefault();
    if (ref) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + `px`;
    }
  };
  return (
    <Wrapper htmlFor={id}>
      <span>{name}</span>
      <textarea
        defaultValue={defaultValue}
        ref={ref}
        required={required}
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        onChange={handleTextareaOnChange}
      />
    </Wrapper>
  );
};

export default TextareaComponent;
