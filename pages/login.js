import React from "react";
import Form from "../components/form";
import Card from "../components/card";
import { FaUserLock } from "react-icons/fa";

const login = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className=" m-auto md:w-[440px] mt-20 ">
      <Card>
        <p className=" flex justify-center text-5xl text-blue-500 ">
          <FaUserLock />
        </p>
        <Form onSubmit={handleSubmit} />
      </Card>
    </div>
  );
};

export default login;
