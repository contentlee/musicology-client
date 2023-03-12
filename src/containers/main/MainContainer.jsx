import styled from "styled-components";

const Wrapper = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const TextWrapper = styled.section`
  position: absolute;
  top: 58px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-size: 24px;
  font-family: "Black Han Sans";

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  color: #fff;

  z-index: 5;

  hr {
    width: 20%;
  }

  h1 {
    margin: 0;
  }

  @media screen and (min-width: 600px) {
    font-size: 48px;
  }
`;

const ImgWrapper = styled.section`
  position: relative;
  top: 58px;

  overflow: hidden;

  div {
    height: 100%;
  }
`;

const Img = styled.img`
  width: 100%;

  object-fit: contain;
`;

const MainContainer = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <span>작은 독서 커뮤니티</span>
        <hr />
        <h1>우리의 도서관</h1>
      </TextWrapper>
      <ImgWrapper>
        <Img src="https://images.pexels.com/photos/4132936/pexels-photo-4132936.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </ImgWrapper>
    </Wrapper>
  );
};

export default MainContainer;
