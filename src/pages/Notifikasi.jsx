import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Notifikasi.css";

import logo from "../assets/logo.png";

import surat from "../assets/surat.png";
import bel from "../assets/bel.png";
import toa from "../assets/toa.png";
import kertas from "../assets/kertas.png";

import { Menu } from "lucide-react";

function Notification() {

  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);

  const handleSetting = () => navigate("/settings");
  const handleNotifikasi = () => navigate("/notifikasi");
  const handleHp = () => navigate("/home");

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
      title: "Promo Pembayaran",
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

  ];

  return (

    <div className="notif-page">

      {/* TOPBAR */}
      <div className="notif-topbar">

        <div
          className="notif-menu-btn"
          onClick={() => setShowSidebar(!showSidebar)}
        >

          <Menu size={32} />

        </div>

        <img
          src={logo}
          className="notif-logo"
          alt="logo"
        />

      </div>

      {/* SIDEBAR */}
      <div
        className={
          showSidebar
            ? "notif-sidebar active"
            : "notif-sidebar"
        }
      >

        <ul>

          <li>
            <button onClick={handleHp}>
              Home
            </button>
          </li>

          <li>
            <button
              className="active"
              onClick={handleNotifikasi}
            >
              Notifikasi
            </button>
          </li>

          <li>
            <button onClick={handleSetting}>
              Setting
            </button>
          </li>

        </ul>

      </div>

      {/* CONTENT */}
      <div className="notif-content">

        <div className="notif-title">

          <h1>
            Notifications
          </h1>

        </div>

        {/* TAB */}
        <div className="notif-tabs">

          <button className="active">
            All
          </button>

          <button>
            Mentions
          </button>

          <button>
            Requests
          </button>

        </div>

        {/* LIST */}
        <div className="notif-list">

          {data.map((item, index) => (

            <div
              className="notif-card"
              key={index}
            >

              <div className="notif-left">

                <img
                  src={item.icon}
                  alt=""
                />

                <div className="notif-text">

                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.desc}
                  </p>

                </div>

              </div>

              <span className="notif-time">
                {item.time}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Notification;