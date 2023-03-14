import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

import { signInApi } from "../../apis/user";

import { ButtonComponent, InputComponent, MainWrapperComponent, TitleComponent } from "../../components/common";

import { Sign } from "../../contexts/UserContext";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px 10px;

  a {
    margin: 18px;
    color: #808080;
    font-size: 14px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const SignInContainer = () => {
  const navigate = useNavigate();
  const { setSignedInFn } = useContext(Sign);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    signInApi({ user_id: e.target[0].value, pwd: e.target[1].value }).then((res) => {
      sessionStorage.setItem("token", res.token);
      setSignedInFn(true);

      navigate("/");
    });
  };

  return (
    <MainWrapperComponent>
      <TitleComponent title="로그인" />
      <Wrapper>
        <Form onSubmit={handleOnSubmit}>
          <InputComponent id="id" type="text" name="ID" placeholder="아이디를 입력해주세요." />
          <InputComponent id="password" type="password" name="PASSWORD" placeholder="비밀번호를 입력해주세요!" />
          <ButtonComponent style={{ width: "100%", backgroundColor: "#d31c00" }} name="로그인" type="submit" />
        </Form>
        <Link to={"/signup"}>회원가입이 필요하신가요?</Link>
      </Wrapper>
    </MainWrapperComponent>
  );
};

export default SignInContainer;
