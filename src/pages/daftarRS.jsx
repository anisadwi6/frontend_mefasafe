 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import family from "../assets/family.png";
import rs from "../assets/rs.png";
import set from "../assets/set.png";
import not from "../assets/not.png";
import hp from "../assets/hp.png";
import chat from "../assets/chat.png";
import prof from "../assets/prof.png";
import "./daftarRS.css";
import Search from "../assets/Search.png";

const rumahSakitData = [
  { id: 1, nama: "RS Gigi dan Mulut", alamat: "Jl. Semeru No. 12, Malang", rating: 4.5, ulasan: "Sangat membantu sekali, pelayanan sangat baik." },
  { id: 2, nama: "RS Umum Malang", alamat: "Jl. Ijen No. 5, Malang", rating: 4.7, ulasan: "Rumah sakitnya bersih, fasilitasnya mantap." },
  { id: 3, nama: "RSIA Melati Husada", alamat: "Jl. Kawi No. 32, Malang", rating: 4.3, ulasan: "Dokternya ramah dan profesional." },
  { id: 4, nama: "IHC RS Sakit", alamat: "Jl. Veteran No. 11, Malang", rating: 4.6, ulasan: "Rumah sakit bagus, pelayanan cepat." },
];

const pins = [
  { top: "20%", left: "25%" },
  { top: "35%", left: "45%" },
  { top: "55%", left: "30%" },
  { top: "60%", left: "65%" },
  { top: "25%", left: "70%" },
];

export default function DaftarRumahSakit() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSetting   = () => navigate("/settings");
  const handleNotifikasi = () => navigate("/notifikasi");
  const handleHp        = () => navigate("/home");
  const handleChatBot   = () => navigate("/chat");
  const handleProfil    = () => navigate("/profil");

  const filtered = rumahSakitData.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase()) ||
    item.alamat.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rs-container">

      {/* Header */}
      <div className="rs-header">
        <img src={logo} alt="logo" className="logo-rs" />
        <img src={family} alt="family" className="family-rs" />

        {/* Title di dalam header */}
        <div className="rs-title-row">
          <img src={rs} alt="rs" className="rs-title-icon" />
          <span className="rs-title-text">Daftar Rumah Sakit</span>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="rs-map">
        <div className="rs-map-grid" />
        <div className="rs-map-label">📍 Peta Rumah Sakit</div>
        {pins.map((pos, i) => (
          <div key={i} className="rs-pin" style={{ top: pos.top, left: pos.left }}>
            <div className="rs-pin-inner">H</div>
          </div>
        ))}
        <div className="rs-my-location" />
      </div>

      {/* Search */}
      <div className="rs-search-wrapper">
        <img src={Search} alt="search" className="rs-search-icon" />
        <input
          className="rs-search-input"
          placeholder="Cari rumah sakit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <span className="rs-clear-btn" onClick={() => setSearch("")}>✕</span>
        )}
      </div>

      {/* List */}
      <div className="rs-list-area">
        {filtered.length === 0 ? (
          <div className="rs-empty">Rumah sakit tidak ditemukan</div>
        ) : (
          filtered.map((item) => (
            <div key={item.id} className="rs-card">
              <img src={rs} alt="rs" className="rs-card-icon" />
              <div className="rs-card-info">
                <div className="rs-card-nama">{item.nama}</div>
                <div className="rs-card-alamat">{item.alamat}</div>
                <div className="rs-card-ulasan">"{item.ulasan}"</div>
                <div className="rs-card-rating">{"⭐".repeat(Math.round(item.rating))} {item.rating}</div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Navbar */}
      <div className="bottom-nav">
        <img src={set}  className="set"  onClick={handleSetting}    style={{ cursor: "pointer" }} alt="setting" />
        <img src={not}  className="not"  onClick={handleNotifikasi} style={{ cursor: "pointer" }} alt="notifikasi" />
        <img src={hp}   className="hp"   onClick={handleHp}         style={{ cursor: "pointer" }} alt="home" />
        <img src={chat} className="chat" onClick={handleChatBot}    style={{ cursor: "pointer" }} alt="chat" />
        <img src={prof} className="prof" onClick={handleProfil}     style={{ cursor: "pointer" }} alt="profil" />
      </div>

    </div>
  );
}