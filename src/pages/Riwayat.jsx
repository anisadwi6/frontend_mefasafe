import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Mail, Phone } from "lucide-react";
import "./Riwayat.css";
import logo from "../assets/logo.png";
import family from "../assets/family.png";
import transaksi from "../assets/riwayat.png";
import set from "../assets/set.png";
import not from "../assets/not.png";
import hp from "../assets/hp.png";
import chat from "../assets/chat.png";
import rs from "../assets/rs.png";
import konsul from "../assets/konsul.png";
import kalender from "../assets/kalender.png";
import fs from "../assets/fs.png";
import riwayat from "../assets/riwayat.png";
import health from "../assets/health.png";
import pendaftaran from "../assets/pendaftaran.png";
import about from "../assets/about.png";

export default function Riwayat() {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const handleRs        = () => navigate("/daftarRS");
  const handleKonsul    = () => navigate("/konsul");
  const handleHp        = () => navigate("/home");
  const handleNotifikasi = () => navigate("/notifikasi");
  const handleSetting   = () => navigate("/settings");

  const dataRiwayat = [
    { title: "Pembayaran Polis",    date: "8 Oktober 2025",  amount: "Rp. 1.200.000", status: "success" },
    { title: "Perpanjangan Polis",  date: "9 Oktober 2025",  amount: "Rp. 1.200.000", status: "warning" },
    { title: "Pembayaran Premi",    date: "10 Oktober 2025", amount: "Rp. 2.000.000", status: "success" },
    { title: "Pembayaran Klaim",    date: "31 Agustus 2025", amount: "Rp. 3.000.000", status: "success" },
  ];

  return (
    <div className="riwayat-page">
      <div className="riwayat-container">

        {/* Header */}
        <div className="riwayat-header">
          <div className="header-top-riwayat">
            <div className="icon-menu-sidebar" onClick={() => setShowSidebar(!showSidebar)} style={{ cursor: "pointer" }}>
              <Menu />
            </div>
            <img src={logo} alt="logo" className="riwayat-logo" />
            <img src={family} alt="family" className="keluarga" />
          </div>
          <div className="header-bottom">
            <img src={transaksi} alt="transaksi" className="transaksi-img" />
            <h1>Riwayat Transaksi</h1>
          </div>
        </div>

        {/* List Transaksi */}
        <div className="riwayat-list">
          {dataRiwayat.map((item, index) => (
            <div className="riwayat-card" key={index}>
              <div className="card-left">
                <div className={`status-icon ${item.status}`}>
                  {item.status === "success" ? "✓" : "!"}
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.date}</p>
                </div>
              </div>
              <div className="card-right">{item.amount}</div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className={`sidebar ${showSidebar ? "active" : ""}`}>
          <div className="icon-menu-sidebar" onClick={() => setShowSidebar(!showSidebar)} style={{ cursor: "pointer" }}>
            <Menu />
          </div>
          <img className="riwayat-logo" src={logo} alt="MefaSafe" />
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

            <div className="footer-left">
              <div className="footer-left-item" onClick={handleRs} style={{ cursor: "pointer" }}>
                <img src={rs} alt="Rumah Sakit" /><p>Daftar Rumah Sakit</p>
              </div>
              <div className="footer-left-item" onClick={handleKonsul} style={{ cursor: "pointer" }}>
                <img src={konsul} alt="Konsultasi Dokter" /><p>Konsultasi Dokter</p>
              </div>
              <div className="footer-left-item">
                <img src={kalender} alt="Kalender Pengingat" /><p>Kalender Pengingat</p>
              </div>
              <div className="footer-left-item">
                <img src={fs} alt="Feedback" /><p>Feedback & Suggestions</p>
              </div>
              <div className="footer-left-item" onClick={() => navigate("/riwayat")} style={{ cursor: "pointer" }}>
                <img src={riwayat} alt="Riwayat Transaksi" /><p>Riwayat Transaksi</p>
              </div>
              <div className="footer-left-item">
                <img src={health} alt="Health Service" /><p>Health Service</p>
              </div>
              <div className="footer-left-item">
                <img src={pendaftaran} alt="Pendaftaran Pelayanan" /><p>Pendaftaran Pelayanan</p>
              </div>
              <div className="footer-left-item">
                <img src={about} alt="About Us" /><p>About Us</p>
              </div>
            </div>

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
                    <div className="mail"><Mail /><p>bantuan@mefasafe.com</p></div>
                    <div className="phone"><Phone /><p>021-1234-5678</p></div>
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

        {/* Navbar */}
        <div className="navbar">
          <img src={set}  alt="settings" onClick={() => navigate("/settings")} />
          <img src={not}  alt="notif"    onClick={() => navigate("/notifikasi")} />
          <img src={hp}   alt="home"     onClick={() => navigate("/home")} />
          <img src={chat} alt="chat"     onClick={() => navigate("/chat")} />
        </div>

      </div>
    </div>
  );
}