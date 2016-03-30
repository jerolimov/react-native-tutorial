
import { combineReducers } from 'redux';

import TTTReducer from '../features/ttt/TTTReducer';

export default combineReducers({
	ttt: TTTReducer
});
