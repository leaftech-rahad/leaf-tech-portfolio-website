import React from "react";

const Input = ({ type, name }) => {
  return (
    <input
      className=" rounded-lg w-full  h-8 text-center px-2  outline-[#2C974B]"
      type={type}
      name={name}
      required
    />
  );
};

export default Input;
