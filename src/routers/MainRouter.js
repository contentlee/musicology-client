import { Navigate, redirect } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import { WrapperContainer } from "../containers/common";
import {
  AddBookContainer,
  CommentContainer,
  DetailContainer,
  EditBookContainer,
  LibraryContainer,
} from "../containers/library";
import { MainContainer } from "../containers/main";
import { FavoriteContainer, MeContainer } from "../containers/mypage";
import { SignInContainer, SignUpContainer } from "../containers/sign";

import { getBookApi, getBooksApi, getEditBookApi, searchBookApi } from "../apis/library";
import { getFvArrayApi, getFvBooksApi } from "../apis/favorite";
import { getCommentByBookIdApi } from "../apis/comment";
import { getNameApi } from "../apis/user";

export const router = () => {
  const isSignedIn = () => (sessionStorage.getItem("token") ? true : false);
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
            if (isSignedIn()) {
              return await getFvArrayApi().then(async (res) => {
                const { status, data } = await getBooksApi();
                return { status, data: data, favorite_books: res.data };
              });
            } else {
              return await getBooksApi();
            }
          },
        },
        {
          path: "library/search/:word",
          element: <LibraryContainer />,
          loader: async ({ params }) => {
            if (isSignedIn()) {
              return await getFvArrayApi().then(async (res) => {
                const { status, data } = await searchBookApi(params.word);
                return { status, data: data, favorite_books: res.data };
              });
            } else {
              return await searchBookApi(params.word);
            }
          },
        },

        {
          path: "library/detail/:book_id",
          element: <DetailContainer />,
          loader: async ({ params }) => {
            if (isSignedIn()) {
              return await getFvArrayApi().then(async (res) => {
                const { status, data } = await getBookApi(params.book_id);
                if (status === "error") return redirect("/library");
                return { status, data, included: res.data.includes(data._id) };
              });
            } else {
              return await getBookApi(params.book_id);
            }
          },
          children: [
            {
              path: "",
              element: <CommentContainer />,
              loader: async (params) => {
                return await getCommentByBookIdApi(params.params.book_id);
              },
            },
          ],
        },
        {
          path: "library/add",
          element: <AddBookContainer />,
          loader: () => {
            if (!isSignedIn()) return redirect("/signin");
            return {};
          },
        },
        {
          path: "library/edit/:id",
          element: <EditBookContainer />,
          loader: async ({ params }) => {
            if (!isSignedIn()) return redirect("/signin");
            return await getEditBookApi(params.id);
          },
        },
        {
          path: "signin",
          element: <SignInContainer />,
          loader: () => {
            if (isSignedIn()) return redirect("/");
            return {};
          },
        },
        {
          path: "signup",
          element: <SignUpContainer />,
          loader: () => {
            if (isSignedIn()) return redirect("/");
            return {};
          },
        },
        {
          path: "me",
          element: <MeContainer />,
          loader: async () => {
            if (!isSignedIn()) return redirect("/signin");
            return await getNameApi();
          },
        },
        {
          path: "favorite",
          element: <FavoriteContainer />,
          loader: async () => {
            if (!isSignedIn()) return redirect("/signin");
            return await getFvBooksApi();
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
