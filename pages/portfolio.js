import React from "react";
import Button from "../components/button";

export default function Portfolio() {
  return (
    <div>
      <div className=" flex flex-col flex-wrap m-4  gap-8  items-center justify-evenly pb-5 pt-5">
        <div className=" w-full md:w-2/3 bg-[#161B22] p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl flex flex-col flex-wrap items-center">
          <h1 className=" text-3xl font-bold">IELTS</h1>
          <p className=" text-center">
            International English Language Testing System
          </p>
          <table className=" text-center border-stone-500 border border-collapse  ">
            <thead>
              <tr className="border-stone-500 border border-collapse">
                <th className="border-stone-500 border border-collapse p-2">
                  Overal Band Score
                </th>
                <th className="border-stone-500 border border-collapse p-2">
                  Passing Year
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-stone-500 border border-collapse p-2">
                  7.0 out of 9
                </td>
                <td className="border-stone-500 border border-collapse">
                  2022
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" w-full md:w-2/3 bg-[#161B22] p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl flex flex-col flex-wrap items-center">
          <h1 className=" text-3xl font-bold">M.Sc</h1>
          <p className=" text-center">Master of Science</p>
          <p>Jahangirnagar University</p>
          <address>Savar, Dhaka.</address>
          <table className=" text-center border-stone-500 border border-collapse ">
            <thead>
              <tr className="border-stone-500 border border-collapse">
                <th className="border-stone-500 border border-collapse p-2">
                  M.Sc
                </th>
                <th className="border-stone-500 border border-collapse p-2">
                  Passing Year
                </th>
                <th>C.G.P.A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-stone-500 border border-collapse p-2">
                  CSE
                </td>
                <td className="border-stone-500 border border-collapse">
                  Running
                </td>
                <td className="p-2">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" w-full md:w-2/3 bg-[#161B22] p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl flex flex-col flex-wrap items-center">
          <h1 className=" text-3xl font-bold">B.Sc</h1>
          <p className=" text-center">
            Bachalor of Science &#10098;Honours&#10099;
          </p>
          <p>Gono Bishwabidyalay</p>
          <address>Mirzanagar, Savar, Dhaka.</address>
          <table className=" text-center border-stone-500 border border-collapse ">
            <thead>
              <tr className="border-stone-500 border border-collapse">
                <th className="border-stone-500 border border-collapse p-2">
                  B.Sc
                </th>
                <th className="border-stone-500 border border-collapse p-2">
                  Passing Year
                </th>
                <th>C.G.P.A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-stone-500 border border-collapse p-2">
                  CSE
                </td>
                <td className="border-stone-500 border border-collapse">
                  2016
                </td>
                <td className="p-2">3.41 on a scale of 4</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className=" w-full md:w-2/3 bg-[#161B22] p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl flex flex-col flex-wrap items-center">
          <h1 className=" text-3xl font-bold">HSC</h1>
          <p className=" text-center">Higher Secondary School Cirtificate</p>
          <p>Bepza Public College</p>
          <address>Ashulia, Savar, Dhaka.</address>
          <table className=" text-center border-stone-500 border border-collapse ">
            <thead>
              <tr className="border-stone-500 border border-collapse">
                <th className="border-stone-500 border border-collapse p-2">
                  Group
                </th>
                <th className="border-stone-500 border border-collapse p-2">
                  Passing Year
                </th>
                <th>G.P.A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-stone-500 border border-collapse p-2">
                  Science
                </td>
                <td className="border-stone-500 border border-collapse">
                  2016
                </td>
                <td className="p-2">4.92 on a scale of 5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" w-full md:w-2/3 bg-[#161B22] p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl flex flex-col flex-wrap items-center">
          <h1 className=" text-3xl font-bold">SSC </h1>
          <p className=" text-center">Secondary School Cirtificate</p>
          <p>Adarsha High School</p>
          <address>Ashulia, Savar, Dhaka.</address>
          <table className=" text-center border-stone-500 border border-collapse ">
            <thead>
              <tr className="border-stone-500 border border-collapse">
                <th className="border-stone-500 border border-collapse p-2">
                  Group
                </th>
                <th className="border-stone-500 border border-collapse p-2">
                  Passing Year
                </th>
                <th>G.P.A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-stone-500 border border-collapse p-2">
                  Science
                </td>
                <td className="border-stone-500 border border-collapse">
                  2014
                </td>
                <td className="p-2">5 on a scale of 5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <a
          href="/CV- Faisal Ahamed Rahad.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <Button className={"font-bold px-2 "} button_text={"Download CV"} />
        </a>
      </div>
    </div>
  );
}
