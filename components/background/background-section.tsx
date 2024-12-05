"use client";

import React from "react";
import { GradientBlurSection } from "./gradient-blur";

interface BackgroundSectionProps {
  type: "primary" | "secondary";
}

export const BackgroundSection: React.FC<BackgroundSectionProps> = ({ type }) => {
  if (type === "primary") {
    return (
      <div className="absolute w-[1512px] h-[1647px] top-0 left-0 overflow-hidden mix-blend-darken">
        <div className="relative w-[1518px] h-[1512px] -left-[3px]">
          <div className="absolute w-[589px] h-[729px] top-[459px] left-[465px] opacity-30">
            <GradientBlurSection opacity={0.8} />
          </div>
          <div className="absolute w-[1518px] h-[1512px] top-0 left-0 bg-[#ffffff03] backdrop-blur-[400px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="h-[403px] top-[1310px] left-0 overflow-hidden absolute w-[1512px]">
      <div className="relative w-[1518px] h-[2470px] -left-[3px]">
        <div className="absolute w-[1512px] h-[1512px] top-[958px] left-[3px] overflow-hidden">
          <div className="relative w-[1518px] h-[1512px] -left-[3px]">
            <div className="absolute w-[703px] h-[870px] top-[290px] left-[458px] opacity-20">
              <GradientBlurSection />
            </div>
            <div className="absolute w-[1518px] h-[1512px] top-0 left-0 bg-[#ffffff03] backdrop-blur-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};