import './Loader.scss'

type LoaderProps = React.HTMLAttributes<HTMLDivElement>

/**
 * A full-screen loading animation component.
 *
 * @example
 * <Loader />
 *
 * @prop {string} [className] - Additional class names to add to the outer div.
 * @prop {React.HTMLAttributes<HTMLDivElement>} ...props - Additional props to pass to the outer div.
 *
 * @returns {React.ReactElement} A React component that renders a full-screen loading animation.
 */
const Loader = ({ className, ...props }: LoaderProps) => {
  return (
    <div className={`gloader ${className || ''}`} data-testid="global-loader" {...props} />
  )
}

export default Loader