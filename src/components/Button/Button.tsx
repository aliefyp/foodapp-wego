import React from "react";
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "primary" | "secondary";
}

/**
 * A button component that can be used to perform an action.
 *
 * @example
 * <Button>Click me!</Button>
 * <Button variant="secondary">Click me!</Button>
 * <Button startIcon={<HiOutlineSun />}>Click me!</Button>
 * <Button endIcon={<HiOutlineMoon />}>Click me!</Button>
 *
 * @param {React.ReactNode} [children] The content of the button.
 * @param {"primary" | "secondary"} [variant="primary"] The color variant of the button.
 * @param {string} [className] Additional class names to apply to the button.
 * @param {React.ReactNode} [startIcon] The icon to display at the start of the button.
 * @param {React.ReactNode} [endIcon] The icon to display at the end of the button.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} [rest] Additional props to apply to the button.
 */
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