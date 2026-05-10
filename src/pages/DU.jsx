import konsul from "../assets/konsul.png";
import logo from "../assets/logo.png";
import family from "../assets/family.png";
import chatdokter from "../assets/cht.png";
import telpon from "../assets/telp.png";
import search from "../assets/Search.png";
import panah from "../assets/panah (2).png";
import close from "../assets/Close.png";
import kartika from "../assets/kartika.png";
import dian from "../assets/dian.png";
import rio from "../assets/rio.png";
import ikhsan from "../assets/ikhsan.png";
import chat from "../assets/chat.png";
import prof from "../assets/prof.png";
import not from "../assets/not.png";
import set from "../assets/set.png";
import hp from "../assets/hp.png";
import { useNavigate } from "react-router-dom";
import "./DU.css";

export default function DU() {
  const navigate = useNavigate();
  const handleSetting = () => navigate("/settings");
  const handleNotifikasi = () => navigate("/rs");
  const handleHp = () => navigate("/home");
  const handleChat = () => navigate("/chat");
  const handleProfil = () => navigate("/profil");
  // const handleKonsul = () => navigate ("/konsul");
  return (
    <div className="DU-container">
      <div className="DU-header">
        <img src={logo} className="logo-DU" />
        <img src={family} className="family-DU" />
        <img src={konsul} className="konsul-dokter" />
        <h1>DOKTER UMUM</h1>
      </div>

      <div className="pencarian-DU">
        <img src={search} className="search" />
        <img src={panah} className="panah" />
        <img src={close} className="close" />
        <input type="text" placeholder="Cari jenis dokter"></input>
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
      <div className="bottom-nav-du">
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
