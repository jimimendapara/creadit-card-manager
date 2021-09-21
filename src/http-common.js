import axios from "axios";

export default axios.create({
  
  baseURL: process.env.REACT_APP_API_BASEURL,
  headers: {
    "Content-type": "application/json"
  }
});