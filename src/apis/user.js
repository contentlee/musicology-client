import { http } from "../libs/http";

export const signInApi = (req) => http.post("/signin", req);
export const signUpApi = (req) => http.post("/signup", req);
export const changeUserNameApi = (req) => http.post("/change/username", req);
export const changeUserPwdApi = (req) => http.post("/change/userpwd", req);
