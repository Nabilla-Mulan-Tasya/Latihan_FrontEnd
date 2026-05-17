import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProdukList from "../pages/ProdukList";
import Dashboard from "../pages/Dashboard";
import POSPage from "../pages/POSPage";
import PesananPage from "../pages/PesananPage";
import PelangganPage from "../pages/PelangganPage";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/produklist" element={<ProdukList />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pos" element={<POSPage />} />
      <Route path="/pesanan" element={<PesananPage />} />
      <Route path="/pelanggan" element={<PelangganPage />} />
    </Routes>
  );
}

export default MainRoutes;