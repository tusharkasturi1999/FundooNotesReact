import "../pages/Registration";
import "../pages/Login";
import "../pages/Forgot";
import "../pages/Reset";
import { baseURL } from "../config/local";
import { Redirect } from "react-router-dom";
const axios = require("axios");

const post = (requestObject) => {
  return axios({
    method: requestObject.method,
    url: requestObject.url,
    headers: requestObject.headers,
    data: requestObject.data,
  });
};

const get = (requestObject) => {
  return axios({
    method: requestObject.method,
    url: requestObject.url,
    headers: requestObject.headers,
  });
};

const handleAxiosPost = (datas) => {
  axios({
    method: "post",
    url: "http://localhost:4000/user",
    data: datas,
  })
    .then(function (response) {
      console.log(response);
      if (response.data.status === 200) alert("Log In Successfull");
      if (response.data.status !== 200) alert(response.data.message);
    })
    .catch(function (error) {
      alert("Some Error, Try Again");
      console.log(error);
    });
};

const handleAxiosLogin = (datasLogin) => {
  axios({
    method: "post",
    url: "http://localhost:4000/user/login",
    data: datasLogin,
  })
    .then(function (response) {
      console.log(response.data);
      if (response.data.status === 200){ alert("Log In Successfull"); localStorage.setItem('token',response.data.message.Token);};
      if (response.data.status !== 200) alert(response.data.message);
      console.log("Token"+response.data.message.Token);
      
    })
    .catch(function (error) {
      alert("Some Error, Try Again");
      console.log(error);
    });
};

const handleAxiosForgot = (datasForgot) => {
  axios({
    method: "post",
    url: "http://localhost:4000/user/forgot",
    data: datasForgot,
  })
    .then(function (response) {
      console.log(response.data);
      if (response.data === "Recovery Mail Sent Successfully") {
        alert("Recovery Mail Sent Successfully");
        <Redirect to={{ pathname: "/login" }} />;
      }
      if (response.data === "Email not found") {
        alert("Email not found. Please create new Account");
        window.location.reload();
      }
    })
    .catch(function (error) {
      alert("Some Error, Try Again");
      console.log(error);
      window.location.reload();
    });
};

const handleAxiosReset = (data, token) => {
  axios({
    method: "post",
    url: baseURL + "/user/reset/" + token,
    data: data,
  })
    .then(function (response) {
      console.log(response.data);
      if (response.data.status === 200) alert("Log In Successfull");
      if (response.data.status !== 200) alert(response.data.message);
    })
    .catch(function (error) {
      alert("Some Error, Try Again");
      console.log(error);
    });
};
export default {
  handleAxiosPost,
  handleAxiosLogin,
  handleAxiosForgot,
  handleAxiosReset,
  post,
  get,
};
