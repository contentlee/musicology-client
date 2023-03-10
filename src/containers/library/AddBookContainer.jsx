import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

import {
  ButtonComponent,
  InputComponent,
  MainWrapperComponent,
  TextareaComponent,
  TitleComponent,
} from "../../components/common";
import { http } from "../../libs/http";

const Wrapper = styled.section`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  hr {
    width: 100%;
  }

  div {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const AddBookContainer = () => {
  const navigate = useNavigate();
  const handleCancelOnClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const req = {
      title: target[0].value,
      subtitle: target[1].value,
      author: target[2].value,
      date_of_publication: target[3].value,
      publisher: target[4].value,
      img: target[5].value,
      description: target[6].value,
      user_id: "admin",
      user_name: "admin",
    };

    http
      .post("/add", req)
      .then(() => {
        navigate("/library");
      })
      .catch((err) => console.log(err));
  };

  return (
    <MainWrapperComponent>
      <TitleComponent title="책 추가하기" />
      <Wrapper>
        <Form onSubmit={handleOnSubmit}>
          <InputComponent name="Title" required={true} />
          <InputComponent name="Subtitle" />
          <InputComponent name="Author" required={true} />
          <InputComponent name="Date of Publication" type="date" required={true} />
          <InputComponent name="Publisher" required={true} />
          <InputComponent name="Img" />
          <hr />
          <TextareaComponent name="Description" />
          <hr />

          <div>
            <ButtonComponent style={{ width: "80px", backgroundColor: "#8E0023" }} name="제출" type="submit" />
            <ButtonComponent
              style={{ width: "80px", backgroundColor: "#808080" }}
              name="취소"
              fn={handleCancelOnClick}
            />
          </div>
        </Form>
      </Wrapper>
    </MainWrapperComponent>
  );
};

export default AddBookContainer;
