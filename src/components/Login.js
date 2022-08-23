import React, { useState } from "react";
import "../styles/Login.css";
import logo from "../images/amazon-logo-dark.png";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();

    // Firebase Sign In Functionality
    signInWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      // User Login Successful
      if (auth) navigate('/');
    })
    .catch((err) => {
      // User Login Unsuccessful
      alert("The Password or Email is incorrect");
    })
  };

  const register = (event) => {
    event.preventDefault();

    // Firebase Register Functionality
    createUserWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      // User Creation Successful
      if (auth) navigate('/');
    })
    .catch((err) => {
      // User Creation Unsuccessful
      alert(err.message);
    })
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <Link to="/">
          <img src={logo} alt="amazon" className="login__logo" />
        </Link>

        <div className="login__container">
          <h2>Sign In</h2>

          <form>
            <label htmlFor="login__email">Email address</label>
            <input type="email" name="email" id="login__email" value={email} onChange={e => setEmail(e.target.value)} />

            <label htmlFor="login__password">Password</label>
            <input
              type="password"
              name="password"
              id="login__password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button type="submit" className="login__signInButton" onClick={signIn}>
              Sign In
            </button>
          </form>

          <p>
            By continuing, you agree to Charles' Amazon Clone Conditions of Use
            and Privacy Notice.
          </p>
        </div>

        <p>New to Amazon?</p>

        <button type="button" className="login__registerButton" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
