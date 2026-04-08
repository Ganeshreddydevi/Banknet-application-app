import axios from "axios";

const API_URL = "http://localhost:8080/api/accounts";

class AccountService {

  getByAccNo(accNo) {
    return axios.get(`${API_URL}/number/${accNo}`);
  }

  // 🔥 DELETE API
  deleteAccount(accNo) {
    return axios.delete(`${API_URL}/${accNo}`);
  }
}

export default new AccountService();