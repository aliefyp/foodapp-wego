import Container from "../Container/Container";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import './NavBar.scss';

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