import PageWrapper from '../layout/PageWrapper';
import '../../styles/pages/HomePage.scss';

const techText = `React   TypeScript   JavaScript   HTML   CSS   Vite   SCSS   Redux-Toolkit`;

const HomePage: React.FC = () => {
  return (
    <PageWrapper className="homepage">
      <div className="content">
        <h2>Welcome to My Space</h2>
        <p>Building interactive experiences with modern web technologies.</p>
        <div className="tech-carousel">
          <div className="track">
            <span>
              {techText} • {techText} • {techText}
            </span>
          </div>
        </div>
      </div>
      <p className="scroll-hint">↓ Scroll down ↓</p>
    </PageWrapper>
  );
};

export default HomePage;
