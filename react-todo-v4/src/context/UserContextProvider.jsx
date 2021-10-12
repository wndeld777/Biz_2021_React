import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    //    userid: "root",
  });

  const porpsData = { user, setUser };
  return (
    <UserContextProvider value={porpsData}>{children}</UserContextProvider>
  );
}

export default UserContextProvider;
