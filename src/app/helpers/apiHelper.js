// @flow

import axios from "axios";
import { toast } from "react-toastify";

/** Setup an Axios instance */
export const api = axios.create({
  baseURL: "https://api.nytimes.com",
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.response.use(null, ex => {
  let errrorMessage = "Oops, something is wrong! Try again.";

  const errorData = ex.response.data;
  if (errorData) {
    if (errorData.errors && errorData.errors.length) {
      // Only show first error from the list of errors
      errrorMessage = errorData.errors[0];
    } else if (errorData.fault) {
      errrorMessage = errorData.fault.faultstring;
    }
  }

  toast.error(errrorMessage);

  return Promise.reject(ex);
});
