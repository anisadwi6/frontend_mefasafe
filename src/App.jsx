import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Lembar from "./pages/lembar";
import Rs from "./pages/rs";
import Settings from "./pages/Settings";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;