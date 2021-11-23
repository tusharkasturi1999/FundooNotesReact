import React, { useState } from "react";
import "../styles/loginCreateResetForgot.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import resetPass from "../helper/axios";
import { Link, useParams } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import {
  validPassword,
} from "../config/formValidation";

export default function Reset() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPasswordError, setPasswordConfirmError] = useState(false);
  const { token } = useParams();


  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError(false);
    setPasswordConfirmError(false);
    let data = {
      password: password,
    };
    let errorFlag = false;
    e.preventDefault();
    if (!validPassword.test(password)) {
      setPasswordError(true);
      errorFlag = true;
    }

    if (password !== confirmPassword) {
      setPasswordConfirmError(true);
      errorFlag = true;
    }

    if (password === "") {
      errorFlag = true;
      setPasswordError(true);
    }
    if (errorFlag) {
      console.log("Error");
    } else {
      let data = {
        password: password,
      };
      resetPass.handleAxiosReset(data, token);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    setShowConfirmPassword(!showConfirmPassword);
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
            <span>Enter New Password</span>
          </div>
          <div style={{ width: "418px" }}>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div
                className="inputBox"
                style={{ width: "366px", margin: "26px", padding: "0px" }}
              >
                <TextField
                  id="password"
                  label="New Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  error={passwordError}
                  helperText={passwordError ? "Password cannot be empty" : ""}
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                />
                
                </div>
                <div
                className="inputBox"
                style={{ width: "366px", margin: "26px", padding: "0px" }}
              >
                 <TextField
                  id="confirmPassword"
                  label="Confirm Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  error={confirmPasswordError}
                  helperText={confirmPasswordError ? "Password mismatch" : ""}
                  fullWidth
                  onChange={(e) => setConfirmPassword(e.target.value)}
                /> 
                  <div className="showPasswordMsg">
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        color="primary"
                        onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                      />
                    }
                    label={
                      <Typography style={{ fontSize: "14px" }}>
                        Show password
                      </Typography>
                    }
                  />
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
                    <Button variant="contained" type="submit" >
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
