import Container from "../Container";
import DarkModeToggle from "../DarkModeToggle";
import './styles.css';

const NavBar: React.FC = () => {
  return (
    <nav>
      <Container>
        <div className="navbar-wrapper">
          <DarkModeToggle />
        </div>
      </Container>
    </nav>
  )
}

export default NavBar;