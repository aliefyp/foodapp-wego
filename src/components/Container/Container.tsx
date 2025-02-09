import './Container.scss';

interface ContainerProps {
  children: React.ReactNode
}

/**
 * A container component that wraps its children in a div with class 'gcontainer'
 * This component is intended to be used to wrap the main content of the page
 * @example
 * <Container>
 *   <h1>Hello, World!</h1>
 * </Container>
 * 
 * @param {React.ReactNode} children The content of the container.
 * @returns {React.ReactElement} A div with class 'gcontainer' containing the children.
 */
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="gcontainer">
      {children}
    </div>
  );
}

export default Container