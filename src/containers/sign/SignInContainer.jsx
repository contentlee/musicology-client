import { Link } from "react-router-dom";
import styled from "styled-components";
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
`;

const SignInContainer = () => {
  return (
    <MainWrapperComponent>
      <TitleComponent title="로그인" />
      <Wrapper>
        <Form>
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
