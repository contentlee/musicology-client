import { Navigate } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import { WrapperContainer } from "../containers/common";
import { AddBookContainer, DetailContainer, EditBookContainer, LibraryContainer } from "../containers/library";
import { MainContainer } from "../containers/main";
import { FavoriteContainer, MeContainer } from "../containers/mypage";
import { SignInContainer, SignUpContainer } from "../containers/sign";

import { getBook, getBooks, searchBook } from "../apis/library";

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
          return await getBooks();
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
          return await getBook(params.id);
        },
      },
      {
        path: "library/search/:word",
        element: <LibraryContainer />,
        loader: async ({ params }) => {
          return await searchBook(params.word);
        },
      },
      {
        path: "library/detail/:id",
        element: <DetailContainer />,
        loader: async ({ params }) => {
          return await getBook(params.id);
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
