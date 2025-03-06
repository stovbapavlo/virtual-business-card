import { motion } from 'framer-motion';

interface SkillInfoProps {
  skill: {
    name: string;
    description: string;
  } | null;
}

const SkillInfo: React.FC<SkillInfoProps> = ({ skill }) => {
  return (
    <motion.div
      className="skill-info"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: skill ? 1 : 0, x: skill ? 0 : -50 }}
      transition={{ duration: 0.3 }}>
      {skill && (
        <>
          <h3>{skill.name}</h3>
          <p>{skill.description}</p>
        </>
      )}
    </motion.div>
  );
};

export default SkillInfo;
