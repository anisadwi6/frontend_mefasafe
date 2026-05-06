import "./konsul.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import family from "../assets/family.png";
import konsul from "../assets/konsul.png";
import panah from "../assets/panah (2).png";
import close from "../assets/Close.png";
import search from "../assets/Search.png";
import chat from "../assets/chat.png";
import prof from "../assets/prof.png";
import not from "../assets/not.png";
import set from "../assets/set.png";
import hp from "../assets/hp.png";
import umum from "../assets/DU.png";
import spesialis from "../assets/DS.png";

export default function Konsul() {
  const navigate = useNavigate();
  const handleSetting = () => navigate("/settings");
  const handleDU = () => navigate("/DU");
  const handleDS = () => navigate("/DS");
  const handleNotifikasi = () => navigate("/rs");
  const handleHp = () => navigate("/Home");
  const handleChat = () => navigate("/rs");
  const handleProfil = () => navigate("/rs");
  return (
    <div className="konsul-container">
      <div className="konsul-header">
        <img src={logo} className="logo-konsul" />
        <img src={family} className="family-konsul" />
        <img src={konsul} className="konsul-dokter" />
        <h1>Konsultasi Dokter</h1>
      </div>
      
      <div className="pencarian-DU">
        <img src={search} className="search" />
        <img src={panah} className="panah" />
        <img src={close} className="close" />
        <input
          type="text"
          placeholder="Cari dokter, gejala, dan spesialis"></input>
      </div>

      <div className="konsul-list">
        <div className="konten" onClick={handleDU}>
          <img src={umum} className="konten-img"></img>
          <div className="konten-info">
            <div className="konten-judul">
              <p>DOKTER UMUM</p>
            </div>
            <p className="konten-sub">Klik untuk melanjutkan</p>
          </div>
        </div>

        <div className="konten" onClick={handleDS}>
          <img src={spesialis} className="konten-img"></img>
          <div className="konten-info">
            <div className="konten-judul">
              <p>DOKTER SPESIALIS</p>
            </div>
            <p className="konten-sub">Klik untuk melanjutkan</p>
          </div>
        </div>
      </div>

      <p className="quote">
        “Kesembuhan bukan hanya tentang tubuh, tapi juga kekuatan dalam dirimu.”
        -MefaSafe
      </p>

      <div className="bottom-nav-konsul">
        <img
          src={set}
          className="set"
          onClick={handleSetting}
          style={{ cursor: "pointer" }}
        ></img>
        <img
          src={not}
          className="not"
          onClick={handleNotifikasi}
          style={{ cursor: "pointer" }}
        ></img>
        <img
          src={hp}
          className="hp"
          onClick={handleHp}
          style={{ cursor: "pointer" }}
        ></img>
        <img
          src={chat}
          className="chat"
          onClick={handleChat}
          style={{ cursor: "pointer" }}
        ></img>
        <img
          src={prof}
          className="prof"
          onClick={handleProfil}
          style={{ cursor: "pointer" }}
        ></img>
      </div>
    </div>
  );
}
