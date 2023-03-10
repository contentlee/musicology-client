import { Navigate, redirect, Route, Routes, useNavigate } from "react-router";
import { WrapperContainer } from "../containers/common";
import { AddBookContainer, DetailContainer, EditBookContainer, LibraryContainer } from "../containers/library";
import { MainContainer } from "../containers/main";
import { FavoriteContainer, MeContainer } from "../containers/mypage";
import { SignInContainer, SignUpContainer } from "../containers/sign";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WrapperContainer />}>
        <Route path="/" index={true} element={<MainContainer />} />
        <Route path="library" element={<LibraryContainer />} />
        <Route path="library/add" element={<AddBookContainer />} />
        <Route path="library/edit/:id" element={<EditBookContainer />} />
        <Route path="library/:word" element={<DetailContainer />} />
        <Route path="library/detail/:id" element={<DetailContainer />} />
        <Route path="signIn" element={<SignInContainer />} />
        <Route path="signUp" element={<SignUpContainer />} />
        <Route path="me" element={<MeContainer />} />
        <Route path="favorite" element={<FavoriteContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
