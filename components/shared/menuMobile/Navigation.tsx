import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { useRouter } from "next/navigation";
import { headerLinks } from "@/constants";

const variants = {
  open: {
    display: "block",
    zIndex: 2, // Target position for the `open` state
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      duration: 0.5 // Adjust the duration to fit your needs
    }
  },
  closed: {
    display: "none",
    zIndex: 0, // Target position for the `closed` state
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.5 // Adjust the duration to fit your needs
    }
  }
};

const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const Navigation = ({ toggle }: { toggle: (i?: number) => void }) => {
  const navigate = useRouter()
  const handleClick = (item: {
    label: string;
    link: string;
  }) => {
    toggle();
    navigate.push(item.link);
  }
  return <>
    <motion.div
      className="absolute top-[20px] right-0 list-none mb-[20px] flex items-center cursor-pointer text-white font-semibold"
      variants={variantsLi}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
    </motion.div>
    <motion.ul variants={variants} className=" absolute top-[200px] left-[30px] w-full p-[50px] pt-0 hidden">
      {headerLinks.map((item, index) => (
        <MenuItem item={item} key={index} onClick={handleClick} />
      ))}

    </motion.ul>

  </>
};

