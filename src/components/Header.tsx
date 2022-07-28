import React, { useEffect, useRef } from "react";
import Image from "next/image";
import FacebookIcon from "./icons/Facebook";
import InstagramIcon from "./icons/Instagram";
import GithubIcon from "./icons/Github";
import gsap from "gsap";

const Header: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.to(nameRef.current, {opacity: 1, duration: 1, delay: 0.2})
    let tl = gsap.timeline();
    tl.fromTo(textRef.current, {opacity: 0, y: 16}, {opacity: 1, duration: 1, y: 0, ease: 'easeIn'})
    tl.fromTo(socialRef.current, {opacity: 0, y: -16}, {opacity: 1, duration: 1, y: 0, ease: 'easeOut'})
  }, []);
  return (
    <div className="sm:flex font-mono">
      <div className="bg-secondary sm:w-2/5 py-12 flex flex-col items-center justify-center">
        <div className="rounded-full w-32 h-32 overflow-hidden shadow-md relative">
          <Image
            src="/profile.jpeg"
            width="100%"
            height="100%"
            alt="Profile Image"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="mt-4">
          <h1 ref={nameRef} className="font-semibold opacity-0 text-xl">Milan Pramod</h1>
          <h4 className="text-sm text-center text-primary font-semibold">
            Student
          </h4>
        </div>
      </div>
      <div className="bg-shade py-14 sm:py-6 sm:flex-1 flex flex-col items-start justify-center">
        <p
          ref={textRef}
          className="px-6 opacity-0 md:text-lg lg:text-xl leading-loose tracking-wide font-semibold"
        >
          Hi, I am Milan Pramod. I am a self taught{" "}
          <span className="bg-primary">full-stack developer</span> and{" "}
          <span className="bg-primary">UI/UX Designer.</span> I love
          contributing to open source. I look forward to make your ideas real.
        </p>
        <div ref={socialRef} className="flex space-x-10 mt-8 px-6">
          <FacebookIcon
            href="https://google.com"
            className="bg-red-500"
            width={48}
            height={48}
          />
          <InstagramIcon href="https://google.com" width={48} height={48} />
          <GithubIcon href="https://google.com" width={48} height={48} />
        </div>
      </div>
    </div>
  );
};

export default Header;
