/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
    // for user register
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
    //for user login
  const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  // logout
  const logOut =() =>{
    setLoading(true)
    return signOut(auth)
  }
  // manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email: userEmail}
      setUser(currentUser);
      setLoading(false)
      // if user exist then issue a token
      if(currentUser){      
        axios.post('http://localhost:5000/jwt',loggedUser, {withCredentials: true})
        .then(res => {
          console.log(res.data)
        })
      }
      else{
        axios.post('http://localhost:5000/logout',loggedUser, {withCredentials: true})
        .then(res =>{
          console.log(res.data)
        })
      }
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
