import './Loader.scss'

type LoaderProps = React.HTMLAttributes<HTMLDivElement>

const Loader = ({ className, ...props }: LoaderProps) => {
  return (
    <div className={`gloader ${className || ''}`} data-testid="global-loader" {...props} />
  )
}

export default Loader