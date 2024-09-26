import { motion } from "framer-motion";

const variants = {
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


export const MenuItem = ({ item, onClick }: {
  item: { label: string, link: string },
  onClick: (item: {
    label: string;
    link: string;
  }) => void
}) => {

  return (
    <motion.li
      className="list-none mb-[20px] flex items-center cursor-pointer text-white font-semibold"
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => onClick(item)}
    >
      <div className={`text-lg`}>{item.label}</div>
    </motion.li>
  );
};
