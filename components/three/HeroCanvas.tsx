"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("./HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-purple/30 border-t-purple animate-spin" />
      </div>
    ),
  }
);

export function HeroCanvas() {
  return <HeroScene />;
}
