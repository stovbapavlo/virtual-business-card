import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './slices/navigationSlice';
import contactReducer from './slices/contactSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
