import { MainWrapperComponent } from "../../components/common";
import { BookDetailComponent } from "../../components/library";

const DetailContainer = () => {
  return (
    <MainWrapperComponent>
      <hr />
      <h1>상세페이지</h1>
      <hr />
      <BookDetailComponent />
      <hr />
      <h1>상세설명</h1>
      <hr />
      <section>
        <p></p>
      </section>
      <hr />
      <h1>댓글</h1>
      <hr />
    </MainWrapperComponent>
  );
};

export default DetailContainer;
