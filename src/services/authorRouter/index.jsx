/* eslint-disable */
import React, { useState } from "react";
import { localRemoveAccount, localRemoveToken } from "../../utils/localStorage";
import { fakeAuthProvider } from "./auth.js";
// import { AuthContextType } from "./interfaces";

let AuthContext = React.createContext();

export function AuthProvider({ children }) {
  let [account, setAccount] = useState(null);
  let [token, setToken] = useState(null);

  let signIn = (newToken, newAccount, callback) => {
    return fakeAuthProvider.signIn(() => {
      setToken(newToken);
      setAccount(newAccount);
      callback();
    });
  };

  let signOut = (callback) => {
    return fakeAuthProvider.signOut(() => {
      setToken(null);
      setAccount(null);
      localRemoveAccount();
      localRemoveToken();
      callback();
    });
  };

  let value = { token, account, signIn, signOut };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function RequireAuth({ children }) {
  let auth = useAuth();

  // if (!auth.token) {
  //   history.push({
  //     pathname: routerNames.SIGN_IN,
  //   });
  // }

  return children;
}
