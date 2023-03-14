import { redirect } from "react-router";
import { http } from "../libs/http";

export const getBooksApi = () =>
  http
    .get("/library")
    .then((res) => {
      return { status: "success", data: res.data.reverse() };
    })
    .catch(() => {
      return { status: "error", data: [] };
    });

export const getBookApi = (book_id) =>
  http
    .get(`/library/detail/${book_id}`)
    .then((res) => {
      return { status: "success", data: res.data };
    })
    .catch(() => {
      return { status: "error", data: {} };
    });

export const searchBookApi = (word) =>
  http
    .get(`/library/search/${word}`)
    .then((res) => {
      return { status: "success", data: res.data.reverse() };
    })
    .catch(() => {
      return { status: "error", data: [] };
    });

export const getEditBookApi = (book_id) =>
  http
    .get(`/library/edit/${book_id}`)
    .then((res) => {
      return { status: "success", data: res.data };
    })
    .catch(() => redirect(`/library/detail/${book_id}`));

export const addBookApi = (req) => http.post("/library/add", req);
export const editBookApi = (book_id, req) => http.put(`/library/edit/${book_id}`, req);
export const deleteBookApi = (book_id) => http.delete(`/library/delete/${book_id}`);
