import { motion } from 'framer-motion';
import { pageVariants } from '../motionVariants';
import { useNavigation } from '../hooks/useNavigation';
import '../styles/Projects.scss';

const Projects: React.FC = () => {
  const direction = useNavigation();

  return (
    <motion.div
      className="projects"
      variants={pageVariants}
      initial={direction === 1 ? 'initialDown' : 'initialUp'}
      animate="animate"
      exit={direction === 1 ? 'exitUp' : 'exitDown'}>
      <h2>Projects</h2>
      <p>Here are some of my best projects using React and modern technologies.</p>
    </motion.div>
  );
};

export default Projects;
