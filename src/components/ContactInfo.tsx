import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCopiedField } from '../store/slices/contactSlice';
import emailIcon from '../assets/img/email.png';
import phoneIcon from '../assets/img/phone.png';

const ContactInfo: React.FC = () => {
  const dispatch = useDispatch();
  const copiedField = useSelector((state: RootState) => state.contact.copiedField);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    dispatch(setCopiedField(field));
    setTimeout(() => dispatch(setCopiedField(null)), 1800);
  };

  return (
    <div className="contact-info">
      <h3>Contact</h3>
      <div className="info-card">
        <div
          className="clickable-container"
          onClick={() => copyToClipboard('your-email@example.com', 'email')}>
          <img src={emailIcon} alt="Email" className="contact-icon" />
          <p className="clickable">your-email@example.com</p>
          {copiedField === 'email' && <div className="copied-notification visible">Copied!</div>}
        </div>

        <div
          className="clickable-container"
          onClick={() => copyToClipboard('+1234567890', 'phone')}>
          <img src={phoneIcon} alt="Phone" className="contact-icon" />
          <p className="clickable">+1234567890</p>
          {copiedField === 'phone' && <div className="copied-notification visible">Copied!</div>}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
