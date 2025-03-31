"use client";

import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: "fadeIn" | "slideUp" | "scaleIn" | "slideInLeft" | "slideInRight";
  delay?: number;
  className?: string;
  once?: boolean;
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
  },
  slideUp: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  },
  scaleIn: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  },
  slideInLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  },
  slideInRight: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  },
};

export default function AnimateOnScroll({
  children,
  animation = "fadeIn",
  delay = 0,
  className = "",
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once, margin: "-100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } else if (!once) {
      controls.start("initial");
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={animations[animation]}
      initial="initial"
      animate={controls}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}