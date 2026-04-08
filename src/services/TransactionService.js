import axios from "axios";

const API_URL = "http://localhost:8080/api/transactions";

function TransactionService() {

  const deposit = (accNo, amount) => {
    return axios.post(`${API_URL}/deposit?accNo=${accNo}&amount=${amount}`);
  };

  const transfer = (from, to, amount) => {
    return axios.post(`${API_URL}/transfer?from=${from}&to=${to}&amount=${amount}`);
  };

  const history = (accNo) => {
    return axios.get(`${API_URL}/history/${accNo}`);
  };

  return { deposit, transfer, history };
}

export default TransactionService();