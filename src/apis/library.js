import { http } from "../libs/http";

export const getBooks = () =>
  http
    .get("/library")
    .then((res) => {
      return { status: "success", data: res };
    })
    .catch((err) => {
      return { status: "error", data: err };
    });

export const getBook = (id) =>
  http
    .get(`/library/detail/${id}`)
    .then((res) => {
      return { status: "success", data: res };
    })
    .catch((err) => {
      return { status: "error", data: err };
    });

export const searchBook = (word) =>
  http
    .get(`/library/search/${word}`)
    .then((res) => {
      return { status: "success", data: res };
    })
    .catch((err) => {
      return { status: "error", data: err };
    });
export const editBook = (id, req) => http.put(`/edit/${id}`, req);
export const addBook = (req) => http.post("/add", req);
export const deleteBook = (id) => http.delete(`/delete/${id}`);
