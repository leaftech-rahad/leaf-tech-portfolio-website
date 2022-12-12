import React from "react";

export const Input = ({
  type,
  name,
  onChange,
  lable,
  input_className,
  defaultValue,
  disabled,
}) => {
  return (
    <input
      className={
        " rounded-lg w-full  h-10 text-center px-2 border-2 " + input_className
      }
      type={type}
      name={name}
      required
      onChange={onChange}
      lable={lable}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  );
};
