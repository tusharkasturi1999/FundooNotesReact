import React, { useState } from "react";
import "../styles/loginCreateResetForgot.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { validEmail } from "../config/formValidation";
import ForgotPass from "../helper/axios";
export default function Forgot() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const datasForgot = { email: email };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError(false);
    let flag = false;

    if (!validEmail.test(email)) {
      setEmailError(true);
      flag = true;
    }

    if (flag !== true) {
      ForgotPass.handleAxiosForgot(datasForgot);
    }
  };

  return (
    <div className="imgBoxLogin">
      <div className="outerBox">
        <div className="outerPadding">
          <div style={{ textAlign: "center" }}>
            <span className="fundooNotesRainbow">FundooNotes</span>
          </div>
          <div className="createAccountDiv" style={{ textAlign: "center" }}>
            <span className="createAccount">Account Recovery</span>
          </div>
          <div className="subheadLogin" style={{ textAlign: "center" }}>
            <span>Use your FundooNotes Account</span>
          </div>
          <div style={{ width: "418px" }}>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div
                className="inputBox"
                style={{ width: "366px", margin: "26px", padding: "0px" }}
              >
                <TextField
                  // helperText="You can enter letters, numbers and periods"
                  required
                  className="emailIdBox"
                  fullWidth
                  label="Email Id"
                  autoComplete="email"
                  placeholder="abc.123@example.com"
                  error={emailError}
                  helperText={
                    emailError
                      ? "Invalid email"
                      : "You can use letters,numbers & periods"
                  }
                  onChange={(e) => setEmail(e.target.value)}
                  //   InputProps={{endAdornment: <InputAdornment position="end">@example.com</InputAdornment>}}
                />
                <div className="signIn">
                  <a href="/" text-decoration="none">
                    <span variant="text">Sign in instead</span>
                  </a>
                </div>
                <div className="signInSignUp">
                  <div className="signIn">
                    <a href="/" textDecoration="none">
                      <span variant="text" to="/">
                        Create account
                      </span>
                    </a>
                  </div>
                  <div className="signUp">
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
