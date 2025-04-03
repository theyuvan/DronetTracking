
import React from 'react';

const DroneLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="8" fill="#2563EB" />
      <path
        d="M20 12L14 16V24L20 28L26 24V16L20 12Z"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="20" cy="20" r="4" fill="white" />
      <rect x="8" y="20" width="6" height="2" rx="1" fill="white" />
      <rect x="26" y="20" width="6" height="2" rx="1" fill="white" />
      <rect x="19" y="8" width="2" height="6" rx="1" fill="white" />
    </svg>
  );
};

export default DroneLogo;
