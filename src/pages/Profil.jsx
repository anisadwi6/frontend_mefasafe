import { useNavigate } from "react-router-dom";
import "./Profil.css";
import logo from "../assets/logo.png";

import chat from "../assets/chat.png";
import akun from "../assets/akun.png";
import not from "../assets/not.png";
import set from "../assets/set.png";
import home from "../assets/home.png";
import avatar from "../assets/akun.png";        // atau foto profil kamu
import kesehatan from "../assets/kesehatan.png";
import kendaraan from "../assets/kendaraan.png";
import jiwa from "../assets/jiwa.png";

function Profil() {
const navigate = useNavigate();

const handleSetting = () => navigate("/settings");
const handleNotifikasi = () => navigate("/notifikasi");
const handleHp = () => navigate("/home");
const handleChat = () => navigate("/Chat");
const handleProfil = () => navigate("/profil");

 return (
    <div className="wrapper">
      <div className="profil-container">

        {/* HEADER */}
        <div className="header">
          <img src={logo} alt="logo" />
          <div className="title-box">Profil</div>
        </div>

        {/* CARD PROFIL */}
        <div className="profile-card">
          <div className="profile-text">
            <h3>MEZALUNA DIAZZURI</h3>
            <p>NIK: 12345678905678</p>
            <p>NO POLIS: 98765432101</p>
            <p>Jln. Bunga Indah RT. 3 / RW.6 No 22, Malang</p>
          </div>

          <img src={avatar} className="profile-img" />
        </div>

        {/* TITLE */}
        <h2 className="section-title">Riwayat Polis</h2>

        {/* LIST POLIS */}
        <div className="polis-card">

          <div className="polis-item">
            <img src={kesehatan} />
            <div>
              <h4>Kesehatan</h4>
              <p>MILIK SAYA</p>
              <span>RP. 40.000.000</span>
            </div>
          </div>

          <div className="divider"></div>

          <div className="polis-item">
            <img src={kendaraan} />
            <div>
              <h4>Kendaraan</h4>
              <p>MILIK SAYA</p>
              <span>RP. 35.000.000</span>
            </div>
          </div>

          <div className="divider"></div>

          <div className="polis-item">
            <img src={jiwa} />
            <div>
              <h4>Jiwa</h4>
              <p>MILIK SAYA</p>
              <span>RP. 30.000.000</span>
            </div>
          </div>

        </div>

        {/* BOTTOM NAV */}
        <div className="bottom-nav">
          <img src={set} onClick={() => navigate("/settings")} />
          <img src={not} onClick={() => navigate("/notifikasi")} />
          <img src={home} onClick={() => navigate("/home")} />
          <img src={chat} onClick={() => navigate("/chat")} />
          <img src={akun} onClick={() => navigate("/profil")} />
        </div>

      </div>
    </div>
  );
}

export default Profil;