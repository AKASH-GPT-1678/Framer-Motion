"use client";

import { motion } from "framer-motion";

export function DragConstraint() {
  return (
    <motion.div
      style={{
        width: 150,
        height: 150,
        borderRadius: 30,
        backgroundColor: "#f87171",
      }}
      drag
      dragConstraints={{ top: -125, right: 250, bottom: 125, left: -125 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragElastic={0.5}
    />
  );
}
