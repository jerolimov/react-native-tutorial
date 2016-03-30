
import React, { Component, View, Text, Image, TouchableOpacity, NavigationExperimental, StyleSheet } from 'react-native';

const {
	CardStack: NavigationCardStack,
//	Header: NavigationHeader,
	StateUtils: NavigationStateUtils,
	RootContainer: NavigationRootContainer
} = NavigationExperimental;

import ColoredView from './ColoredView';

import colors from '../../shared/colors';

const styles = StyleSheet.create({

});

const reducer = (state, action) => {

	console.log('reducer', state, action);

	switch (action.type) {
		case 'RootContainerInitialAction': {
			const color = colors[parseInt(Math.random() * colors.length)]
			const title = color.toUpperCase();
			return {
				key: 'root',
				index: 0,
				children: [
					{ key: 'route0', color, title }
				]
			};
		}

		case 'push': {
			return NavigationStateUtils.push(state, {
				key: action.key,
				color: action.color,
				title: action.title
			});
		}

		case 'back':
		case 'pop': {
			return NavigationStateUtils.pop(state);
		}

		default:
			return state;
	}
};

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
		return (
			<NavigationRootContainer
				reducer={ reducer }
				ref='navigator'
				renderNavigation={ this.renderNavigation.bind(this) }
			/>
		);
	}

	renderNavigation(navigationState, onNavigate) {
		return (
			<NavigationCardStack
				navigationState={ navigationState }
				onNavigate={ onNavigate }
//				renderOverlay={ this.renderOverlay.bind(this) }
				renderScene={ this.renderScene.bind(this) }
			/>
		);
	}

/*
	renderOverlay(props) {
		return (
			<NavigationHeader { ...props }
				renderTitleComponent={ this.renderTitleComponent.bind(this) }
			/>
		);
	}

	renderTitleComponent(props) {
		return (
			<NavigationHeader.Title>
				{'hallo'}
			</NavigationHeader.Title>
		);
	}
*/

	renderScene(props) {
		console.log('renderScene', props.scene.navigationState);
		return (
			<ColoredView
				{ ...props.scene.navigationState }
				onPress={ () => {
					const color = colors[parseInt(Math.random() * colors.length)]
					const title = color.toUpperCase();
					props.onNavigate({
						type: 'push',
						key: 'route' + props.scenes.length,
						color,
						title
					});
				} }
			/>
		);
	}
}
