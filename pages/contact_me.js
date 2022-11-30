import React from "react";

import Card from "../components/card";

const Contact = () => {
  return (
    <Card className={"  bg-gradient-to-t from-green-400 to-sky-500 m-4"}>
      <h1 className=" text-2xl font-sans font-bold text-center p-4">
        You can find me on
      </h1>
      <div className="flex flex-row flex-wrap place-content-center gap-2 p-2">
        <div className=" text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
          </svg>
          <p>Facebook</p>
        </div>
        <div className=" text-xs">
          <p>Linkedin</p>
        </div>
        <div className=" text-xs">
          <p>What&apos;sapp</p>
        </div>
        <div className=" text-xs">
          <p>Telegram</p>
        </div>
        <div className=" text-xs">
          <p>Email</p>
        </div>
        <div className=" text-xs">
          <p>Phone</p>
        </div>
      </div>
    </Card>
  );
};

export default Contact;
