import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Logo = styled.div`
  position: relative;
  top: 2px;

  width: 125px;
  padding: 10px;

  text-align: center;
  font-weight: 400;
  font-family: "Black Han Sans";

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  div {
    &:first-child {
      font-size: 14px;
      line-height: 90%;
    }
    &:last-child {
      font-size: 28px;
      line-height: 90%;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

const LogoComponent = () => {
  const navigate = useNavigate();
  const handleOnClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <Logo onClick={handleOnClick}>
      <div>우리의</div>
      <div>도서관</div>
    </Logo>
  );
};

export default LogoComponent;
