import React from "react";
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  startIcon,
  endIcon,
  ...rest
}) => {
  return (
    <button className={`gbtn ${variant && `gbtn--${variant}`} ${className || ''}`} {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}

export default Button