import React from "react";
import { useSession } from "next-auth/react";

const Code_bits = () => {
  const { data: session, status } = useSession();

  return (
    <div className=" font-sans">
      {status === "authenticated" ? (
        <>
          <p className=" text-center text-3xl mt-20">Page coming soon...</p>
          <p className=" text-center text-2xl mt-20">
            You are Signed in as{" "}
            <span className=" font-mono text-green-500">
              {session?.userName}
            </span>
          </p>
        </>
      ) : (
        <>
          <p className=" text-center text-3xl mt-20">Page coming soon...</p>
          <p className=" text-center text-2xl mt-20 text-red-400">
            You have to Sign in to see this page when the page gets released.
          </p>
        </>
      )}
    </div>
  );
};

export default Code_bits;
