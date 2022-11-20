import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={" bg-[#F6F8FA] text-black rounded-2xl p-6 " + className}>
      {children}
    </div>
  );
};

export default Card;
