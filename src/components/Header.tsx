import React from "react";
import Image from "next/image";
import FacebookIcon from "./icons/Facebook";
import InstagramIcon from "./icons/Instagram";
import GithubIcon from "./icons/Github";

const Header: React.FC = () => {
  return (
    <div className="sm:flex font-mono">
      <div className="bg-secondary sm:w-2/5 py-12 flex flex-col items-center justify-center">
        <div className="rounded-full w-32 h-32 overflow-hidden shadow">
          <img src="/profile.jpeg" className="object-fill" alt="Profile" />
        </div>
        <div className="mt-4">
          <h1 className="font-semibold text-xl">Milan Pramod</h1>
          <h4 className="text-sm text-center text-primary font-semibold">
            Student
          </h4>
        </div>
      </div>
      <div className="bg-shade py-8 sm:flex-1 flex flex-col items-start justify-center">
        <p className="px-6 sm:text-lg md:text-xl leading-loose tracking-wide font-semibold">
          Hi, I am Milan Pramod. I am a self taught{" "}
          <span className="bg-primary">full-stack developer</span> and {" "}
          <span className="bg-primary">UI/UX Designer.</span> I love
          contributing to open source. I look forward to make your ideas real.
        </p>
        <div className="flex space-x-10 mt-8 px-6">
          <FacebookIcon className="bg-red-500" width={48} height={48} />
          <InstagramIcon width={48} height={48} />
          <GithubIcon width={48} height={48} />
        </div>
      </div>
    </div>
  );
};

export default Header;
