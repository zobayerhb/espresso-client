import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loader, setLoader] = useState(true);

  const userSignUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    users,
    loader,
    userSignUp,
    userSignIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
