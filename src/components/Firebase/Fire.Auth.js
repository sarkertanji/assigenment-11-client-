import { firebaseConfig } from "./Firebase.config";
import { initializeApp } from "firebase/app";
export const firebaseInit = () => {
  return initializeApp(firebaseConfig);
};
