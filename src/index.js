// @flow

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const element = document.getElementById("root");

if (!element) throw new Error("Couldn't find element with id root");

ReactDOM.render(<p>The test app</p>, element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
