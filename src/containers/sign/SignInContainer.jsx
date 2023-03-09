import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MainWrapperComponent } from "../../components/common";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px;

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

const InputWrapper = styled.label`
  span {
    font-size: 14px;
    font-weight: 700;
    color: gray;
    margin-right: 6px;
  }

  input {
    height: 38px;
    margin: 4px;
    padding-left: 20px;
    padding-right: 40px;

    border: none;
    border-radius: 50px;

    background-color: rgba(0, 0, 0, 0.1);

    box-sizing: border-box;
  }
`;

const SignInContainer = () => {
  return (
    <MainWrapperComponent>
      <hr />
      <h1>로그인</h1>
      <hr />
      <Wrapper>
        <Form>
          <InputWrapper for="id">
            <span>ID</span>
            <input id="id" type="text" name="id" placeholder="아이디를 입력해주세요!" />
          </InputWrapper>
          <InputWrapper for="password">
            <span>PASSWORD</span>
            <input id="password" type="password" name="password" placeholder="비밀번호를 입력해주세요!" />
          </InputWrapper>
        </Form>
        <Link to={"/signup"}>회원가입이 필요하신가요?</Link>
      </Wrapper>
    </MainWrapperComponent>
  );
};

export default SignInContainer;
