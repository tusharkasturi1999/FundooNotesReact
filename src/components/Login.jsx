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
import { margin, width } from "@mui/system";

export default function Login() {
  const [values, setValues] = React.useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    checkTick: true,
  });

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

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
  };

  //   useEffect(() => {

  //   });

  const handleClickShowPasswordBoth = (event) => {
    console.log("Event Clicked, CheckTick:", values.checkTick);
    //   let isShowPasswordChecked=event.target.checked
    setValues({
      ...values,
      checkTick: !values.checkTick,
    });
    console.log("Value after SetValue, CheckTick:", values.checkTick);
    // let isShowPasswordChecked=event.target.checked

    if (values.checkTick === true) {
      setValues({
        ...values,
        showPassword: true,
        showConfirmPassword: true,
        // checkTick: isShowPasswordChecked,
      });
    }

    if (values.checkTick === false) {
      setValues({
        ...values,
        showPassword: "false",
        showConfirmPassword: "false",
        // checkTick: isShowPasswordChecked,
      });
    }
  };

  const handleClickShowPassword =() =>{
    setValues({
        ...values,
        showPassword: !values.showPassword,
        // checkTick: isShowPasswordChecked,
      });
    }

  const handleClickShowConfirmPassword =() =>{
    setValues({
        ...values,
        showConfirmPassword: !values.showConfirmPassword,
        // checkTick: isShowPasswordChecked,
      });
    }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //   render(){
  return (
    <div className="imgBoxLogin">
      <div className="outerBox">
        <div className="outerPadding">
          <div style={{textAlign: "center"}}>
            <span className="fundooNotesRainbow">FundooNotes</span>
          </div>
          <div className="createAccountDiv" style={{textAlign: "center"}}>
            <span className="createAccount">
              Sign in
            </span>
          </div>
          <div className="subheadLogin" style={{textAlign: "center"}}>
              <span>Use your FundooNotes Account</span>
          </div>
          <div style={{width:"418px"}}>
          <form onSubmit={handleSubmit} autoComplete="off">
           
              <div className="inputBox" style={{width:"366px",margin:"26px", padding:"0px"}} >
               
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
                  <div className="passwordBoxLogin">
                    <FormControl  variant="outlined" fullWidth >
                      <InputLabel htmlFor="outlined-adornment-password" >
                        Password
                      </InputLabel>
                      <OutlinedInput
                        className="firstPasswordBox"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        fullWidth
                        onChange={handleChange("password")}
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
                              {values.showPassword ? (
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
                      <a href = "/" text-decoration ="none">
                    <span variant="text" to="/" >Create account</span>
                    </a>
                  </div>
                  <div className="signUp">
                    <Button variant="contained" type ="submit">Sign in</Button>
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
