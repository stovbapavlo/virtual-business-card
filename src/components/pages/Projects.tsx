import { useEffect, useState } from 'react';
import PageWrapper from '../layout/PageWrapper';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '../../styles/pages/Projects.scss';
import codeSnippet from '../utils/codeSnippet';

import lock from '../../assets/img/padlock.png';

const Projects: React.FC = () => {
  const [displayedCode, setDisplayedCode] = useState<string>('');

  useEffect(() => {
    let timeout: number;
    let index = 0;

    const displayNextChar = () => {
      if (index < codeSnippet.length) {
        setDisplayedCode((prev) => prev + codeSnippet[index]);
        index++;
        timeout = window.setTimeout(displayNextChar, 50);
      } else {
        setTimeout(() => {
          setDisplayedCode('');
          index = 0;
          displayNextChar();
        }, 2000);
      }
    };

    displayNextChar();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <PageWrapper className="projects">
      <Particles
        className="particles"
        init={loadFull}
        options={{
          particles: {
            number: { value: 80 },
            color: { value: '#00ff99' },
            shape: { type: 'circle' },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1.5, direction: 'none', random: true },
            line_linked: { enable: false },
          },
        }}
      />

      <div className="light-stripes"></div>
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
