import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;

  width: 100%;
  padding: 0 20px;

  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 30%;
  min-width: 200px;

  margin: 10px;
  object-fit: contain;
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

const InfoList = styled.ul`
  padding: 0;
  font-size: 12px;
  color: gray;

  li {
    list-style-type: none;
  }
`;

const Button = styled.button`
  width: 80px;

  padding: 10px;
  margin-top: 4px;
  margin-right: 4px;

  border: none;
  border-radius: 4px;

  color: #fff;

  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    filter: grayscale(40%);
  }
`;

const BookDetailComponent = () => {
  return (
    <Wrapper>
      <Img
        src="https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="책 이미지"
      />
      <Detail>
        <h2>title</h2>
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
        <Button style={{ backgroundColor: "#ffd400" }}>찜하기</Button>
        <Button style={{ backgroundColor: "#4d377b" }}>수정</Button>
        <Button style={{ backgroundColor: "#8E0023" }}>삭제</Button>

        <InfoList>
          <li>
            <span>작성자 | </span>
            <span>test 1</span>
          </li>
          <li>
            <span>작성일 | </span>
            <span>2022-01-01</span>
          </li>

          <li>
            <span>최종 수정일 | </span>
            <span>2022-01-01</span>
          </li>
        </InfoList>
      </Detail>
    </Wrapper>
  );
};

export default BookDetailComponent;
