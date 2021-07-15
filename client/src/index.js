import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {AuthProvider} from './context/AuthContext'

import axios from "axios";

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);