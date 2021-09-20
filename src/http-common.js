import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-52-62-90-174.ap-southeast-2.compute.amazonaws.com:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});