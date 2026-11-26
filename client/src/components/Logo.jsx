import React from 'react';

const Logo = ({ className = 'w-32 sm:w-44', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2 select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M18 4V14.5M18 21.5V32M4 18H14.5M21.5 18H32M8.1 8.1L15.5 15.5M20.5 20.5L27.9 27.9M27.9 8.1L20.5 15.5M15.5 20.5L8.1 27.9"
          stroke="#5044E5"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-2xl font-bold tracking-tight text-[#5044E5]">
        Quick.ai
      </span>
    </div>
  );
};

export default Logo;
