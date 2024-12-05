"use client";

import React from "react";

interface GradientBlur {
  color: string;
  width: string;
  height: string;
  top: string;
  left: string;
  blur: string;
  rotate: string;
  opacity?: number;
}

const gradientBlurs: GradientBlur[] = [
  {
    color: "#e69800",
    width: "347px",
    height: "405px",
    top: "466px",
    left: "356px",
    blur: "154.43px",
    rotate: "-180deg",
  },
  {
    color: "#ff3e65",
    width: "197px",
    height: "432px",
    top: "98px",
    left: "449px",
    blur: "154.43px",
    rotate: "-180deg",
  },
  {
    color: "#e56ed3",
    width: "320px",
    height: "485px",
    top: "0",
    left: "196px",
    blur: "154.43px",
    rotate: "-180deg",
    opacity: 0.8,
  },
  {
    color: "#987afd",
    width: "372px",
    height: "433px",
    top: "342px",
    left: "83px",
    blur: "165.31px",
    rotate: "-180deg",
  },
  {
    color: "#0469ed",
    width: "198px",
    height: "433px",
    top: "112px",
    left: "27px",
    blur: "165.31px",
    rotate: "-180deg",
  },
  {
    color: "#005c30",
    width: "526px",
    height: "166px",
    top: "494px",
    left: "-180px",
    blur: "165.31px",
    rotate: "90deg",
    opacity: 0.8,
  },
];

interface GradientBlurSectionProps {
  opacity?: number;
  className?: string;
}

export const GradientBlurSection: React.FC<GradientBlurSectionProps> = ({
  opacity = 1,
  className = "",
}) => (
  <div className={`relative h-[870px] ${className}`} style={{ opacity }}>
    {gradientBlurs.map((blur, index) => (
      <div
        key={index}
        className="absolute rounded-[305.74px]"
        style={{
          width: blur.width,
          height: blur.height,
          top: blur.top,
          left: blur.left,
          backgroundColor: blur.color,
          transform: `rotate(${blur.rotate})`,
          filter: `blur(${blur.blur})`,
          opacity: blur.opacity || 1,
        }}
      />
    ))}
  </div>
);