import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function MagneticButton({ children, className, onClick, as = "button", href }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate the distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    x.set((clientX - centerX) * 0.2); // Pull factor
    y.set((clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = motion[as] || motion.button;

  const props = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    style: { x: springX, y: springY },
    whileTap: { scale: 0.95 },
    className: `relative flex items-center justify-center transition-colors ${className}`,
  };

  if (as === "a") {
    props.href = href;
    props.target = "_blank";
    props.rel = "noopener noreferrer";
  }

  return <Component {...props}>{children}</Component>;
}
