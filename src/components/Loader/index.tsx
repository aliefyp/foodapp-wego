import './styles.css'

type LoaderProps = React.HTMLAttributes<HTMLDivElement>

const Loader = (props: LoaderProps) => {
  return (
    <div className="loader" {...props} />
  )
}

export default Loader