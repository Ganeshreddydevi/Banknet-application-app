import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountService from "../services/AccountService";
import { getAccountNumber } from "../utils/auth";

function AccountDashboard() {

  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const accNo = getAccountNumber();

    if (!accNo) return;

    AccountService.getByAccNo(accNo)
      .then(res => setAccount(res.data))
      .catch(err => console.error(err));

  }, []);

  // 🔥 DELETE FUNCTION
  const handleDelete = () => {

    const accNo = getAccountNumber();

    // ✅ confirmation popup
    if (window.confirm("Are you sure you want to delete this account?")) {

      AccountService.deleteAccount(accNo)
        .then(() => {
          alert("Account Deleted");

          // 🔥 clear login + redirect
          localStorage.removeItem("user");
          navigate("/register");
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="card shadow p-4 text-center">

      <h2>Dashboard</h2>

      {account ? (
        <>
          <h5>Account Number</h5>
          <h4 className="text-primary">{account.accountNumber}</h4>

          <h5 className="mt-3">Balance</h5>
          <h2 className="text-success">₹ {account.balance}</h2>

          {/* 🔥 DELETE BUTTON */}
          <button
            className="btn btn-danger mt-4"
            onClick={handleDelete}
          >
            Delete Account
          </button>
        </>
      ) : (
        <div className="spinner-border text-primary"></div>
      )}
    </div>
  );
}

export default AccountDashboard;