import React, { useState, useEffect } from "react";
import "../css/style.css";
import accounts from "../assets/accounts.PNG";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
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
import { Link } from "react-router-dom";
import {
  validPassword,
  validEmail,
  validFirstName,
  validLastName,
} from "../validation/formValidation";
import {handleAxiosPost} from"../helper/axios"
const axios = require('axios').default;

export default function Registration() {
 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setPasswordConfirmError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


   let FN = firstName
   let LN = lastName
   let EM = email
   let PW = password

  const handleAxiosPost = () =>{
    axios.post('http://localhost:4000/user/', {
      firstName: FN,
      lastName: LN,
      age: 20,
      email: EM,
      password: PW
    })
    .then(function (response) {
      console.log(response);
      if(response.status == 200)
      alert("User Successfully Created")
    })
    .catch(function (error) {
      alert("Some Error, Try Again") 
      console.log(error);
    });
  }

    const handleSubmit = (e) => {
    e.preventDefault();
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setPasswordConfirmError(false);
    if (!validFirstName.test(firstName)) setFirstNameError(true);
    if (!validLastName.test(lastName)) setLastNameError(true);
    if (!validEmail.test(email)) setEmailError(true);
    if (!validPassword.test(password)) setPasswordError(true);
    if (password !== confirmPassword) {
      setPasswordConfirmError(true);
    }
    handleAxiosPost();
  };

  //   useEffect(() => {

  //   });

  const handleClickShowPasswordBoth = (event) => {
    handleClickShowPassword();
    handleClickShowConfirmPassword();
  }
  // const handleClickShowPasswordBoth = (event) => {
  //   console.log("Event Clicked, CheckTick:", values.checkTick);
  //   //   let isShowPasswordChecked=event.target.checked
  //   setValues({
  //     ...values,
  //     checkTick: !values.checkTick,
  //   });
  //   console.log("Value after SetValue, CheckTick:", values.checkTick);
  //   // let isShowPasswordChecked=event.target.checked

  //   if (values.checkTick === true) {
  //     setValues({
  //       ...values,
  //       showPassword: true,
  //       showConfirmPassword: true,
  //       // checkTick: isShowPasswordChecked,
  //     });
  //   }

  //   if (values.checkTick === false) {
  //     setValues({
  //       ...values,
  //       showPassword: "false",
  //       showConfirmPassword: "false",
  //       // checkTick: isShowPasswordChecked,
  //     });
  //   }
  // };

  const handleClickShowPassword =() =>{
      setShowPassword(!showPassword);
    }

  const handleClickShowConfirmPassword =() =>{
    setShowConfirmPassword(!showConfirmPassword);
    }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //   render(){
  return (

    <div className="imgBox">
      <div className="outerBox">
        <div className="outerPadding">
          <div>
            <span className="fundooNotesRainbow">FundooNotes</span>
          </div>
          <div className="createAccountDiv">
            <span className="createAccount">
              Create your FundooNotes Account
            </span>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="innerImg">
              <div className="inputBox">
                <div className="firstAndLast">
                  <div className="firstName">
                    <TextField
                      required
                      className="firstNameBox"
                      label="First name"
                      variant="outlined"
                      size="small"
                      error={firstNameError}
                      helperText={firstNameError ? "Invalid first name" : ""}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="lastName">
                    <TextField
                      required
                      className="lastNameBox"
                      label="Last name"
                      variant="outlined"
                      size="small"
                      error={lastNameError}
                      helperText={lastNameError ? "Invalid last name" : ""}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="emailId">
                  <TextField
                    // helperText="You can enter letters, numbers and periods"
                    required
                    className="emailIdBox"
                    fullWidth
                    label="Email Id"
                    size="small"
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
                </div>
                <div className="password">
                  <div className="firstPassword">
                    <FormControl variant="outlined" size="small">
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                  <div className="confirm">
                    <FormControl variant="outlined" size="small">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Confirm
                      </InputLabel>
                      <OutlinedInput
                        className="confirmBox"
                        type={showConfirmPassword ? "text" : "password"}
                        // value={values.confirmPassword}
                        error={confirmPasswordError}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showConfirmPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                  </div>
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
                <div className="signInSignUp">
                  <div className="signIn">
                      <a href = "/login" text-decoration ="none">
                    <span variant="text">Sign in instead</span>
                    </a>
                  </div>
                  <div className="signUp">
                    <Button variant="contained" type ="submit">Sign Up</Button>
                  </div>
                </div>
              </div>
              <div className="img">
                <img
                  src={accounts}
                  width={260}
                  height={244}
                  style={{ verticalAlign: "middle" }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
