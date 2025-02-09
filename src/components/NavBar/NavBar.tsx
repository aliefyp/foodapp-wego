import Container from "../Container/Container";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import './NavBar.scss';

/**
 * A React component that renders a navigation bar.
 * 
 * This component uses the `Container` component to center its content and
 * provides a simple navigation bar with a `DarkModeToggle` component.
 * 
 * @returns A React component that represents a navigation bar.
 */
const NavBar: React.FC = () => {
  return (
    <nav>
      <Container>
        <div className="navbar">
          <DarkModeToggle />
        </div>
      </Container>
    </nav>
  )
}

export default NavBar;