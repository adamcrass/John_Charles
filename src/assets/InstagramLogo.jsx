import React from "react";

const InstagramLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="45px"
      height="45px"
      fill="none"
    >
      {/* Outer rounded rectangle */}
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="12"
        fill="black" /* Black fill */
        stroke="white" /* White outline */
        strokeWidth="2" /* Outline thickness */
      />
      {/* Inner circle */}
      <circle
        cx="24"
        cy="24"
        r="9"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      {/* Small circle for lens */}
      <circle cx="35" cy="13" r="2.5" fill="white" />
    </svg>
  );
};

export default InstagramLogo;
