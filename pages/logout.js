import React from "react";
import { Card } from "../components/card";
import { Form } from "../components/form";

import { getCsrfToken } from "next-auth/react";
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

const Logout = ({ csrfToken, button_className }) => {
  return (
    <div className=" m-auto md:w-[440px] mt-20  font-sans">
      <Card>
        <Form
          logoutCard={true}
          showSignupCard={false}
          button_text={"Sign out"}
          action="/api/auth/signout"
          csrfToken={csrfToken}
          button_className={
            " w-full  md:py-3 bg-white text-red-500 hover:bg-red-500 font-bold  duration-300 border-red-500 hover:text-white hover:border-red-500"
          }
        >
          <p className=" text-center text-2xl font-bold">Signout </p>
          <p className=" text-center text-xl">
            Are you sure you want to sign out?
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default Logout;
