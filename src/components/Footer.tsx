import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex shadow-md justify-between items-center px-2 sm:px-4 md:px-16 lg:px-32 font-mono text-white bg-primary sm:py-2 py-4">
      <div>
        <h1>Built using</h1>
        <div className="flex gap-x-4 items-center">
          <div className="w-16 h-16 relative">
            <Image
              src="/nextjs-logo.svg"
              alt="Nextjs Logo"
              layout="fill"
              objectFit="fill"
            />
          </div>
          <div className="w-8 h-8 relative">
            <Image
              src="/react-icon.svg"
              alt="React Logo"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </footer>
  );
};

export default Footer;
