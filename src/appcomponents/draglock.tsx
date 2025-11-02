"use client";
import { motion } from "framer-motion";
export function DragLock() {
    return (
        <motion.div
            style={{
                width: 150,
                height: 150,
                borderRadius: 30,
                backgroundColor:  "#f87171",
            }}
            drag
            dragDirectionLock
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
        />
    );
}