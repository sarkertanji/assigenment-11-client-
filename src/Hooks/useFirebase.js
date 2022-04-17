import { firebaseInit } from "../components/Firebase/Fire.Auth";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInit();
const provider = new GoogleAuthProvider();
const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const signInBygoogle = () => {
    setIsLoading(true);
    //
    //
    return signInWithPopup(auth, provider)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("user Sign out");
        setUser(null);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
        setError(error);
      }
      setIsLoading(false);
    });
  }, [error]);
  return { user, error, isLoading, signInBygoogle, logOut };
};
export default useFirebase;
