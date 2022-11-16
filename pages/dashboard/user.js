import * as React from "react";
import { useSession } from "next-auth/react";

export default function User() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>;
  }
  return <div>protected route</div>;
}
