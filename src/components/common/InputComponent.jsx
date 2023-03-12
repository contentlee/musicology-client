import styled from "styled-components";

const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;

  div {
    display: flex;
\    align-items: center;
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
  };

  p{
    margin: 0;
    margin-right: 14px;

    font-size: 10px;
    color:#d31c00;
  }
`;

const InputComponent = ({ defaultValue, name, id, type, placeholder, fn, required, inputStyle, message }) => {
  return (
    <InputWrapper htmlFor={id}>
      <div>
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
      </div>
      <p>{message}</p>
    </InputWrapper>
  );
};

export default InputComponent;
