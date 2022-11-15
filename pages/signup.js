/* import * as React from "react";
import Card from "../components/card";
import Form from "../components/form";

import { getCsrfToken } from "next-auth/react";

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
 */
const Signup = ({ csrfToken }) => {
  return (
    <>
      {/* <div className=" m-auto md:mt-20 md:w-[440px]">
      <Card>
        <Form
          signupForm
          csrfToken={csrfToken}
          action="/api/auth/callback/credentials"
        ></Form>
      </Card>
    </div> */}
    </>
  );
};

export default Signup;
