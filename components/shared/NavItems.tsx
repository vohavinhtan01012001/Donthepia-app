'use client'

import { headerLinks } from "@/constants";
import Link from "next/link";
import { motion } from 'framer-motion';

const NavItems = () => {
    return <div className="flex items-center gap-x-[50px] justify-around h-full">
        {
            headerLinks.map((item, index) => {
                return <motion.div
                    key={index}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="h-full flex items-center"
                >
                    <Link
                        href={item.link}
                        className="h-full flex items-center text-white text-[15.5px] uppercase"
                    >
                        {item.label}
                    </Link>
                </motion.div>
            })
        }
    </div>
}

export default NavItems;