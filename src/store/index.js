
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, bindActionCreators, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';

import thunkMiddleware from 'redux-thunk';

import actions from './actions';
import reducer from './reducers';

let middlewares = [
	thunkMiddleware
];

const enhancers = [
	applyMiddleware(...middlewares),
	autoRehydrate(),
];

const store = createStore(reducer, compose(...enhancers));

setTimeout(() => {
	const persistant = persistStore(store, { storage: AsyncStorage }, (err, restoredState) => {
		if (err) {
			console.error('Error while rehydrate app state:', err);
		}
	});

	// Keep for testing and remove outdated data.
	//persistant.purge([ 'ttt' ]);
	//persistant.purgeAll();
}, 1000);

if (module.hot) {
	module.hot.accept(() => {
		console.log('Reload reducer!');
		store.replaceReducer(require('./reducers').default);
	});
}

export default store;
