import { createSlice, Slice } from '@reduxjs/toolkit';

const initialState = false as Boolean;

const darkmodeSlice: Slice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    toggleDarkmode(state) {
      state.darkmode = !state.darkmode;
    },
  },
});

export const { toggleDarkmode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
