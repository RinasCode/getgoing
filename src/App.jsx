import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer
import Register from "./pages/Register";
import LoginPage from "./pages/Login";
import Beranda from "./pages/Beranda";
import Blog from "./pages/Blog";
import Servis from "./pages/Servis";

const App = () => {
  const location = useLocation();

  const shouldDisplayHeaderFooter = location.pathname !== "/login" && location.pathname !== "/register";

  return (
    <>
      {shouldDisplayHeaderFooter && <Header />} 
      <main className={`pt-${shouldDisplayHeaderFooter ? '20' : '0'}`}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/servis-kami" element={<Servis />} />
        </Routes>
      </main>
      {shouldDisplayHeaderFooter && <Footer />}
    </>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
