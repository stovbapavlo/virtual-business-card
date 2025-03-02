import { motion } from 'framer-motion';
import { pageVariants } from '../motionVariants';
import { useNavigation } from '../hooks/useNavigation';
import '../styles/HomePage.scss';

const HomePage: React.FC = () => {
  const direction = useNavigation();

  return (
    <motion.div
      className="homepage"
      variants={pageVariants}
      initial={direction === 1 ? 'initialDown' : 'initialUp'}
      animate="animate"
      exit={direction === 1 ? 'exitUp' : 'exitDown'}>
      <h2>Hello, I'm Pavlo!</h2>
      <p>Frontend Developer | JavaScript | React</p>
    </motion.div>
  );
};

export default HomePage;
