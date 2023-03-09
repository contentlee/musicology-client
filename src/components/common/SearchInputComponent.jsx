import styled from "styled-components";

const Form = styled.form`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  padding-right: 10px;

  box-sizing: border-box;

  input {
    position: relative;
    width: 100%;
    height: 38px;
    padding-left: 20px;
    padding-right: 40px;

    border: none;
    border-radius: 50px;

    background-color: rgba(0, 0, 0, 0.1);

    box-sizing: border-box;
  }

  img {
    position: absolute;
    right: 20px;

    height: 24px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const SearchInputComponent = () => {
  return (
    <Form>
      <input type="text" placeholder="당신이 원하는 책을 검색하세요" />
      <img src={`${process.env.PUBLIC_URL}/assets/icons/search_icon.svg`} alt="search icon" />
    </Form>
  );
};

export default SearchInputComponent;
