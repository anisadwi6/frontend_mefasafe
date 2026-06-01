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
import eye from "../assets/Eye.png";
import "./Home.css";
import { Menu, Mail, Phone } from "lucide-react";

export default function Home() {
  const [showSaldo, setShowSaldo] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const handleKonsul    = () => navigate("/konsul");
  const handleRs        = () => navigate("/rs");
  const handleDaftar    = () => navigate("/daftarRS");
  const handleSetting   = () => navigate("/settings");
  const handleNotifikasi = () => navigate("/notifikasi");
  const handleHp        = () => navigate("/home");
  const handleProfil    = () => navigate("/Profil");
  const handleHealthService = () => navigate ("/HealthService");


  return (
    <div className="home-container">

      {/* Header */}
      <div className="home-header">
        <div className="icon-menu-sidebar" onClick={() => setShowSidebar(!showSidebar)} style={{ cursor: "pointer" }}>
          <Menu />
        </div>
        <img src={logo} className="logo-home" alt="logo" />
        <img src={family} className="family-home" alt="family" />
        <div className="card2">
          <p>SELAMAT PAGI,<br />MEZALUNA DIAZZURI</p>
          <div className="saldo-row">
            <div className="hide" onClick={() => setShowSaldo(!showSaldo)}>
              {showSaldo ? <img src={eye} alt="eye" /> : <img src={hide} alt="hide" />}
            </div>
            <p className="saldo">{showSaldo ? "Rp. 105.000.000" : "Rp. *********"}</p>
          </div>
          <p className="status">ACTIVE</p>
        </div>
      </div>

      {/* Menu */}
      <div className="homePage-menu">
        <div className="menu-row1">
          <div className="menu" onClick={handleDaftar} style={{ cursor: "pointer" }}>
            <img src={rs} className="rs" alt="rs" />
            <p>Daftar Rumah Sakit</p>
          </div>
          <div className="menu" onClick={handleKonsul} style={{ cursor: "pointer" }}>
            <img src={konsul} className="konsul" alt="konsul" />
            <p>Konsultasi Dokter</p>
          </div>
          <div className="menu" onClick={() => alert("Ikon ditekan!")} style={{ cursor: "pointer" }}>
            <img src={kalender} className="kalender" alt="kalender" />
            <p>Kalender Pengingat</p>
          </div>
          <div className="menu" style={{ cursor: "pointer" }}>
            <img src={fs} className="fs" alt="fs" />
            <p>Feedback & Suggestions</p>
          </div>
        </div>

        <div className="menu-row2">
          <div className="menu" onClick={() => navigate("/riwayat")} style={{ cursor: "pointer" }}>
            <img src={riwayat} className="riwayat" alt="riwayat" />
            <p>Riwayat Transaksi</p>
          </div>
          <div className="menu" onClick={handleHealthService} style={{ cursor: "pointer" }}>
            <img src={health} className="health" alt="health" />
            <p>Health Service</p>
          </div>
          <div className="menu" onClick={() => alert("Ikon ditekan!")} style={{ cursor: "pointer" }}>
            <img src={pendaftaran} className="pendaftaran" alt="pendaftaran" />
            <p>Pendaftaran Pelayanan</p>
          </div>
          <div className="menu" style={{ cursor: "pointer" }}>
            <img src={about} className="about" alt="about" />
            <p>About Us</p>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${showSidebar ? "active" : ""}`}>
        <div className="icon-menu-sidebar" onClick={() => setShowSidebar(!showSidebar)} style={{ cursor: "pointer" }}>
          <Menu />
        </div>
        <img className="logo-home" src={logo} alt="MefaSafe" />
        <div className="list-sidebar">
          <ul>
            <li><a onClick={handleHp}>Home</a></li>
            <li><a onClick={handleNotifikasi}>Notifikasi</a></li>
            <li><a onClick={handleSetting}>ChatBot</a></li>
            <li><a onClick={handleSetting}>Setting</a></li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <img className="logo-footer" src={logo} alt="MefaSafe" />
        <div className="footer-content">

          {/* Footer Left */}
          <div className="footer-left">
            <div className="footer-left-item" onClick={handleRs} style={{ cursor: "pointer" }}>
              <img src={rs} alt="Rumah Sakit" />
              <p>Daftar Rumah Sakit</p>
            </div>
            <div className="footer-left-item" onClick={handleKonsul} style={{ cursor: "pointer" }}>
              <img src={konsul} alt="Konsultasi Dokter" />
              <p>Konsultasi Dokter</p>
            </div>
            <div className="footer-left-item">
              <img src={kalender} alt="Kalender Pengingat" />
              <p>Kalender Pengingat</p>
            </div>
            <div className="footer-left-item">
              <img src={fs} alt="Feedback & Suggestions" />
              <p>Feedback & Suggestions</p>
            </div>
            <div className="footer-left-item" onClick={() => navigate("/riwayat")} style={{ cursor: "pointer" }}>
              <img src={riwayat} alt="Riwayat Transaksi" />
              <p>Riwayat Transaksi</p>
            </div>
            <div className="footer-left-item" onClick={handleHealthService} style={{ cursor: "pointer" }}>
              <img src={health} alt="Health Service" />
              <p>Health Service</p>
            </div>
            <div className="footer-left-item">
              <img src={pendaftaran} alt="Pendaftaran Pelayanan" />
              <p>Pendaftaran Pelayanan</p>
            </div>
            <div className="footer-left-item">
              <img src={about} alt="About Us" />
              <p>About Us</p>
            </div>
          </div>

          {/* Footer Right */}
          <div className="footer-right">
            <div className="footer-right-content">
              <div className="footer-right-item">
                <h1>BANTUAN & PANDUAN</h1>
                <ul>
                  <li>Pusat Bantuan</li>
                  <li>Syarat & Ketentuan</li>
                </ul>
              </div>
              <div className="footer-right-item">
                <h1>MEFASAFE</h1>
                <ul>
                  <li>Tentang Kami</li>
                  <li>Promo Hari ini</li>
                </ul>
              </div>
              <div className="footer-right-item">
                <div className="bantuan">
                  <div className="mail">
                    <Mail />
                    <p>bantuan@mefasafe.com</p>
                  </div>
                  <div className="phone">
                    <Phone />
                    <p>021-1234-5678</p>
                  </div>
                </div>
              </div>
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