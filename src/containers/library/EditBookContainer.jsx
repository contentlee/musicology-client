import { useLoaderData, useNavigate } from "react-router";

import { format } from "date-fns";
import styled from "styled-components";

import { editBookApi } from "../../apis/library";

import {
  ButtonComponent,
  InputComponent,
  MainWrapperComponent,
  TextareaComponent,
  TitleComponent,
} from "../../components/common";

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

const EditBookContainer = () => {
  const {
    data: { _id, title, subtitle, author, date_of_publication, publisher, img, description, creat_date },
  } = useLoaderData();

  const navigate = useNavigate();
  const handleCancelOnClick = (e) => {
    e.preventDefault();
    navigate("/library");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const req = {
      _id: _id,
      title: target[0].value,
      subtitle: target[1].value,
      author: target[2].value,
      date_of_publication: target[3].value,
      publisher: target[4].value,
      img: target[5].value,
      description: target[6].value,
      creat_date: creat_date,
    };

    editBookApi(_id, req).then((res) => {
      alert(res.message);
      navigate(`/library/detail/${_id}`);
    });
  };

  return (
    <MainWrapperComponent>
      <TitleComponent title="책 수정하기" />
      <Wrapper>
        <Form onSubmit={handleOnSubmit}>
          <InputComponent defaultValue={title} name="Title" required={true} />
          <InputComponent defaultValue={subtitle} name="Subtitle" />
          <InputComponent defaultValue={author} name="Author" required={true} />
          <InputComponent
            defaultValue={format(new Date(date_of_publication), "yyyy-MM-dd")}
            name="Date of Publication"
            type="date"
            required={true}
            inputStyle={{ padding: "0 20px" }}
          />
          <InputComponent defaultValue={publisher} name="Publisher" required={true} />
          <InputComponent defaultValue={img} name="Img" />
          <hr />
          <TextareaComponent defaultValue={description} name="Description" />
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

export default EditBookContainer;
