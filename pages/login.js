import * as React from "react";
import Form from "../components/form";
import Card from "../components/card";
import Input from "../components/input";
import { FaUserAlt } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import Button from "../components/button";

import { getCsrfToken } from "next-auth/react";
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

const Login = ({ csrfToken }) => {
  const [showSignupCard, setshowSignupCard] = React.useState(false);
  async function handelsignupCard(e) {
    e.preventDefault();
    if (showSignupCard) {
      setshowSignupCard(false);
    } else {
      setshowSignupCard(true);
    }
    setpassword(" ");
    setrpassword(" ");
  }

  const [rpassword, setrpassword] = React.useState(" ");
  const [password, setpassword] = React.useState(" ");
  function inpassword(e) {
    setpassword(e.target.value);
  }
  function inrpassword(e) {
    setrpassword(e.target.value);
  }

  return (
    <div className=" m-auto md:w-[440px] mt-20 ">
      <Card>
        <Form
          csrfToken={csrfToken}
          action="/api/auth/callback/credentials"
          button_className={
            showSignupCard
              ? password === rpassword
                ? " w-full mt-3 md:py-3  border-black bg-white border-green-500 hover:bg-green-500"
                : " w-full mt-3 md:py-3  border-black bg-red-500 font-bold border-red-500 hover:bg-red-500"
              : " w-full mt-3 md:py-3  border-black bg-white border-green-500 hover:bg-green-500"
          }
          button_text={
            showSignupCard
              ? password === rpassword
                ? "Create account"
                : "Passwords did not match"
              : "Sign in"
          }
          button_disabled={password === rpassword ? "" : "disabled"}
        >
          {showSignupCard ? (
            <>
              <p className=" flex justify-center text-4xl pb-2 text-blue-500 ">
                <FaUserAlt />
              </p>
              <div>
                <label>
                  First Name
                  <Input type={"text"} name="firstName" lable={"firstName"} />
                </label>
              </div>
              <div>
                <label>
                  Last Name
                  <Input type={"text"} name="lastName" lable={"lastName"} />
                </label>
              </div>
              <div>
                <label>
                  Email
                  <Input type={"email"} name="email" lable={"email"} />
                </label>
              </div>
              <div>
                <label>
                  Username
                  <Input type={"text"} name="userName" lable={"userName"} />
                </label>
              </div>
              <div>
                <label>
                  Password
                  <Input
                    type={"password"}
                    name="password"
                    onChange={inpassword}
                    lable={"password"}
                  />
                </label>
              </div>
              <div>
                <label>
                  Confirm Password
                  <Input
                    type={"password"}
                    name="rpassword"
                    onChange={inrpassword}
                    input_className={
                      password === rpassword
                        ? " outline-none  "
                        : "outline-none border-red-500 "
                    }
                    lable={"rpassword"}
                  />
                </label>
              </div>
              <div>
                <label>
                  Phone
                  <Input
                    type={"text"}
                    name="phone"
                    lable={"phone"}
                    input_className={"outline-green-500"}
                  />
                </label>
              </div>
              <div>
                <label>
                  Address
                  <Input type={"text"} name="address" lable={"address"} />
                </label>
              </div>
              <div className=" text-center"></div>
            </>
          ) : (
            <>
              <p className=" flex justify-center text-5xl text-blue-500 ">
                <FaUserLock />
              </p>

              <div>
                <label>
                  Username
                  <Input type={"text"} name="userName" />
                </label>
              </div>
              <div>
                <label>
                  Password
                  <Input type={"password"} name="password" />
                </label>
              </div>
            </>
          )}
        </Form>
        {showSignupCard ? (
          <>
            <div className="h-[2px] bg-green-500 my-3"></div>
            <p className=" text-center">Already have an account?</p>
            <Button
              className=" w-full  md:py-3 bg-white border-green-500  hover:bg-green-500  hover:text-black hover:border-green-500  transition-colors"
              button_text={"Sign in"}
              onClick={handelsignupCard}
            />
          </>
        ) : (
          <>
            <div className="h-[2px] bg-green-500 my-3"></div>
            <p className=" text-center">Don&apos;t have an account?</p>
            <Button
              className="w-full  md:py-3 bg-white border-green-500  hover:bg-green-500  hover:text-black hover:border-green-500  transition-colors"
              button_text={"Create account"}
              onClick={handelsignupCard}
            />
          </>
        )}
      </Card>
    </div>
  );
};

export default Login;
