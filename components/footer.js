import React from "react";
import Button from "../components/button";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#161B22] flex flex-row flex-wrap p-2 bottom-0 items-end justify-end">
        <p className=" ">
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
