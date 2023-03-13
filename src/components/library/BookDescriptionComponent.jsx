import styled from "styled-components";

const Wrapper = styled.section`
  padding: 20px;
  white-space: pre-wrap;
`;

const BookDescriptionComponent = ({ description }) => {
  return (
    <Wrapper>
      <p>{description}</p>
    </Wrapper>
  );
};

export default BookDescriptionComponent;
