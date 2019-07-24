// @flow

import axios from "axios";

/** Setup an Axios instance */
export const api = axios.create({
  baseURL: "https://api.nytimes.com",
  headers: {
    "Content-Type": "application/json"
  }
});
