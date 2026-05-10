import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Lembar from "./pages/lembar";
import Rs from "./pages/rs";
import Settings from "./pages/Settings";
import Konsul from "./pages/konsul";
import DU from "./pages/DU";
import DS from "./pages/DS";
import Chat from "./pages/Chat";
import Profil from "./pages/Profil";
import Notifikasi from "./pages/Notifikasi";
import Daftar from "./pages/daftarRS";

function App() {
  return (
    // update all features to react-router-dom v6
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lembar" element={<Lembar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rs" element={<Rs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/konsul" element={<Konsul />}/>
        <Route path="/du" element={<DU />}/>
        <Route path="/ds" element={<DS />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/profil"element={<Profil />}/>
        <Route path="/notifikasi" element={<Notifikasi />}/>
        <Route path="/daftarRS" element={<Daftar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;