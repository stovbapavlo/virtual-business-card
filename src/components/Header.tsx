import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "../styles/Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Virtual Business Card</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About me</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
