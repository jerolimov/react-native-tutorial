
import React, { Component, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});

export default class ColoredView extends Component {
	render() {
		return (
			<View style={[ styles.container, { backgroundColor: this.props.color }]}>
				<TouchableOpacity onPress={ this.props.onPress }>
					<Text style={ styles.text }>Touch me!</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
