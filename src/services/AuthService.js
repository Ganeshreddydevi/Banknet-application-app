import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

function AuthService() {

  const login = (user) => {
    return axios.post(`${API_URL}/login`, user);
  };

  const register = (user) => {
    return axios.post(`${API_URL}/register`, user);
  };

  return { login, register };
}

export default AuthService();