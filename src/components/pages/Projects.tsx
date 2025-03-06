import { useEffect, useState, useRef } from 'react';
import PageWrapper from '../layout/PageWrapper';
import '../../styles/pages/Projects.scss';
import codeSnippet from '../utils/codeSnippet';
import lock from '../../assets/img/padlock.png';

const Projects: React.FC = () => {
  const [displayedCode, setDisplayedCode] = useState<string>('');
  const indexRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const displayNextChar = () => {
      if (indexRef.current < codeSnippet.length) {
        setDisplayedCode((prev) => prev + codeSnippet[indexRef.current]);
        indexRef.current++;
        timeoutRef.current = window.setTimeout(displayNextChar, 50);
      } else {
        timeoutRef.current = window.setTimeout(() => {
          setDisplayedCode('');
          indexRef.current = 0;
          displayNextChar();
        }, 2000);
      }
    };

    displayNextChar();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <PageWrapper className="projects">
      <div className="blur-overlay"></div>

      <pre className="code-animation">{displayedCode}</pre>

      <div className="coming-soon">
        <img src={lock} alt="Lock" className="lock" />
        <p>Coming Soon...</p>
      </div>
    </PageWrapper>
  );
};

export default Projects;
