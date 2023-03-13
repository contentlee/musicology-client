import { useContext } from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";

import { IconComponent } from "../../components/common";

import { Sign } from "../../contexts/UserContext";

const Wrapper = styled.div`
  display: flex;
  margin-right: 10px;

  border-radius: 50px;
  background-color: #fff;

  @media screen and (max-width: 600px) {
    position: fixed;
    bottom: 24px;
    right: 24px;

    flex-direction: column;
    transition: 0.3s;
  }
`;

const MenuContainer = () => {
  const navigate = useNavigate();

  const { isSignedIn, setSignedInFn } = useContext(Sign);

  const handleListOnClick = (e) => {
    e.preventDefault();
    navigate("/library");
  };
  const handleSignInOnClick = (e) => {
    e.preventDefault();
    if (isSignedIn) {
      if (window.confirm("로그아웃하시겠습니까?")) {
        localStorage.removeItem("token");
        setSignedInFn(false);
        navigate("/");
      }
    } else {
      navigate("/signin");
    }
  };
  const handleFavoriteOnClick = (e) => {
    e.preventDefault();
    navigate("/favorite");
  };
  const handleAdminOnClick = (e) => {
    e.preventDefault();
    navigate("/me");
  };

  return (
    <Wrapper>
      <IconComponent title="책목록 보기" icon="list_icon" fn={handleListOnClick} />
      <IconComponent title="찜한 책" icon="star_icon" fn={handleFavoriteOnClick} />
      <IconComponent title="me" icon="person_icon" fn={handleAdminOnClick} />
      <IconComponent
        title={isSignedIn ? "로그아웃" : "로그인"}
        icon={isSignedIn ? "signin_icon" : "signout_icon"}
        fn={handleSignInOnClick}
      />
    </Wrapper>
  );
};

export default MenuContainer;
