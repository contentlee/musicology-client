import styled from "styled-components";

const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  width: 100%;

  span {
    width: 120px;
    margin-right: 6px;

    text-align: right;
    font-size: 12px;
    font-weight: 700;
    color: gray;
  }

  input {
    margin: 4px;
    padding-left: 20px;
    padding-right: 40px;

    width: 100%;
    height: 38px;

    border: none;
    border-radius: 50px;

    background-color: rgba(0, 0, 0, 0.1);

    box-sizing: border-box;
  }
`;

const InputComponent = ({ defaultValue, name, id, type, placeholder, fn, required, inputStyle }) => {
  return (
    <InputWrapper htmlFor={id}>
      <span>{name}</span>
      <input
        defaultValue={defaultValue}
        required={required}
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        onChange={fn}
        style={inputStyle}
      />
    </InputWrapper>
  );
};

export default InputComponent;
