import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Mail, Phone } from "lucide-react";
import "./HealthService.css";


import logo from "../assets/logo.png";
import family from "../assets/family.png";
import health from "../assets/health.png";


import set from "../assets/set.png";
import not from "../assets/not.png";
import hp from "../assets/hp.png";
import chat from "../assets/chat.png";
import rs from "../assets/rs.png";
import konsul from "../assets/konsul.png";
import kalender from "../assets/kalender.png";
import fs from "../assets/fs.png";
import riwayat from "../assets/riwayat.png";
import pendaftaran from "../assets/pendaftaran.png";
import about from "../assets/about.png";

export default function HealthService() {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

 
  const handleRs         = () => navigate("/daftarRS");
  const handleKonsul     = () => navigate("/konsul");
  const handleHp         = () => navigate("/home");
  const handleNotifikasi = () => navigate("/notifikasi");
  const handleSetting    = () => navigate("/settings");
  const handleHealth     = () => navigate("/healthservice");

  return (
    <div className="health-page">
      <div className="health-container">

        {/* ================= HEADER ================= */}
        <div className="health-header">
          <div className="header-top-health">
            <div className="icon-menu-sidebar" onClick={() => setShowSidebar(!showSidebar)} style={{ cursor: "pointer" }}>
              <Menu />
            </div>
            <img src={logo} alt="logo" className="health-logo" />
            <img src={family} alt="family" className="keluarga" />
          </div>
          
          <div className="header-bottom">
            <img src={health} alt="health" className="health-main-img" />
            <h1>Health Service</h1>
          </div>
        </div>

        {/* ================= CONTENT (PLANS) ================= */}
        <div className="plans-wrapper">
          
          {/* Paket 1 */}
          <section className="plans-section">
            <div className="plan-card">
              <div className="card-top">
                <h2>Polis Keluarga</h2>
                <span>Rp. 900.000/bulan</span>
              </div>
              <p className="desc">
                Satu polis untuk seluruh anggota keluarga inti hingga 5 orang dengan harga lebih hemat.
              </p>
              <ul>
                <li>Suami, istri & 3 anak</li>
                <li>Hemat hingga 30%</li>
                <li>Manfaat setara Polis Spesialis</li>
                <li>Satu kartu untuk semua</li>
              </ul>
              <button onClick={() => navigate("/payment")}>Pilih Layanan</button>
            </div>
          </section>

          <div className="gap-bar" />

          {/* Paket 2 */}
          <section className="plans-section">
            <div className="plan-card">
              <div className="card-top">
                <h2>Polis Lansia</h2>
                <span>Rp. 500.000/bulan</span>
              </div>
              <p className="desc">
                Dirancang khusus untuk usia 60 tahun ke atas dengan manfaat penyakit degeneratif.
              </p>
              <ul>
                <li>Usia 60–80 tahun</li>
                <li>Diabetes, hipertensi, jantung</li>
                <li>Home care & fisioterapi</li>
                <li>Konsultasi tanpa batas</li>
              </ul>
              <button onClick={() => navigate("/payment")}>Pilih Layanan</button>
            </div>
          </section>

          <div className="gap-bar" />

          {/* Paket 3 */}
          <section className="plans-section">
            <div className="plan-card">
              <div className="card-top">
                <h2>Polis Spesialis</h2>
                <span>Rp. 350.000/bulan</span>
              </div>
              <p className="desc">
                Mencakup konsultasi dokter spesialis dan tindakan medis lanjutan.
              </p>
              <ul>
                <li>Konsultasi dokter spesialis</li>
                <li>Rawat inap premium</li>
                <li>Tindakan medis lanjutan</li>
                <li>Perlindungan maksimal</li>
              </ul>
              <button onClick={() => navigate("/payment")}>Pilih Layanan</button>
            </div>
          </section>

          <div className="gap-bar" />
        </div>

        {/* ================= TOGGLE SIDEBAR ================= */}
        <div className={`sidebar ${showSidebar ? "active" : ""}`}>
          <div className="icon-menu-sidebar" onClick={() => setShowSidebar(!showSidebar)} style={{ cursor: "pointer" }}>
            <Menu />
          </div>
          <img className="riwayat-logo" src={logo} alt="MefaSafe" />
          <div className="list-sidebar">
            <ul>
              <li><a onClick={handleHp}>Home</a></li>
              <li><a onClick={handleNotifikasi}>Notifikasi</a></li>
              <li><a onClick={() => navigate("/chat")}>ChatBot</a></li>
              <li><a onClick={handleSetting}>Setting</a></li>
            </ul>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
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
              <div className="footer-left-item" onClick={handleHealth} style={{ cursor: "pointer" }}>
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

        {/* ================= BOTTOM NAVBAR (MOBILE) ================= */}
        <div className="navbar">
          <img src={set}  alt="settings" onClick={handleSetting} />
          <img src={not}  alt="notif"    onClick={handleNotifikasi} />
          <img src={hp}   alt="home"     onClick={handleHp} />
          <img src={chat} alt="chat"     onClick={() => navigate("/chat")} />
        </div>

      </div>
    </div>
  );
}