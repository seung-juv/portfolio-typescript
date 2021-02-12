import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';
import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: [...getDefaultMiddleware()],
});

export type AppStore = typeof store;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

const makeStore: MakeStore<RootState> = () => store;

export const wrapper = createWrapper<RootState>(makeStore);
