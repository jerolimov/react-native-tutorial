
import React, { Component, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
	button: {
		padding: 16,
		backgroundColor: '#53c5ff'
	},
	text: {
		textAlign: 'center',
		fontSize: 22,
		fontWeight: 'bold',
		color: 'white'
	}
});

export default class Button extends Component {
	render() {
		return (
			<TouchableOpacity style={[ styles.button, this.props.style ]} onPress={ this.props.onPress }>
				<Text style={ styles.text }>{ this.props.label }</Text>
			</TouchableOpacity>
		);
	}
}
