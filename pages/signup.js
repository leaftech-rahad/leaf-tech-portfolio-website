import React from "react";
import Card from "../components/card";
import Form from "../components/form";
import { FaUserAlt } from "react-icons/fa";
const signup = () => {
  return (
    <div className=" m-auto md:mt-20 md:w-[440px]">
      <Card>
        <p className=" flex justify-center text-4xl pb-2 text-blue-500 ">
          <FaUserAlt />
        </p>
        <Form signupForm></Form>
      </Card>
    </div>
  );
};

export default signup;
