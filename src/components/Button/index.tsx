import React from "react";
import './styles.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant: "primary" | "secondary";
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
    <button className={`button-wrapper ${variant} ${className}`} {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}

export default Button