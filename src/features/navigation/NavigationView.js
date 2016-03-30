
import React, { Component, View, Text, Image, TouchableOpacity, Navigator, StyleSheet } from 'react-native';

import ColoredView from './ColoredView';

import colors from '../../shared/colors';
import images from '../../shared/images';

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

export default class NavigationView extends Component {
	popView() {
		this.refs.navigator.pop()
	}

	pushRandomColoredView() {
		const color = colors[parseInt(Math.random() * colors.length)]
		const title = color.toUpperCase();
		this.refs.navigator.push({ type: 'coloredView', color, title });
	}

	render() {
		const routeMapper = {
			Title: this.getTitle.bind(this),
			LeftButton: this.getLeftButton.bind(this),
			RightButton: () => null
		};

		return (
			<Navigator ref='navigator'
				initialRoute={ { type: 'coloredView', color: 'gray', title: 'ROOT' } }
				navigationBar={
					<Navigator.NavigationBar
						routeMapper={ routeMapper }
						style={ styles.navigationBar }
					/>
				}
				renderScene={ this.renderScene.bind(this) }
				sceneStyle={{ paddingTop: 64 }}
			/>
		);
	}

	renderScene(route, navigator) {
		// Normally we should check the route.type here!
		return (
			<ColoredView color={ route.color } onPress={ this.pushRandomColoredView.bind(this) } />
		);
	}

	getTitle(route, navigator, index, navState) {
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
					<Image source={ images.BackIcon } style={ styles.navigationBackButtonIcon } />
					<Text style={ styles.navigationBackButtonTitle }>
						{ backTitle }
					</Text>
				</TouchableOpacity>
			);
		}
	}
}
