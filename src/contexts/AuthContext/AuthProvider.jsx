import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const googleProvider =new GoogleAuthProvider()
const AuthProvider = ({children}) => {
 const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
const createUser =(email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email, password)
} ;
 const signInUser = (email, password) =>{
     setLoading(true);
     return signInWithEmailAndPassword(auth,email, password)
 };
  const signInWithGoogle = () =>{
      setLoading(true);
      return signInWithPopup(auth,googleProvider)
  };
  const signOutUser = () =>{
     setLoading(true);
     return signOut(auth)
  };
  useEffect(()=>{
     const unSubscribe=onAuthStateChanged(auth, currentUser=>{
         setUser(currentUser);
            setLoading(false);
     });
      return () =>{
            unSubscribe();
        }
  },[])

     const authInfo={
loading,
user,
signOutUser,
signInWithGoogle,
signInUser,
createUser
     }
    return (
        <AuthContext value={authInfo}>
             {children}
        </AuthContext>
    );
};

export default AuthProvider;