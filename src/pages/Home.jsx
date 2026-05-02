import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import family from "../assets/family.png";
import hide from "../assets/Hide.png";
import about from "../assets/about.png";
import fs from "../assets/fs.png";
import health from "../assets/health.png";
import kalender from "../assets/kalender.png";
import konsul from "../assets/konsul.png";
import pendaftaran from "../assets/pendaftaran.png";
import riwayat from "../assets/riwayat.png";
import rs from "../assets/rs.png";
import chat from "../assets/chat.png";
import prof from "../assets/prof.png";
import not from "../assets/not.png";
import set from "../assets/set.png";
import hp from "../assets/hp.png";
import eye from "../assets/Eye.png";
import "./Home.css";


export default function Home() {
  const [showEye, setShowEye] = useState(false);
  const navigate = useNavigate();
  const handleRs = () => navigate("/rs");
  const handleSetting = () => navigate("/settings");
  const handleNotifikasi = () => navigate("/rs");
  const handleHp = () => navigate("/rs");
  const handleChat = () => navigate("/rs");
  const handleProfil = () => navigate("/rs");
  // const handleLogin = () => navigate("/Home");

  return (
    <div className="home-container">
        <div className="home-header">
          <img src={logo} className="logo-home" />
          <img src={family}className="family-home"/>
        </div>

        <div className="card2">
            <p>SELAMAT PAGI,<br />MEZALUNA DIAZZURI</p>
            <p className="saldo">Rp. 105.000.000</p>
            <div className="hide" style={{ cursor: "pointer" }} onClick={() => setShowEye(!showEye)} > 
              {showEye ? <img src={hide}></img> : <img src={eye}></img>}
            </div>
            <p className="status">ACTIVE</p>
        </div>
        
        <div className="menu-row1" >
          <div className="menu" onClick={handleRs} style={{ cursor: "pointer" }}>
            <img src={rs} className="rs" alt="Rumah Sakit"/>
            <p>Daftar <br></br>Rumah Sakit</p>
          </div>

          <div className="menu" onClick={() => alert("Ikon ditekan!")} style={{ cursor: "pointer" }}>
            <img src={konsul} className="konsul" />
            <p>Konsultasi Dokter</p>
          </div>
        
          <div className="menu" onClick={() => alert("Ikon ditekan!")} style={{ cursor: "pointer" }}>
            <img src={kalender} className="kalender"></img>
            <p>Kalender Pengingat</p>
          </div>
        </div>
      
        <div className="menu-row2">
          <div className="menu" onClick={() => alert("Ikon ditekan!")} style={{ cursor: "pointer" }}>
            <img src={riwayat} className="riwayat"></img>
            <p>Riwayat Transaksi</p>
          </div>
          <div className="menu" onClick={() => alert("Ikon ditekan!")} style={{ cursor: "pointer" }}>
            <img src={health} className="health"></img>
            <p>Health Service</p>
          </div>
          <div className="menu" onClick={() => alert("Ikon ditekan!")} style={{ cursor: "pointer" }}>
            <img src={pendaftaran} className="pendaftaran"></img>
            <p>Pendaftaran Pelayanan</p>
          </div>
        </div>

        <div className="menu-row3">
          <div className="menu" onClick={() => alert("Ikon ditekan!")} style={{ cursor: "pointer" }}>
            <img src={fs} className="fs"></img>
            <p>Feedback & Suggestions</p>
          </div>
          <div className="menu" onClick={() => alert("Ikon ditekan!")} style={{ cursor: "pointer" }}>
            <img src={about} className="about"></img>
            <p>About Us</p>
          </div>
        </div>

        <div className="bottom-nav">
          <img src={set} className="set" onClick={handleSetting} style={{ cursor: "pointer" }}></img>
          <img src={not} className="not" onClick={handleNotifikasi} style={{ cursor: "pointer" }}></img>
          <img src={hp} className="hp" onClick={handleHp} style={{ cursor: "pointer" }}></img>
          <img src={chat} className="chat" onClick={handleChat} style={{ cursor: "pointer" }}></img>
          <img src={prof} className="prof" onClick={handleProfil} style={{ cursor: "pointer" }}></img>
        </div>
    </div>

  );
}