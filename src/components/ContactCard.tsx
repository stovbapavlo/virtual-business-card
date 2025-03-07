import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleFlip } from '../store/slices/contactSlice';
import { QRCodeCanvas } from 'qrcode.react';

interface ContactCardProps {
  name: string;
  url: string;
  username: string;
  logo: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, url, username, logo }) => {
  const dispatch = useDispatch();
  const flipped = useSelector((state: RootState) => state.contact.flipped[name] || false);

  const cleanUsername = username.split('-').slice(0, 2).join('-');

  return (
    <div
      className={`contact-card ${flipped ? 'flipped' : ''}`}
      onClick={() => dispatch(toggleFlip(name))}
      title="Click to flip">
      <div className="card-front">
        <img src={logo} alt={name} className="card-logo" />
        <h3>{name}</h3>
        <p>@{cleanUsername}</p>
      </div>
      <div className="card-back">
        <QRCodeCanvas value={`${url}${username}`} size={128} className="qr-code" />
        <p>Scan to connect!</p>
      </div>
    </div>
  );
};

export default ContactCard;
