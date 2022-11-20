import React from "react";
import styles from "../styles/gradient.module.css";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className={"text-white font-mono " + styles.div}>
      <Navbar />
      <main className=" min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
