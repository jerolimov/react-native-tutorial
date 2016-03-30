
import React, { Component, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
	button: {
		padding: 16,
		borderWidth: 2,
		borderColor: '#53c5ff',
		borderRadius: 10,
		backgroundColor: 'white'
	},
	text: {
		textAlign: 'center',
		fontSize: 22,
		fontWeight: 'bold',
		color: 'black'
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
