
import React, { Component, View, Text, Image, TouchableOpacity, Navigator, StyleSheet } from 'react-native';

import BackIcon from './images/ic_chevron_left_black_48dp.png';

const COLORS = [ 'red', 'green', 'blue', 'green', 'yellow', 'orange', 'pink' ];

const styles = StyleSheet.create({
	navigationBar: {
		backgroundColor: '#B0BEC5'
	},
	navigationBarTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		margin: 10
	},
	navigationBackButtonIcon: {
		marginTop: -4,
		left: 8,
		width: 20,
		tintColor: '#0277BD'
	},
	navigationBackButtonTitle: {
		fontSize: 16,
		margin: 10,
		color: '#0277BD'
	}
});

class RandomColorScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			randomColor: COLORS[parseInt(Math.random() * COLORS.length)]
		}
	}

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: this.state.randomColor }}>
				<TouchableOpacity onPress={ this.props.onPress }>
					<Text>Touch me!</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default class NavigationView extends Component {
	popView() {
		this.refs.navigator.pop()
	}

	pushRandomColorScreen() {
		this.refs.navigator.push({ title: 'Next', type: 'randomColorScreen' });
	}

	render() {
		const routeMapper = {
			Title: this.getTitle.bind(this),
			LeftButton: this.getLeftButton.bind(this),
			RightButton: () => {}
		};

		return <Navigator ref='navigator'
						initialRoute={ { title: 'Root', type: 'randomColorScreen' } }
						navigationBar={
							<Navigator.NavigationBar
								routeMapper={ routeMapper }
								style={ styles.navigationBar }
							/>
						}
						renderScene={ this.renderScene.bind(this) }
						sceneStyle={{ paddingTop: 64 }} />
	}

	renderScene(route, navigator) {
		if (route.type === 'randomColorScreen') {
			return <RandomColorScreen onPress={ this.pushRandomColorScreen.bind(this) } />;
		}
	}

	getTitle(route, navigator, index, navState) {
		console.log('route', route);
		const title = route && route.title;

		if (title) {
			return (
				<Text style={ styles.navigationBarTitle }>
					{ title }
				</Text>
			);
		}
	}

	getLeftButton(route, navigator, index, navState) {
		const previousRoute = index > 0 ? navState.routeStack[index - 1] : null;
		const backTitle = previousRoute && (previousRoute.title || 'Back');

		if (backTitle) {
			return (
				<TouchableOpacity onPress={ this.popView.bind(this) } style={{ flexDirection: 'row' }}>
					<Image source={ BackIcon } style={ styles.navigationBackButtonIcon } />
					<Text style={ styles.navigationBackButtonTitle }>
						{ backTitle }
					</Text>
				</TouchableOpacity>
			);
		}
	}
}
