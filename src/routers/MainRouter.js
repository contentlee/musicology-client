import { Navigate, redirect } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import { WrapperContainer } from "../containers/common";
import { AddBookContainer, DetailContainer, EditBookContainer, LibraryContainer } from "../containers/library";
import { MainContainer } from "../containers/main";
import { FavoriteContainer, MeContainer } from "../containers/mypage";
import { SignInContainer, SignUpContainer } from "../containers/sign";

import { getBookApi, getBooksApi, getEditBookApi, searchBookApi } from "../apis/library";
import { getFvBooksApi } from "../apis/favorite";

export const router = (isSignedIn, userInfo) => {
  return createBrowserRouter([
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
            return await getBooksApi();
          },
        },
        {
          path: "library/add",
          element: isSignedIn ? <AddBookContainer /> : <Navigate to="/signin" />,
        },
        {
          path: "library/edit/:id",
          element: isSignedIn ? <EditBookContainer /> : <Navigate to="/signin" />,
          loader: async ({ params }) => {
            const { data, status } = await getEditBookApi(params.id);
            if (status === "error") {
              alert(data.message);
              return redirect(`/library/detail/${params.id}`);
            }
            return { data, status };
          },
        },
        {
          path: "library/search/:word",
          element: <LibraryContainer />,
          loader: async ({ params }) => {
            return await searchBookApi(params.word);
          },
        },
        {
          path: "library/detail/:id",
          element: <DetailContainer />,
          loader: async ({ params }) => {
            return await getBookApi(params.id);
          },
        },
        {
          path: "signin",
          element: isSignedIn ? <Navigate to="/" /> : <SignInContainer />,
        },
        {
          path: "signup",
          element: isSignedIn ? <Navigate to="/" /> : <SignUpContainer />,
        },
        {
          path: "me",
          element: isSignedIn ? <MeContainer /> : <Navigate to="/signin" />,
        },
        {
          path: "favorite",
          element: isSignedIn ? <FavoriteContainer /> : <Navigate to="/signin" />,
          loader: async () => {
            const { data, status } = await getFvBooksApi();
            if (status === "error") {
              alert(data.message);
              return redirect(`/`);
            }
            return { data, status };
          },
        },
        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);
};
