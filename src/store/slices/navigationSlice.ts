// store/slices/navigationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { routes } from '../../routesConfig';

interface NavigationState {
  direction: number;
  prevRoute: string;
  currentIndex: number;
}

const initialState: NavigationState = {
  direction: 1,
  prevRoute: window.location.pathname,
  currentIndex: routes.indexOf(window.location.pathname),
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    updateDirection: (state, action: PayloadAction<string>) => {
      const currentIndex = routes.indexOf(action.payload);
      const prevIndex = routes.indexOf(state.prevRoute);

      if (currentIndex > prevIndex) {
        state.direction = 1;
      } else if (currentIndex < prevIndex) {
        state.direction = -1;
      }

      state.prevRoute = action.payload;
      state.currentIndex = currentIndex;
    },
    navigateUp: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
        state.direction = -1;
      }
    },
    navigateDown: (state) => {
      if (state.currentIndex < routes.length - 1) {
        state.currentIndex += 1;
        state.direction = 1;
      }
    },
  },
});

export const { updateDirection, navigateUp, navigateDown } = navigationSlice.actions;
export default navigationSlice.reducer;
