import React from "react";
import Button from "../components/button";
import Input from "../components/input";
import Link from "next/link";

const Form = ({ signupForm, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="text-center flex flex-col flex-wrap gap-3 "
    >
      {signupForm ? (
        <>
          <div>
            <label>
              <span className="block">First Name</span>

              <Input type={"text"} name="firstName" />
            </label>
          </div>
          <div>
            <label>
              <span className="block">Last Name</span>

              <Input type={"text"} name="lastName" />
            </label>
          </div>
          <div>
            <label>
              <span className="block">Email</span>

              <Input type={"email"} name="email" />
            </label>
          </div>
          <div>
            <label>
              <span className="block">Username</span>

              <Input type={"text"} name="username" />
            </label>
          </div>
          <div>
            <label>
              <span className="block">Password</span>

              <Input type={"password"} name="password" />
            </label>
          </div>
          <div>
            <label>
              <span className="block">Retype Password </span>

              <Input type={"password"} name="rpassword" />
            </label>
          </div>
          <div>
            <label>
              <span className="block">Phone</span>

              <Input type={"text"} name="phone" />
            </label>
          </div>
          <div>
            <label>
              <span className="block">Address</span>

              <Input type={"text"} name="address" />
            </label>
          </div>
          <div className=" text-center">
            <Button
              className="w-11/12 mt-3 md:py-3 bg-[#2C974B]"
              button_text={"Sign up"}
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <label>
              <span className="block">Username </span>

              <Input type={"text"} name="username" />
            </label>
          </div>
          <div>
            <label>
              <span className="block">Password </span>

              <Input type={"password"} name="password" />
            </label>
          </div>

          <div className=" text-center">
            <Button
              className="w-11/12 mt-3 md:py-3 bg-[#2C974B]"
              button_text={"Sign in"}
              type="submit"
            />
            <div className="h-[1px] bg-green-500 mt-3"></div>
          </div>
          <p className=" text-center">Already have an account?</p>
          <Link href={"signup"}>
            <Button
              className="w-11/12  md:py-3 bg-[#2C974B]"
              button_text={"Sign up"}
            />
          </Link>
        </>
      )}
    </form>
  );
};

export default Form;
