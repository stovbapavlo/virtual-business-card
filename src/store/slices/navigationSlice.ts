import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  direction: number;
  prevRoute: string;
  currentSection: number;
}

const initialState: NavigationState = {
  direction: 1,
  prevRoute: window.location.pathname,
  currentSection: 0,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentSection: (state, action: PayloadAction<number>) => {
      state.currentSection = action.payload;
    },
    navigateUp: (state) => {
      if (state.currentSection > 0) state.currentSection -= 1;
    },
    navigateDown: (state) => {
      if (state.currentSection < 4) state.currentSection += 1;
    },
  },
});

export const { setCurrentSection, navigateUp, navigateDown } = navigationSlice.actions;
export default navigationSlice.reducer;
