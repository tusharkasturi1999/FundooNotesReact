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
  return axios({
    method: "post",
    url: "http://localhost:4000/user",
    data: datas,
  })
    .then((response) =>{
      console.log(response);
      // if (response.data.status === 200) alert("Log In Successfull");
      // if (response.data.status !== 200) alert(response.data.message);
      return response;
    })
    .catch((error) =>{
      alert("Some Error, Try Again");
      console.log(error);
    });
};

const handleAxiosLogin = (datasLogin) => {
 return axios({
    method: "post",
    url: "http://localhost:4000/user/login",
    data: datasLogin,
  })
    .then((response) => {
      // console.log(response.data);
      // if (response.data.status === 200){ alert("Log In Successfull"); localStorage.setItem('token',response.data.message.Token);};
      // if (response.data.status !== 200) alert(response.data.message);
      // console.log("Token"+response.data.message.Token);
      return response
    })
    .catch(function (error) {
      alert("Some Error, Try Again");
      console.log(error);
    });
};
const put = (requestObject) => {
  return axios({
    method: requestObject.method,
    url: requestObject.url,
    headers: requestObject.headers,
    data: requestObject.data,
  });
};

const handleAxiosForgot = (datasForgot) => {
  axios({
    method: "post",
    url: "http://localhost:4000/user/forgot",
    data: datasForgot,
  })
    .then(function (response) {
      console.log(response);
      if (response.data.msg === "Recovery email sent successfully") {
        alert("Recovery Mail Sent Successfully");
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
      if (response.data.status === 200) alert("Recovery email sent successfully");
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
  put
};
