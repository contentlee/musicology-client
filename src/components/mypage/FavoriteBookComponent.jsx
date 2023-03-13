import { format } from "date-fns";
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
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Img = styled.img`
  width: 30%;
  max-height: 280px;

  margin: 10px;
  object-fit: contain;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    width: 20%;
  }
`;

const Detail = styled.div`
  width: 100%;
  padding: 20px;

  box-sizing: border-box;

  h2 {
    &:hover {
      cursor: pointer;
    }
  }
`;

const DetailList = styled.ul`
  padding: 0;
  font-size: 14px;
  li {
    list-style-type: none;
  }
`;

const FavoirteBookComponent = ({ book_info, fn, children }) => {
  const { title, subtitle, author, publisher, date_of_publication, img } = book_info;
  return (
    <Wrapper>
      <Img
        src={
          img
            ? img
            : "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        alt="책 이미지"
        onClick={fn}
      />
      <Detail>
        <h2 onClick={fn}>{title}</h2>
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
      </Detail>
      {children}
    </Wrapper>
  );
};
export default FavoirteBookComponent;
