import { useNavigate } from "react-router-dom";
import "./Notifikasi.css";
import logo from "../assets/logo.png";

import surat from "../assets/surat.png";
import bel from "../assets/bel.png";
import toa from "../assets/toa.png";
import kertas from "../assets/kertas.png";
import chat from "../assets/chat.png";
import prof from "../assets/prof.png";
import bell from "../assets/bell.png";
import set from "../assets/set.png";
import home from "../assets/home.png";

function Notification() {
const navigate = useNavigate();

const handleSetting = () => navigate("/settings");
const handleNotifikasi = () => navigate("/notifikasi");
const handleHp = () => navigate("/home");
const handleChat = () => navigate("/chat");
const handleProfil = () => navigate("/profil");
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
      title: "Promo pembayaran",
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
    {
      title: "Layanan Konsultasi",
      desc: "Layanan Konsultasi Dokter Saat ini.....",
      time: "3 menit",
      icon: surat,
    },
  ];

  return (
    <div className="notifikasi-wrapper">
      <div className="notif-container">

        {/* HEADER */}
        <div className="notif-header">
          <div className="header-img">
            <img src={logo} alt="logo" />
          </div>
          <div className="title">Notifikasi</div>
        </div>

        {/* TODAY */}
        <h2 className="today">Today</h2>

        {/* LIST */}
        <div className="notif-list">
          {data.map((item, index) => (
            <div className="notif-item" key={index}>
              
              <div className="notif-left ">
              <img src={item.icon} className="icon" />
              </div>

              <div className="text">
                
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>

              <span className="time">{item.time}</span>
            </div>
          ))}
        </div>

        {/* BOTTOM NAV */}
               <div className="bottom-nav-notifikasi">
                        <img src={set} className="settings" onClick={handleSetting} style={{ cursor: "pointer" }}></img>
                        <img src={bell} className="bell" onClick={handleNotifikasi} style={{ cursor: "pointer" }}></img>
                        <img src={home} className="home" onClick={handleHp} style={{ cursor: "pointer" }}></img>
                        <img src={chat} className="chat" onClick={handleChat} style={{ cursor: "pointer" }}></img>
                        <img src={prof} className="prof" onClick={handleProfil} style={{ cursor: "pointer" }}></img>
               </div>

      </div>
    </div>
  );
}
export default Notification;