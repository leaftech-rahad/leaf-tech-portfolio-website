import Image from "next/image";
import { FaServer, FaDatabase } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { GoBrowser } from "react-icons/go";

export default function Home() {
  return (
    <div>
      <div className=" text-2xl flex flex-row flex-wrap justify-evenly md:flex-row-reverse items-center pt-5  m-auto  ">
        <Image
          alt="Profile-Picture"
          src="/logo.png"
          width={220}
          height={80}
          className=" max-md:p-10 "
        />
        <div className=" flex-auto max-w-screen-lg flex flex-col flex-wrap items-start  p-4 ">
          <h1 className=" text-3xl  ">Hello, I&apos;m </h1>
          <p className=" text-4xl">
            Faisal Ahamed{" "}
            <span className=" font-bold text-green-500">Rahad</span>
          </p>
          <p className=" text-lg">Full-Stack Developer.</p>
          <p className="  text-lg mt-4">
            Following the letest techs and industry leading coding standards.
          </p>
          <div className=" flex flex-row flex-wrap items-center justify-between w-full mt-4 justify-items-stretch gap-y-2">
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Image
                alt="nodeJs"
                src="/node.png"
                width={40}
                height={40}
                className="    "
              />
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
                className=" bg-blue   "
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
                width={48}
                height={100}
                className="  p-1 rounded "
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
                className="   "
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
      <div className=" flex flex-row flex-wrap justify-evenly  m-4 pt-10 pb-10 max-sm:gap-8 text-blue-500 gap-1 ">
        <div className="  xl:max-w-xs  2xl:max-w-md bg-[#161B22]   p-4  max-sm:p-4  flex flex-wrap items-center flex-col border-2 rounded-lg border-stone-700 ">
          <GoBrowser className=" text-5xl  " />
          <p className=" text-3xl">Frontend</p>
          <p className="text-green-500 text-justify  text-md font-sans">
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
        <div className=" xl:max-w-xs 2xl:max-w-md bg-[#161B22]  p-4   max-sm:p-4 flex flex-wrap items-center flex-col border-2 rounded-lg border-stone-700">
          <FaServer className=" text-5xl " />
          <p className=" text-3xl ">Backend</p>
          <p className="text-green-500 text-justify  text-md font-sans">
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
        <div className=" xl:max-w-xs 2xl:max-w-md bg-[#161B22]  p-4  max-sm:p-4 flex flex-wrap items-center flex-col border-2 rounded-lg border-stone-700">
          <MdVerifiedUser className=" text-5xl " />
          <p className=" text-3xl ">Authentication</p>
          <p className="text-green-500 text-justify  text-md font-sans">
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
        <div className=" xl:max-w-xs 2xl:max-w-md bg-[#161B22]  p-4  sm:p-4 flex flex-wrap items-center flex-col border-2 rounded-lg border-stone-700">
          <FaDatabase className=" text-5xl " />
          <p className=" text-3xl ">Database</p>
          <p className="text-green-500 text-justify  text-md font-sans">
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
      </div>
    </div>
  );
}
