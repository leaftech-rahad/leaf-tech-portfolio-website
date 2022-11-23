import React from "react";
import { useSession } from "next-auth/react";
import Card from "../components/card";

const Contact = () => {
  const { data: session, status } = useSession();

  return (
    <Card className={" m-4"}>
      <div className=" font-sans">
        {status === "authenticated" ? (
          <>
            <p className=" text-center text-3xl ">Page coming soon...</p>
            <p className=" text-center text-2xl mt-20">
              You are Signed in as{" "}
              <span className=" font-mono text-green-500">
                {session?.userName}
              </span>{" "}
              . <span className=" font-mono text-green-500">Code_Bits</span>{" "}
              page coming really soon.
            </p>
            <p className=" text-center text-2xl mt-20">
              Thank you,{" "}
              <span className=" font-mono text-green-500">
                {session?.userName}
              </span>{" "}
              for joining up with{" "}
              <span className=" font-mono text-green-500">leaf_tech</span>
            </p>
          </>
        ) : (
          <>
            <p className=" text-center text-3xl">Page coming soon...</p>
            <p className=" text-center text-2xl mt-20 text-red-400">
              You are not Signed in. Please Sign up to get access to{" "}
              <span className=" font-mono text-green-500">Code_Bits</span>
            </p>
          </>
        )}
      </div>
    </Card>
  );
};

export default Contact;
