 import "./daftarRS.css";
import { FaSearch, FaStar } from "react-icons/fa";
import { Menu, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import keluarga from "../assets/family.png";
import rsIcon from "../assets/rs.png";

import konsul from "../assets/konsul.png";
import kalender from "../assets/kalender.png";
import fs from "../assets/fs.png";
import pendaftaran from "../assets/pendaftaran.png";
import riwayat from "../assets/riwayat.png";
import health from "../assets/health.png";
import about from "../assets/about.png";

function DaftarRS() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const handleHp = () => navigate("/home");
  const handleNotifikasi = () => navigate("/notifikasi");
  const handleSetting = () => navigate("/settings");
  const handleRs = () => navigate("/daftarRS");
  const handleKonsul = () => navigate("/konsul");

  const dataRS = [
    {
      nama: "RS Lavalette",
      alamat: "Jl. WR. Supratman No. 10, Malang",
      rating: "4.4",
      quote: "Pelayanan cepat dan sigap.",
      maps: "https://maps.google.com/?q=RS+Lavalette+Malang",
    },

    {
      nama: "RSIA Melati Husada",
      alamat: "Jl. Kawi No. 32, Malang",
      rating: "4.3",
      quote: "Dokternya ramah dan profesional.",
      maps: "https://maps.google.com/?q=RSIA+Melati+Husada+Malang",
    },

    {
      nama: "RS Panti Nirmala",
      alamat: "Jl. Kebalen Wetan No.2, Malang",
      rating: "4.2",
      quote: "Pelayanan ramah dan nyaman.",
      maps: "https://maps.google.com/?q=RS+Panti+Nirmala+Malang",
    },

    {
      nama: "RSUD Dr. Saiful Anwar",
      alamat: "Jl. Jaksa Agung Suprapto No.2, Malang",
      rating: "4.6",
      quote: "Rumah sakit rujukan terbesar di Malang.",
      maps: "https://maps.google.com/?q=RSSA+Malang",
    },

    {
      nama: "RS Hermina Tangkubanprahu",
      alamat: "Jl. Tangkuban Perahu No.31, Malang",
      rating: "4.5",
      quote: "Fasilitas modern dan bersih.",
      maps: "https://maps.google.com/?q=RS+Hermina+Malang",
    },

    {
      nama: "RS Universitas Brawijaya",
      alamat: "Jl. Soekarno Hatta, Malang",
      rating: "4.4",
      quote: "Pelayanan cukup lengkap dan cepat.",
      maps: "https://maps.google.com/?q=RSUB+Malang",
    },
  ];

  const filteredRS = dataRS.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="daftar-rs">

      {/* HEADER */}
      <div className="header-rs">

        <div
          className="icon-menu-sidebar"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Menu />
        </div>
        <img src={logo} alt="logo" className="logo" />
          <img src={keluarga} alt="family" className="keluarga" />

        <div className="header-left">
          

          <div className="judul-rs">
            <img src={rsIcon} alt="rs" className="icon-rs" />
            <h1>Daftar Rumah Sakit</h1>
          </div>
        </div>

        
      </div>

      {/* SEARCH */}
      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Cari rumah sakit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* CARD */}
      <div className="container-card">

        {filteredRS.map((item, index) => (

          <a
            href={item.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
            key={index}
          >

            <div className="card-rs">

              <img src={rsIcon} alt="rs" className="img-card" />

              <div className="info-rs">

                <h2>{item.nama}</h2>

                <p>{item.alamat}</p>

                <span>"{item.quote}"</span>

                <div className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                  <strong>{item.rating}</strong>
                </div>

              </div>

            </div>

          </a>

        ))}

      </div>

      {/* FOOTER QUOTE */}
      <div className="footer-rs">
        “Kesembuhan bukan hanya tentang tubuh,
        tapi juga kekuatan dalam dirimu.”
        -MefaSafe
      </div>

      {/* SIDEBAR */}
      <div className={`sidebar ${showSidebar ? "active" : ""}`}>

        <div
          className="icon-menu-sidebar"
          onClick={() => setShowSidebar(!showSidebar)}
        >
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

      {/* FOOTER */}
      <div className="footer">

        <img className="logo-footer" src={logo} alt="MefaSafe" />

        <div className="footer-content">

          <div className="footer-left">

            <div className="footer-left-item" onClick={handleRs}>
              <img src={rsIcon} alt="Rumah Sakit" />
              <p>Daftar Rumah Sakit</p>
            </div>

            <div className="footer-left-item" onClick={handleKonsul}>
              <img src={konsul} alt="Konsultasi Dokter" />
              <p>Konsultasi Dokter</p>
            </div>

            <div className="footer-left-item">
              <img src={kalender} alt="Kalender Pengingat" />
              <p>Kalender Pengingat</p>
            </div>

            <div className="footer-left-item">
              <img src={fs} alt="Feedback" />
              <p>Feedback & Suggestions</p>
            </div>

            <div
              className="footer-left-item"
              onClick={() => navigate("/riwayat")}
            >
              <img src={riwayat} alt="Riwayat" />
              <p>Riwayat Transaksi</p>
            </div>

            <div className="footer-left-item">
              <img src={health} alt="Health Service" />
              <p>Health Service</p>
            </div>

            <div className="footer-left-item">
              <img src={pendaftaran} alt="Pendaftaran" />
              <p>Pendaftaran Pelayanan</p>
            </div>

            <div className="footer-left-item">
              <img src={about} alt="About Us" />
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

        <div className="copy-right">
          <footer>
            <p>&copy; 2026 MefaSafe Insurance. All rights reserved.</p>
          </footer>
        </div>

      </div>

    </div>
  );
}

export default DaftarRS;