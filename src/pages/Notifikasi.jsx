import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, Mail, Phone } from "lucide-react";
import "./Notifikasi.css";

import logo from "../assets/logo.png";

import surat from "../assets/surat.png";
import bel from "../assets/bel.png";
import toa from "../assets/toa.png";
import rs from "../assets/rs.png";
import konsul from "../assets/konsul.png";
import kalender from "../assets/kalender.png";
import fs from "../assets/fs.png";
import pendaftaran from "../assets/pendaftaran.png";
import riwayat from "../assets/riwayat.png";
import health from "../assets/health.png";
import about from "../assets/about.png";
import kertas from "../assets/kertas.png";

function Notification() {

  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);

  const handleSetting = () => navigate("/settings");
  const handleNotifikasi = () => navigate("/notifikasi");
  const handleHp = () => navigate("/home");
  const handleRs = () => navigate("/rs");
  const handleKonsul = () => navigate("/konsul");
  const handleDaftar = () => navigate("/daftarRS");

  const data = [

    {
      title: "Claim Asuransi",
      desc: "Yth. Bapak / Ibu Claim Asuransi.....",
      time: "2 menit",
      icon: surat,
    },

    {
      title: "Pembayaran Polis",
      desc: "Jangan lupa bayar polis asuransi.....",
      time: "10 menit",
      icon: bel,
    },

    {
      title: "Promo Pembayaran",
      desc: "Bayar Sekarang Dapatkan Potongan.....",
      time: "10 menit",
      icon: toa,
    },

    {
      title: "Pembayaran Selesai",
      desc: "Terimakasih telah menyelesaikan.....",
      time: "3 menit",
      icon: kertas,
    },

  ];

  return (

    <div className="notif-page">

      {/* TOPBAR */}
      <div className="notif-topbar">

        <div
          className="icon-menu-sidebar"
          onClick={() => setShowSidebar(!showSidebar)}
          style={{ cursor: "pointer" }}
        >
          <Menu />
        </div>

        <img
          src={logo}
          className="notif-logo"
          alt="logo"
        />

      </div>

      {/* CONTENT */}
      <div className="notif-content">

        <div className="notif-title">

          <h1>
            Notifications
          </h1>

        </div>

        {/* TAB */}
        <div className="notif-tabs">

          <button className="active">
            All
          </button>

          <button>
            Mentions
          </button>

          <button>
            Requests
          </button>

        </div>

        {/* LIST */}
        <div className="notif-list">

          {data.map((item, index) => (

            <div
              className="notif-card"
              key={index}
            >

              <div className="notif-left">

                <img
                  src={item.icon}
                  alt=""
                />

                <div className="notif-text">

                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.desc}
                  </p>

                </div>

              </div>

              <span className="notif-time">
                {item.time}
              </span>

            </div>

          ))}

        </div>

      </div>
      {/* SIDEBAR */}
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

  );

}

export default Notification;