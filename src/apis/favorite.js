import { redirect } from "react-router";
import { http } from "../libs/http";

export const getFvArrayApi = async () =>
  await http
    .get(`/favorite/ids`)
    .then((res) => {
      return { status: "success", data: res.data };
    })
    .catch(() => {
      return { status: "error", data: [] };
    });

export const getFvBooksApi = () =>
  http
    .get(`/favorite/books`)
    .then((res) => {
      return { status: "success", data: res.data.reverse() };
    })
    .catch(() => redirect("/"));

export const addFavoriteApi = (book_id) => http.put(`/favorite/add/${book_id}`);
export const deleteFavoriteApi = (book_id) => http.delete(`/favorite/delete/${book_id}`);
