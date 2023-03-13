import { getYear } from "date-fns";

import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 200px;
  margin: 20px 0;
  padding: 0 10px;

  text-align: center;

  box-sizing: border-box;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  button {
    position: absolute;
    top: 4px;
    right: 20px;

    background: none;
    border: none;

    img {
      height: 24px;
      fill: rgb(42, 169, 224);
    }

    &:hover {
      cursor: pointer;
    }
  }

  div {
    &:first-child {
      position: absolute;

      width: 100%;
      height: 100%;

      background-image: url(${(props) => props.style.backgroundImage});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      transition: all 0.2s;
      z-index: -2;
      opacity: 60%;
    }

    &:last-child {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 24px;
        font-weight: 600;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  &:hover {
    div {
      &:first-child {
        filter: blur(5px);
        opacity: 30%;
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const BookComponent = ({ fn, liked_fn, unliked_fn, book, liked }) => {
  const { _id, title, subtitle, author, date_of_publication, img } = book;
  return (
    <Wrapper
      style={{
        backgroundImage: img
          ? img
          : "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      }}
    >
      <div />
      <button
        onClick={(e) => {
          if (liked) {
            unliked_fn(e, _id);
          } else {
            liked_fn(e, _id);
          }
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/${liked ? "star_filled_icon" : "star_outline_icon"}.svg`}
          alt="star"
        />
      </button>
      <div onClick={(e) => fn(e, _id)}>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
        <span className="author">{author}</span>
        <span className="year">{getYear(new Date(date_of_publication))}</span>
      </div>
    </Wrapper>
  );
};

export default BookComponent;
