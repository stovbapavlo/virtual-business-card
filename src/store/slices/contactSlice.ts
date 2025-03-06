import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactState {
  flipped: Record<string, boolean>;
  copiedField: string | null;
}

const initialState: ContactState = {
  flipped: {},
  copiedField: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    toggleFlip: (state, action: PayloadAction<string>) => {
      state.flipped[action.payload] = !state.flipped[action.payload];
    },
    setCopiedField: (state, action: PayloadAction<string | null>) => {
      state.copiedField = action.payload;
    },
  },
});

export const { toggleFlip, setCopiedField } = contactSlice.actions;
export default contactSlice.reducer;
