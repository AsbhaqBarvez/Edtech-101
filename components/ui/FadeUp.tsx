"use client";

import { motion, type MotionProps } from "framer-motion";
import * as React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    delay?: number;
    as?: "div" | "section" | "article" | "header";
  };

export function FadeUp({ delay = 0, children, className, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
