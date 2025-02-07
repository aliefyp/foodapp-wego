import './Container.scss';

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="gcontainer">
      {children}
    </div>
  );
}

export default Container