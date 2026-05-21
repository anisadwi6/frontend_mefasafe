import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Settings.css";
import logo from "../assets/logo.png";


import edit from "../assets/Edit.png";
import notif from "../assets/Notifikasi.png";
import payment from "../assets/Pembayaran.png";
import security from "../assets/Keamanan.png";
import favorite from "../assets/Favorit.png";
import language from "../assets/Bahasa.png";
import display from "../assets/Tampilan.png";
import help from "../assets/Bantuan.png";
import chat from "../assets/chat.png";
import prof from "../assets/prof.png";
import not from "../assets/not.png";
import settings from "../assets/Settings.png";
import home from "../assets/home.png";
import about from "../assets/about.png";
import fs from "../assets/fs.png";
import health from "../assets/health.png";
import kalender from "../assets/kalender.png";
import konsul from "../assets/konsul.png";
import pendaftaran from "../assets/pendaftaran.png";
import riwayat from "../assets/riwayat.png";
import rs from "../assets/rs.png";
import { Menu, Mail, Phone } from "lucide-react";

function Settings() {
const navigate = useNavigate();
const [showSidebar, setShowSidebar] = useState(false);
const handleKonsul = () => navigate("/konsul");
  const handleRs = () => navigate("/rs");
  const handleDaftar = () => navigate("/daftarRS");
const handleSetting = () => navigate("/settings");
const handleNotifikasi = () => navigate("/notifikasi");
const handleHp = () => navigate("/home");
const handleChatBot = () => navigate("/rs");
const handleProfil = () => navigate("/profil");

  const menu = [
    { title: "Edit Profil Pengguna", icon: edit },
    { title: "Preferensi Notifikasi", icon: notif },
    { title: "Metode Pembayaran", icon: payment },
    { title: "Keamanan Akun", icon: security },
    { title: "Favorit", icon: favorite },
    { title: "Bahasa", icon: language },
    { title: "Tampilan", icon: display },
    { title: "Bantuan dan Layanan", icon: help },
  ];

  return (
    <div className="setting-wrapper">
      <div className="phone-container">

        <div
          className="icon-menu-sidebar"
          onClick={() => setShowSidebar(!showSidebar)}
          style={{ cursor: "pointer" }}
        >
          <Menu />
        </div>

        {/* HEADER */}
        <div className="header">
          <img src={logo} alt="logo" />
        </div>

        {/* TITLE */}
        <div className="title-settings">
          Pengaturan
        </div>

        {/* MENU */}
        <div className="menu">
          {menu.map((item, index) => (
            <div className="menu-item" key={index}>
              <div className="left">
                <img src={item.icon} className="icon-left" />
                <span>{item.title}</span>
              </div>

            </div>
          ))}
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
        <img className="logo-footer" src={logo} alt="MefaSafe"></img>
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-left-item" onClick={handleRs}>
              <img src={rs} alt="Rumah Sakit" />
              <p>Daftar Rumah Sakit</p>
            </div>
            <div className="footer-left-item" onClick={handleKonsul}>
              <img src={konsul} alt="Konsultasi Dokter"></img>
              <p>Konsultasi Dokter</p>
            </div>
            <div className="footer-left-item">
              <img src={kalender} alt="Kalender Pengingat"></img>
              <p>Kalender Pengingat</p>
            </div>
            <div className="footer-left-item">
              <img src={fs} alt="Feedback & Suggestions"></img>
              <p>Feedback & Suggestions</p>
            </div>
            <div className="footer-left-item">
              <img src={riwayat} alt="Riwayat Transaksi"></img>
              <p>Riwayat Transaksi</p>
            </div>
            <div className="footer-left-item" >
              <img src={health} alt="Health Service"></img>
              <p>Health Service</p>
            </div>
            <div className="footer-left-item">
              <img src={pendaftaran} alt="Pendaftaran Pelayanan"></img>
              <p>Pendaftaran Pelayanan</p>
            </div>
            <div className="footer-left-item">
              <img src={about} alt="About Us"></img>
              <p>About Us</p>
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
        {/* <div className="contact">
          <Mail>bantuan@mefasafe.com</Mail>
          <Phone>021-1234-5678</Phone>
        </div> */}
        <div className="copy-right">
          <footer>
            <p>&copy; 2026 MefaSafe Insurance. All rights reserved.</p>
          </footer>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Settings;