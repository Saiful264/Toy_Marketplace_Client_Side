import { createContext, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, serUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(email, password, auth);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(email, password, auth);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (name, photoUrl) => {
    return updateUserProfile(auth.currentUser, {
      displayName: name,
      photoUrl: photoUrl,
    });
  };

  const AuthInfo = {
    user,
    logIn,
    createUser,
    googleSignIn,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
