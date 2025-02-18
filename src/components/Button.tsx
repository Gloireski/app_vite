import { ButtonHTMLAttributes, ReactNode } from "react";
import "../App.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <button {...props} >{children}</button>;
}
export default Button;