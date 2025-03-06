import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { navigateUp, navigateDown } from '../../store/slices/navigationSlice';
import '../../styles/layout/NavigationButtons.scss';
import up from '../../assets/img/up-arrow.png';
import down from '../../assets/img/down-arrow.png';

interface Props {
  sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const NavigationButtons: React.FC<Props> = ({ sectionRefs }) => {
  const dispatch = useDispatch();
  const currentSection = useSelector((state: RootState) => state.navigation.currentSection);

  const handleScrollToSection = (index: number) => {
    if (!sectionRefs.current || !sectionRefs.current[index]) return;
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUpClick = () => {
    if (currentSection > 0) {
      dispatch(navigateUp());
      setTimeout(() => {
        handleScrollToSection(currentSection - 1);
        if (currentSection - 1 === 0) {
          setTimeout(() => window.scrollBy({ top: 0, behavior: 'smooth' }), 500);
        }
      }, 100);
    }
  };

  const handleDownClick = () => {
    if (!sectionRefs.current) return;
    if (currentSection < sectionRefs.current.length - 1) {
      dispatch(navigateDown());
      setTimeout(() => handleScrollToSection(currentSection + 1), 100);
    }
  };

  return (
    <div className="navigation-buttons">
      <button className="nav-button" onClick={handleUpClick} disabled={currentSection === 0}>
        <img src={up} alt="arrow-up" />
      </button>
      <button
        className="nav-button"
        onClick={handleDownClick}
        disabled={currentSection === sectionRefs.current.length - 1}>
        <img src={down} alt="arrow-down" />
      </button>
    </div>
  );
};

export default NavigationButtons;
