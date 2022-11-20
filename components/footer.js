import React from "react";
import Button from "../components/button";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#161B22] flex flex-row items-center flex-wrap justify-between p-2 bottom-0">
        <a
          href="/CV-Faisal Ahamed Rahad.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className=""
        >
          <Button
            className={
              " border-navbar font-bold  hover:border-green-500 hover:text-green-500 transition-colors "
            }
            button_text={"Download CV"}
          />
        </a>
        <p className=" w-3/5 text-right">
          Designed & Developed by{" "}
          <span className="text-green-600 font-bold">
            <a>@FaisalAhamedRahad</a>
          </span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
