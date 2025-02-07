import './Loader.scss'

type LoaderProps = React.HTMLAttributes<HTMLDivElement>

const Loader = (props: LoaderProps) => {
  return (
    <div className="gloader" {...props} />
  )
}

export default Loader