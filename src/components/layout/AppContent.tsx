import { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavigationButtons from './NavigationButtons';
import SectionsContainer from './SectionsContainer';
import '../../styles/global.scss';

const AppContent: React.FC = () => {
  const [isSupportedResolution, setIsSupportedResolution] = useState(true);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkResolution = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsSupportedResolution(width >= 1024 && width <= 1920 && height >= 700);
    };

    checkResolution();
    window.addEventListener('resize', checkResolution);
    return () => window.removeEventListener('resize', checkResolution);
  }, []);

  if (!isSupportedResolution) {
    return <div className="resolution-warning">Your screen resolution is not supported.</div>;
  }

  return (
    <div className="app">
      <Header sectionRefs={sectionRefs} />
      <NavigationButtons sectionRefs={sectionRefs} />
      <SectionsContainer sectionRefs={sectionRefs} />
      <Footer />
    </div>
  );
};

export default AppContent;
