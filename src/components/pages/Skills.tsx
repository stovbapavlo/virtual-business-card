import { useState, useEffect, useRef } from 'react';
import { motion, animate } from 'framer-motion';
import PageWrapper from '../layout/PageWrapper';
import '../../styles/pages/Skills.scss';

import reactLogo from '../../assets/img/logos/react.png';
import tsLogo from '../../assets/img/logos/typescript.png';
import jsLogo from '../../assets/img/logos/javascript.png';
import scssLogo from '../../assets/img/logos/sass.png';
import reduxLogo from '../../assets/img/logos/redux.png';

const skills = [
  { name: 'React', level: 90, logo: reactLogo },
  { name: 'TypeScript', level: 85, logo: tsLogo },
  { name: 'JavaScript', level: 80, logo: jsLogo },
  { name: 'SCSS', level: 75, logo: scssLogo },
  { name: 'Redux Toolkit', level: 80, logo: reduxLogo },
];

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<null | (typeof skills)[0]>(null);
  const [isPaused, setIsPaused] = useState(false);
  const rotationRef = useRef(0);
  const progressRef = useRef(314);
  const [rotation, setRotation] = useState(0);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const rotateIcons = () => {
      if (!isPaused) {
        rotationRef.current = (rotationRef.current + 1) % 360;
        setRotation(rotationRef.current);
      }
      animationFrame = requestAnimationFrame(rotateIcons);
    };
    animationFrame = requestAnimationFrame(rotateIcons);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  useEffect(() => {
    if (activeSkill) {
      const newOffset = 352 - (352 * activeSkill.level) / 100;
      console.log(`Setting progress bar offset: ${newOffset}`);
      animate(progressRef.current, newOffset, {
        duration: 1.2,
        ease: 'easeInOut',
        onUpdate: (latest) => {
          progressRef.current = latest;
          forceUpdate((prev) => prev + 1);
        },
      });
    } else {
      progressRef.current = 352;
      forceUpdate((prev) => prev + 1);
    }
  }, [activeSkill]);

  const handleSkillHover = (skill: (typeof skills)[0]) => {
    setActiveSkill(skill);
    setIsPaused(true);
  };

  const handleSkillLeave = () => {
    setActiveSkill(null);
    setIsPaused(false);
  };

  return (
    <PageWrapper className="skills">
      <div className="skills-wheel">
        <div className="center-circle" onClick={handleSkillLeave}>
          <svg className="progress-ring" width="220" height="220" viewBox="0 0 120 120">
            <circle className="progress-background" cx="60" cy="60" r="56" />
            <circle
              className="progress-bar"
              cx="60"
              cy="60"
              r="56"
              strokeDasharray="352"
              strokeDashoffset={progressRef.current}
            />
          </svg>

          {activeSkill ? (
            <motion.img
              key={activeSkill.name}
              src={activeSkill.logo}
              alt={activeSkill.name}
              className="active-skill-logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <motion.p
              key="skills-text"
              initial={{ opacity: 1 }}
              animate={{ opacity: activeSkill ? 0 : 1 }}
              transition={{ duration: 0.3 }}>
              Skills
            </motion.p>
          )}
        </div>

        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index + rotation;
          const radians = (angle * Math.PI) / 180;
          const radius = 180;
          const x = radius * Math.cos(radians);
          const y = radius * Math.sin(radians);

          return (
            <motion.div
              key={skill.name}
              className="skill-icon"
              style={{
                left: `calc(43% + ${x}px)`,
                top: `calc(45% + ${y}px)`,
              }}
              whileHover={{ scale: 1.2 }}
              onMouseEnter={() => handleSkillHover(skill)}
              onMouseLeave={handleSkillLeave}>
              <img src={skill.logo} alt={skill.name} />
            </motion.div>
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default Skills;
