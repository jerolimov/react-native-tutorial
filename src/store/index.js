
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, bindActionCreators, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';

import actions from './actions';
import reducer from './reducers';

let middlewares = [
	thunkMiddleware
];

const enhancers = [
	applyMiddleware(...middlewares)
];

const store = createStore(reducer, compose(...enhancers));

if (module.hot) {
	module.hot.accept(() => {
		console.log('Reload reducer!');
		store.replaceReducer(require('./reducers').default);
	});
}

export default store;
