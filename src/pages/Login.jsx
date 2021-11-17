import React, { useState } from "react";
import "../css/style.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Login1 from "../helper/axios";
import { validPassword, validEmail } from "../config/formValidation";
import { Redirect } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  let EM = email;
  let PW = password;

  const dataslogin = { email: EM, password: PW };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);

    let flag = false;
    if (!validEmail.test(email)) {
      setEmailError(true);
      flag = true;
    }
    if (!validPassword.test(password)) {
      setPasswordError(true);
      flag = true;
    }

    if (flag !== true) {
      Login1.handleAxiosLogin(dataslogin).then((response) => {
        console.log(response.data);
        if (response.data.status === 200) {
          alert("Log In Successfull");
          localStorage.setItem("token", response.data.message.Token);
          setSuccess(true);
        }
        if (response.data.status !== 200) alert(response.data.message);
        console.log("Token" + response.data.message.Token);
      });
    }
  };

  let checkTick = false;

  const handleClickShowPasswordBoth = (event) => {
    checkTick = !checkTick;
    setShowPassword(false);

    if (checkTick === true) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //   render(){
  return (
    <div className="imgBoxLogin">
      <div className="outerBox">
        <div className="outerPadding">
          <div style={{ textAlign: "center" }}>
            <span className="fundooNotesRainbow">FundooNotes</span>
          </div>
          <div className="createAccountDiv" style={{ textAlign: "center" }}>
            <span className="createAccount">Sign in</span>
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
                      : "Enter your FundooNotes email"
                  }
                  onChange={(e) => setEmail(e.target.value)}
                  //   InputProps={{endAdornment: <InputAdornment position="end">@example.com</InputAdornment>}}
                />
                <div className="passwordBoxLogin">
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      className="firstPasswordBox"
                      type={showPassword ? "text" : "password"}
                      // value={values.password}
                      onChange={(e) => setPassword(e.target.value)}
                      label="Password"
                      error={passwordError}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <div className="passwordInfo">
                  <span>
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols
                  </span>
                </div>
                <div className="showPasswordMsg">
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        color="primary"
                        onClick={handleClickShowPasswordBoth}
                        onMouseDown={handleMouseDownPassword}
                      />
                    }
                    label={
                      <Typography style={{ fontSize: "14px" }}>
                        Show password
                      </Typography>
                    }
                  />
                </div>
                <div>
                  <div className="signIn" style={{ marginTop: "0px" }}>
                    <a href="/forgot" textDecoration="none">
                      <span variant="text">Forgot password?</span>
                    </a>
                  </div>
                </div>
                <div className="signInSignUp">
                  <div className="signIn">
                    <a href="/createAccount" text-decoration="none">
                      <span variant="text" to="/createAccount">
                        Create account
                      </span>
                    </a>
                  </div>
                  <div className="signUp">
                    <Button variant="contained" type="submit">
                      Sign in
                    </Button>
                  </div>
                </div>
              </div>
              {success ? <Redirect to="/dashboard" /> : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
