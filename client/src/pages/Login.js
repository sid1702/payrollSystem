import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          navigate("/homepage");
        }
      });
  };

  return (
    <div className="LoginPage">
      <div className="title">
        <h2>HUMAN RESOURCE MANAGEMENT & PAYROLL SYSTEM</h2>
      </div>
      <div className="loginDiv">
        <input
          className="Inp"
          placeholder="username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          className="Inp"
          type="password"
          placeholder="password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button className="Inp" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
