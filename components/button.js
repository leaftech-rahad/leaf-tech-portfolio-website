import React from "react";

const Button = ({ button_text, className, type, disabled, onClick }) => {
  return (
    <button
      className={
        " p-1 border-2 mx-1 rounded hover:text-green-500 hover:border-green-500 " +
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
