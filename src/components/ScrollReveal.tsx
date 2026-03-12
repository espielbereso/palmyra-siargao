import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealDirection = "up" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  distance?: number;
}

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 30,
}: ScrollRevealProps) => {
  const initialByDirection = {
    up: { opacity: 0, y: distance },
    left: { opacity: 0, x: -distance },
    right: { opacity: 0, x: distance },
    none: { opacity: 0 },
  } as const;

  return (
    <motion.div
      initial={initialByDirection[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
