import "./Login.css";
import logo from "../assets/logo.png";
import family from "../assets/family.png";
import hide from "../assets/Hide.png";
import eye from "../assets/Eye.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleDaftar = () => navigate("/lembar");
  const handleLogin = () => navigate("/Home");

  return (
    <div className="login-container">
      <div className="login-header">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <img src={family} alt="family" className="family" />

      <div className="login-form">
        <div className="input-group">
          <span className="icon">📧</span>
          <input type="email" placeholder="Email" />
        </div>

        <div className="input-group">
          <span className="icon">🔒</span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <span className="eye" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <img src={hide}></img> : <img src={eye}></img>}
          </span>
        </div>

        <div className="button-group">
          <button className="daftar" onClick={handleDaftar}>Daftar</button>
          <button className="login" onClick={handleLogin}>Login</button>
        </div>

        <p className="help">Bantuan</p>
      </div>
    </div>
  );
}

export default Login;