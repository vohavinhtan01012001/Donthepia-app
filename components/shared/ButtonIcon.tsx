'use client'
import { motion } from 'framer-motion';
import { IconSet, IconSetProps } from './IconSet';
import { HTMLAttributes } from "react";

type ButtonIconProps = {
    disabled?: boolean;
    type?: 'button' | 'submit';
    icon?: IconSetProps;
} & HTMLAttributes<HTMLButtonElement>

const ButtonIcon = ({
    icon,
    type,
    disabled,
    ...props
}: ButtonIconProps) => {
    return (
        <motion.div
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            transition={{ duration: 0.2 }}
            className={`${disabled ? 'opacity-60' : 'opacity-100'}`}
        >
            <button
                type={type}
                disabled={disabled}
                {...props}
            >
                <IconSet
                    {...icon}
                />
            </button>
        </motion.div>
    )
}

export default ButtonIcon;