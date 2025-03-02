import { motion } from 'framer-motion';
import { pageVariants } from '../motionVariants';
import { useNavigation } from '../hooks/useNavigation';
import '../styles/AboutMe.scss';

const AboutMe: React.FC = () => {
  const direction = useNavigation();

  return (
    <motion.div
      className="about-me"
      variants={pageVariants}
      initial={direction === 1 ? 'initialDown' : 'initialUp'}
      animate="animate"
      exit={direction === 1 ? 'exitUp' : 'exitDown'}>
      <h2>About Me</h2>
      <p>I am a Frontend Developer with a passion for creating modern web applications.</p>
    </motion.div>
  );
};

export default AboutMe;
