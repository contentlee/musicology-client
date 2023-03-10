import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  max-height: 300px;

  padding: 0 10px;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 600px) {
    img {
      &:last-child {
        position: absolute;
        bottom: 12px;
        right: 12px;
      }
    }
  }
`;

const Img = styled.img`
  width: 30%;
  max-height: 280px;

  margin: 10px;
  object-fit: contain;

  @media screen and (max-width: 600px) {
    width: 20%;
  }
`;

const Detail = styled.div`
  width: 100%;
  padding: 20px;

  box-sizing: border-box;
`;

const DetailList = styled.ul`
  padding: 0;
  font-size: 18px;
  li {
    list-style-type: none;
    span {
      &:first-child {
        font-size: 12px;
        font-weight: 900;
      }
    }
  }
`;

const FavoirteBookComponent = ({ fn, children }) => {
  return (
    <Wrapper onClick={fn}>
      <Img
        src="https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="책 이미지"
      />
      <Detail>
        <h2>안녕하세요, 저는 누구누구입니다.</h2>
        <h3>subtitle</h3>
        <DetailList>
          <li>
            <span>Author | </span>
            <span>test 1</span>
          </li>
          <li>
            <span>Publisher | </span>
            <span>test 1</span>
          </li>

          <li>
            <span>Year of Publication | </span>
            <span>2022</span>
          </li>
        </DetailList>
      </Detail>
      {children}
    </Wrapper>
  );
};
export default FavoirteBookComponent;
