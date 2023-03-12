import { http } from "../libs/http";

export const getCommentByBookIdApi = (book_id) =>
  http
    .get(`/comment/book/${book_id}`)
    .then((res) => {
      return { status: "success", data: res.data };
    })
    .catch((err) => {
      return { status: "error", data: err.response.data };
    });

export const getCommentByUserIdApi = () =>
  http
    .get(`/comment/user`)
    .then((res) => {
      return { status: "success", data: res.data };
    })
    .catch((err) => {
      return { status: "error", data: err.response.data };
    });

export const addCommentApi = (req) => http.post("/comment/add", req);
export const editCommentApi = (comment_id, req) => http.put(`/comment/edit/${comment_id}`, req);
export const deleteCommentApi = (comment_id) => http.delete(`/comment/delete/${comment_id}`);
