import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import './style.css'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const MenuMobile = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`w-full absolute top-0 left-0 bottom-0 z-50`}
    >
      <motion.div
        className="relative w-full min-h-screen bg-gradient-to-b from-[#b83331] to-[#300b0bde] "
        variants={sidebar}
      />
      <Navigation toggle={() => toggleOpen()}/>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
