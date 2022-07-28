import Link from "next/link";
import React from "react";
interface Props {
  width: string | number;
  height: string | number;
  href?: string;
  className?: string;
}

const FacebookIcon: React.FC<Props> = ({
  width,
  height,
  href,
  ...className
}) => {
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
          className="feather feather-facebook"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      </a>
    </Link>
  );
};

export default FacebookIcon;
