import React from "react";
import Button from "@mui/material/Button";
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert("error.message"));
  };

  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <div className="login_container">
          <img
            src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG95147.png"
            alt="loginimg"
          />
          <div className="login_text">
            <h1>Sign in to WhatsApp</h1>
          </div>
          <Button onClick={signIn}>Sign In With Google</Button>
        </div>
      </div>
    </>
  );
};

export default Login;
