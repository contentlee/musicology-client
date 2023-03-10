import styled from "styled-components";

const Button = styled.button`
  width: 80px;

  padding: 10px;
  margin-top: 4px;
  margin-right: 4px;

  border: none;
  border-radius: 4px;

  color: #fff;

  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    filter: grayscale(40%);
  }
`;

const ButtonComponent = ({ style, name, type, fn }) => {
  return (
    <Button style={style} onClick={fn} type={type}>
      {name}
    </Button>
  );
};

export default ButtonComponent;
