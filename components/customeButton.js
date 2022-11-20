import React from "react";
import Button from "./button";

const CButton = ({ button_text, className }) => {
  return (
    <div className=" relative w-fit box-border hover:p-1">
      <div className=" absolute bg-gradient-to-br from-lime-300 via-red-500 to-sky-500 inset-0 rounded blur "></div>
      <div className=" relative bg-navbar rounded hover:text-lg box-border">
        <Button
          button_text={button_text}
          className={
            "border-none font-sans font-bold  rounded relative  bg-clip-text text-transparent bg-gradient-to-br from-lime-300 via-red-500 to-sky-500 bg-navbar pb-[5px] hover:from-lime-300  hover:to-blue-500 "
          }
        />
      </div>
    </div>
  );
};

export default CButton;
