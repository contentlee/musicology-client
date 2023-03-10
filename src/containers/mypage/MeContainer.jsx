import styled from "styled-components";

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
  return (
    <MainWrapperComponent>
      <TitleComponent title="나의 정보" />
      <Wrapper>
        <Form>
          <InputComponent id="nickname" type="text" name="NICKNAME" placeholder="닉네임을 입력해주세요!" />
          <ButtonComponent style={{ width: "100%", backgroundColor: "#4d377b" }} name="닉네임 변경하기" type="submit" />
        </Form>
        <Form>
          <hr />

          <InputComponent id="current_password" type="password" name="CURRENT PASSWORD" placeholder="현재 비밀번호" />
          <InputComponent id="new_password" type="password" name="NEW PASSWORD" placeholder="새로운 비밀번호" />
          <InputComponent id="reenter" type="reenter" name="REENTER" placeholder="새로운 비밀번호 재입력" />

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
