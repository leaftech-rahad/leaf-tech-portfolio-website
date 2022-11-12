import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen bg-[#010409] text-white font-mono">
      <Navbar />
      <main className="min-h-screen ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
