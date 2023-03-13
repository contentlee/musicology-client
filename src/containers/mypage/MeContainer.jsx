import { useState } from "react";
import { useLoaderData } from "react-router";

import styled from "styled-components";

import { changeUserNameApi, changeUserPwdApi } from "../../apis/user";

import { ButtonComponent, InputComponent, MainWrapperComponent, TitleComponent } from "../../components/common";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  max-width: 400px;

  hr {
    width: 100%;
    margin: 10px 0;
  }
`;

const MeContainer = () => {
  const { data } = useLoaderData();

  const handleChangeNameOnSubmit = (e) => {
    e.preventDefault();
    if (data.user_name === e.target[0].value) {
      alert("변경되기 전 이름과 같은 이름입니다.");
    } else {
      changeUserNameApi({ new_name: e.target[0].value }).then((res) => {
        localStorage.setItem("token", res.token);
        alert(res.message);
      });
    }
  };

  const handleChangePwdOnSubmit = (e) => {
    e.preventDefault();
    if (e.target[1].value !== e.target[2].value) {
      return alert("새로운 비밀번호를 다시 확인해주세요.");
    }
    if (e.target[0].value === e.target[1].value) {
      return alert("기존의 비밀번호와 동일합니다.");
    }
    const req = {
      pwd: e.target[0].value,
      new_pwd: e.target[1].value,
    };
    changeUserPwdApi(req).then((res) => {
      alert(res.message);
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
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
      <TitleComponent title="나의 정보" />
      <Wrapper>
        <Form onSubmit={handleChangeNameOnSubmit}>
          <InputComponent
            id="nickname"
            type="text"
            name="NICKNAME"
            defaultValue={data.user_name}
            placeholder="닉네임을 입력해주세요!"
          />
          <ButtonComponent style={{ width: "100%", backgroundColor: "#4d377b" }} name="닉네임 변경하기" type="submit" />
        </Form>
        <Form onSubmit={handleChangePwdOnSubmit}>
          <hr />

          <InputComponent id="current_password" type="password" name="CURRENT PASSWORD" placeholder="현재 비밀번호" />
          <InputComponent
            id="new_password"
            type="password"
            name="NEW PASSWORD"
            placeholder="새로운 비밀번호"
            fn={handlePwdOnChange}
          />
          <InputComponent
            id="reenter"
            type="password"
            name="REENTER"
            placeholder="새로운 비밀번호 재입력"
            fn={handleReenterOnChange}
            message={pwd !== repwd ? "※입력하신 비밀번호가 일치하지 않습니다." : ""}
          />

          <ButtonComponent
            style={{ width: "100%", backgroundColor: "#d31c00" }}
            name="비밀번호 변경하기"
            type="submit"
          />
        </Form>
      </Wrapper>
    </MainWrapperComponent>
  );
};

export default MeContainer;
