import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

function Register() {

  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    AuthService.register(user)
      .then(() => {
        alert("Registered");
        navigate("/login");
      });
  };

  return (
    <div className="card col-md-4 mx-auto p-4 mt-5 shadow">
      <h3>Register</h3>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3"
          placeholder="Username"
          onChange={(e)=>setUser({...user,username:e.target.value})}
        />

        <input className="form-control mb-3"
          placeholder="Email"
          onChange={(e)=>setUser({...user,email:e.target.value})}
        />

        <input type="password" className="form-control mb-3"
          placeholder="Password"
          onChange={(e)=>setUser({...user,password:e.target.value})}
        />

        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}

export default Register;