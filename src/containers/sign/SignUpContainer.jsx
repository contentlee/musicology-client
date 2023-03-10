import styled from "styled-components";
import { Link } from "react-router-dom";
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
  return (
    <MainWrapperComponent>
      <TitleComponent title="회원가입" />

      <Wrapper>
        <Form>
          <InputComponent id="id" type="text" name="ID" placeholder="아이디를 입력해주세요." />
          <InputComponent id="password" type="password" name="PASSWORD" placeholder="비밀번호를 입력해주세요!" />
          <InputComponent id="reenter" type="reenter" name="REENTER" placeholder="비밀번호를 재입력해주세요!" />
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
