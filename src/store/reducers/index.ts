import { RootState } from '#store/store';
import { AnyAction, CombinedState, combineReducers, Reducer } from 'redux';
import darkmode from './darkmode';

const rootReducer: Reducer<CombinedState<RootState>, AnyAction> = combineReducers<Reducer>({
  darkmode,
});

export default rootReducer;
