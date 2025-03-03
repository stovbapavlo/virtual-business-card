import PageWrapper from '../layout/PageWrapper';
import '../../styles/pages/AboutMe.scss';
import avatar from '../../assets/img/avatar.jpg';

const AboutMe: React.FC = () => {
  return (
    <PageWrapper className="about-me">
      <div className="profile">
        <div className="profile-picture">
          <img src={avatar} alt="Profile" />
        </div>
        <h2>About Me</h2>
        <p>
          Hi, I'm Pavlo – a Frontend Developer focused on writing clean, efficient, and scalable
          code. I bring UI/UX to life with animations and interactivity and am always looking for
          new challenges to push my skills further.
        </p>
        <p>
          I’m constantly learning, whether through online courses, open-source contributions, or
          experimenting with new tech.
        </p>
        <h4>You can say a lot, but nothing speaks louder than actions.</h4>
        <div className="github-activity">
          <img src="https://ghchart.rshah.org/stovbapavlo" alt="GitHub Activity Chart" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutMe;
