import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { updateDirection } from '../store/slices/navigationSlice';
import { useLocation } from 'react-router-dom';

export const useNavigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const directionFromRedux = useSelector((state: RootState) => state.navigation.direction);

  const [direction, setDirection] = useState(directionFromRedux);

  useEffect(() => {
    dispatch(updateDirection(location.pathname));
  }, [location.pathname, dispatch]);

  useEffect(() => {
    setDirection(directionFromRedux);
  }, [directionFromRedux]);

  return direction;
};
