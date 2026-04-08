import { useEffect, useState } from "react";
import TransactionService from "../services/TransactionService";
import { getAccountNumber } from "../utils/auth";

function TransactionHistory() {

  const [list, setList] = useState([]);

  useEffect(() => {

    const accNo = getAccountNumber();

    TransactionService.history(accNo)
      .then(res => setList(res.data))
      .catch(err => console.error(err));

  }, []);

  return (
    <div className="card shadow p-4">
      <h3>Transaction History</h3>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>

        <tbody>
          {list.map((t, i) => (
            <tr key={i}>
              <td>{t.type}</td>
              <td>{t.amount}</td>
              <td>{t.fromAccount}</td>
              <td>{t.toAccount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;