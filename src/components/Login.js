import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

function Login() {

  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    AuthService.login(user)
      .then((res) => {

        console.log("LOGIN USER:", res.data); // 🔥 check

        localStorage.setItem("user", JSON.stringify(res.data));

        navigate("/");
      })
      .catch(() => alert("Invalid Login"));
  };

  return (
    <div className="card col-md-4 mx-auto p-4 mt-5 shadow">
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3"
          placeholder="Username"
          onChange={(e)=>setUser({...user,username:e.target.value})}
        />

        <input type="password" className="form-control mb-3"
          placeholder="Password"
          onChange={(e)=>setUser({...user,password:e.target.value})}
        />

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;