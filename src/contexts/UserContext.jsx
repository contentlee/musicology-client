import { createContext, useState } from "react";

const User = createContext({
  signed: {
    signedIn: false,
    user_name: "",
    user_id: "",
  },
  setSigned: (sign) => {},
});

const UserContext = ({ children }) => {
  const [signed, setSigned] = useState({
    signedIn: false,
    user_name: "",
    user_id: "",
  });

  return <User.Provider value={{ signed, setSigned }}>{children}</User.Provider>;
};

export default UserContext;
