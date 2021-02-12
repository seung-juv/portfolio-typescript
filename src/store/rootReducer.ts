import { combineReducers } from 'redux';
import darkmodeReducer from './features/darkmode/darkmodeSlice';

const rootReducer = combineReducers({
  darkmode: darkmodeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
