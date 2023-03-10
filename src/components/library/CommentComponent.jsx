import styled from "styled-components";
const Wrapper = styled.section`
  display: flex;

  padding: 20px;
  word-break: break-all;

  span {
    width: 140px;
    font-weight: 900;
  }
  p {
    margin: 0;
    margin-left: 10px;
  }
`;

const CommentComponent = () => {
  return (
    <Wrapper>
      <span>usersdfsdfsdf</span>
      <p>contentsasdfasdfaasdfasdfasdfasfdasdfasdfasdfasdfasdfsadf</p>
    </Wrapper>
  );
};

export default CommentComponent;
