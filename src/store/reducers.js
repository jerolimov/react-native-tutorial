
import { combineReducers } from 'redux';

import { REHYDRATE } from 'redux-persist/constants';

import TTTReducer from '../features/ttt/TTTReducer';

export function AppReducer(state = {}, action) {
	if (action.type === REHYDRATE) {
		return { ...state, initialized: true };
	} else {
		return state;
	}
}

export default combineReducers({
	app: AppReducer,
	ttt: TTTReducer
});
