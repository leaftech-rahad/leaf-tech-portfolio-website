import React from "react";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { FaServer, FaDatabase } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { GoBrowser } from "react-icons/go";

export default function Portfolio() {
  return (
    <section>
      <div className="grid grid-cols-1 mx-4 my-8 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  2xl:w-4/6  md:my-16  2xl:m-auto 2xl:my-16">
        <section className=" col-span-full ">
          <Card
            className={
              " text-center text-xl bg-gradient-to-bl  from-green-400 to-sky-500"
            }
          >
            <h2 className=" text-2xl font-bold">About me</h2>
            <p className=" font-sans text-lg leading-8">
              I am a full-stack developer(Nodejs & Nextjs). I am currently
              looking for a job as a web developer as well as contract based
              works. Tech stack that I use: Nodejs, Nextjs(React), PostgreSQL,
              GraphQL, Next-auth, ORM(Prisma, Sequelize), Passportjs, git,
              Github etc. I&apos;ve done many projects and side projects and
              made myself comfortable with large scale project structures.
              Willingness to learn new things and passionate about what I do are
              my best qualities. I&apos;m familiar with best practices for
              coding large scale projects.
            </p>
          </Card>
        </section>
        <div className="xl:col-span-2 min-w-80 bg-slate-600 p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl ">
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
        <div className="xl:col-span-2 min-w-80 bg-slate-600 p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl ">
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
        <div className="xl:col-span-4 min-w-80 bg-slate-600 p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl ">
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
                  2021
                </td>
                <td className="p-2">3.41 out of 4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="xl:col-span-2 min-w-80 bg-slate-600 p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl ">
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
        <div className="lg:col-span-2 xl:col-span-2 min-w-80 bg-slate-600 p-6 rounded-2xl text-lg md:text-lg 2xl:text-xl ">
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

        <div className=" lg:col-span-3 xl:col-span-2 min-w-80 p-6  flex flex-wrap items-center flex-col  rounded-2xl  bg-slate-600 ">
          <GoBrowser className=" text-5xl  " />
          <p className=" text-3xl">Frontend</p>
          <p className=" text-justify  text-md font-sans">
            <span className="font-bold text-blue-500">Frontend</span> looks and
            design of a website does matter. It is the first thing that a user
            comes in contact with when visiting a website. No matter how fast
            and efficient a webapp is people will always judge a book by
            it&apos;s cover. As of now{" "}
            <span className="font-bold text-blue-500">React</span> is the most
            loved and sought after frontend framework for developing the
            frontend. I use{" "}
            <span className="font-bold text-blue-500">Next.js</span> which is
            based on <span className="font-bold text-blue-500">React</span>. As
            it helps me to get the best result and design flexibility which
            comes with <span className="font-bold text-blue-500">React</span>{" "}
            and also develop the Backend in{" "}
            <span className="font-bold text-blue-500">Node.js</span>, that{" "}
            <span className="font-bold text-blue-500">Next.js</span> runs under
            the hood by default. As a developer i try my best to make the
            Frontend appealing and user friendly.
          </p>
        </div>
        <div className=" lg:col-span-2 xl:col-span-2 min-w-80 p-6  flex flex-wrap items-center flex-col  rounded-2xl  bg-slate-600 ">
          <FaServer className=" text-5xl " />
          <p className=" text-3xl ">Backend</p>
          <p className=" text-justify  text-md font-sans">
            After the Frontend comes{" "}
            <span className="font-bold text-blue-500">Backend</span>, which is
            by all means the brain of a website. It controls{" "}
            <span className=" font-bold text-blue-500">
              Dataflow, Authentication, CRUD operations
            </span>{" "}
            and much more. If a website is not optimized in the Backend it
            doesn&apos;t matter how good and elegent it looks. Users will avoid
            it for how slow it works. So optimizing the Backend is much of
            importance as designing the Frontend if not more.{" "}
            <span className="font-bold text-blue-500">Node.js</span> is the most
            used server environment in the world. It users Chromes V8 Javascript
            engine making it really fast. I&apos;ve been using{" "}
            <span className="font-bold text-blue-500">Node.js</span> for more
            then 3 years as my Backend.
          </p>
        </div>
        <div className="  min-w-80 p-6 xl:col-span-2 flex flex-wrap items-center flex-col  rounded-2xl  bg-slate-600 ">
          <MdVerifiedUser className=" text-5xl " />
          <p className=" text-3xl ">Authentication</p>
          <p className=" text-justify  text-md font-sans">
            <span className="font-bold text-blue-500">Authentication</span> is a
            vital part of any signin based website, where each user have their
            unique set of priviledges and services. There are two methods of
            authentication{" "}
            <span className="font-bold text-blue-500">Session</span> based &{" "}
            <span className="font-bold text-blue-500">Token</span> based. Each
            has their own set of advantages and cons. I&apos;ve worked with both{" "}
            <span className="font-bold text-blue-500">Session</span> with{" "}
            <span className="font-bold text-blue-500">Passport.js</span> and{" "}
            <span className="font-bold text-blue-500">Token</span> with{" "}
            <span className="font-bold text-blue-500">Next-Auth</span>.
          </p>
        </div>
        <div className="md:col-span-2 lg:col-span-3 xl:col-span-2 min-w-80  p-6  flex flex-wrap items-center flex-col  rounded-2xl  bg-slate-600 ">
          <FaDatabase className=" text-5xl " />
          <p className=" text-3xl ">Database</p>
          <p className=" text-justify  text-md font-sans">
            <span className="font-bold text-blue-500">Database</span> stores all
            necessy data that a dynamic website needs to work.
            <span className="font-bold text-blue-500"> NoSQL</span> and{" "}
            <span className="font-bold text-blue-500">Relational</span>
            database are mostly used for general purpose.{" "}
            <span className="font-bold text-blue-500">
              MongoDB, PostgreSQL, MySQL
            </span>{" "}
            are the most popular by far. Aside from using these databases
            I&apos;ve also used them with popular{" "}
            <span className="font-bold text-blue-500">ORMs </span>
            like <span className="font-bold text-blue-500">
              Prisma
            </span> and{" "}
            <span className="font-bold text-blue-500">Sequelize</span>, which
            makes interacting with databases easier and makes the development
            process very rapid. Lastly as a plus point, I&apos;ve seen{" "}
            <span className="font-bold text-blue-500">GraphQL</span> gaining a
            lot of love in the dev community so I&apos;ve put some effort to
            learn it as well.
          </p>
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
    </section>
  );
}
