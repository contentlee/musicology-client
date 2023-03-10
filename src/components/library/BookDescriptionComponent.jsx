import styled from "styled-components";

const Wrapper = styled.section`
  padding: 20px;
`;

const BookDescriptionComponent = ({ description }) => {
  return (
    <Wrapper>
      <p>{description}</p>
    </Wrapper>
  );
};

export default BookDescriptionComponent;
