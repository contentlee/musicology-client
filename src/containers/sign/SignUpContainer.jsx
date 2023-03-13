import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

import { signUpApi } from "../../apis/user";

import { ButtonComponent, InputComponent, MainWrapperComponent, TitleComponent } from "../../components/common";

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

  hr {
    width: 100%;
    margin: 10px 0;
  }
`;

const SignUpContainer = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const temp = { user_id: e.target[0].value, pwd: e.target[1].value, user_name: e.target[3].value };
    if (e.target[1].value !== e.target[2].value) return alert("비밀번호를 다시 확인해주세요.");
    signUpApi(temp).then(() => {
      navigate("/signin");
    });
  };

  const [pwd, setPwd] = useState("");
  const [repwd, setrepwd] = useState("");
  const handlePwdOnChange = (e) => {
    e.preventDefault();
    setPwd(e.target.value);
  };
  const handleReenterOnChange = (e) => {
    e.preventDefault();
    setrepwd(e.target.value);
  };

  return (
    <MainWrapperComponent>
      <TitleComponent title="회원가입" />

      <Wrapper>
        <Form onSubmit={handleOnSubmit}>
          <InputComponent id="id" type="text" name="ID" placeholder="아이디를 입력해주세요." />
          <InputComponent
            id="password"
            type="password"
            name="PASSWORD"
            placeholder="비밀번호를 입력해주세요!"
            fn={handlePwdOnChange}
          />
          <InputComponent
            id="reenter"
            type="password"
            name="REENTER"
            placeholder="비밀번호를 재입력해주세요!"
            fn={handleReenterOnChange}
            message={pwd !== repwd ? "※입력하신 비밀번호가 일치하지 않습니다." : ""}
          />
          <hr />
          <InputComponent id="nickname" type="text" name="NICKNAME" placeholder="닉네임을 입력해주세요!" />

          <ButtonComponent style={{ width: "100%", backgroundColor: "#d31c00" }} name="회원가입" type="submit" />
        </Form>
        <Link to={"/signin"}>이미 가입을 하셨나요?</Link>
      </Wrapper>
    </MainWrapperComponent>
  );
};

export default SignUpContainer;
