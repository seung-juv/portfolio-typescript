import { configureStore, createSlice } from '@reduxjs/toolkit';

const portfolio = createSlice({
  name: 'darkmode',
  initialState: false,
  reducers: {
    toggleDarkmode: state => {
      state = !state;
    },
  },
});

export const { toggleDarkmode } = portfolio.actions;

export default configureStore({ reducer: portfolio.reducer });
