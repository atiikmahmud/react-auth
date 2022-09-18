import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pages from "./pages/Pages";
import Welcome from "./pages/Welcome";
import NoPage from "./pages/NoPage";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<PublicRoute><Welcome /></PublicRoute>} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/pages" element={<PrivateRoute><Pages /></PrivateRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />  
          <Route path="*" element={<NoPage />} />         
      </Routes>
    </Router>
  );
}
