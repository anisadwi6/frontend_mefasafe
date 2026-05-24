import konsul from "../assets/konsul.png";
import logo from "../assets/logo.png";
import family from "../assets/family.png";
import kartika from "../assets/kartika.png";
import dian from "../assets/dian.png";
import rio from "../assets/rio.png";
import ikhsan from "../assets/ikhsan.png";
import rs from "../assets/rs.png";
import kalender from "../assets/kalender.png";
import fs from "../assets/fs.png";
import riwayat from "../assets/riwayat.png";
import health from "../assets/health.png";
import pendaftaran from "../assets/pendaftaran.png";
import about from "../assets/about.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./DU.css";
import { Menu, Mail, Phone } from "lucide-react";

export default function DU() {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const handleKonsul = () => navigate("/konsul");
  const handleRs = () => navigate("/rs");
  const handleSetting = () => navigate("/settings");
  const handleNotifikasi = () => navigate("/notifikasi");
  const handleHp = () => navigate("/home");
  const handleChat = () => navigate("/chat");
  const handleProfil = () => navigate("/profil");
  // const handleKonsul = () => navigate ("/konsul");
  return (
    <div className="DU-container">
      <div className="DU-header">
        <div
          className="icon-menu-sidebar"
          onClick={() => setShowSidebar(!showSidebar)}
          style={{ cursor: "pointer" }}
        >
          <Menu />
        </div>
        <img src={logo} className="logo-DU" />
        <img src={family} className="family-DU" />
        <img src={konsul} className="konsul-dokter" />
        <h1>POLI UMUM</h1>
      </div>

      <div className="dokter-list">
        <div className="dokter-card">
          <div className="dokter-avatar">
            <img src={kartika} alt="Dr. Kartika Sari" />
          </div>
          <div className="dokter-info">
            <div className="dokter-name">Dr. Kartika Sari</div>
            <div className="dokter-specialty">Dokter Umum</div>
            <div className="dokter-badges">
              <span className="badge">
                <span className="badge-icon">💼</span> 10 tahun
              </span>
              <span className="badge">
                <span className="badge-icon">👍</span> 100%
              </span>
            </div>
            <div className="dokter-price">Rp. 25.000</div>
          </div>
          <div className="dokter-actions">
            <button className="btn-action" title="Chat">
              <span className="material-symbols-outlined">chat</span>
            </button>
            <button className="btn-action" title="Telepon">
              <span className="material-symbols-outlined">call</span>
            </button>
          </div>
        </div>

        <div className="dokter-card">
          <div className="dokter-avatar">
            <img src={ikhsan} alt="Dr. Ikhsan" />
          </div>
          <div className="dokter-info">
            <div className="dokter-name">Dr. Ikhsan</div>
            <div className="dokter-specialty">Dokter Umum</div>
            <div className="dokter-badges">
              <span className="badge">
                <span className="badge-icon">💼</span> 8 tahun
              </span>
              <span className="badge">
                <span className="badge-icon">👍</span> 97%
              </span>
            </div>
            <div className="dokter-price">Rp. 25.000</div>
          </div>
          <div className="dokter-actions">
            <button className="btn-action" title="Chat">
              <span className="material-symbols-outlined">chat</span>
            </button>
            <button className="btn-action" title="Telepon">
              <span className="material-symbols-outlined">call</span>
            </button>
          </div>
        </div>

        <div className="dokter-card">
          <div className="dokter-avatar">
            <img src={dian} alt="Dr. Dian" />
          </div>
          <div className="dokter-info">
            <div className="dokter-name">Dr. Dian</div>
            <div className="dokter-specialty">Dokter Umum</div>
            <div className="dokter-badges">
              <span className="badge">
                <span className="badge-icon">💼</span> 15 tahun
              </span>
              <span className="badge">
                <span className="badge-icon">👍</span> 99%
              </span>
            </div>
            <div className="dokter-price">Rp. 25.000</div>
          </div>
          <div className="dokter-actions">
            <button className="btn-action" title="Chat">
              <span className="material-symbols-outlined">chat</span>
            </button>
            <button className="btn-action" title="Telepon">
              <span className="material-symbols-outlined">call</span>
            </button>
          </div>
        </div>

        <div className="dokter-card">
          <div className="dokter-avatar">
            <img src={rio} alt="Dr. Rio Valentino" />
          </div>
          <div className="dokter-info">
            <div className="dokter-name">Dr. Rio Valentino</div>
            <div className="dokter-specialty">Dokter Umum</div>
            <div className="dokter-badges">
              <span className="badge">
                <span className="badge-icon">💼</span> 10 tahun
              </span>
              <span className="badge">
                <span className="badge-icon">👍</span> 97%
              </span>
            </div>
            <div className="dokter-price">Rp. 25.000</div>
          </div>
          <div className="dokter-actions">
            <button className="btn-action" title="Chat" onClick={handleChat}>
              <span className="material-symbols-outlined">chat</span>
            </button>
            <a href="https://call.whatsapp.com/voice/GnTvm4NDSfrB9VuI1pe077">
              <button className="btn-action" title="Telepon">
                <span className="material-symbols-outlined">call</span>
              </button>
            </a>
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
