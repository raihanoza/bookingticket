import axios from "../services/Axios";

export const logins = async (data) => {
  const res = await axios.post("/login", data);
  return res;
};

export const getUser = async (token) => {
  const res = await axios
    .get("/user", {
      headers: { Authorization: "Bearer " + token },
    })

    .catch((error) => console.log(error));
  return res;
};
export const register = async (data) => {
  const res = await axios.post("/register", data);
  return res;
};
