import { createContext, useEffect, useState } from "react";

export const Sign = createContext({
  isSignedIn: false,
  setSignedInFn: (boolean) => {},
});

export const User = createContext({
  userInfo: {
    user_id: "",
    user_name: "",
    authority: "general",
  },
  setUserInfoFn: (obj) => {},
  resetUserInfo: () => {},
});

const UserContext = ({ children }) => {
  const [isSignedIn, setSignedIn] = useState(false);
  const setSignedInFn = (boolean) => {
    setSignedIn(boolean);
  };
  const [userInfo, setUserInfo] = useState({
    user_id: "",
    user_name: "",
    authority: "general",
  });

  const setUserInfoFn = (obj) => {
    setUserInfo(obj);
  };
  const resetUserInfo = () => {
    setUserInfo({
      user_id: "",
      user_name: "",
      authority: "general",
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setSignedIn(true);
  }, []);

  return (
    <Sign.Provider value={{ isSignedIn, setSignedInFn }}>
      <User.Provider value={{ userInfo, setUserInfoFn, resetUserInfo }}>{children}</User.Provider>
    </Sign.Provider>
  );
};

export default UserContext;
