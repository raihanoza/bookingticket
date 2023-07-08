import axios from "axios";
//ip vps 103.116.168.146

const instance = axios.create({
  baseURL: "http://192.168.100.36:8080/api",
  headers: {
    // Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
