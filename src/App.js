import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import AccountDashboard from "./components/AccountDashboard";
import Deposit from "./components/Deposit";
import Transfer from "./components/Transfer";
import TransactionHistory from "./components/TransactionHistory";
import Login from "./components/Login";
import Register from "./components/Register";

// Navbar
function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href="/login";
  };

  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <div className="container">
        <Link className="navbar-brand" to="/">BankNest</Link>

        <div>
          <Link className="btn btn-light me-2" to="/">Dashboard</Link>
          <Link className="btn btn-light me-2" to="/deposit">Deposit</Link>
          <Link className="btn btn-light me-2" to="/transfer">Transfer</Link>
          <Link className="btn btn-light me-2" to="/history">History</Link>

          {!user ? (
            <>
              <Link className="btn btn-warning me-2" to="/login">Login</Link>
              <Link className="btn btn-success" to="/register">Register</Link>
            </>
          ) : (
            <button className="btn btn-danger" onClick={logout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
}

// Protected Route
function PrivateRoute({ children }) {
  const user = localStorage.getItem("user");
  return user ? children : <Login />;
}

function App() {
  return (
    <Router>

      <Navbar />

      <div className="container mt-4">
        <Routes>

          <Route path="/" element={
            <PrivateRoute>
              <AccountDashboard />
            </PrivateRoute>
          } />

          <Route path="/deposit" element={
            <PrivateRoute>
              <Deposit />
            </PrivateRoute>
          } />

          <Route path="/transfer" element={
            <PrivateRoute>
              <Transfer />
            </PrivateRoute>
          } />

          <Route path="/history" element={
            <PrivateRoute>
              <TransactionHistory />
            </PrivateRoute>
          } />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </div>

    </Router>
  );
}

export default App;