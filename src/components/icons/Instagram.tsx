import Link from "next/link";
import React from "react";

interface Props {
  width: string | number;
  height: string | number;
  href?: string;
}

const InstagramIcon: React.FC<Props> = ({ width, height, href }) => {
  return (
    <Link href={href ?? ""}>
      <a
        target="_blank"
        ref={"noopener noreferrer"}
        className="hover:text-primary duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-instagram"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
    </Link>
  );
};

export default InstagramIcon;
