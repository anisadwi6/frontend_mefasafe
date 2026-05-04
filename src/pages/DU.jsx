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
import { useNavigate } from "react-router-dom";
import "./DU.css";

export default function DU() {
  const navigate = useNavigate();
  // const handleKonsul = () => navigate ("/konsul");
  return (
    <div className="DU-container">
      <div className="DU-header">
        <img src={logo} className="logo-DU" />
        <img src={family} className="family-DU"/>
        <img src={konsul} className="konsul-dokter" />
        <h1>DOKTER UMUM</h1>
      </div>

      <div className="pencarian-DU">
        <img src={search} className="search"/>
        <img src={panah} className="panah"/>
        <img src={close} className="close"/>
        <h3>Cari jenis dokter</h3>
      </div>

      <div className="konten-du">
        <div className="kartika">
          {/* <p>Dr. Kartika Sari</p> */}
          <img src={kartika}></img>
        </div>
      </div>
      <div className="konten-du">
          {/* <p>Klik untuk melanjutkan</p>  */}
          <img src={ikhsan} className="ds"></img>
      </div>
    </div>
  );
}