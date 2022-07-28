import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary font-mono h-20 sticky top-0 flex items-center px-2 sm:px-4 md:px-16 lg:px-32 justify-between">
      <div className="flex justify-between items-center w-full">
        <h1 className="sm:text-4xl text-2xl text-white">Portfolio</h1>
        <div className="font-semibold">
          <h1 className="text-sm sm:text-lg text-white">
            Full-Stack Developer
          </h1>
          <h1 className="text-sm sm:text-lg text-white">
            UI/UX Designer
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
