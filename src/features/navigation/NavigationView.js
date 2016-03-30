
import React, { Component, View, Text, Image, TouchableOpacity, NavigatorIOS, StyleSheet } from 'react-native';

import ColoredView from './ColoredView';

import colors from '../../shared/colors';
import images from '../../shared/images';

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	itemWrapper: {
		paddingTop: 64
	}
});

export default class NavigationView extends Component {
	popView() {
		this.refs.navigator.pop()
	}

	pushRandomColoredView() {
		const color = colors[parseInt(Math.random() * colors.length)]
		const title = color.toUpperCase();
		this.refs.navigator.push({
			component: ColoredView,
			title,
			passProps: {
				color,
				onPress: this.pushRandomColoredView.bind(this)
			}
		});
	}

	render() {
		const initialRoute = {
			component: ColoredView,
			title: 'ROOT',
			passProps: {
				color: 'gray',
				onPress: this.pushRandomColoredView.bind(this)
			}
		};

		return (
			<NavigatorIOS ref='navigator'
				initialRoute={ initialRoute }
				style={ styles.container }
				itemWrapperStyle={ styles.itemWrapper }
			/>
		);
	}
}
