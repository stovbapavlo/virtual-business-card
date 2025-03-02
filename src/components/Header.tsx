import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../styles/Header.scss';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Virtual Business Card</h1>
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About me
        </Link>
        <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>
          Skills
        </Link>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
          Projects
        </Link>
        <Link to="/contacts" className={location.pathname === '/contacts' ? 'active' : ''}>
          Contacts
        </Link>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
