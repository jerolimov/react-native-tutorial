
import React, { Component } from 'react-native';
import { Provider } from 'react-redux';

import TTTView from './features/ttt/TTTView';

import store from './store';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<TTTView />
			</Provider>
		);
	}
}
