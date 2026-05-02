import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProdukList from "../pages/ProdukList";
import Dashboard from "../pages/Dashboard";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/produklist" element={<ProdukList />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default MainRoutes;