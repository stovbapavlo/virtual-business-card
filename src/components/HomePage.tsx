import { motion } from "framer-motion";
import "../styles/HomePage.scss";

const HomePage: React.FC = () => {
  return (
    <motion.div className="homepage" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Hello, I'm Pavlo!</h2>
      <p>Frontend Developer | JavaScript | React</p>
    </motion.div>
  );
};

export default HomePage;
