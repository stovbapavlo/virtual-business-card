import '../../styles/layout/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Pavlo Stovba | Frontend Developer</p>
    </footer>
  );
};

export default Footer;
