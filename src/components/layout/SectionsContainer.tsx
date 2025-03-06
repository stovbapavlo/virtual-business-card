import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSection } from '../../store/slices/navigationSlice';
import HomePage from '../pages/HomePage';
import AboutMe from '../pages/AboutMe';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contacts from '../pages/Contacts';

interface Props {
  sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const SectionsContainer: React.FC<Props> = ({ sectionRefs }) => {
  const dispatch = useDispatch();
  const sections = useMemo(() => [HomePage, AboutMe, Skills, Projects, Contacts], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const index = sectionRefs.current.findIndex((ref) => ref === visibleSection.target);
          if (index !== -1) dispatch(setCurrentSection(index));
        }
      },
      { threshold: 0.6 },
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [dispatch, sectionRefs]);

  return (
    <div className="content">
      {sections.map((Component, index) => (
        <div
          key={index}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          className="section">
          <Component />
        </div>
      ))}
    </div>
  );
};

export default SectionsContainer;
