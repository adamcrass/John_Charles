import React from "react";

const FacebookLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
      fill="none"
    >
      {/* Outer circle */}
      <circle cx="24" cy="24" r="22" fill="#1877F2" />

      {/* Letter "f" in the center */}
      <text
        x="50%"
        y="50%"
        fontSize="24"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        alignmentBaseline="central"
        fontFamily="Arial, sans-serif"
      >
        f
      </text>
    </svg>
  );
};

export default FacebookLogo;
