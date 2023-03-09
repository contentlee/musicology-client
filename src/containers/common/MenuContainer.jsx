import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { IconComponent } from "../../components/common";

const Wrapper = styled.div`
  display: flex;
  margin-right: 10px;

  img {
    &:last-child {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    position: fixed;
    bottom: 24px;
    right: 24px;

    flex-direction: column;

    img {
      &:last-child {
        display: flex;
      }
    }
  }
`;

const MenuContainer = () => {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);

  const handleMenuOnClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const handleListOnClick = (e) => {
    e.preventDefault();
    navigate("/library");
  };
  const handleSignInOnClick = (e) => {
    e.preventDefault();
    navigate("/signin");
  };
  const handleFavoriteOnClick = (e) => {
    e.preventDefault();
    navigate("/favorite");
  };

  return (
    <Wrapper>
      <IconComponent icon="list_icon" fn={handleListOnClick} />
      <IconComponent icon="star_icon" fn={handleFavoriteOnClick} />
      <IconComponent icon="signin_icon" fn={handleSignInOnClick} />
      <IconComponent icon="menu_icon" fn={handleMenuOnClick} />
    </Wrapper>
  );
};

export default MenuContainer;
