"use client";

import React from "react";

/**
 * GridPattern Component
 * 
 * Renders a subtle dark futuristic grid pattern across the page background.
 * Important: STRICT NO GRADIENTS policy — utilizes solid stroke and opacity tones only.
 */
interface GridPatternProps {
  className?: string;
}

export const GridPattern: React.FC<GridPatternProps> = ({ className = "" }) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden opacity-20 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full stroke-bg-muted"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="futuristic-grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />
            {/* Subtle grid intersection dots */}
            <circle cx="40" cy="0" r="1" fill="#00f0ff" fillOpacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#futuristic-grid-pattern)" />
      </svg>
    </div>
  );
};

export default GridPattern;
