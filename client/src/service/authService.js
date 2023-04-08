import axios from "axios";

const API_URL = "http://localhost:5000/auth";

const signUp = async (user) => {
  const { data } = await axios.post(API_URL + "/signup", {
    email: user.email,
    username: user.username,
    password: user.password,
  });
  return data;
};

const login = async (user) => {
  const { data } = await axios.post(API_URL + "/login", {
    email: user.email,
    password: user.password,
  });
  return data;
};

export default {
  signUp,
  login,
};
