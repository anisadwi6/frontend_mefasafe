import "./konsul.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import family from "../assets/family.png";
import konsul from "../assets/konsul.png";
import panah from "../assets/panah (2).png";
import close from "../assets/Close.png";
import searchIcon from "../assets/Search.png";
import chat from "../assets/chat.png";
import prof from "../assets/prof.png";
import not from "../assets/not.png";
import set from "../assets/set.png";
import hp from "../assets/hp.png";
import umum from "../assets/DU.png";
import spesialis from "../assets/DS.png";
import { Menu } from "lucide-react";

export default function Konsul() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const handleDU = () => navigate("/DU");
  const handleDS = () => navigate("/DS");
  const handleSetting = () => navigate("/settings");
  const handleNotifikasi = () => navigate("/notifikasi");
  const handleHp = () => navigate("/home");
  const handleChatBot = () => navigate("/rs");
  const handleProfil = () => navigate("/Profil");
  return (
    <div className="konsul-container">
      <div className="konsul-header">
        <div
          className="icon-menu-sidebar"
          onClick={() => setShowSidebar(!showSidebar)}
          style={{ cursor: "pointer" }}
        >
          <Menu />
        </div>
        <img src={logo} className="logo-konsul" />
        <img src={family} className="family-konsul" />
        <img src={konsul} className="konsul-dokter" />
        <h1>Konsultasi Dokter</h1>
        
      </div>

      <div className="konsul-list">
        <div className="konten" onClick={handleDU}>
          <img src={umum} className="konten-img"></img>
          <div className="konten-info">
            <div className="konten-judul">
              <p>POLI UMUM</p>
            </div>
            <p className="konten-sub">Klik untuk melanjutkan</p>
          </div>
        </div>

        <div className="konten" onClick={handleDS}>
          <img src={spesialis} className="konten-img"></img>
          <div className="konten-info">
            <div className="konten-judul">
              <p>POLI GIGI</p>
            </div>
            <p className="konten-sub">Klik untuk melanjutkan</p>
          </div>
        </div>

        <div className="konten" onClick={handleDS}>
          <img src={spesialis} className="konten-img"></img>
          <div className="konten-info">
            <div className="konten-judul">
              <p>POLI PENYAKIT DALAM</p>
            </div>
            <p className="konten-sub">Klik untuk melanjutkan</p>
          </div>
        </div>
        
        <div className="konten" onClick={handleDS}>
          <img src={spesialis} className="konten-img"></img>
          <div className="konten-info">
            <div className="konten-judul">
              <p>POLI ANAK</p>
            </div>
            <p className="konten-sub">Klik untuk melanjutkan</p>
          </div>
        </div>

        <div className="konten" onClick={handleDS}>
          <img src={spesialis} className="konten-img"></img>
          <div className="konten-info">
            <div className="konten-judul">
              <p>POLI THT</p>
            </div>
            <p className="konten-sub">Klik untuk melanjutkan</p>
          </div>
        </div>
        
        <div className="konten" onClick={handleDS}>
          <img src={spesialis} className="konten-img"></img>
          <div className="konten-info">
            <div className="konten-judul">
              <p>POLI JIWA</p>
            </div>
            <p className="konten-sub">Klik untuk melanjutkan</p>
          </div>
        </div>

        <div className="konten" onClick={handleDS}>
          <img src={spesialis} className="konten-img"></img>
          <div className="konten-info">
            <div className="konten-judul">
              <p>POLI PARU</p>
            </div>
            <p className="konten-sub">Klik untuk melanjutkan</p>
          </div>
        </div>

        <div className="konten" onClick={handleDS}>
          <img src={spesialis} className="konten-img"></img>
          <div className="konten-info">
            <div className="konten-judul">
              <p>POLI SARAF</p>
            </div>
            <p className="konten-sub">Klik untuk melanjutkan</p>
          </div>
        </div>
      </div>

      <p className="quote">
        “Kesembuhan bukan hanya tentang tubuh, tapi juga kekuatan dalam dirimu.”
        -MefaSafe
      </p>

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
    </div>
  );
}
