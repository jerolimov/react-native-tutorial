
import React, { Alert, Component, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#eee'
	},
	button: {
		margin: 16,
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

export default class App extends Component {
	render() {
		return (
			<View style={ styles.container }>
				<TouchableOpacity onPress={ () => Alert.alert('Button pressed!') } style={ styles.button }>
					<Text style={ styles.text }>Hello world !!!</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
