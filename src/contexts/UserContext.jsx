import { createContext, useEffect, useState } from "react";

export const Sign = createContext({
  isSignedIn: false,
  setSignedInFn: (boolean) => {},
});

const UserContext = ({ children }) => {
  const [isSignedIn, setSignedIn] = useState(false);
  const setSignedInFn = (boolean) => {
    setSignedIn(boolean);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) setSignedIn(true);
  }, []);

  return <Sign.Provider value={{ isSignedIn, setSignedInFn }}>{children}</Sign.Provider>;
};

export default UserContext;
