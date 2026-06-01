 import { useState } from "react";
import "./lembar.css";
import logo from "../assets/logo.png";
import family from "../assets/family.png";
import { useNavigate } from "react-router-dom";

function Lembar() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const handleMendaftar = () => navigate("/Home");

  return (
    <div className="lembar-container">

      {/* Header */}
      <div className="lembar-header">
        <img src={logo} alt="logo" className="logo-lembar" />
        <img src={family} alt="family" className="family-lembar" />
      </div>

      {/* Card konten */}
      <div className="lembar-card">
        <h1 className="lembar-title">LEMBAR PERSETUJUAN</h1>

        <ol className="lembar-ol">
          <li>Saya mengajukan permohonan untuk menjadi peserta program asuransi di bawah Mefa Safe Insurance.</li>
          <li>Saya telah membaca, memahami, dan menyetujui seluruh ketentuan, manfaat, pengecualian, serta biaya premi yang tercantum dalam dokumen informasi produk Mefa Safe Insurance.</li>
          <li>Saya memberikan persetujuan kepada MefaSafe Insurance untuk mengumpulkan, menyimpan, dan memproses data pribadi saya sesuai kebutuhan layanan asuransi dan ketentuan perlindungan data yang berlaku.</li>
          <li>Saya menyatakan seluruh data dan informasi yang saya berikan adalah benar, lengkap, dan dapat dipertanggungjawabkan.</li>
          <li>Saya memahami bahwa pengajuan polis dapat diterima atau ditolak setelah melalui proses verifikasi dan penilaian risiko (underwriting).</li>
          <li>Saya menyetujui pembayaran premi sesuai jadwal dan metode yang telah saya pilih, serta memahami konsekuensi jika terjadi keterlambatan pembayaran.</li>
          <li>Dengan menandatangani lembar persetujuan ini, saya menyatakan bersedia terikat secara hukum dengan syarat dan ketentuan yang berlaku di Mefa Safe Insurance.</li>
        </ol>

        <div className="checklist-item">
          <input
            type="checkbox"
            id="setuju"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="setuju">
            Saya setuju untuk melanjutkan pendaftaran asuransi MEFASAFE Insurance
          </label>
        </div>

        <div className="lembar-footer">
          <button
            className="mendaftar"
            onClick={handleMendaftar}
            disabled={!checked}
          >
            Mendaftar
          </button>
        </div>
      </div>

    </div>
  );
}

export default Lembar;