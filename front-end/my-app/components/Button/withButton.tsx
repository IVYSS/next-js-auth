import React, { ForwardedRef, forwardRef } from "react";
import { ButtonProps, ButtonType } from './interface';


//  FC Function Component
export function withButton(Component: React.FC<any>) {
    const WithButton = forwardRef(
        (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
            return <Component {...props} ref={ref} />
        }
    )

    WithButton.defaultProps = {
        type: 'button' as ButtonType,
        className: '',
        icon: null,
    }
}
