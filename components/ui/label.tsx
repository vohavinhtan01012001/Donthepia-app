import clsx from "clsx";
import React, { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    className?: string;
    children?: React.ReactNode;
}

const Label = ({
    className,
    children,
    ...rest
}: LabelProps) => {
    return <label
        className={
            clsx(
                'text-base text-white',
                className
            )
        }
        {...rest}
    >
        {children}
    </label>
}

export default Label;