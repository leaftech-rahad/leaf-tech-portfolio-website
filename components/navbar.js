import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import Button from "../components/button";
import { useSession } from "next-auth/react";

const Navbar = () => {
  var { data: session, status } = useSession();

  const [dropmenu, setDropmenu] = useState(false);

  var isLoggedin;
  if (status === "authenticated") {
    isLoggedin = true;
  }
  const showMenu = (event) => {
    setDropmenu((current) => !current);
  };
  const signout = false;
  return (
    <div className="flex flex-col flex-wrap justify-between sticky top-0">
      <Head>
        <title>Portfolio_Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <nav className=" font-mono bg-[#161B22] text-white  box-border flex justify-between flex-row flex-wrap py-1 items-center">
        <Link href="/">
          <Image
            src="/logog.png"
            alt="Logo"
            width={180}
            height={50}
            className=""
          />
        </Link>

        <ul className=" max-md:hidden flex  items-center pr-4">
          {session ? (
            <li className=" font-serif text-xl pr-4">
              <p>Hi, {session?.userName} </p>
            </li>
          ) : (
            ""
          )}

          <li className=" ">
            <Link href={"portfolio"}>
              <Button button_text={"Portfolio"} />
            </Link>
          </li>
          <li className=" ">
            <Link href={"contact"}>
              <Button button_text={"Contact_me"} />
            </Link>
          </li>
          <li className="">
            <Link href={"code_bits"}>
              <Button button_text={"Code_Bits"} />
            </Link>
          </li>

          {isLoggedin ? (
            ""
          ) : (
            <li className="">
              <Link href={"login"}>
                <Button button_text={"Login"} />
              </Link>
            </li>
          )}
          {isLoggedin ? (
            <li className="">
              <Link href={"logout"}>
                <Button button_text={"Logout"} />
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
        <div className=" md:hidden overflow-hidden mr-3" onClick={showMenu}>
          {session ? (
            <p className=" font-serif text-xl pr-4 float-left">
              Hi, {session?.userName}
            </p>
          ) : (
            ""
          )}
          <button className="  md:hidden  text-xl flex flex-col  p-2">
            {dropmenu ? <BiX /> : <BiMenu />}
          </button>
          <div
            className={
              dropmenu
                ? "block   md:hidden text-white  box-border  bg-gray-900  p-1 rounded fixed top-16 right-0 text-lg"
                : "hidden    md:hidden text-white  box-border  bg-gray-900  p-1 rounded fixed top-16 right-0 text-lg"
            }
          >
            <Link
              href="portfolio"
              className=" hover:bg-slate-700 px-6 py-2 rounded block"
            >
              Portfolio
            </Link>
            <Link
              href="contact"
              className=" hover:bg-slate-700 px-6 py-2 rounded block"
            >
              Contact_me
            </Link>
            <Link
              href="code_bits"
              className=" hover:bg-slate-700 px-6 py-2 rounded block"
            >
              Code_Bits
            </Link>
            {/* <Link
              href="signup"
              className=" hover:bg-slate-700 px-6 py-2 rounded block"
            >
              Sign up
            </Link> */}
            <Link
              href="login"
              className=" hover:bg-slate-700 px-6 py-2 rounded block"
            >
              Login
            </Link>
            {!signout ? (
              <Link
                href="logout"
                className=" hover:bg-slate-700 px-6 py-2 rounded block"
              >
                Logout
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
