import { useState } from "react";
import TransactionService from "../services/TransactionService";
import { getAccountNumber } from "../utils/auth";

function Transfer() {

  const [form, setForm] = useState({ to: "", amount: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const from = getAccountNumber();

    TransactionService.transfer(from, form.to, form.amount)
      .then(() => alert("Transfer Successful"))
      .catch(err => console.error(err));
  };

  return (
    <div className="card shadow col-md-4 mx-auto p-4">
      <h3>Transfer</h3>

      <input className="form-control mb-2"
        placeholder="To Account"
        onChange={(e)=>setForm({...form,to:e.target.value})}
      />

      <input className="form-control mb-3"
        placeholder="Amount"
        onChange={(e)=>setForm({...form,amount:e.target.value})}
      />

      <button className="btn btn-success w-100" onClick={handleSubmit}>
        Transfer
      </button>
    </div>
  );
}

export default Transfer;