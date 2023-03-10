import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  hr {
    margin: 0;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 20px;
    padding-right: 10px;

    h1 {
      margin: 14px 0;
      font-size: 16px;
    }
  }
`;

const TitleComponent = ({ title, children }) => {
  return (
    <Wrapper>
      <hr />
      <div>
        <h1>{title}</h1>
        {children}
      </div>
      <hr />
    </Wrapper>
  );
};

export default TitleComponent;
