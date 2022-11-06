import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="   ">
      <Navbar />
      <main className="min-h-screen bg-[#010409] text-white ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
