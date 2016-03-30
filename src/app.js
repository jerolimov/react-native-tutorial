
import React, { Animated, Component, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'gray'
	},
	button: {
		position: 'absolute',
		left: 16,
		right: 16,
		bottom: 16,
		padding: 10,
		borderWidth: 2,
		borderColor: 'white',
		borderRadius: 10
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
		backgroundColor: 'transparent'
	}
});

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxWidth: new Animated.Value(200),
			boxHeight: new Animated.Value(100)
		};
	}

	toggle() {
		Animated.parallel([
			Animated.spring(this.state.boxWidth, {
				toValue: this.state.boxWidth._value !== 200 ? 200 : 100
			}),
			Animated.spring(this.state.boxHeight, {
				toValue: this.state.boxHeight._value !== 100 ? 100 : 200
			})
		]).start();
	}

	render() {
		const width = this.state.boxWidth;
		const height = this.state.boxHeight;

		return (
			<View style={ styles.container }>

				<Animated.View style={{ width, height, backgroundColor: 'lightgray' }}>
					<Text style={ styles.text }>{ width._value } x { height._value }</Text>
				</Animated.View>

				<TouchableOpacity style={ styles.button } onPress={ this.toggle.bind(this) }>
					<Text style={ styles.text }>Toggle</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
