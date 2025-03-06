import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ThemeToggle from './ThemeToggle';
import '../../styles/layout/Header.scss';

const sections = ['Home', 'About me', 'Skills', 'Projects', 'Contacts'];

interface Props {
  sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const Header: React.FC<Props> = ({ sectionRefs }) => {
  const currentSection = useSelector((state: RootState) => state.navigation.currentSection);

  const handleScrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <h1>Virtual Business Card</h1>
      <nav>
        {sections.map((name, index) => (
          <button
            key={index}
            onClick={() => handleScrollToSection(index)}
            className={currentSection === index ? 'active' : ''}>
            {name}
          </button>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
