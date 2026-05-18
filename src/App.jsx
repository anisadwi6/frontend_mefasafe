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
import Sidebar from "./pages/admin/Sidebar";
import Header from "./pages/admin/Header";
import { useState } from "react";
import Dashboard from "./pages/admin/dashboard/Dashboard";

function App() {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  return (
    // update all features to react-router-dom v6
    <BrowserRouter>
      <div
        className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-5o
        to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all 
        duration-500">
          <div className="flex h-screen overflow-hidden"> 
            <Sidebar collapsed={sideBarCollapsed} ontoggle={()=>setSideBarCollapsed(!sideBarCollapsed)} currentPage={currentPage} onPageChange={setCurrentPage}/>
            <div className="flex-1 flex flex-col overflow-hidden">
              <Header sideBarCollapsed={sideBarCollapsed} onToggleSidebar={()=>setSideBarCollapsed(!sideBarCollapsed)}/>
              <main className="flex-1 overflow-y-auto bg-transparent">
                <div className="p-6 space-y-6">
                  {currentPage === "dashboard" && <Dashboard/>}
                </div>
              </main>
            </div>
          </div>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lembar" element={<Lembar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rs" element={<Rs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/konsul" element={<Konsul />} />
        <Route path="/du" element={<DU />} />
        <Route path="/ds" element={<DS />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/daftarRS" element={<Daftar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
