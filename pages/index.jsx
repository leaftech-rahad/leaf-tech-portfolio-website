import Image from "next/image";
import styles from "../styles/gradient.module.css";
import { CButton } from "../components/customeButton";
import { Card } from "../components/card";
import { Button } from "../components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className=" text-2xl flex flex-row flex-wrap justify-evenly md:flex-row-reverse items-center m-auto mt-60 mb-32 max-lg:mt-8 max-lg:mb-20">
        <div className="relative pr-1">
          <div className=" absolute bg-gradient-to-tl from-lime-300 via-green-400 to-blue-500  inset-0 blur-xl "></div>
          <Image
            alt="Profile-Picture"
            src="/logo.png"
            width={140}
            height={80}
            className="  relative bg-black mb-5 "
          />
        </div>
        <div className=" flex-auto max-w-screen-lg flex flex-col flex-wrap items-start px-3 max-xl:max-w-[865px]  ">
          <h1 className=" text-3xl  ">Hello, I&apos;m </h1>
          <p className=" text-4xl">
            Faisal Ahamed{" "}
            <span className={" font-bold " + styles.span}>Rahad</span>
          </p>
          <p className=" text-lg">A Full-Stack Developer.</p>
          <p className="  text-lg mt-4">
            Following the latest techs and industry leading coding standards.
          </p>
          <div className=" flex flex-row flex-wrap items-center justify-between mt-4 w-full max-md:max-w-3xl  justify-items-stretch gap-y-2">
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Image alt="nodeJs" src="/node.png" width={40} height={40} />
            </a>

            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <Image
                alt="next"
                src="/next.png"
                width={60}
                height={40}
                className=" bg-white p-1 rounded   "
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <Image
                alt="tailwind"
                src="/tailwind.png"
                width={60}
                height={40}
                className="  p-1 rounded   "
              />
            </a>
            <a
              href="https://next-auth.js.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="react"
                src="/nextauth.png"
                width={38}
                height={40}
                className="   rounded "
              />
            </a>
            <a
              href="https://www.passportjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="passportJs"
                src="/passportJs.png"
                width={38}
                height={100}
                className="rounded "
              />
            </a>
            <a href="https://www.nginx.com/" target="_blank" rel="noreferrer">
              <Image
                alt="ngnix"
                src="/ngnix.png"
                width={85}
                height={40}
                className=" rounded p-1 bg-white "
              />
            </a>
            <a
              href="https://pm2.keymetrics.io/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="pm2"
                src="/pm2.png"
                width={110}
                height={40}
                className=" bg-white p-3 rounded  "
              />
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <Image
                alt="git"
                src="/git.png"
                width={83}
                height={60}
                className=" bg-white p-1 rounded   "
              />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Image
                alt="github"
                src="/github.png"
                width={40}
                height={40}
                className=" bg-white rounded p-1   "
              />
            </a>
            <a href="https://graphql.org/" target="_blank" rel="noreferrer">
              <Image
                alt="gql"
                src="/gql.png"
                width={40}
                height={40}
                className="bg-white rounded  "
              />
            </a>
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="pg"
                src="/pg.png"
                width={40}
                height={40}
                className=" bg-white  p-1 rounded "
              />
            </a>
            <a href="https://sequelize.org/" target="_blank" rel="noreferrer">
              <Image
                alt="sequelize"
                src="/sequelize.png"
                width={115}
                height={100}
                className=" bg-white  p-1 rounded "
              />
            </a>
            <a href="https://www.prisma.io/" target="_blank" rel="noreferrer">
              <Image
                alt="prisma"
                src="/prisma.png"
                width={105}
                height={100}
                className=" bg-white  p-1 rounded "
              />
            </a>
          </div>
        </div>
      </div>
      <div className=" flex flex-row  items-center justify-center box-border h-8 pb-80 max-sm:pb-46 gap-10">
        <a href="#work">
          <CButton button_text={"Check out my projects"} className={""} />
        </a>
        <Link href="/contact_me">
          <CButton button_text={"Hire me"} className={""} />
        </Link>
      </div>

      <div id="work"></div>
      <div className=" flex flex-col  items-center justify-center mx-4 my-24 gap-5">
        <Card
          className={
            " flex flex-wrap  flex-col bg-gradient-to-bl  from-green-400 to-sky-500 max-w-4xl"
          }
        >
          <h1 className=" text-2xl text-center">Personal Website</h1>
          <p className=" text-xl text-center py-3">Tech-Stack</p>
          <p className=" text-lg text-left ">
            Frontend:{" "}
            <span className="text-slate-100">
              NEXT.JS, Tailwind, React-icons.
            </span>
          </p>
          <p className=" text-lg text-left">
            Backend:{" "}
            <span className="text-slate-100">
              NEXT.JS(node.js), GraphQL, React-Query, GraphQl-request,
              apollo-server-micro, Cors, graphql-codegen.
            </span>
          </p>
          <p className=" text-lg text-left">
            Database: <span className="text-slate-100">PostgreSQL.</span>
          </p>
          <p className=" text-lg text-left">
            ORM: <span className="text-slate-100">Prisma.</span>
          </p>
          <p className=" text-lg text-left">
            Authentication:{" "}
            <span className="text-slate-100">Next-auth, Bcryptjs, joi.</span>
          </p>
          <p className=" text-lg text-left">
            Deployment:{" "}
            <span className="text-slate-100">
              App: Vercel, Database: Filess.
            </span>
          </p>
          <div className=" flex flex-wrap justify-center text-lg text-white p-4">
            <a
              href="https://github.com/leaftech-rahad/leaf-tech-portfolio-website"
              target="_blank"
              rel="noreferrer"
              className=" m-2  "
            >
              <Button
                button_text={"View Code"}
                className="w-28 hover:font-bold hover:text-purple-600 hover:border-purple-500 "
              />
            </a>
          </div>
          <p className=" text-xl text-center pb-2">Brief summery</p>
          <p className=" text-md ">
            This is a personal website of mine and I&apos;m actively developing
            it. It utilizes both SSR and SSG as well as authentication for its
            users. Main attraction of this website is its serverless graphql
            API.{" "}
            <span className=" font-bold text-zinc-100">
              Checkout Authentication and Authorization of this website by
              Creating an account and logging in.(You can use dummy data if you
              want NB. database that is used is a free tier database, please be
              patient if your account is not created on the first try.)
            </span>
            Dummy account: Username: john123 Password: 12345 .
          </p>
        </Card>
        <Card
          className={
            " flex flex-wrap  flex-col bg-gradient-to-bl  from-sky-500 to-green-400 max-w-4xl"
          }
        >
          <h1 className=" text-2xl text-center">
            Express App template with Pug and Tailwind
          </h1>
          <p className=" text-xl text-center py-3">Tech-Stack</p>
          <p className=" text-lg text-left ">
            Frontend:{" "}
            <span className="text-slate-100">View engine(pug), Tailwind.</span>
          </p>
          <p className=" text-lg text-left">
            Backend: <span className="text-slate-100">Nodejs, Expressjs.</span>
          </p>
          <p className=" text-lg text-left">
            Database: <span className="text-slate-100">None.</span>
          </p>
          <p className=" text-lg text-left">
            ORM: <span className="text-slate-100">None.</span>
          </p>
          <p className=" text-lg text-left">
            Authentication:{" "}
            <span className="text-slate-100">Bcryptjs, joi.</span>
          </p>
          <p className=" text-lg text-left">
            Deployment: <span className="text-slate-100">App: Render.</span>
          </p>
          <div className=" flex flex-wrap justify-center text-lg text-white p-4">
            <a
              href="https://github.com/leaftech-rahad/express_barebone_app_pug_tailwind"
              target="_blank"
              rel="noreferrer"
              className=" m-2  "
            >
              <Button
                button_text={"View Code"}
                className="w-28 hover:font-bold hover:text-purple-600 hover:border-purple-500 "
              />
            </a>
            <a
              href="https://express-app-sr0p.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className=" m-2  "
            >
              <Button
                button_text={"View App"}
                className="w-28 hover:font-bold hover:text-purple-600 hover:border-purple-500 "
              />
            </a>
          </div>
          <p className=" text-xl text-center pb-2">Brief summery</p>
          <p className=" text-md ">
            This is a starting template for express app with nodejs and view
            engine. It is very similar to express-generator because it is based
            of on it with some modifications. Although it is deployed, there is
            nothing to see. This is just to demonstrate that I can build and
            deploy Nodejs apps.
          </p>
        </Card>
        <Card className={" w-full flex place-content-center flex-wrap "}>
          <h1 className=" text-2xl ">Coming soon.</h1>
        </Card>
        <Card className={" w-full flex place-content-center flex-wrap "}>
          <h1 className=" text-2xl ">Coming soon.</h1>
        </Card>
      </div>
    </div>
  );
}
