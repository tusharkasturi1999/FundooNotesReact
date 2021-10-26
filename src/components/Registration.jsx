import React from "react";
import "../css/style.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export class Registration extends React.Component {
  render() {
    return (
      <div className="outerBox">
        <div className="outerPadding">
          <div>
            <span className="fundooNotesRainbow">FundooNotes</span>
          </div>
          <div className="createAccountDiv">
            <span className="createAccount">Create your Note Account</span>
          </div>
          <form>
            <div className="inputBox">
              <div className="firstAndLast">
                <div className="firstName">
                  <TextField
                    required
                    className="firstNameBox"
                    label="First name"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="lastName">
                  <TextField
                    required
                    className="lastNameBox"
                    label="Last name"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <div className="emailId">
                <TextField
                  helperText="You can enter letters, numbers and periods"
                  required
                  className="emailIdBox"
                  fullWidth
                  label="Email Id"
                  size="small"
                  autoComplete="email"
                  placeholder="abc.123@example.com"
                  //   InputProps={{endAdornment: <InputAdornment position="end">@example.com</InputAdornment>}}
                />
              </div>
              <div className="password">
                <div className="firstPassword">
                  <TextField
                    type="password"
                    required
                    className="firstPasswordBox"
                    label="Password"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="confirm">
                  <TextField
                    type="password"
                    required
                    className="confirmBox"
                    label="Confirm"
                    variant="outlined"
                    size="small"
                  />
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
                      color="primary" /*onClick={myFunction}*/
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
                <span>Sign in instead</span>
              </div>
              <div className="signUp">
                <Button variant="contained">Sign Up</Button>
              </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
