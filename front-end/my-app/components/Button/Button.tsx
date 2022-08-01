import React, { forwardRef, ForwardedRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { ButtonType, ButtonProps } from './interface';

export const Button: ForwardRefExoticComponent<
    ButtonProps & RefAttributes<HTMLButtonElement>
> = forwardRef(
    (
        { children, className, icon, ...props }: ButtonProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => {
        return (
            <button
                className=
                'flex font-mitr items-center rounded-[40px] h-[40px] py-[10px] px-[20px] justify-center disabled:opacity-30'
                ref={ref}
                {...props}
            >
                <div className='flex items-center'>
                    {icon && <div className='mr-[10px]'>{icon}</div>}
                    {children}
                </div>
            </button>
        )
    }
)