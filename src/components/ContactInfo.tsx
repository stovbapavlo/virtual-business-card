import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCopiedField } from '../store/slices/contactSlice';
import emailIcon from '../assets/img/email.png';
import phoneIcon from '../assets/img/phone.png';

const contacts = [
  { id: 'email', label: 'stovbapavlo@gmail.com', icon: emailIcon },
  { id: 'phone', label: '+380970690400', icon: phoneIcon },
];

const ContactInfo: React.FC = () => {
  const dispatch = useDispatch();
  const copiedField = useSelector((state: RootState) => state.contact.copiedField);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    dispatch(setCopiedField(field));
    setTimeout(() => dispatch(setCopiedField(null)), 1200);
  };

  return (
    <div className="contact-info">
      <h3>Contact</h3>
      <div className="info-card">
        {contacts.map(({ id, label, icon }) => (
          <div key={id} className="clickable-container" onClick={() => copyToClipboard(label, id)}>
            <img src={icon} alt={id} className="contact-icon" />
            <p className="clickable">{label}</p>
            {copiedField === id && <div className="copied-notification visible">Copied!</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
