import { Route, Routes } from "react-router";
import { WrapperContainer } from "../containers/common";
import { DetailContainer, LibraryContainer } from "../containers/library";
import { MainContainer } from "../containers/main";
import { FavoriteContainer } from "../containers/mypage";
import { SignInContainer, SignUpContainer } from "../containers/sign";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WrapperContainer />}>
        <Route path="/" index={true} element={<MainContainer />} />
        <Route path="library" element={<LibraryContainer />} />
        <Route path="library/:id" element={<DetailContainer />} />
        <Route path="signIn" element={<SignInContainer />} />
        <Route path="signUp" element={<SignUpContainer />} />
        <Route path="favorite" element={<FavoriteContainer />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
