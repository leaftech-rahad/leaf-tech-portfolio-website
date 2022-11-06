import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" text-2xl flex flex-row flex-wrap justify-evenly md:flex-row-reverse items-center pt-5 lg:w-11/12 m-auto font-mono">
        <Image
          alt="Profile-Picture"
          src="/icon.ico"
          width={220}
          height={80}
          className=" rounded-full max-md:p-10 "
        />
        <div className="flex flex-col flex-wrap items-start  p-4">
          <h1 className=" text-3xl  ">Hello, I&apos;m </h1>
          <p className=" text-4xl">
            Faisal Ahamed{" "}
            <span className=" font-bold text-green-500">Rahad</span>
          </p>
          <p className=" text-lg">Full-Stack Developer.</p>
          <p className="  text-lg mt-4">
            Following the letest techs and industry leading coding standards.
          </p>
          <div className=" flex flex-row flex-wrap items-center justify-between w-full mt-4 justify-items-stretch">
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Image
                alt="nodeJs"
                src="/node.png"
                width={40}
                height={40}
                className="    "
              />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Image
                alt="nodeJs"
                src="/react.png"
                width={40}
                height={40}
                className=" bg-blue   "
              />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Image
                alt="nodeJs"
                src="/next.png"
                width={60}
                height={40}
                className=" bg-white p-1 rounded   "
              />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Image
                alt="nodeJs"
                src="/ngnix.png"
                width={85}
                height={40}
                className=" rounded p-1 bg-white "
              />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Image
                alt="nodeJs"
                src="/pm2.png"
                width={90}
                height={40}
                className=" bg-white p-3 rounded  "
              />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Image
                alt="nodeJs"
                src="/git.png"
                width={60}
                height={40}
                className=" bg-white p-1 rounded   "
              />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Image
                alt="nodeJs"
                src="/github.png"
                width={40}
                height={40}
                className=" bg-white rounded p-1   "
              />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Image
                alt="nodeJs"
                src="/gql.png"
                width={40}
                height={40}
                className="   "
              />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Image
                alt="nodeJs"
                src="/pg.png"
                width={40}
                height={40}
                className=" bg-white  p-1 rounded "
              />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Image
                alt="nodeJs"
                src="/sequelize.png"
                width={90}
                height={100}
                className=" bg-white  p-1 rounded "
              />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <Image
                alt="nodeJs"
                src="/prisma.png"
                width={82}
                height={100}
                className=" bg-white  p-1 rounded "
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
