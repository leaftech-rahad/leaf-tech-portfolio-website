import React from "react";
import Button from "../components/button";
import Card from "../components/card";

export default function Portfolio() {
  return (
    <div>
      <div className="grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 m-4 gap-8">
        <div className=" min-w-80 bg-slate-600 p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl ">
          <h1 className=" text-3xl font-bold text-center">IELTS</h1>
          <p className=" text-center">
            International English Language Testing System
          </p>
          <table className=" font-sans text-center border-stone-500 border border-collapse w-full ">
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
        <div className=" min-w-80 bg-slate-600 p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl ">
          <h1 className=" text-3xl font-bold text-center">M.Sc</h1>
          <p className=" text-center">Master of Science</p>
          <p className=" text-center">Jahangirnagar University</p>
          <address className=" text-center">Savar, Dhaka.</address>
          <table className=" font-sans text-center border-stone-500 border border-collapse w-full ">
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
        <div className=" min-w-80 bg-slate-600 p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl ">
          <h1 className=" text-3xl font-bold text-center">B.Sc</h1>
          <p className=" text-center">
            Bachalor of Science &#10098;Honours&#10099;
          </p>
          <p className=" text-center">Gono Bishwabidyalay</p>
          <address className=" text-center">Mirzanagar, Savar, Dhaka.</address>
          <table className=" font-sans text-center border-stone-500 border border-collapse w-full ">
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
                <td className="p-2">3.41 out of 4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" min-w-80 bg-slate-600 p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl ">
          <h1 className=" text-3xl font-bold text-center">HSC</h1>
          <p className=" text-center">Higher Secondary School Cirtificate</p>
          <p className=" text-center">Bepza Public College</p>
          <address className=" text-center">Ashulia, Savar, Dhaka.</address>
          <table className=" font-sans text-center border-stone-500 border border-collapse w-full ">
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
                <td className="p-2">4.92 out of 5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" min-w-80 bg-slate-600 p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl ">
          <h1 className=" text-3xl font-bold text-center">SSC </h1>
          <p className=" text-center">Secondary School Cirtificate</p>
          <p className=" text-center">Adarsha High School</p>
          <address className=" text-center">Ashulia, Savar, Dhaka.</address>
          <table className=" font-sans text-center border-stone-500 border border-collapse w-full ">
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
                <td className="p-2">5 out of 5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" col-span-full ">
          <Card>Personal info</Card>
        </div>

        <a
          href="/CV-Faisal Ahamed Rahad.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="m-auto col-span-full "
        >
          <Button
            className={
              "font-bold px-2 hover:border-green-500 hover:text-green-500 transition-colors m-auto"
            }
            button_text={"Download CV"}
          />
        </a>
      </div>
    </div>
  );
}
