import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" text-2xl flex flex-row flex-wrap justify-evenly md:flex-row-reverse items-center pt-5">
        <Image
          alt="Profile-Picture"
          src="/icon.ico"
          width={220}
          height={80}
          className=" rounded-full max-md:p-10 "
        />
        <div className="flex flex-col flex-wrap items-center  ">
          <h1 className=" text-4xl font-mono ">Hi,</h1>
          <p>
            I&apos;m Faisal Ahamed <span className=" font-bold">Rahad</span>
          </p>
          <p className=" text-center">A Full-Stack Developer.</p>
          <p className=" text-center">
            Following letest techs and industry leading coding standards.
          </p>
        </div>
      </div>
    </>
  );
}
