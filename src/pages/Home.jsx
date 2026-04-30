import logo from "../assets/logo.png";
import family from "../assets/family.png";


const menus = [
  { title: "Daftar Rumah Sakit", icon: "🏥" },
  { title: "Konsultasi Dokter", icon: "👩‍⚕️" },
  { title: "Kalender Pengingat", icon: "📅" },
  { title: "Riwayat Transaksi", icon: "📄" },
  { title: "Health Service", icon: "❤️" },
  { title: "Pendaftaran Pelayanan", icon: "📋" },
  { title: "Feedback & Suggestions", icon: "💬" },
  { title: "About Us", icon: "ℹ️" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#8fb1c1] flex flex-col">

      
      <div className="bg-gradient-to-r from-[#a9c6cf] to-[#7ea3d8] p-4 relative">

        <div className="flex items-center gap-2">
          <img src={logo} className="w-8" />
          <p className="font-semibold text-gray-800">MefaSafe Insurance</p>
        </div>

        
        <div className="bg-gradient-to-b from-[#cfd9df] to-[#5f8fa3] 
                        rounded-xl p-4 mt-4 w-[80%]">

          <p className="text-sm font-semibold">
            SELAMAT PAGI,<br />
          </p>

          <p className="mt-2 text-lg font-semibold">
            Rp. 105.000.000
          </p>

          <p className="text-xl font-bold text-white mt-1">
            ACTIVE
          </p>
        </div>

        
        <img
          src={family}
          className="absolute right-2 top-6 w-24"
        />
      </div>

      
      <div className="flex-1 grid grid-cols-3 gap-6 p-6 text-center">

        {menus.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-5xl mb-2">{item.icon}</div>
            <p className="text-sm font-medium text-black text-center">
              {item.title}
            </p>
          </div>
        ))}

      </div>

      
      <div className="bg-[#6d9db1] p-3 flex justify-around text-white text-xl">
        <span>⚙️</span>
        <span>🔔</span>
        <span className="text-2xl">🏠</span>
        <span>🤖</span>
        <span>👤</span>
      </div>

    </div>
  );
}