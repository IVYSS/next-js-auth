export type ButtonType = 'submit' | 'button' | 'reset'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type: ButtonType
    className?: string
    icon?: React.ReactNode
    c?: React.ReactNode
}