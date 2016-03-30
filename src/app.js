
import React, { Alert, Component, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
//		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'gray'
	},
	textContainer: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white'
	}
});

export default class App extends Component {
	render() {
		return (
			<View style={ styles.container }>
				<View style={[ styles.textContainer, { height: 44, backgroundColor: 'red' }]}>
					<Text style={ styles.text }>44 pt</Text>
				</View>
				<View style={[ styles.textContainer, { flex: 0.1234, backgroundColor: 'blue' }]}>
					<Text style={ styles.text }>50 %</Text>
				</View>
				<View style={[ styles.textContainer, { flex: 0.1234, backgroundColor: 'darkblue' }]}>
					<Text style={ styles.text }>50 %</Text>
				</View>
				<View style={[ styles.textContainer, { height: 50, backgroundColor: 'darkred' }]}>
					<Text style={ styles.text }>50 pt</Text>
				</View>

				<View style={{ position: 'absolute', left: 0, bottom: 0 }}>
					<Text style={ styles.text }>BOTTOM LEFT</Text>
				</View>
				<View style={{ position: 'absolute', right: 15, bottom: 15, width: 30, backgroundColor: 'transparent' }}>
					<Text style={ styles.text }>BOTTOM RIGHT</Text>
				</View>
			</View>
		);
	}
}
