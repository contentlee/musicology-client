import styled from "styled-components";

const Img = styled.img`
  margin: 2px;
  padding: 8px;
  height: 24px;
  border-radius: 50px;

  &:hover {
    box-shadow: 0px 0px 4px gray;
    cursor: pointer;
  }
`;
const IconComponent = ({ icon, fn }) => {
  return <Img src={`${process.env.PUBLIC_URL}/assets/icons/${icon}.svg`} alt={icon} onClick={fn} />;
};

export default IconComponent;
