import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { navigateUp, navigateDown } from '../store/slices/navigationSlice';
import { useNavigate } from 'react-router-dom';
import { routes } from '../routesConfig';
import '../styles/NavigationButtons.scss';
import up from '../assets/img/up-arrow.png';
import down from '../assets/img/down-arrow.png';

const NavigationButtons: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentIndex = useSelector((state: RootState) => state.navigation.currentIndex);

  const handleUpClick = () => {
    if (currentIndex > 0) {
      dispatch(navigateUp());
      navigate(routes[currentIndex - 1]);
    }
  };

  const handleDownClick = () => {
    if (currentIndex < routes.length - 1) {
      dispatch(navigateDown());
      navigate(routes[currentIndex + 1]);
    }
  };

  return (
    <div className="navigation-buttons">
      <button className="nav-button" onClick={handleUpClick} disabled={currentIndex === 0}>
        <img src={up} alt="arrow-up" />
      </button>
      <button
        className="nav-button"
        onClick={handleDownClick}
        disabled={currentIndex === routes.length - 1}>
        <img src={down} alt="arrow-down" />
      </button>
    </div>
  );
};

export default NavigationButtons;
