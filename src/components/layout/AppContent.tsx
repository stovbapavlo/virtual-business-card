import Header from './Header';
import Footer from './Footer';
import NavigationButtons from './NavigationButtons';
import SectionsContainer from './SectionsContainer';
import { useRef } from 'react';
import '../../styles/global.scss';

const AppContent: React.FC = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
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
