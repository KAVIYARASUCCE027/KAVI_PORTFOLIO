"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const spring = { type: "spring" as const, damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(0, spring);
  const cursorY = useSpring(0, spring);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-80 h-80 rounded-full bg-purple/20 blur-[80px]" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-40 h-40 rounded-full bg-cyan/15 blur-[50px]" />
      </motion.div>
    </>
  );
}
