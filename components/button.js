import React from "react";

const Button = ({ button_text, className, type, disabled, onClick }) => {
  return (
    <button
      className={
        " hover:bg-slate-500 rounded-lg px-1 py-1  border-solid border-2 mx-1 " +
        className
      }
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {button_text}
    </button>
  );
};

export default Button;
