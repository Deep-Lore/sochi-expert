'use client'

import { motion, Variants } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedBoxProps {
  children: React.ReactNode;
  animationType?:
  | "slideInLeft"
  | "slideInRight"
  | "slideInUp"
  | "slideInDown"
  | "fadeIn"
  | "zoomIn"
  | "rotate"
  | "scale"
  | "flipX"
  | "flipY";
  delay?: number;
  className?: string;
  onClick?: () => any
}

const defaultVariants: Record<string, Variants> = {
  slideInLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  },
  slideInRight: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  },
  slideInUp: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
  },
  slideInDown: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  zoomIn: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  },
  rotate: {
    initial: { rotate: 0, opacity: 0 },
    animate: { rotate: 360, opacity: 1 },
    exit: { rotate: 0, opacity: 0 },
  },
  scale: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  flipX: {
    initial: { rotateX: 90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: 90, opacity: 0 },
  },
  flipY: {
    initial: { rotateY: 90, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    exit: { rotateY: 90, opacity: 0 },
  },
};

export const AnimatedBox = ({
  children,
  animationType = "fadeIn",
  delay = 0,
  className,
  onClick
}: AnimatedBoxProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const variants = defaultVariants[animationType || "fadeIn"];

  return (
    <motion.div
      ref={containerRef}
      variants={variants}
      initial="initial"
      animate={isVisible ? "animate" : "initial"}
      exit="exit"
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};