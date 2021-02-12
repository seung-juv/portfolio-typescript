import { createSlice, Slice } from '@reduxjs/toolkit';

type DarkmodeState = Boolean;

const initialState = false as DarkmodeState;

const darkmodeSlice: Slice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    toggleDarkmode(state: DarkmodeState) {
      return !state;
    },
  },
});

export const { toggleDarkmode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
