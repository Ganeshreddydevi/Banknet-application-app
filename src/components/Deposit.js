import { useState } from "react";
import TransactionService from "../services/TransactionService";
import { getAccountNumber } from "../utils/auth";

function Deposit() {

  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const accNo = getAccountNumber();

    TransactionService.deposit(accNo, amount)
      .then(() => alert("Amount Deposited"))
      .catch(err => console.error(err));
  };

  return (
    <div className="card shadow col-md-4 mx-auto p-4">
      <h3>Deposit</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="btn btn-primary w-100">Deposit</button>
      </form>
    </div>
  );
}

export default Deposit;