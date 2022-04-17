import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { error, signInBygoogle } = useAuth();
  const location = useLocation();
  const navigat = useNavigate();
  const form = location.state?.form || "/";
  const handleSignIn = () => {
    signInBygoogle().then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      navigat(form);
    });
  };
  return (
    <div className="login-from my-5">
      <div className="login-from-text">
        <h1>Login With </h1>
        <button onClick={handleSignIn}>
          <i className="fa-brands fa-google"></i>Continue with Google
        </button>
        {error}
        <small>
          Don’t have an account? <a href="#">Create an account</a>
        </small>
      </div>
    </div>
  );
};

export default Login;
