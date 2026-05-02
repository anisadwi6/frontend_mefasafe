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
import arrow from "../assets/Arrow.png";
import chat from "../assets/chat.png";
import prof from "../assets/prof.png";
import not from "../assets/not.png";
import set from "../assets/set.png";
import hp from "../assets/hp.png";

function Settings() {
const handleSetting = () => console.log("Setting");
const handleNotifikasi = () => console.log("Notif");
const handleHp = () => console.log("Home");
const handleChat = () => console.log("Chat");
const handleProfil = () => console.log("Profil");

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
    <div className="app-wrapper">
      <div className="phone-container">

        {/* HEADER */}
        <div className="header">
          <img src={logo} alt="logo" />
        </div>

        {/* TITLE */}
        <div className="title-box">
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

              <img src={arrow} className="icon-right" />
            </div>
          ))}
        </div>

        {/* BOTTOM NAV */}
        <div className="bottom-nav">
                 <img src={set} className="set" onClick={handleSetting} style={{ cursor: "pointer" }}></img>
                 <img src={not} className="not" onClick={handleNotifikasi} style={{ cursor: "pointer" }}></img>
                 <img src={hp} className="hp" onClick={handleHp} style={{ cursor: "pointer" }}></img>
                 <img src={chat} className="chat" onClick={handleChat} style={{ cursor: "pointer" }}></img>
                 <img src={prof} className="prof" onClick={handleProfil} style={{ cursor: "pointer" }}></img>
        </div>

      </div>
    </div>
  );
}

export default Settings;