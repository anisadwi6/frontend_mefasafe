import { useState } from "react";
import "./Login.css";
import logo from "../assets/logo.png";
import family from "../assets/family.png";

function Login() {
  const [show, setShow] = useState(false);

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
        <input type="password" placeholder="Password"/>
        <span className="eye">👁</span>
      </div>

        <div className="button-group">
          <button className="daftar">Daftar</button>
          <button className="login">Login</button>
        </div>

        <p className="help">Bantuan</p>
      </div>
    </div>
  );
}

export default Login;