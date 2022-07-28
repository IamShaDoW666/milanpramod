import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Navbar: React.FC = () => {
  const headingTxtRef = useRef<HTMLHeadingElement>(null);
  const firstTxtRef = useRef<HTMLHeadingElement>(null);
  const secondTxtRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {    
    gsap.fromTo(headingTxtRef.current, {opacity: 0, y: -16}, {opacity: 1, y: 0, duration: 1})
    gsap.fromTo(firstTxtRef.current, {opacity: 0, x: -8}, {opacity: 1, x: 0, duration: 1, delay: 1})
    gsap.fromTo(secondTxtRef.current, {opacity: 0, x: 8}, {opacity: 1, x: 0, duration: 1, delay: 1})
  }, [])

  return (
    <nav className="bg-primary z-10 shadow-md font-mono h-20 sticky top-0 flex items-center px-2 sm:px-4 md:px-16 lg:px-32 justify-between">
      <div className="flex justify-between items-center w-full">
        <h1 ref={headingTxtRef} className="sm:text-4xl text-2xl text-white">Portfolio</h1>
        <div className="font-semibold">
          <h1 ref={firstTxtRef} className="text-sm sm:text-lg text-white">
            Full-Stack Developer
          </h1>
          <h1 ref={secondTxtRef} className="text-sm sm:text-lg text-white">
            UI/UX Designer
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
