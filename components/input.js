import React from "react";

const Input = ({ type, name, onChange, lable, className, defaultValue }) => {
  return (
    <input
      className={
        " rounded-lg w-full  h-8 text-center px-2  outline-[#2C974B] " +
        className
      }
      type={type}
      name={name}
      required
      onChange={onChange}
      lable={lable}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
