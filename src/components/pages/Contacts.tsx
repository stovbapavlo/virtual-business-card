import PageWrapper from '../layout/PageWrapper';
import '../../styles/pages/Contacts.scss';
import ContactCard from '../../components/ContactCard';
import ContactInfo from '../../components/ContactInfo';
import { socialLinks } from '../utils/socialLinks';

const Contacts: React.FC = () => {
  return (
    <PageWrapper className="contacts">
      <h2 className="contacts-title">Looking forward to connecting with you!</h2>
      <p className="contacts-description">
        Feel free to reach out through any of the platforms below!
      </p>

      <div className="contacts-grid">
        <div className="cards-container">
          {socialLinks.map((link) => (
            <ContactCard key={link.name} {...link} />
          ))}
        </div>
      </div>

      <ContactInfo />
    </PageWrapper>
  );
};

export default Contacts;
