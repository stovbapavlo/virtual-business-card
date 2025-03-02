import { motion } from 'framer-motion';
import { pageVariants } from '../motionVariants';
import { useNavigation } from '../hooks/useNavigation';
import '../styles/Skills.scss';

const Skills: React.FC = () => {
  const direction = useNavigation();

  return (
    <motion.div
      className="skills"
      variants={pageVariants}
      initial={direction === 1 ? 'initialDown' : 'initialUp'}
      animate="animate"
      exit={direction === 1 ? 'exitUp' : 'exitDown'}>
      <h2>Skills</h2>
      <p>React, TypeScript, SCSS, Redux Toolkit, Framer Motion, Vite</p>
    </motion.div>
  );
};

export default Skills;
