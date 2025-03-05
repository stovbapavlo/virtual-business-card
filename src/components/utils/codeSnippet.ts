const codeSnippet = `import PageWrapper from "../layout/PageWrapper";
import "../../styles/pages/Projects.scss";

const Projects: React.FC = () => {
  const [displayedCode, setDisplayedCode] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < codeSnippet.length) {
        setDisplayedCode((prev) => prev + codeSnippet[index]);
        setIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedCode('');
          setIndex(0);
        }, 2000); 
      }
    }, 50); 

    return () => clearInterval(interval);
  }, [index]);

  return (
    <PageWrapper className="projects">
      <Particles
        className="particles"
        init={loadFull}
        options={{
          particles: {
            number: { value: 50 },
            color: { value: '#00ff99' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
          },
        }}
      />

      <div className="blur-overlay"></div>

      <pre className="code-animation">{displayedCode}</pre>

      <div className="coming-soon">
        <p>Coming Soon...</p>
        <div className="lock">🔒</div>
      </div>
    </PageWrapper>
  );
};

export default Projects;`;

export default codeSnippet;
