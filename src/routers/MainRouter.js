import { Navigate } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { WrapperContainer } from "../containers/common";
import { AddBookContainer, DetailContainer, EditBookContainer, LibraryContainer } from "../containers/library";
import { MainContainer } from "../containers/main";
import { FavoriteContainer, MeContainer } from "../containers/mypage";
import { SignInContainer, SignUpContainer } from "../containers/sign";
import { http } from "../libs/http";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WrapperContainer />,
    children: [
      {
        path: "/",
        index: true,
        element: <MainContainer />,
      },
      {
        path: "library",
        element: <LibraryContainer />,
        loader: async () => {
          return await http
            .get("/library")
            .then((res) => res)
            .catch((err) => {
              console.log(err);
            });
        },
      },
      {
        path: "library/add",
        element: <AddBookContainer />,
      },
      {
        path: "library/edit/:id",
        element: <EditBookContainer />,
        loader: async ({ params }) => {
          return await http
            .get(`/library/detail/${params.id}`)
            .then((res) => res)
            .catch((err) => {
              console.log(err);
            });
        },
      },
      {
        path: "library/:word",
        element: <LibraryContainer />,
      },
      {
        path: "library/detail/:id",
        element: <DetailContainer />,
        loader: async ({ params }) => {
          return await http
            .get(`/library/detail/${params.id}`)
            .then((res) => res)
            .catch((err) => {
              console.log(err);
            });
        },
      },
      {
        path: "signIn",
        element: <SignInContainer />,
      },
      {
        path: "signUp",
        element: <SignUpContainer />,
      },
      {
        path: "me",
        element: <MeContainer />,
      },
      {
        path: "favorite",
        element: <FavoriteContainer />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);
