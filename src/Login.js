import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    //login menggunakan akun google...
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://mk0droplrg5q83m5xg0r.kinstacdn.com/wp-content/uploads/2020/06/discord-logo-1200x400.jpg" />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
