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

  button {
    position: absolute;
    right: 20px;

    background: none;
    border: none;

    img {
      height: 24px;
    }
  }
`;

const SearchInputComponent = ({ fn }) => {
  return (
    <Form onSubmit={fn}>
      <input placeholder="책을 검색하세요" />
      <button>
        <img src={`${process.env.PUBLIC_URL}/assets/icons/search_icon.svg`} alt="search icon" />
      </button>
    </Form>
  );
};

export default SearchInputComponent;
