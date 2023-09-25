import React, { useState } from "react";
import * as Components from "../Components/MyComponents/Components.jsx";
import "../Components/Styles/login_background.css";
import { NAVBAR_HOME } from "./NavBar.jsx";
import { UserAuth } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/MyComponents/Spinner.jsx";
function LoginScreen() {
  const [sign, setChange] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { createUser, logIn, resetPassword } = UserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (email.length === 0 || password.length === 0) {
      console.log("Enter Details");
      return;
    }
    console.log("Sign Up");
    try {
      if (sign) {
        const res = await logIn(email, password);
        if (!res) {
          console.log("Not email Verified");
          navigate("/");
          return;
        }
        navigate("/classes");
      } else {
        if (name.length <= 3) {
          console.log("Enter name!! Atleast 3 characters");
          return;
        }
        await createUser(email, password, name);
        console.log("Created");
        setChange(true);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleForgotPassword = async () => {
    try {
      await resetPassword(email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NAVBAR_HOME />
      <Components.Container>
        <Components.SignUpContainer signInMode={sign}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Components.Input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {
              loading?<Spinner/>:
              <Components.Button onClick={handleSubmit}>
                Sign Up
              </Components.Button>
            }
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signInMode={sign}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Components.Anchor onClick={handleForgotPassword}>
              Forgot your password?
            </Components.Anchor>
            {
              loading?<Spinner/>:
              <Components.Button onClick={handleSubmit}>
                Sign In
              </Components.Button>
            }
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signInMode={sign}>
          <Components.Overlay signInMode={sign}>
            <Components.LeftOverlayPanel signInMode={sign}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => setChange(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signInMode={sign}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => setChange(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </>
  );
}

export default LoginScreen;