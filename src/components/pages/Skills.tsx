import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../layout/PageWrapper';
import '../../styles/pages/Skills.scss';
import SkillInfo from '../SkillInfo';

import reactLogo from '../../assets/img/logos/react.png';
import tsLogo from '../../assets/img/logos/typescript.png';
import jsLogo from '../../assets/img/logos/javascript.png';
import scssLogo from '../../assets/img/logos/sass.png';
import reduxLogo from '../../assets/img/logos/redux.png';

const skills = [
  {
    name: 'React',
    level: 70,
    logo: reactLogo,
    description:
      'I have experience developing web applications using React, including functional components, hooks, context, state management, and routing.',
  },
  {
    name: 'JavaScript',
    level: 80,
    logo: jsLogo,
    description:
      'I have experience with JavaScript, including ES6+ syntax, asynchronous programming, DOM manipulation, and event handling.',
  },
  {
    name: 'SCSS',
    level: 40,
    logo: scssLogo,
    description:
      'I have experience with SCSS for writing modular, maintainable, and scalable styles.',
  },
  {
    name: 'TypeScript',
    level: 45,
    logo: tsLogo,
    description:
      'I have experience with TypeScript in React, improving code quality, enforcing type safety, and reducing runtime errors.',
  },
  {
    name: 'Redux Toolkit',
    level: 25,
    logo: reduxLogo,
    description:
      'Basic experience with Redux Toolkit: state management, slices, createAsyncThunk, useSelector, useDispatch',
  },
];

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<null | (typeof skills)[0]>(null);
  const [isPaused, setIsPaused] = useState(false);
  const rotationRef = useRef(0);
  const [rotation, setRotation] = useState(0);
  const [strokeOffset, setStrokeOffset] = useState(352);

  useEffect(() => {
    let animationFrame: number;
    let lastUpdateTime = performance.now();

    const rotateIcons = (time: number) => {
      if (!isPaused) {
        const deltaTime = time - lastUpdateTime;
        if (deltaTime > 16) {
          rotationRef.current = (rotationRef.current + 1) % 360;
          setRotation(rotationRef.current);
          lastUpdateTime = time;
        }
      }
      animationFrame = requestAnimationFrame(rotateIcons);
    };

    animationFrame = requestAnimationFrame(rotateIcons);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  useEffect(() => {
    if (activeSkill) {
      const maxOffset = 293;
      const progress = (maxOffset * activeSkill.level) / 100;
      setStrokeOffset(maxOffset - progress);
    } else {
      setStrokeOffset(293);
    }
  }, [activeSkill]);

  const handleSkillHover = useCallback((skill: (typeof skills)[0]) => {
    setActiveSkill(skill);
    setIsPaused(true);
  }, []);

  const handleSkillLeave = useCallback(() => {
    setActiveSkill(null);
    setIsPaused(false);
  }, []);

  const skillIcons = useMemo(() => {
    return skills.map((skill, index) => {
      const angle = (360 / skills.length) * index + rotation;
      const radians = (angle * Math.PI) / 180;
      const radius = 180;
      const x = radius * Math.cos(radians);
      const y = radius * Math.sin(radians);

      return (
        <motion.div
          key={skill.name}
          className="skill-icon"
          style={{ left: `calc(43% + ${x}px)`, top: `calc(45% + ${y}px)` }}
          whileHover={{ scale: 1.2 }}
          onMouseEnter={() => handleSkillHover(skill)}
          onMouseLeave={handleSkillLeave}>
          <img src={skill.logo} alt={skill.name} />
        </motion.div>
      );
    });
  }, [rotation, handleSkillHover, handleSkillLeave]);

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
              strokeDasharray="293"
              strokeDashoffset={strokeOffset}
              style={{ opacity: activeSkill ? 1 : 0 }}
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
        {skillIcons}
      </div>
      <SkillInfo skill={activeSkill} />
    </PageWrapper>
  );
};

export default memo(Skills);
