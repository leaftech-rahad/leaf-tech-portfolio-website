import React from "react";
import Button from "../components/button";

const Footer = () => {
  return (
    <>
      <footer className=" bg-[#161B22] flex flex-row items-center flex-wrap justify-between">
        <a
          href="/CV-Faisal Ahamed Rahad.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="pl-5"
        >
          <Button
            className={
              "font-bold px-2 hover:border-green-500 hover:text-green-500 transition-colors "
            }
            button_text={"Download CV"}
          />
        </a>
        <p className=" pr-5 p-4 ">
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
