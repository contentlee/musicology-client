import styled from "styled-components";
import { format } from "date-fns";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;

  width: 100%;

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
      font-size: 12px;
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

const BookDetailComponent = ({ book, children }) => {
  const { title, subtitle, author, date_of_publication, publisher, img, user_name, create_date, edit_date } = book;
  return (
    <Wrapper>
      <Img
        src={
          img
            ? img
            : "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        alt="책 이미지"
      />
      <Detail>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <DetailList>
          <li>
            <span>Author | </span>
            <span>{author}</span>
          </li>
          <li>
            <span>Publisher | </span>
            <span>{publisher}</span>
          </li>

          <li>
            <span>Year of Publication | </span>
            <span>{format(new Date(date_of_publication), "yyyy-MM-dd")}</span>
          </li>
        </DetailList>

        {children}

        <InfoList>
          <li>
            <span>작성자 | </span>
            <span>{user_name}</span>
          </li>
          <li>
            <span>작성일 | </span>
            <span>{format(new Date(create_date), "yyyy-MM-dd HH:mm:ss")}</span>
          </li>

          <li>
            <span>최종 수정일 | </span>
            <span>{format(new Date(edit_date), "yyyy-MM-dd HH:mm:ss")}</span>
          </li>
        </InfoList>
      </Detail>
    </Wrapper>
  );
};

export default BookDetailComponent;
