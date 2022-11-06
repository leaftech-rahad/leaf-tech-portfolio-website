import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className=" text-2xl flex flex-row flex-wrap justify-evenly md:flex-row-reverse items-center pt-5  m-auto font-mono ">
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
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
}
