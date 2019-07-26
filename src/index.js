// @flow

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Router from "./app/screens/Router/Router";
import * as serviceWorker from "./serviceWorker";
import "react-toastify/dist/ReactToastify.css";

const element = document.getElementById("root");

if (!element) throw new Error("Couldn't find element with id root");

const renderApp = (
  <BrowserRouter>
    <ToastContainer />
    <Router />
  </BrowserRouter>
);

ReactDOM.render(renderApp, element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
