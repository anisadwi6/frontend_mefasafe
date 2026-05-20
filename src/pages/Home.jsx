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
import vector from "../assets/vector.png";
import "./Home.css";
import { Menu } from "lucide-react";

export default function Home() {
  const [showSaldo, setShowSaldo] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const handleKonsul = () => navigate("/konsul");
  const handleRs = () => navigate("/rs");
  const handleDaftar = () => navigate("/daftarRS");
  const handleSetting = () => navigate("/settings");
  const handleNotifikasi = () => navigate("/notifikasi");
  const handleHp = () => navigate("/home");
  const handleChatBot = () => navigate("/rs");
  const handleProfil = () => navigate("/Profil");
  // const handleLogin = () => navigate("/Home");

  return (
    <div className="home-container">
      <div className="home-header">
        <div
          className="icon-menu-sidebar"
          onClick={() => setShowSidebar(!showSidebar)}
          style={{ cursor: "pointer" }}
        >
          <Menu />
        </div>
        <img src={logo} className="logo-home" />
        <img src={family} className="family-home" />
        <div className="card2">
          <p>
            SELAMAT PAGI,
            <br />
            MEZALUNA DIAZZURI
          </p>
          <div className="saldo-row">
            <div className="hide" onClick={() => setShowSaldo(!showSaldo)}>
              {showSaldo ? <img src={eye}></img> : <img src={hide}></img>}
            </div>
            <p className="saldo">
              {showSaldo ? "Rp. 105.000.000" : "Rp. *********"}
            </p>
          </div>
          <p className="status">ACTIVE</p>
        </div>
      </div>

      <div className="homePage-menu">
        <div className="menu-row1">
          <div
            className="menu"
            onClick={handleDaftar}
            style={{ cursor: "pointer" }}
          >
            <img src={rs} className="rs" />
            <p>Daftar Rumah Sakit</p>
          </div>

          <div
            className="menu"
            onClick={handleKonsul}
            style={{ cursor: "pointer" }}
          >
            <img src={konsul} className="konsul" />
            <p>Konsultasi Dokter</p>
          </div>

          <div
            className="menu"
            onClick={() => alert("Ikon ditekan!")}
            style={{ cursor: "pointer" }}
          >
            <img src={kalender} className="kalender"></img>
            <p>Kalender Pengingat</p>
          </div>

          <div className="menu">
            <img src={fs} className="fs" alt="fs" />
            <p>Feedback & Suggestions</p>
          </div>
        </div>

        <div className="menu-row2">
          <div className="menu">
            <img src={riwayat} className="riwayat" alt="riwayat" />
            <p>Riwayat Transaksi</p>
          </div>

          <div
            className="menu"
            onClick={() => alert("Ikon ditekan!")}
            style={{ cursor: "pointer" }}
          >
            <img src={health} className="health" />
            <p>Health Service</p>
          </div>

          <div
            className="menu"
            onClick={() => alert("Ikon ditekan!")}
            style={{ cursor: "pointer" }}
          >
            <img src={pendaftaran} className="pendaftaran"></img>
            <p>Pendaftaran Pelayanan</p>
          </div>
          <div className="menu">
            <img src={about} className="about" />
            <p>About Us</p>
          </div>
        </div>
      </div>

      <div className={`sidebar ${showSidebar ? "sidebar active" : "sidebar"}`}>
        <div
          className="icon-menu-sidebar"
          onClick={() => setShowSidebar(!showSidebar)}
          style={{ cursor: "pointer" }}
        >
          <Menu />
        </div>
        <img className="logo-home" src={logo} alt="MefaSafe"></img>
        <div className="list-sidebar">
          <ul>
            <li>
              <a onClick={handleHp}>Home</a>
            </li>
            <li>
              <a onClick={handleNotifikasi}>Notifikasi</a>
            </li>
            <li>
              <a onClick={handleSetting}>ChatBot</a>
            </li>
            <li>
              <a onClick={handleSetting}>Setting</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer">
        <img src={logo} alt="MefaSafe"></img>
        <div className="menu-grid">
          <div className="menu-grid-item">
            <img src={rs} alt="Rumah Sakit" />
            <p>Daftar Rumah Sakit</p>
          </div>
          <div className="menu-grid-item">
            <img src={konsul} alt="Konsultasi Dokter"></img>
            <p>Konsultasi Dokter</p>
          </div>
          <div className="menu-grid-item">
            <img src={kalender} alt="Kalender Pengingat"></img>
            <p>Kalender Pengingat</p>
          </div>
          <div className="menu-grid-item">
            <img src={fs} alt="Feedback & Suggestions"></img>
            <p>Feedback & Suggestions</p>
          </div>
          <div className="menu-grid-item">
            <img src={riwayat} alt="Riwayat Transaksi"></img>
            <p>Riwayat Transaksi</p>
          </div>
          <div className="menu-grid-item">
            <img src={health} alt="Health Service"></img>
            <p>Health Service</p>
          </div>
          <div className="menu-grid-item">
            <img src={pendaftaran} alt="Pendaftaran Pelayanan"></img>
            <p>Pendaftaran Pelayanan</p>
          </div>
          <div className="menu-grid-item">
            <img src={about} alt="About Us"></img>
            <p>About Us</p>
          </div>
          <div className="menu-grid-content">
            <div className="footer-menu-grid-content">
              <h1>BANTUAN & PANDUAN</h1>
              <ul>
                <li>Pusat Bantuan</li>
                <li>Syarat & Ketentuan</li>
              </ul>
            </div>
            <div className="footer-menu-grid-content">
              <h1>MEFASAFE</h1>
              <ul>
                <li>Tentang Kami</li>
                <li>Promo Hari ini</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <footer>
            <p>&copy; 2026 MefaSafe Insurance. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
