import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Chat.css";

import rio from "../assets/rio.png";
import dian from "../assets/dian.png";
import ikhsan from "../assets/ikhsan.png";
import kartika from "../assets/kartika.png";
import konsul from "../assets/konsul.png";
import logo from "../assets/logo.png";
import set from "../assets/set.png";
import not from "../assets/not.png";
import hp from "../assets/hp.png";
import chat from "../assets/chat.png";
import kirim from "../assets/kirim.png";
import kembali from "../assets/kembali.png";
import prof from "../assets/prof.png";

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Halo, ada yang bisa saya bantu?", sender: "doctor" },
  ]);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(900);
  const [activeNav, setActiveNav] = useState("home");

  const chatEndRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const doctor = location.state || { name: "Dr. Rio Valentino" };
  const doctorImages = { Rio: rio, Dian: dian, Ikhsan: ikhsan, Kartika: kartika };
  const doctorName = doctor.name;
  const key = doctorName?.split(" ")[1] || "Rio";
  const doctorImg = doctorImages[key] || rio;
  
  const handleSetting = () => navigate("/settings");
  const handleNotifikasi = () => navigate("/notifikasi");
  const handleHp = () => navigate("/home");
  const handleChatBot = () => navigate("/rs");
  const handleProfil = () => navigate("/Profil");
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const sendMessage = () => {
  if (!input.trim()) return;

  const userMessage = input;

  setMessages((prev) => [
    ...prev,
    { text: userMessage, sender: "user" },
  ]);

  setInput("");

  setTimeout(() => {
    let reply = "";

    const pesan = userMessage.toLowerCase();

    if (
      pesan.includes("demam") ||
      pesan.includes("panas")
    ) {
      reply =
        "Apakah disertai batuk atau sakit tenggorokan?";
    }

    else if (
      pesan.includes("batuk")
    ) {
      reply =
        "Sudah berapa hari batuknya dirasakan?";
    }

    else if (
      pesan.includes("pusing")
    ) {
      reply =
        "Apakah pusingnya muncul terus menerus atau sesekali?";
    }

    else if (
      pesan.includes("sakit perut")
    ) {
      reply =
        "Apakah ada mual atau diare juga?";
    }

    else if (
      pesan.includes("flu")
    ) {
      reply =
        "Perbanyak istirahat dan minum air hangat ya.";
    }

    else if (
      pesan.includes("halo") ||
      pesan.includes("hai")
    ) {
      reply =
        "Halo juga, silakan ceritakan keluhan anda.";
    }

    else {
      reply =
        "Baik, bisa dijelaskan lebih detail keluhannya?";
    }

    setMessages((prev) => [
      ...prev,
      { text: reply, sender: "doctor" },
    ]);
  }, 1000);
};

  return (
    <div className="page-wrapper">
      <header className="chat-header">
        <div className="header-top">
          <img src={logo} alt="logo" className="header-logo" />
        </div>
       <div className="header-bot">
    <img src={konsul} alt="konsul" className="header-illus" />
    <p className="header-title">Konsultasi Dokter</p>
    <button className="back-btn" onClick={() => navigate(-1)}>
    <img src={kembali} alt="kembali" style={{ width: 24, height: 24, objectFit: "contain" }} />
  </button>
</div>
      </header>

      <div className="doctor-section">
        <p className="timer">Sisa Waktu {formatTime(timeLeft)}</p>
        <div className="doctor-card">
          <img src={doctorImg} alt="doctor" className="doctor-avatar" />
          <div className="doctor-info">
            <p className="doctor-nama">{doctorName}</p>
            <p className="doctor-status">● Sedang Aktif</p>
          </div>
        </div>
      </div>

      <div className="chatbox">
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender === "doctor" ? "msg-doctor" : "msg-user"}>
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <div className="input-area">
        <div className="input-wrap">
          <input
            className="input-field"
            type="text"
            placeholder="KIRIM PESAN"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="send-btn" onClick={sendMessage}>
            <img src={kirim} alt="kirim" style={{ width: 22, height: 22, objectFit: "contain" }} />
          </button>
        </div>
      </div>

      <nav className="navbar">
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
          onClick={handleChatBot}
          style={{ cursor: "pointer" }}
        ></img>
        <img
          src={prof}
          className="prof"
          onClick={handleProfil}
          style={{ cursor: "pointer" }}
        ></img>
      </nav>
    </div>
  );
}