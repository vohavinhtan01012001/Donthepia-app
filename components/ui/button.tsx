'use client'

import { HTMLAttributes } from "react";
import { motion } from 'framer-motion';
import clsx from "clsx";
import { IconSet, IconSetProps } from "../shared/IconSet";


export type ButtonProps = {
    variant?: "primary" | "secondary" | "outFocus" | "text" | "outline";
    icon?: {
        position?: 'left' | 'right';
    } & IconSetProps;
    children?: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit';
    disabled?: boolean;
} & HTMLAttributes<HTMLButtonElement>

const Button = (
    {
        variant = 'primary',
        children,
        icon = {
            position: 'left',
        },
        className,
        type = "button",
        disabled = false,
        ...props
    }: ButtonProps
) => {
    return <motion.div
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        transition={{ duration: 0.2 }}
        className="shadow"
    >
        <button
            className={clsx(
                'flex items-center px-6 py-3 text-[15.5px] font-pretendard rounded-full',
                'outline' === variant && 'border border-slate-400 rounded-lg text-slate-700 bg-slate-50  hover:border-slate-500',
                'primary' === variant && 'bg-[#f1302f] text-[#0d0d0d] text-',
                className
            )}
            onClick={(e) => {
                if (disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                props.onClick && props.onClick(e);
            }}
            disabled={disabled}
            type={type}
            {...props}
        >
            {
                icon?.position === "left" && icon?.name &&
                <IconSet
                    className={clsx(
                        'mr-2',
                        icon.className
                    )}
                    {...icon}
                />
            }
            {children}
            {
                icon?.position === "right" && icon?.name &&
                <IconSet
                    className={clsx(
                        'ml-2',
                        icon.className
                    )}
                    {...icon}
                />
            }
        </button>
    </motion.div>
}
export default Button;