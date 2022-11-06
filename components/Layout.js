import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen bg-[#010409] text-white font-mono">
      <Navbar />
      <main className=" ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
