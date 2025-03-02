import { motion } from 'framer-motion';
import { pageVariants } from '../motionVariants';
import { useNavigation } from '../hooks/useNavigation';
import '../styles/Contacts.scss';

const Contacts: React.FC = () => {
  const direction = useNavigation();

  return (
    <motion.div
      className="contacts"
      variants={pageVariants}
      initial={direction === 1 ? 'initialDown' : 'initialUp'}
      animate="animate"
      exit={direction === 1 ? 'exitUp' : 'exitDown'}>
      <h2>Contacts</h2>
      <p>Feel free to reach out to me via email or social media!</p>
    </motion.div>
  );
};

export default Contacts;
